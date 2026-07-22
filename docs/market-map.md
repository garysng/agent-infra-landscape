# Market Map

This map separates product layers that are often grouped under the broad label "agent company." A company can operate in more than one layer, but each table uses the product's primary go-to-market position.

## Sandbox Market

### Purpose-built agent compute

E2B, Daytona, Runloop, Morph, and Blaxel sell environments designed around agent lifecycle requirements. Their main comparison dimensions are isolation, startup and resume behavior, environment reproducibility, state persistence, networking, and fleet operations.

Runloop is especially focused on software engineering agents and evaluations. Morph emphasizes environment branching. Blaxel combines compute with persistent memory and programmable networking. E2B and Daytona lead with broad code execution and developer-facing sandbox APIs.

### General compute expanding into sandboxes

Modal Sandboxes and Fly.io Sprites extend broader compute platforms into agent execution. Modal connects sandboxes to its serverless CPU and GPU platform. Sprites emphasizes a persistent Linux computer with hardware isolation, checkpointing, and restore.

### Browser runtimes

Browserbase, Kernel, and Steel specialize in browser sessions rather than arbitrary Linux execution. Their differentiation centers on session reuse, Playwright or CDP compatibility, anti-bot reliability, observability, and browser fleet scaling.

### Established platform benchmarks

Cloudflare, Docker, AWS, and Microsoft Azure are included as benchmarks. Their advantage is distribution and integration with an existing developer or cloud platform. They should not be compared with focused startups solely on feature count; procurement, regional availability, identity, networking, and adjacent services are often the deciding factors.

## Agent Market

### Build, deploy, and operate

LangChain, LlamaIndex, CrewAI, Letta, Dust, and Relevance AI sit near the agent control plane. They approach the market from different starting points: orchestration, document workflows, multi-agent coordination, stateful memory, enterprise knowledge, or no-code business automation.

### Capabilities agents consume

Composio and Arcade focus on tool execution and authorization. Mem0 focuses on memory. Tavily and Exa focus on search. Firecrawl turns web sources into agent-ready context. Langfuse focuses on tracing and evaluation. Browserbase provides browser execution. These companies are agent infrastructure even when they do not sell an end-user agent.

### Horizontal and vertical agents

Coding is the most visible horizontal category, represented here by Cognition, Anysphere, Replit, and Factory. Customer experience is represented by Sierra and Decagon. Harvey, Hippocratic AI, 11x, and Hebbia package agents around legal, healthcare, revenue, and finance workflows. Glean and Writer target broad enterprise work.

## Positioning Signals To Track

For sandbox companies:

- Isolation boundary and multi-tenant security model
- Cold start, warm resume, and snapshot or checkpoint behavior
- Ephemeral, persistent, and branchable state
- Base images, templates, package installation, and environment reproducibility
- Network egress, secrets, identity, and policy controls
- Browser, desktop, code interpreter, and GPU support
- Observability, evaluation, and fleet management
- Managed cloud, private deployment, and self-hosting options

For agent companies:

- Primary buyer and workflow owner
- Developer platform versus finished application
- Horizontal versus domain-specific distribution
- Tool authorization, data access, memory, and governance
- Human review and operational control points
- Outcome-based versus seat-based product positioning

## Strategic Pattern

The infrastructure boundary is converging. Sandbox providers are adding evaluation, memory, networking, and agent fleet controls, while agent platforms are adding code execution and managed runtimes. The durable distinction is increasingly the control surface and target buyer, not whether a product calls itself a sandbox or an agent platform.
