import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Agent Tasks Table
  tasks: defineTable({
    agentId: v.string(),
    agentName: v.string(),
    title: v.string(),
    description: v.string(),
    status: v.union(v.literal("pending"), v.literal("in_progress"), v.literal("completed"), v.literal("failed")),
    priority: v.union(v.literal("low"), v.literal("medium"), v.literal("high"), v.literal("urgent")),
    assignedTo: v.optional(v.string()), // human assignee if needed
    createdAt: v.number(),
    updatedAt: v.number(),
    dueDate: v.optional(v.number()),
    metadata: v.optional(v.object({
      shopifyOrderId: v.optional(v.string()),
      customerId: v.optional(v.string()),
      productId: v.optional(v.string()),
      tags: v.optional(v.array(v.string())),
    }))
  }).index("by_agent", ["agentId"])
    .index("by_status", ["status"])
    .index("by_priority", ["priority"])
    .index("by_creation", ["createdAt"]),

  // Agent Status Table
  agents: defineTable({
    agentId: v.string(),
    name: v.string(),
    type: v.union(v.literal("clerk"), v.literal("product_analyst"), v.literal("designer"), v.literal("project_manager")),
    status: v.union(v.literal("online"), v.literal("offline"), v.literal("busy"), v.literal("error")),
    lastHeartbeat: v.number(),
    currentTask: v.optional(v.string()),
    performance: v.object({
      tasksCompleted: v.number(),
      averageTaskTime: v.number(),
      errorRate: v.number(),
      uptime: v.number(),
    }),
    configuration: v.optional(v.object({})),
  }).index("by_type", ["type"])
    .index("by_status", ["status"]),

  // Shopify Integration Data
  shopifyOrders: defineTable({
    orderId: v.string(),
    orderNumber: v.string(),
    status: v.string(),
    customerId: v.string(),
    customerEmail: v.string(),
    totalPrice: v.string(),
    items: v.array(v.object({
      productId: v.string(),
      productTitle: v.string(),
      quantity: v.number(),
      price: v.string(),
    })),
    createdAt: v.string(),
    processedBy: v.optional(v.string()), // agent that processed
    aiNotes: v.optional(v.string()),
  }).index("by_order_id", ["orderId"])
    .index("by_status", ["status"])
    .index("by_customer", ["customerId"]),

  // Agent Communication/Handoffs
  handoffs: defineTable({
    fromAgent: v.string(),
    toTarget: v.string(), // agent ID or "human"
    taskId: v.string(),
    title: v.string(),
    description: v.string(),
    priority: v.union(v.literal("low"), v.literal("medium"), v.literal("high"), v.literal("urgent")),
    status: v.union(v.literal("pending"), v.literal("acknowledged"), v.literal("completed")),
    createdAt: v.number(),
    estimatedTime: v.optional(v.number()),
    attachments: v.optional(v.array(v.string())),
    humanInstructions: v.optional(v.string()),
  }).index("by_target", ["toTarget"])
    .index("by_status", ["status"])
    .index("by_priority", ["priority"]),

  // Analytics and Metrics
  metrics: defineTable({
    date: v.string(), // YYYY-MM-DD
    agentId: v.string(),
    metric: v.string(), // e.g., "tasks_completed", "response_time", "error_rate"
    value: v.number(),
    metadata: v.optional(v.object({})),
  }).index("by_date", ["date"])
    .index("by_agent", ["agentId"])
    .index("by_metric", ["metric"]),

  // Customer Insights (for Product Analyst)
  customerInsights: defineTable({
    customerId: v.string(),
    email: v.string(),
    totalOrders: v.number(),
    totalSpent: v.string(),
    averageOrderValue: v.string(),
    lastOrderDate: v.string(),
    preferredProducts: v.array(v.string()),
    behaviorTags: v.array(v.string()),
    aiPersona: v.optional(v.string()),
    generatedAt: v.number(),
  }).index("by_customer", ["customerId"])
    .index("by_total_spent", ["totalSpent"]),
});