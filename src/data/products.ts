export interface Product {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: string;
  link: string;
  promise: string;
  capabilities: string[];
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
