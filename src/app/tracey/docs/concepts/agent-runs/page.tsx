import type { Metadata } from 'next';
import TraceyDocPage from '@/components/TraceyDocPage';

export const metadata: Metadata = { title: 'Agent Runs | Tracey Documentation', description: 'Understand the Tracey agent-run and evidence model.', alternates: { canonical: '/tracey/docs/concepts/agent-runs' } };

export default function AgentRunsPage() {
  return <TraceyDocPage current="agent-runs" eyebrow="Concepts / Agent runs" title="An agent run is more than a request." intro="Tracey models an agent execution as a connected sequence of decisions, model calls, tools, dependencies, side effects, and outcomes—not as an isolated log line." sections={[
    { title: 'The root run', body: 'Every investigation starts from a root agent.run span. It carries the stable run ID, service identity, environment, start and end time, outcome, and trace correlation.', items: ['One run can contain multiple model calls', 'A run can hand off to another agent or service', 'The final outcome should distinguish success, failure, timeout, cancellation, and partial completion'] },
    { title: 'Child activity', body: 'Child spans preserve the causal path through the run. Tracey uses them to explain critical-path latency, locate failures, compare prompt or model versions, and connect agent behavior to infrastructure.', items: ['Model generation and embedding calls', 'Tool, MCP, database, retrieval, and external API calls', 'Routing decisions, retries, fallbacks, and handoffs', 'Side effects and result classification'] },
    { title: 'Evidence completeness', body: 'Tracey reports when telemetry is partial. A run with no tool spans cannot support a confident tool-failure explanation, and a run with no outcome cannot be treated as healthy.', note: 'Observed facts, deterministic calculations, and hypotheses are separate categories in Tracey’s evidence model.' },
    { title: 'Recommended attributes', body: 'Use stable, privacy-safe attributes for correlation. Keep prompts, responses, tool payloads, credentials, and personal data out of exported attributes by default.', code: `tracey.run.id\ntracey.agent.id\ntracey.environment\ntracey.outcome\ntracey.prompt.version\ngen_ai.system\ngen_ai.request.model\ngen_ai.usage.input_tokens\ngen_ai.usage.output_tokens` },
  ]} />;
}
