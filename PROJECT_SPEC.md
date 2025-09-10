# AI E-commerce Sub-Agents Project Template

## Overview
A Claude Code + Spec-kit template for building AI-powered e-commerce automation systems using sub-agents for store management, analysis, and operations.

## Project Structure
```
simplepaper.shop/
├── .claude/                    # Claude Code configuration
│   ├── commands/              # Slash commands (/specify, /plan, /tasks)
│   └── settings.local.json    # Permissions for WSL, GitHub CLI
├── .specify/                  # Spec-kit configuration
│   ├── agents.json           # AI sub-agent definitions
│   └── config.json           # Project configuration
├── memory/                   # AI memory and context storage
├── scripts/                  # Automation scripts
├── templates/               # Reusable templates
└── readme.md               # Project documentation
```

## Sub-Agents Defined
- **Clerk**: Order processing and customer service
- **Product Analyst**: Shopify data analysis and insights  
- **Designer**: Creative briefs and design task management
- **Project Manager**: Dashboard and task coordination

## Technology Stack
- **Claude Code**: AI development environment with slash commands
- **Spec-kit**: Spec-driven development toolkit
- **WSL + Ubuntu 24.04**: Linux environment on Windows
- **GitHub CLI**: Repository management and automation
- **Python/UV**: Package management for AI tools

## Setup Requirements

### Prerequisites
- Windows with WSL2 enabled
- Claude Code CLI installed
- PowerShell (for better Unicode support)

### Installation Commands
```bash
# 1. Install WSL Ubuntu 24.04
wsl --install -d Ubuntu-24.04

# 2. Install GitHub CLI in WSL
wsl -d Ubuntu-24.04 -- bash -c "curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg && echo \"deb [arch=\$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main\" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null && apt update && apt install gh -y"

# 3. Install UV (Python package manager)
wsl -d Ubuntu-24.04 -- bash -c 'curl -LsSf https://astral.sh/uv/install.sh | sh'

# 4. Initialize Spec-kit project
wsl -d Ubuntu-24.04 -- bash -c 'export PATH="/root/.local/bin:$PATH" && echo "y" | uvx --from git+https://github.com/github/spec-kit.git specify init --here --ai claude'
```

## Usage

### Claude Code Slash Commands
- `/specify` - Create detailed specifications
- `/plan` - Generate implementation plans
- `/tasks` - Create actionable task lists

### GitHub Repository Setup
```bash
# Create and push to GitHub
gh repo create your-project-name --public --source=. --remote=origin --push
```

## Replication Steps

1. **Create new project directory**
2. **Run installation commands above**
3. **Customize agents.json for your specific use case**
4. **Update readme.md with project details**
5. **Tag initial version**: `git tag -a v0.1.0-template -m "Initial setup"`

## Integration Points
- **Shopify API**: For e-commerce data analysis
- **PostHog**: For analytics and experimentation
- **Theme Development**: Custom Shopify themes with tracking

## Reference Implementation
This template was created for: **simplepaper.shop**
- AI-powered paper e-commerce store
- Customer persona generation from Shopify data  
- Automated operations with handoff briefs
- Growth optimization through AI insights

## Future Extensions
- Dashboard creation for each sub-agent
- Real-time Shopify integration
- Customer journey optimization
- SEO content generation
- Inventory management automation

---
*Generated with Claude Code v0.1.0-template*