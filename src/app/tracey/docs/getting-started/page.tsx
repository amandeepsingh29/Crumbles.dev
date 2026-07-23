import type { Metadata } from 'next';
import TraceyDocPage from '@/components/TraceyDocPage';

export const metadata: Metadata = { title: 'Getting Started with Tracey | Crumbles', description: 'Connect your first agent to Tracey and investigate a real production run.', alternates: { canonical: '/tracey/docs/getting-started' } };

export default function TraceyGettingStarted() {
  return <TraceyDocPage current="getting-started" eyebrow="Start here / 15-minute path" title="Connect one agent. See the whole run." intro="This guide gets a single agent from OpenTelemetry export to a read-only Tracey investigation. It does not require changing where your agent is deployed." sections={[
    { title: 'Before you begin', body: 'Have access to a SigNoz workspace receiving traces, an agent service identity, and a non-production environment where you can safely test telemetry.', items: ['SigNoz endpoint and read credentials', 'A stable service name and environment for the agent', 'OpenTelemetry Collector or an OTLP-capable exporter', 'Permission to register the agent in Tracey'] },
    { title: '1. Connect SigNoz', body: 'Add SigNoz as Tracey’s observability backend. Tracey queries bounded traces, logs, metrics, and exceptions while leaving raw telemetry in SigNoz.', note: 'Start with read-only credentials. Connector readiness and missing permissions should be visible before you attempt an investigation.' },
    { title: '2. Register the agent', body: 'Register the service identity that Tracey should recognize. Use a stable name across deployments and include the environment so production and staging cannot be confused.', code: `service.name = "notes-agent-api"\ndeployment.environment = "staging"\ntracey.agent.id = "notes-agent-api"` },
    { title: '3. Emit a root agent-run span', body: 'Create one root span for the complete run. Child spans should represent routing, model calls, retrieval, tools, handoffs, side effects, and the final result.', code: `agent.run\n├── agent.route\n├── gen_ai.chat\n├── tool.call\n├── mcp.request\n└── agent.result` },
    { title: '4. Verify the first run', body: 'Open Tracey and confirm the run has an identity, outcome, duration, trace ID, and enough child spans to explain the path. Incomplete telemetry should be visible as incomplete—not silently treated as healthy.' },
    { title: '5. Ask a bounded question', body: 'Start with a read-only investigation such as “Why did this run fail?” Tracey should return evidence references, the systems queried, and any limitations that prevent a complete conclusion.', items: ['Which span or dependency failed?', 'What changed before the failure?', 'Which users or services are affected?'] },
    { title: 'Next step: prepare, do not execute', body: 'Once investigations are reliable, connect Kubernetes in a non-production environment and preview a typed remediation plan. Keep the mode at Recommend until verification and rollback criteria are tested.' },
  ]} />;
}
