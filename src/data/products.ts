export interface Product {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: string;
  link: string;
  promise: string;
  capabilities: string[];
  detail?: {
    label: string;
    headline: string;
    body: string;
    signals: string[];
    workflow: { step: string; title: string; body: string }[];
    pillars: { title: string; body: string; items: string[] }[];
    integrations: { name: string; body: string }[];
    modes: { name: string; body: string }[];
    principles: string[];
    faqs: { question: string; answer: string }[];
  };
}

export const products: Product[] = [
  {
    slug: 'tracey',
    title: 'Observer Tracey',
    category: 'Agent observability + reliability',
    description: 'The reliability control plane for production agents. Inspect prompts, model calls, tools, handoffs, failures, SLOs, latency, cost, fallbacks, and rollbacks.',
    promise: 'See exactly what an agent knew, called, and returned—and keep every run safe to change.',
    status: 'Platform',
    link: '/products/tracey',
    capabilities: ['Prompt and model-call traces', 'Agent SLOs and incident timelines', 'Token, latency, cost, and failure analysis', 'Failure-aware fallbacks and safe rollbacks'],
    detail: {
      label: 'AI SRE for production agents',
      headline: 'Know why a run failed before your users do.',
      body: 'Tracey turns every agent execution into an explainable run: the prompt that started it, the context it retrieved, every model and tool call, the decision it made, and the action it took. Then it gives your team the controls to contain failures without guessing.',
      signals: ['Run latency and time-to-first-token', 'Prompt, model, tool, and handoff spans', 'Token usage, cost, retries, and fallbacks', 'Error rates, SLOs, and regression alerts'],
      workflow: [
        { step: '01', title: 'Collect the whole run', body: 'Capture model calls, tool calls, MCP servers, retrieval, handoffs, and outputs as one connected trace.' },
        { step: '02', title: 'Find the failure', body: 'Compare latency, cost, errors, prompt versions, models, and cohorts to isolate what changed.' },
        { step: '03', title: 'Protect production', body: 'Apply retries, timeouts, fallbacks, approval gates, and rollbacks with an auditable change history.' },
      ],
      pillars: [
        { title: 'Observe', body: 'See the state of your registered agents from real telemetry, not guessed health.', items: ['Run volume and outcomes', 'Model and tool activity', 'Latency, token usage, and cost', 'Trace and log completeness'] },
        { title: 'Investigate', body: 'Ask operational questions in plain language and keep evidence attached to every answer.', items: ['Bounded read tools', 'Trace, log, and metric correlation', 'Kubernetes and rollout context', 'Sources and limitations'] },
        { title: 'Act', body: 'Turn an investigation into a typed, reviewable remediation plan.', items: ['Expected impact and risk', 'Blast-radius estimation', 'Deterministic policy checks', 'Approval-first execution'] },
        { title: 'Verify', body: 'Treat recovery as a measured outcome, not a successful API response.', items: ['Workload readiness', 'Replica and rollout state', 'Error-rate and latency change', 'Rollback when verification fails'] },
      ],
      integrations: [
        { name: 'SigNoz', body: 'System of record for traces, logs, metrics, bounded queries, and before-after recovery evidence.' },
        { name: 'Kubernetes', body: 'Investigate workloads and perform approved typed remediation through separate identities.' },
        { name: 'Codex + Claude Code', body: 'Normalize privacy-safe OpenTelemetry events into agent runs, model activity, tools, failures, and token evidence.' },
        { name: 'Custom agents + MCP', body: 'Connect framework-independent agents through stable service identity and explicit read-tool allowlists.' },
      ],
      modes: [
        { name: 'Observe', body: 'Read-only investigation. Every mutation is denied.' },
        { name: 'Recommend', body: 'Prepare and store remediation plans without executing them.' },
        { name: 'Approval', body: 'Every mutation waits for administrator approval. Recommended starting mode.' },
        { name: 'Guarded autopilot', body: 'Allow reversible, allowlisted actions within configured risk and blast-radius limits.' },
        { name: 'Full autopilot', body: 'Broader allowlisted execution for mature teams; mandatory prohibitions remain.' },
      ],
      principles: [
        'The model selects bounded read tools and prepares plans.',
        'A deterministic policy engine makes authorization decisions.',
        'A restricted executor uses a separate authenticated identity.',
        'Every mutation is typed, scoped, idempotent, and auditable.',
        'Every success claim requires verification.',
        'Missing telemetry is surfaced as missing evidence, never filled with a guess.',
      ],
      faqs: [
        { question: 'Does Tracey replace SigNoz?', answer: 'No. SigNoz remains the telemetry backend and system of record. Tracey adds agent semantics, investigations, policies, controlled execution, verification, recovery, and the operator experience above it.' },
        { question: 'Does Tracey run my agents?', answer: 'No. Connected agents remain in their own repositories and deployments. They export OpenTelemetry data and register their service identity with Tracey.' },
        { question: 'Can the model directly run cloud commands?', answer: 'No. The model can select bounded investigation tools and prepare remediation plans. It cannot call the infrastructure adapter, access a shell, or bypass policy.' },
        { question: 'How does Tracey know a remediation worked?', answer: 'It checks Kubernetes readiness and compares post-action SigNoz health against the configured baseline. API acceptance alone is not treated as recovery.' },
      ],
    },
  },
  {
    slug: 'atlas',
    title: 'Captain Atlas',
    category: 'AI knowledge layer',
    description: 'Permission-aware context for agents. Connect documents, tickets, code, and events with freshness, provenance, and retrieval controls.',
    promise: 'Give agents current evidence they are allowed to use, with the source trail attached.',
    status: 'Platform',
    link: '/products/atlas',
    capabilities: ['Permission-aware retrieval', 'Freshness and provenance tracking', 'Connectors for docs, tickets, code, and events', 'Source-backed answers and decisions'],
  },
  {
    slug: 'clara',
    title: 'Agent Clara',
    category: 'Customer support agents',
    description: 'A customer support agent that answers from approved company knowledge, checks account context, takes safe actions, and escalates when needed.',
    promise: 'Resolve more customer questions without losing accuracy, context, or human control.',
    status: 'SaaS product',
    link: '/products/clara',
    capabilities: ['Grounded customer answers', 'Account and ticket context', 'Approved actions and escalation rules', 'Human handoff with full trace'],
  },
  {
    slug: 'riley',
    title: 'Operator Riley',
    category: 'Workflow automation agents',
    description: 'Agents that coordinate work across Slack, Jira, GitHub, CRM, and internal APIs—from incident response to approvals and follow-ups.',
    promise: 'Turn multi-tool operational work into traceable, repeatable workflows.',
    status: 'SaaS product',
    link: '/products/riley',
    capabilities: ['Cross-tool task execution', 'Approval gates for consequential actions', 'Incident, ticket, and approval workflows', 'Action history and ownership tracking'],
  },
];
