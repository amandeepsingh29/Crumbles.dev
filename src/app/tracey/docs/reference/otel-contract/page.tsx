import type { Metadata } from 'next';
import TraceyDocPage from '@/components/TraceyDocPage';

export const metadata: Metadata = { title: 'OpenTelemetry Run Contract | Tracey Documentation', description: 'Reference attributes and span structure for connecting custom agents to Tracey.', alternates: { canonical: '/tracey/docs/reference/otel-contract' } };

export default function OtelContractPage() {
  return <TraceyDocPage current="otel-contract" eyebrow="Reference / OpenTelemetry" title="Emit enough context to explain a run." intro="This contract is the framework-independent shape Tracey uses to correlate an agent run with model calls, tools, retrieval, handoffs, failures, and outcomes." sections={[
    { title: 'Required identity', body: 'Every run must be correlated to a stable service identity and environment. Use standard OpenTelemetry resource attributes where possible.', code: `service.name = "your-agent-service"\ndeployment.environment = "production"\ntracey.agent.id = "your-agent-service"\ntracey.run.id = "run-123"` },
    { title: 'Root span', body: 'Create one root span for the complete agent execution. Record start and end time, outcome, and the trace ID. Do not put raw prompts or responses into attributes by default.', code: `span.name = "agent.run"\ntracey.outcome = "success | failure | timeout | cancelled"\ntracey.prompt.version = "support-v3"\ntracey.error.class = "tool_timeout"` },
    { title: 'Child spans', body: 'Preserve the causal path with child spans for model calls, tools, MCP, retrieval, handoffs, and side effects.', code: `agent.route\ngen_ai.chat\ntool.call\nmcp.request\nretrieval.query\nagent.handoff\nagent.result` },
    { title: 'Useful measurements', body: 'Emit measurements that support diagnosis and cost analysis without exporting sensitive content.', items: ['Input and output token counts', 'Duration and time-to-first-token', 'Retry count and fallback selection', 'HTTP status and dependency outcome', 'Prompt or policy version', 'Estimated cost when pricing metadata is available'] },
    { title: 'Completeness checklist', body: 'Before connecting production, generate a known success, failure, timeout, tool error, and fallback run. Confirm each appears as a connected trace with the expected outcome and evidence.', note: 'The contract is intentionally additive. Start with root identity and outcome, then instrument the child spans that matter most for your agent.' },
  ]} />;
}
