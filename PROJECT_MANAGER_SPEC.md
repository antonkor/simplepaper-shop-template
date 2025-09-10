# /specify Project Manager Agent for Simple Paper Shop

## Agent Overview
**Name**: Project Manager Agent  
**Role**: Operations coordination and dashboard management  
**Purpose**: Coordinate all AI sub-agents, create performance dashboards, and manage task handoffs between AI and human team members

## Core Responsibilities

### 1. Task Coordination
- **Daily Planning**: Review overnight activities from all agents and create daily priority lists
- **Agent Orchestration**: Coordinate workflows between Clerk, Product Analyst, and Designer agents
- **Resource Management**: Allocate computational resources and API calls across agents
- **Conflict Resolution**: Handle competing priorities and resource conflicts between agents

### 2. Dashboard Creation & Management
- **Agent Performance Dashboards**: Real-time monitoring of each agent's productivity and success metrics
- **Business Intelligence Dashboard**: High-level store performance combining all agent inputs
- **Task Queue Dashboard**: Visual representation of pending, in-progress, and completed tasks
- **Handoff Management Dashboard**: Track tasks requiring human intervention

### 3. Human-AI Handoff Management
- **Brief Creation**: Generate detailed handoff briefs for complex tasks requiring human expertise
- **Priority Classification**: Categorize tasks by urgency and complexity for human assignment
- **Follow-up Tracking**: Monitor human-assigned tasks and integrate results back into AI workflows
- **Escalation Protocols**: Define and execute escalation paths for time-sensitive issues

### 4. Reporting & Analytics
- **Daily Summary Reports**: Comprehensive overview of all agent activities and outcomes
- **Weekly Performance Analysis**: Trend analysis and optimization recommendations
- **ROI Tracking**: Measure efficiency gains and cost savings from AI automation
- **Continuous Improvement**: Identify bottlenecks and suggest workflow optimizations

## Technical Specifications

### Data Sources
- **Shopify API**: Order data, inventory levels, customer interactions
- **Agent Activity Logs**: Performance metrics from all sub-agents
- **Human Task Management**: Integration with project management tools
- **Business Metrics**: Sales, conversion rates, customer satisfaction scores

### Integration Points
- **Claude Code**: Primary AI interface for decision making and coordination
- **Dashboard Framework**: Web-based real-time monitoring interface
- **Task Management System**: Todo applications and workflow management
- **Notification System**: Alerts for urgent tasks and escalations

### Output Formats
- **Visual Dashboards**: Interactive charts and real-time metrics
- **Written Briefs**: Structured handoff documents for human team
- **Automated Reports**: Daily/weekly summaries with actionable insights
- **Task Lists**: Prioritized action items with deadlines and assignments

## Operational Workflows

### Morning Routine (Daily 9:00 AM)
1. **Overnight Review**: Analyze all agent activities from previous 16 hours
2. **Priority Setting**: Create ranked task list for current day
3. **Resource Allocation**: Distribute API calls and processing time across agents
4. **Brief Distribution**: Send overnight summary and today's priorities to human team

### Continuous Monitoring (Real-time)
1. **Agent Health Checks**: Monitor all agents for errors or performance issues
2. **Queue Management**: Rebalance task queues based on priority and capacity
3. **Escalation Detection**: Identify tasks requiring immediate human attention
4. **Performance Optimization**: Adjust agent parameters based on real-time results

### Evening Review (Daily 6:00 PM)
1. **Daily Summary**: Compile accomplishments and metrics from all agents
2. **Tomorrow's Planning**: Pre-populate next day's priority queue
3. **Human Handoff**: Create evening brief for any overnight human tasks
4. **Backup & Archive**: Secure all daily data and decision logs

## Success Metrics

### Operational Efficiency
- **Task Completion Rate**: >95% of daily tasks completed on schedule
- **Agent Utilization**: >80% productive time across all agents
- **Handoff Accuracy**: <5% of human handoffs require clarification
- **Response Time**: <2 minutes for urgent escalations

### Business Impact
- **Order Processing Time**: Reduce from manual baseline by 80%
- **Customer Response Rate**: <4 hours for all customer inquiries
- **Inventory Accuracy**: 99%+ stock level predictions
- **Cost Savings**: Track ROI from AI automation vs manual processes

### Quality Measures
- **Error Rate**: <2% for all automated decisions
- **Human Satisfaction**: >90% approval rating on handoff briefs
- **System Uptime**: 99.9% availability during business hours
- **Data Accuracy**: 100% consistency across all dashboards and reports

## Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Basic task coordination system
- [ ] Simple dashboard framework
- [ ] Agent communication protocols
- [ ] Manual handoff process

### Phase 2: Automation (Week 3-4)
- [ ] Automated daily planning
- [ ] Real-time monitoring dashboards
- [ ] Escalation detection system
- [ ] Performance analytics

### Phase 3: Optimization (Week 5-6)
- [ ] Machine learning for task prioritization
- [ ] Predictive resource allocation
- [ ] Advanced reporting and insights
- [ ] Integration with business intelligence tools

### Phase 4: Scale (Week 7-8)
- [ ] Multi-store management capabilities
- [ ] Advanced AI coordination
- [ ] Custom dashboard creation
- [ ] Full autonomous operation mode

## Configuration Requirements

### Environment Variables
```bash
SHOPIFY_API_KEY=your_shopify_api_key
DASHBOARD_URL=your_dashboard_endpoint
NOTIFICATION_WEBHOOK=your_slack_webhook
TASK_MANAGEMENT_API=your_project_tool_api
```

### Agent Dependencies
- **Clerk Agent**: Order processing status and customer interaction logs
- **Product Analyst**: Sales data and inventory insights
- **Designer Agent**: Creative task status and asset completion
- **Human Team**: Task management system integration

### Hardware Requirements
- **Memory**: 8GB+ for dashboard and real-time processing
- **Storage**: 100GB+ for logs, reports, and historical data
- **Network**: Reliable internet for API calls and real-time updates
- **Backup**: Automated daily backups of all coordination data

## Risk Management

### Failure Scenarios
- **Agent Downtime**: Automatic failover to manual processes with human notification
- **API Limits**: Rate limiting and queue management to prevent service disruption
- **Data Loss**: Automated backups and recovery procedures
- **Security Issues**: Audit logs and access control for all sensitive operations

### Monitoring & Alerts
- **System Health**: Continuous monitoring with immediate alerts for failures
- **Performance Degradation**: Automated detection and optimization recommendations  
- **Security Events**: Real-time monitoring for unauthorized access or data breaches
- **Business Metrics**: Alerts for significant changes in key performance indicators

---

**Status**: Ready for implementation  
**Priority**: High - Foundation for all other agents  
**Estimated Timeline**: 2-4 weeks for full implementation  
**Dependencies**: Claude Code environment, Shopify API access, dashboard framework