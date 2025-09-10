<!-- GitHub Gist (Private): https://gist.github.com/antonkor/d50ffc11574794da91570cf38db28f50 -->
# Claude Code + Spec-kit AI Project Template

## Overview
A universal template for building AI-powered automation projects using Claude Code and Spec-kit, with sub-agent architecture for scalable AI operations.

## What This Template Provides
- ✅ Claude Code integration with slash commands
- ✅ Spec-kit spec-driven development setup  
- ✅ WSL + GitHub CLI environment
- ✅ Configurable AI sub-agent architecture
- ✅ Project structure for AI automation
- ✅ Reusable setup process

## Quick Setup (Any Platform)

### Prerequisites
- Claude Code CLI
- WSL2 (Windows) or Linux/macOS terminal
- Internet connection

### One-Command Setup
```bash
# Create new project directory
mkdir your-project-name && cd your-project-name

# Install tools and initialize (run in WSL on Windows)
curl -LsSf https://astral.sh/uv/install.sh | sh && \
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg && \
chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg && \
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list && \
sudo apt update && sudo apt install gh -y && \
source ~/.local/bin/env && \
echo "y" | uvx --from git+https://github.com/github/spec-kit.git specify init --here --ai claude
```

## Project Structure Created
```
your-project/
├── .claude/                    # Claude Code configuration
│   ├── commands/              # /specify, /plan, /tasks commands
│   └── settings.local.json    # Tool permissions
├── .specify/                  # Spec-kit configuration  
├── memory/                   # AI context storage
├── scripts/                  # Automation scripts
├── templates/               # Reusable components
└── readme.md               # Project documentation
```

## Customization for Your Use Case

### 1. Define Your Sub-Agents
Edit `.specify/agents.json`:
```json
{
  "agents": {
    "agent_name": {
      "name": "Display Name",
      "description": "What this agent does",
      "role": "agent_category", 
      "capabilities": ["skill1", "skill2", "skill3"]
    }
  }
}
```

### 2. Configure Project Type
Edit `.specify/config.json`:
```json
{
  "project_name": "your-project-name",
  "ai_assistant": "claude",
  "tools": ["wsl", "github_cli", "your_apis"],
  "integrations": {
    "your_service": {
      "enabled": false,
      "config": {}
    }
  }
}
```

## Available Claude Code Commands
- `/specify` - Create detailed specifications
- `/plan` - Generate implementation plans  
- `/tasks` - Create actionable task lists

## Use Cases This Template Supports
- **E-commerce Automation** (like simplepaper.shop)
- **Content Management Systems**
- **Data Analysis Pipelines** 
- **Customer Service Bots**
- **Marketing Automation**
- **DevOps Automation**
- **Research Projects**
- **Any AI Sub-Agent Architecture**

## Example Sub-Agent Configurations

### E-commerce Store
```json
"clerk": "Order processing and customer service",
"analyst": "Sales data analysis and insights",
"marketer": "Campaign creation and optimization"
```

### Content Platform  
```json
"writer": "Content creation and editing",
"researcher": "Topic research and fact-checking", 
"publisher": "Content scheduling and distribution"
```

### DevOps Pipeline
```json
"monitor": "System monitoring and alerting",
"deployer": "Automated deployment management",
"tester": "Automated testing and QA"
```

## Advanced Features

### GitHub Integration
```bash
# Create repository (after gh auth login)
gh repo create your-project --public --source=. --remote=origin --push
```

### Tag Management
```bash
# Tag stable versions
git tag -a v1.0.0 -m "Production ready"
```

### Environment Variables
Create `.env` for sensitive configuration:
```
API_KEY=your_api_key
DATABASE_URL=your_db_url
```

## Replication Steps
1. **Run one-command setup above**
2. **Customize agents.json for your domain**
3. **Update project configuration** 
4. **Define your specifications with `/specify`**
5. **Generate plans with `/plan`**
6. **Create tasks with `/tasks`**
7. **Tag and version your project**

## Platform Support
- ✅ **Windows** (via WSL2)
- ✅ **Linux** (native)
- ✅ **macOS** (native)

## Dependencies Installed
- Python UV package manager
- GitHub CLI
- Spec-kit development toolkit
- Claude Code integration

---

## Reference Implementation
See: **simplepaper.shop** - AI e-commerce automation  
Template version: **v0.1.0-template**

*This template gets you from zero to full AI development environment in minutes, not hours.*