import type { Metadata } from 'next';
import TraceyDocPage from '@/components/TraceyDocPage';

export const metadata: Metadata = { title: 'Custom OpenTelemetry Agents | Tracey Documentation', description: 'Instrument framework-independent agents for Tracey with OpenTelemetry.', alternates: { canonical: '/tracey/docs/integrations/custom-otel' } };

export default function CustomOtelPage() {
  return <TraceyDocPage current="custom-otel" eyebrow="Integrations / OpenTelemetry" title="Bring any agent framework into the same run model." intro="Your agent stays in its own repository and deployment. Emit stable OpenTelemetry service identity and Tracey can correlate the run with model, tool, dependency, and infrastructure evidence." sections={[
    { title: 'Instrumentation boundary', body: 'Tracey does not vendor or execute your agent source code. Your application emits telemetry through the OpenTelemetry SDK or Collector, and Tracey consumes the resulting evidence from SigNoz.', items: ['Instrument at the agent entry point', 'Propagate trace context across model and tool calls', 'Export through an OpenTelemetry Collector where possible', 'Keep sensitive content out of attributes and event bodies'] },
    { title: 'Minimum run contract', body: 'A useful first integration needs a stable root run, an outcome, service identity, and trace correlation. Add child spans as you need deeper diagnosis.', code: `agent.run\n  tracey.run.id: stable run identifier\n  tracey.agent.id: registered service identity\n  tracey.environment: staging | production\n  tracey.outcome: success | failure | timeout\n  trace_id: propagated across child activity` },
    { title: 'Recommended child spans', body: 'Use semantic span names that preserve the execution path. The exact framework is not important; causal relationships and stable attributes are.', items: ['agent.route for routing and planning decisions', 'gen_ai.chat for model calls and token usage', 'tool.call or mcp.request for external actions', 'retrieval.query for vector or knowledge lookups', 'agent.handoff for multi-agent transitions', 'agent.result for final outcome classification'] },
    { title: 'Privacy defaults', body: 'Do not export prompts, model responses, tool arguments, tool results, credentials, personal data, or raw private application content by default. Prefer IDs, hashes, versions, timings, counts, and outcome classes.', note: 'Tracey’s investigations are only as strong as the evidence you choose to emit. Privacy-safe telemetry can still support latency, failure, cost, and dependency analysis.' },
  ]} />;
}
