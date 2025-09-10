<!-- GitHub Gist (Private): https://gist.github.com/antonkor/3f68bd014e368e9b9e09a233d59688a6 -->
# Simple Paper Shop - AI E-commerce Setup Guide

## Project Overview
AI-powered e-commerce operations for simplepaper.shop using Claude Code sub-agents to automate store management, customer analysis, and growth optimization.

## Business Goals
- **Mirror physical store operations** in digital AI agents
- **Generate customer personas** from Shopify data
- **Automate operational tasks** with human handoff capabilities
- **Build theme with PostHog integration** for conversion optimization
- **Create SEO-optimized content** that ranks well on Google

## AI Sub-Agents Architecture

### 1. Clerk Agent
**Purpose**: Order processing and customer service
- Process incoming orders automatically
- Handle customer inquiries and support tickets
- Manage returns and exchanges
- Create handoff briefs for complex human intervention

### 2. Product Analyst Agent  
**Purpose**: Shopify data analysis and insights
- Analyze sales reports and identify trends
- Track inventory levels and predict restocking needs
- Generate insights on best/worst performing products
- Create data-driven recommendations for store optimization

### 3. Designer Agent
**Purpose**: Creative briefs and design task management
- Create briefs for graphic designers with estimates
- Generate Midjourney prompts for product imagery
- Manage design asset pipeline
- Coordinate with human designers on brand consistency

### 4. Project Manager Agent
**Purpose**: Dashboard and task coordination  
- Setup and manage todo applications for store operations
- Create dashboards for each agent's performance
- Coordinate between all agents and human team
- Generate reports on overall store performance

## Technical Stack

### Core Technologies
- **Claude Code**: AI development environment
- **Spec-kit**: Spec-driven development toolkit
- **WSL + Ubuntu 24.04**: Linux development environment
- **GitHub CLI**: Repository and project management
- **Python/UV**: Package management for AI integrations

### E-commerce Integrations
- **Shopify API**: Store data, orders, inventory management
- **PostHog**: Analytics, experimentation, customer journey tracking
- **Custom Shopify Theme**: Optimized for conversions and data collection
- **SEO Tools**: Content optimization and search ranking

## Setup Instructions

### Prerequisites
- Windows with WSL2 enabled
- Claude Code CLI installed
- Active Shopify store
- PostHog account (optional)

### Installation
```bash
# 1. Create project directory
mkdir simplepaper.shop && cd simplepaper.shop

# 2. Install WSL Ubuntu 24.04 (if not already installed)
wsl --install -d Ubuntu-24.04

# 3. Setup development environment in WSL
wsl -d Ubuntu-24.04 -- bash -c "
  # Install GitHub CLI
  curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg &&
  chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg &&
  echo 'deb [arch=\$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main' | sudo tee /etc/apt/sources.list.d/github-cli.list &&
  sudo apt update && sudo apt install gh -y &&
  
  # Install UV Python package manager
  curl -LsSf https://astral.sh/uv/install.sh | sh &&
  source ~/.local/bin/env &&
  
  # Initialize Spec-kit with Claude integration
  echo 'y' | uvx --from git+https://github.com/github/spec-kit.git specify init --here --ai claude
"

# 4. Authenticate with GitHub
wsl -d Ubuntu-24.04 -- gh auth login --web
```

### Configuration

#### 1. Shopify Integration Setup
```json
// .specify/config.json
{
  "project_name": "simplepaper.shop",
  "ai_assistant": "claude",
  "tools": ["wsl", "github_cli", "shopify_api", "posthog"],
  "integrations": {
    "shopify": {
      "enabled": true,
      "store_url": "your-store.myshopify.com",
      "api_key": "your_shopify_api_key",
      "webhook_url": "your_webhook_endpoint"
    },
    "posthog": {
      "enabled": true,
      "project_id": "your_posthog_project_id",
      "api_key": "your_posthog_api_key"
    }
  }
}
```

