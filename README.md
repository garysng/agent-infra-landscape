# Agent Infrastructure Landscape

A structured, source-linked landscape of AI agent companies and sandbox providers. The repository tracks product capabilities and market positioning, not funding rumors or vendor rankings.

<!-- stats:start -->
**42 companies** tracked across **14 sandbox products** and **29 agent products**.

Last verified: **2026-07-22**. Product claims link to first-party sources.
<!-- stats:end -->

## Scope

- Commercial products with public first-party sources.
- Startup and scaleup products are the primary cohort.
- Established cloud and developer platforms appear only as competitive benchmarks.
- Positioning is summarized from first-party product pages and documentation.
- Inclusion is not an endorsement, and the list is not exhaustive.

Read the [market map](docs/market-map.md) for the segmentation, the [sandbox feature matrix](docs/sandbox-comparison.md) for a deeper comparison, and the [methodology](docs/methodology.md) for inclusion and verification rules.

## Sandbox Providers

The sandbox track covers general code sandboxes, coding-agent environments, browser runtimes, and benchmark cloud platforms.

<!-- sandbox-table:start -->
| | Company | Product | Segment | Positioning | State model |
|---|---|---|---|---|---|
| <img src="https://blaxel.ai/image/logo_short.png" alt="Blaxel logo" width="40" height="40"> | [Blaxel](https://blaxel.ai/) | Blaxel Sandboxes | agent runtime | Infrastructure for autonomous agents combining sandboxes, persistent memory, and programmable networking. | Persistent filesystems, snapshots, and standby resume |
| <img src="https://github.com/browserbase.png?size=128" alt="Browserbase logo" width="40" height="40"> | [Browserbase](https://www.browserbase.com/) | Browserbase | browser runtime | Managed browser infrastructure that gives agents access to the web. | Ephemeral and reusable browser sessions |
| <img src="https://framerusercontent.com/images/6WPclDLAHHQgPFeA2DRTW1OXVSU.png" alt="Daytona logo" width="40" height="40"> | [Daytona](https://www.daytona.io/) | Daytona Sandboxes | coding environment | Secure and elastic infrastructure for running AI-generated code. | Snapshots and reusable environment images |
| <img src="https://cdn.prod.website-files.com/6717bb6618f6a40d53ac2929/6a2a7d841b5c3c6e1f8eebed_Favicon_512x512.png" alt="E2B logo" width="40" height="40"> | [E2B](https://e2b.dev/) | E2B Sandbox | general purpose | Secure cloud computers for AI agents that need code execution and real-world tools. | Session state with lifecycle controls and reusable templates |
| <img src="https://fly.io/phx/ui/images/favicon/apple-touch-icon-3e4c9ce127b5cd6f5516638d4bbf1dd5.png?vsn=d" alt="Fly.io logo" width="40" height="40"> | [Fly.io](https://fly.io/sprites) | Sprites | general purpose | Stateful, hardware-isolated Linux sandboxes with checkpoint and restore. | Persistent filesystem with checkpoint and restore |
| <img src="https://www.kernel.sh/apple-touch-icon.png" alt="Kernel logo" width="40" height="40"> | [Kernel](https://www.kernel.sh/) | Kernel Browsers | browser runtime | Browser infrastructure for AI agents with reusable sessions, fast spin-up, and autoscaling. | Reusable browser sessions |
| <img src="https://modal.com/assets/favicon.svg" alt="Modal logo" width="40" height="40"> | [Modal](https://modal.com/) | Modal Sandboxes | general purpose | Secure containers for executing untrusted user or agent code on a serverless compute platform. | Ephemeral by default with platform storage integrations |
| <img src="https://www.morph.so/logo.png" alt="Morph logo" width="40" height="40"> | [Morph](https://www.morph.so/) | Morph Cloud | coding environment | Agent compute with instant environment branching and burst scalability. | Persistent environments with snapshot-based branching |
| <img src="https://cdn.prod.website-files.com/68f6566c0817e720021136f4/6900ce80a12232928ce2040c_Webclip.png" alt="Runloop logo" width="40" height="40"> | [Runloop](https://runloop.ai/) | Runloop Sandboxes | coding environment | Secure code sandboxes, evaluations, and production infrastructure for AI coding agents. | Blueprints and snapshots for reproducible devboxes |
| <img src="https://github.com/steel-dev.png?size=128" alt="Steel logo" width="40" height="40"> | [Steel](https://steel.dev/) | Steel Browser API | browser runtime | Open-source browser infrastructure for AI agents and web automation. | Session-scoped browser state |
| <img src="https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico" alt="Amazon Web Services logo" width="40" height="40"> | [Amazon Web Services](https://aws.amazon.com/bedrock/agentcore/) | Amazon Bedrock AgentCore | cloud platform | Managed runtime and services for deploying and operating production AI agents. | Session-scoped managed services |
| <img src="https://developers.cloudflare.com/favicon.png" alt="Cloudflare logo" width="40" height="40"> | [Cloudflare](https://developers.cloudflare.com/sandbox/) | Sandbox SDK | cloud platform | Secure, isolated code execution environments powered by Workers and Containers. | Sandbox lifecycle with filesystem and process APIs |
| <img src="https://www.docker.com/wp-content/uploads/2024/02/cropped-docker-logo-favicon-192x192.png" alt="Docker logo" width="40" height="40"> | [Docker](https://docs.docker.com/ai/sandboxes/) | Docker Sandboxes | developer platform | Isolated environments for running AI coding agents with Docker workflows. | Per-sandbox workspace and Docker daemon |
| <img src="https://azure.microsoft.com/favicon.ico" alt="Microsoft Azure logo" width="40" height="40"> | [Microsoft Azure](https://learn.microsoft.com/en-us/azure/container-apps/sessions) | Azure Container Apps Dynamic Sessions | cloud platform | Fast, scalable, isolated compute sessions for untrusted code and application workloads. | Session-scoped environment |
<!-- sandbox-table:end -->

## Agent Companies

The agent track spans engineering platforms, enabling infrastructure, horizontal agents, coding agents, and vertical applications.

<!-- agent-table:start -->
| | Company | Product | Segment | Positioning | Primary buyer |
|---|---|---|---|---|---|
| <img src="https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672b7d180740b1d201c12ebf_Webclip.png" alt="11x logo" width="40" height="40"> | [11x](https://www.11x.ai/) | Digital Workers | revenue agent | Digital workers for sales, revenue operations, and go-to-market execution. | Sales, RevOps, and go-to-market leaders |
| <img src="https://cursor.com/marketing-static/icon-192x192-light.png" alt="Anysphere logo" width="40" height="40"> | [Anysphere](https://cursor.com/) | Cursor | coding agent | An AI code editor and coding agent focused on developer productivity. | Individual developers and software teams |
| <img src="https://www.arcade.dev/_astro/webclip.BYnZsC5R.png" alt="Arcade logo" width="40" height="40"> | [Arcade](https://www.arcade.dev/) | Arcade | tool runtime | An MCP runtime for secure agent authorization, reliable tools, and governance. | Teams shipping production agents with user-authorized actions |
| <img src="https://github.com/browserbase.png?size=128" alt="Browserbase logo" width="40" height="40"> | [Browserbase](https://www.browserbase.com/) | Browserbase and Stagehand | browser infrastructure | Managed browser infrastructure and developer tooling for web agents. | Browser agent developers |
| <img src="https://cognition.com/apple-icon.png" alt="Cognition logo" width="40" height="40"> | [Cognition](https://cognition.ai/) | Devin | coding agent | Autonomous software engineering agents for completing development tasks. | Software engineering organizations |
| <img src="https://composio.dev/apple-touch-icon.png" alt="Composio logo" width="40" height="40"> | [Composio](https://composio.dev/) | Composio | tool runtime | Tool execution infrastructure with delegated authentication, sandboxing, and integrations for agents. | Agent developers |
| <img src="https://www.crewai.com/favicon.ico" alt="CrewAI logo" width="40" height="40"> | [CrewAI](https://www.crewai.com/) | CrewAI Enterprise | multi agent platform | A framework and enterprise platform for orchestrating role-based multi-agent workflows. | Developers and enterprise automation teams |
| <img src="https://cdn.prod.website-files.com/683e5da0b6d8a19de4875ae7/683e5da0b6d8a19de4875b60_webclip.png" alt="Decagon logo" width="40" height="40"> | [Decagon](https://decagon.ai/) | Decagon | customer experience agent | An AI concierge platform for building, optimizing, and scaling customer service agents. | Customer support and operations teams |
| <img src="https://github.com/dust-tt.png?size=128" alt="Dust logo" width="40" height="40"> | [Dust](https://dust.tt/) | Dust | enterprise agent platform | A platform for companies to build and deploy custom agents connected to internal knowledge and tools. | Knowledge workers and enterprise AI teams |
| <img src="https://exa.ai/images/favicon-32x32.png" alt="Exa logo" width="40" height="40"> | [Exa](https://exa.ai/) | Exa | agent search | A search API for agents that need real-time web data, deep research, and structured content. | Agent and research application developers |
| <img src="https://factory.ai/favicon.svg" alt="Factory logo" width="40" height="40"> | [Factory](https://factory.ai/) | Droids | coding agent | Agent-native software development with agents that automate coding, testing, and deployment. | Software engineering organizations |
| <img src="https://www.firecrawl.dev/favicon.png" alt="Firecrawl logo" width="40" height="40"> | [Firecrawl](https://www.firecrawl.dev/) | Firecrawl | web data | A context API that turns web sources into clean Markdown or structured data for agents. | Agent and data pipeline developers |
| <img src="https://cdn.prod.website-files.com/6127a84dfe068e153ef20572/67189bfac8da27b3a70ddd93_256%20x%20256%20Glean%20Favicon.png" alt="Glean logo" width="40" height="40"> | [Glean](https://www.glean.com/) | Glean Agents | enterprise work agent | Work AI connected to enterprise data for search, assistance, agent building, and automation. | Enterprise knowledge and operations teams |
| <img src="https://www.harvey.ai/icons/brand-favicon.png" alt="Harvey logo" width="40" height="40"> | [Harvey](https://www.harvey.ai/) | Harvey | legal agent | AI software for legal and professional services, including contract, diligence, compliance, and litigation workflows. | Law firms and corporate legal teams |
| <img src="https://www.hebbia.com/apple-touch-icon.png" alt="Hebbia logo" width="40" height="40"> | [Hebbia](https://www.hebbia.ai/) | Matrix | finance agent | An AI platform for rigorous research and analysis in finance and professional services. | Asset managers, investment banks, law firms, and enterprise analysts |
| <img src="https://www.hippocraticai.com/favicon.ico" alt="Hippocratic AI logo" width="40" height="40"> | [Hippocratic AI](https://www.hippocraticai.com/) | Healthcare AI Agents | healthcare agent | Safety-focused conversational agents for non-diagnostic patient-facing healthcare tasks. | Healthcare providers, payers, and life sciences organizations |
| <img src="https://cdn.prod.website-files.com/65b8cd72835ceeacd4449a53/69a17e4f0c916c644f4de1cd_webclip%20lg.png" alt="LangChain logo" width="40" height="40"> | [LangChain](https://www.langchain.com/) | LangGraph and LangSmith | agent engineering platform | Open-source frameworks and an engineering platform to build, test, and deploy reliable agents. | Agent engineering teams |
| <img src="https://langfuse.com/apple-touch-icon.png" alt="Langfuse logo" width="40" height="40"> | [Langfuse](https://langfuse.com/) | Langfuse | agent observability | An open platform to trace, evaluate, and improve AI agents using production data. | LLM and agent engineering teams |
| <img src="https://www.letta.com/assets/images/webclip.png" alt="Letta logo" width="40" height="40"> | [Letta](https://www.letta.com/) | Letta | stateful agent platform | Stateful agents that retain memory, learn continuously, and improve over time. | Developers building long-lived agents |
| <img src="https://cdn.prod.website-files.com/63e15df811f9df22b231e58f/69f7b166e16ce668638e689d_lindy-avatar-favicon.png" alt="Lindy logo" width="40" height="40"> | [Lindy](https://www.lindy.ai/) | Lindy | personal work agent | A proactive AI executive assistant for inbox, meetings, calendar, and business workflows. | Executives, operators, and small teams |
| <img src="https://www.llamaindex.ai/apple-touch-icon.png" alt="LlamaIndex logo" width="40" height="40"> | [LlamaIndex](https://www.llamaindex.ai/) | LlamaCloud | document agent platform | Document parsing, extraction, and workflow infrastructure for agents working with complex enterprise data. | AI application and document automation teams |
| <img src="https://framerusercontent.com/images/2ys67ADJdvcyGmQnhp8vKWSq8.svg" alt="Mem0 logo" width="40" height="40"> | [Mem0](https://mem0.ai/) | Mem0 | agent memory | A memory layer that lets agents learn from past interactions and retain personalized context. | Agent and AI application developers |
| <img src="https://cdn.relevanceai.com/images/favicon-256x256.png" alt="Relevance AI logo" width="40" height="40"> | [Relevance AI](https://relevanceai.com/) | AI Workforce | business agent platform | A no-code platform for specialist agents across sales, marketing, customer success, and HR. | Business operations and automation teams |
| <img src="https://cdn.replit.com/dotcom/favicon-rb-48.png" alt="Replit logo" width="40" height="40"> | [Replit](https://replit.com/ai) | Replit Agent | coding agent | An agent that turns natural-language product ideas into deployed applications and websites. | Developers, founders, and business users |
| <img src="https://sierra.ai/apple-icon.png" alt="Sierra logo" width="40" height="40"> | [Sierra](https://sierra.ai/) | Sierra Agent | customer experience agent | Customer-facing AI agents for branded service and customer experience workflows. | Customer experience and support organizations |
| <img src="https://www.tavily.com/favicon.ico" alt="Tavily logo" width="40" height="40"> | [Tavily](https://www.tavily.com/) | Tavily Search | agent search | Real-time web search and content extraction APIs designed for agents and RAG workflows. | Agent and retrieval developers |
| <img src="https://writer.com/wp-content/uploads/2021/08/writer-w-logo-1.png?w=192" alt="Writer logo" width="40" height="40"> | [Writer](https://writer.com/) | AI HQ | enterprise agent platform | An enterprise agent platform for compliant, on-brand work across business functions. | Large enterprise AI and business teams |
| <img src="https://www.anthropic.com/favicon.ico" alt="Anthropic logo" width="40" height="40"> | [Anthropic](https://www.anthropic.com/) | Claude Code and Claude agents | general agent | Frontier-model assistants and coding agents with a strong developer and enterprise focus. | Developers and enterprises |
| <img src="https://github.com/openai.png?size=128" alt="OpenAI logo" width="40" height="40"> | [OpenAI](https://openai.com/) | Codex and agent products | general agent | Frontier-model agent products and APIs spanning software engineering, research, and computer use. | Consumers, developers, and enterprises |
<!-- agent-table:end -->

## Data

- [`data/sandboxes.json`](data/sandboxes.json) contains the sandbox comparison.
- [`data/agents.json`](data/agents.json) contains the agent company landscape.
- Every entry includes an official website, an official logo asset, source URLs, and a verification date.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Run `npm test` before opening a pull request.

## License

MIT
