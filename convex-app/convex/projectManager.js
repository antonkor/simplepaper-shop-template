import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Project Manager Agent Functions

// Create a new task
export const createTask = mutation({
  args: {
    agentId: v.string(),
    agentName: v.string(),
    title: v.string(),
    description: v.string(),
    priority: v.union(v.literal("low"), v.literal("medium"), v.literal("high"), v.literal("urgent")),
    dueDate: v.optional(v.number()),
    metadata: v.optional(v.object({
      shopifyOrderId: v.optional(v.string()),
      customerId: v.optional(v.string()),
      productId: v.optional(v.string()),
      tags: v.optional(v.array(v.string())),
    }))
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("tasks", {
      ...args,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Update task status
export const updateTaskStatus = mutation({
  args: {
    taskId: v.id("tasks"),
    status: v.union(v.literal("pending"), v.literal("in_progress"), v.literal("completed"), v.literal("failed")),
    assignedTo: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.taskId, {
      status: args.status,
      assignedTo: args.assignedTo,
      updatedAt: Date.now(),
    });
  },
});

// Get all tasks for dashboard
export const getAllTasks = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("tasks")
      .order("desc")
      .take(args.limit ?? 50);
  },
});

// Get tasks by agent
export const getTasksByAgent = query({
  args: { agentId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("tasks")
      .withIndex("by_agent", (q) => q.eq("agentId", args.agentId))
      .order("desc")
      .collect();
  },
});

// Get tasks by status
export const getTasksByStatus = query({
  args: { status: v.union(v.literal("pending"), v.literal("in_progress"), v.literal("completed"), v.literal("failed")) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("tasks")
      .withIndex("by_status", (q) => q.eq("status", args.status))
      .order("desc")
      .collect();
  },
});

// Register/Update Agent Status
export const updateAgentStatus = mutation({
  args: {
    agentId: v.string(),
    name: v.string(),
    type: v.union(v.literal("clerk"), v.literal("product_analyst"), v.literal("designer"), v.literal("project_manager")),
    status: v.union(v.literal("online"), v.literal("offline"), v.literal("busy"), v.literal("error")),
    currentTask: v.optional(v.string()),
    performance: v.optional(v.object({
      tasksCompleted: v.number(),
      averageTaskTime: v.number(),
      errorRate: v.number(),
      uptime: v.number(),
    }))
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("agents")
      .filter((q) => q.eq(q.field("agentId"), args.agentId))
      .first();

    const now = Date.now();
    
    if (existing) {
      return await ctx.db.patch(existing._id, {
        ...args,
        lastHeartbeat: now,
      });
    } else {
      return await ctx.db.insert("agents", {
        ...args,
        lastHeartbeat: now,
        performance: args.performance ?? {
          tasksCompleted: 0,
          averageTaskTime: 0,
          errorRate: 0,
          uptime: 0,
        }
      });
    }
  },
});

// Get all agents status
export const getAllAgents = query({
  handler: async (ctx) => {
    return await ctx.db.query("agents").collect();
  },
});

// Create handoff to human or another agent
export const createHandoff = mutation({
  args: {
    fromAgent: v.string(),
    toTarget: v.string(),
    taskId: v.string(),
    title: v.string(),
    description: v.string(),
    priority: v.union(v.literal("low"), v.literal("medium"), v.literal("high"), v.literal("urgent")),
    estimatedTime: v.optional(v.number()),
    humanInstructions: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("handoffs", {
      ...args,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

// Get pending handoffs
export const getPendingHandoffs = query({
  args: { toTarget: v.optional(v.string()) },
  handler: async (ctx, args) => {
    let query = ctx.db.query("handoffs").withIndex("by_status", (q) => q.eq("status", "pending"));
    
    if (args.toTarget) {
      query = query.filter((q) => q.eq(q.field("toTarget"), args.toTarget));
    }
    
    return await query.order("desc").collect();
  },
});

// Dashboard Analytics
export const getDashboardStats = query({
  handler: async (ctx) => {
    const tasks = await ctx.db.query("tasks").collect();
    const agents = await ctx.db.query("agents").collect();
    const handoffs = await ctx.db.query("handoffs").collect();

    // Calculate stats
    const taskStats = {
      total: tasks.length,
      pending: tasks.filter(t => t.status === "pending").length,
      inProgress: tasks.filter(t => t.status === "in_progress").length,
      completed: tasks.filter(t => t.status === "completed").length,
      failed: tasks.filter(t => t.status === "failed").length,
    };

    const agentStats = {
      total: agents.length,
      online: agents.filter(a => a.status === "online").length,
      offline: agents.filter(a => a.status === "offline").length,
      busy: agents.filter(a => a.status === "busy").length,
      error: agents.filter(a => a.status === "error").length,
    };

    const handoffStats = {
      total: handoffs.length,
      pending: handoffs.filter(h => h.status === "pending").length,
      acknowledged: handoffs.filter(h => h.status === "acknowledged").length,
      completed: handoffs.filter(h => h.status === "completed").length,
    };

    return {
      tasks: taskStats,
      agents: agentStats,
      handoffs: handoffStats,
      lastUpdated: Date.now(),
    };
  },
});

// Record daily metrics
export const recordMetric = mutation({
  args: {
    agentId: v.string(),
    metric: v.string(),
    value: v.number(),
    metadata: v.optional(v.object({})),
  },
  handler: async (ctx, args) => {
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    
    return await ctx.db.insert("metrics", {
      date,
      ...args,
    });
  },
});