#### 2. Sub-Agent Configuration
```json
// .specify/agents.json - Already configured for e-commerce
{
  "agents": {
    "clerk": {
      "name": "Store Clerk",
      "description": "Order processing and customer service automation",
      "role": "customer_service",
      "capabilities": [
        "order_processing",
        "customer_communication", 
        "issue_resolution",
        "return_management"
      ],
      "integrations": ["shopify_orders", "customer_support"]
    },
    "product_analyst": {
      "name": "Product Data Analyst",
      "description": "Shopify analytics and business intelligence",
      "role": "data_analyst", 
      "capabilities": [
        "sales_reporting",
        "inventory_analysis",
        "trend_identification",
        "performance_insights"
      ],
      "integrations": ["shopify_analytics", "posthog_data"]
    },
    "designer": {
      "name": "Creative Director", 
      "description": "Design asset management and creative briefs",
      "role": "creative_director",
      "capabilities": [
        "design_brief_creation",
        "midjourney_prompt_generation",
        "brand_consistency_management",
        "asset_pipeline_coordination"
      ],
      "integrations": ["design_tools", "asset_management"]
    },
    "project_manager": {
      "name": "Operations Manager",
      "description": "Coordinate all agents and create dashboards", 
      "role": "operations_manager",
      "capabilities": [
        "task_coordination",
        "dashboard_creation",
        "performance_reporting",
        "team_handoff_management"
      ],
      "integrations": ["project_tools", "reporting_dashboards"]
    }
  },
  "ai_assistant": "claude",
  "project_type": "ecommerce_automation"
}
```

## Usage Workflow

### Daily Operations
1. **Morning Setup**: Project Manager agent reviews overnight orders and creates daily task list
2. **Order Processing**: Clerk agent processes new orders, handles customer inquiries
3. **Data Analysis**: Product Analyst reviews sales data and generates insights
4. **Creative Tasks**: Designer agent creates briefs for any needed visual assets
5. **Evening Review**: All agents create handoff reports for human review

### Claude Code Commands
- `/specify customer-persona-generation` - Create specs for persona analysis
- `/plan shopify-integration` - Plan API integration with Shopify
- `/tasks weekly-reporting` - Generate weekly operational tasks

### Development Phases

#### Phase 1: Foundation (Current)
- ✅ Development environment setup
- ✅ Claude Code + Spec-kit integration
- ✅ Sub-agent architecture defined

#### Phase 2: Core Integration
- [ ] Shopify API connection
- [ ] Basic order processing automation
- [ ] Customer data analysis pipeline

#### Phase 3: Advanced Features  
- [ ] PostHog analytics integration
- [ ] Custom Shopify theme development
- [ ] SEO content generation system

#### Phase 4: Dashboard & Optimization
- [ ] Agent performance dashboards
- [ ] Conversion optimization experiments
- [ ] Automated growth systems

## File Structure
```
simplepaper.shop/
├── .claude/
│   ├── commands/           # /specify, /plan, /tasks
│   └── settings.local.json # WSL and GitHub CLI permissions
├── .specify/
│   ├── agents.json        # E-commerce sub-agents configuration  
│   └── config.json        # Shopify and PostHog integration
├── agents/               # Individual agent implementations
│   ├── clerk/           
│   ├── analyst/
│   ├── designer/
│   └── project_manager/
├── integrations/        # API connections
│   ├── shopify/
│   └── posthog/
├── dashboards/         # Agent performance dashboards
├── memory/            # AI context and learning
├── scripts/           # Automation utilities
└── templates/         # Reusable components
```

## Success Metrics
- **Order Processing Time**: Reduce from manual to <5 minutes automated
- **Customer Response Time**: <2 hours for standard inquiries  
- **Inventory Accuracy**: 99%+ stock level predictions
- **Conversion Rate**: Improve through PostHog experiments
- **SEO Rankings**: Target top 10 for key paper product searches

## Getting Help
- Use Claude Code slash commands for guidance
- Reference this guide for setup questions
- Check agent configurations in `.specify/` directory
- Review handoff reports for operational insights

---
*Simple Paper Shop AI Operations - Transforming paper retail through intelligent automation*