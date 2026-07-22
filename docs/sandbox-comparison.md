# Sandbox Feature Matrix

This matrix compares the primary workload, isolation language, state model, delivery model, and source model of each tracked sandbox product. The values summarize public first-party documentation and deliberately avoid undocumented implementation assumptions.

<!-- sandbox-feature-table:start -->
| | Company | Workload | Isolation | State model | Delivery | Source model |
|---|---|---|---|---|---|---|
| <img src="https://blaxel.ai/image/logo_short.png" alt="Blaxel logo" width="64" height="64"> | [Blaxel](https://blaxel.ai/) | Long-running autonomous agents and multi-agent systems | microVM | Persistent filesystems, snapshots, and standby resume | managed cloud | proprietary |
| <img src="https://github.com/browserbase.png?size=128" alt="Browserbase logo" width="64" height="64"> | [Browserbase](https://www.browserbase.com/) | Browser agents, web automation, and computer-use workflows | managed browser session | Ephemeral and reusable browser sessions | managed cloud | proprietary |
| <img src="https://framerusercontent.com/images/6WPclDLAHHQgPFeA2DRTW1OXVSU.png" alt="Daytona logo" width="64" height="64"> | [Daytona](https://www.daytona.io/) | Coding agents, code execution, and reproducible development environments | isolated compute | Snapshots and reusable environment images | managed cloud | open core |
| <img src="https://cdn.prod.website-files.com/6717bb6618f6a40d53ac2929/6a2a7d841b5c3c6e1f8eebed_Favicon_512x512.png" alt="E2B logo" width="64" height="64"> | [E2B](https://e2b.dev/) | Code interpreters, computer use, data analysis, and general agent tasks | microVM | Session state with lifecycle controls and reusable templates | managed cloud | open core |
| <img src="https://fly.io/phx/ui/images/favicon/apple-touch-icon-3e4c9ce127b5cd6f5516638d4bbf1dd5.png?vsn=d" alt="Fly.io logo" width="64" height="64"> | [Fly.io](https://fly.io/sprites) | Arbitrary code, coding agents, and workloads that need a persistent Linux computer | hardware-isolated VM | Persistent filesystem with checkpoint and restore | managed cloud | proprietary |
| <img src="https://www.kernel.sh/apple-touch-icon.png" alt="Kernel logo" width="64" height="64"> | [Kernel](https://www.kernel.sh/) | Browser agents and high-scale web automation | managed browser session | Reusable browser sessions | managed cloud | open core |
| <img src="https://modal.com/assets/favicon.svg" alt="Modal logo" width="64" height="64"> | [Modal](https://modal.com/) | Code execution, data workloads, and agents that also need serverless CPU or GPU compute | container | Ephemeral by default with platform storage integrations | managed cloud | proprietary |
| <img src="https://www.morph.so/logo.png" alt="Morph logo" width="64" height="64"> | [Morph](https://www.morph.so/) | Coding agents and workloads that branch many environments from shared state | virtual machine | Persistent environments with snapshot-based branching | managed cloud | proprietary |
| <img src="https://cdn.prod.website-files.com/68f6566c0817e720021136f4/6900ce80a12232928ce2040c_Webclip.png" alt="Runloop logo" width="64" height="64"> | [Runloop](https://runloop.ai/) | Software engineering agents, agent evaluation, and production agent fleets | isolated devbox | Blueprints and snapshots for reproducible devboxes | managed cloud | proprietary |
| <img src="https://github.com/steel-dev.png?size=128" alt="Steel logo" width="64" height="64"> | [Steel](https://steel.dev/) | Browser agents that need managed or self-hosted browser sessions | managed browser session | Session-scoped browser state | managed and self hosted | open core |
| <img src="https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico" alt="Amazon Web Services logo" width="64" height="64"> | [Amazon Web Services](https://aws.amazon.com/bedrock/agentcore/) | Enterprise agents needing runtime, browser, code interpreter, identity, and observability services | managed runtime | Session-scoped managed services | managed cloud | proprietary |
| <img src="https://developers.cloudflare.com/favicon.png" alt="Cloudflare logo" width="64" height="64"> | [Cloudflare](https://developers.cloudflare.com/sandbox/) | Agent code execution integrated with the Cloudflare developer platform | container | Sandbox lifecycle with filesystem and process APIs | managed cloud | open source sdk |
| <img src="https://www.docker.com/wp-content/uploads/2024/02/cropped-docker-logo-favicon-192x192.png" alt="Docker logo" width="64" height="64"> | [Docker](https://docs.docker.com/ai/sandboxes/) | Local and cloud-connected coding agents | microVM | Per-sandbox workspace and Docker daemon | developer desktop | proprietary |
| <img src="https://azure.microsoft.com/favicon.ico" alt="Microsoft Azure logo" width="64" height="64"> | [Microsoft Azure](https://learn.microsoft.com/en-us/azure/container-apps/sessions) | Code interpreters, untrusted code execution, and session-based applications | container | Session-scoped environment | managed cloud | proprietary |
<!-- sandbox-feature-table:end -->

## Reading The Matrix

- `microVM`, `container`, and `hardware-isolated VM` are used only when the vendor publicly identifies the isolation boundary.
- `isolated compute`, `managed runtime`, and `managed browser session` avoid inferring an implementation that is not documented.
- `open-core` means a meaningful framework or core component is public while the company also offers a managed commercial service.
- State behavior can vary by product configuration. The matrix records the product's emphasized lifecycle model, not every storage option.

See each record in [`data/sandboxes.json`](../data/sandboxes.json) for first-party sources and verification dates.
