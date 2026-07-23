import type { Metadata } from 'next';
import TraceyDocPage from '@/components/TraceyDocPage';

export const metadata: Metadata = { title: 'SigNoz Integration | Tracey Documentation', description: 'Connect SigNoz as Tracey’s system of record for traces, logs, and metrics.', alternates: { canonical: '/tracey/docs/integrations/signoz' } };

export default function SignozIntegrationPage() {
  return <TraceyDocPage current="signoz" eyebrow="Integrations / SigNoz" title="Keep SigNoz as the telemetry source of truth." intro="Tracey sits above SigNoz. It adds agent semantics and operational workflows without moving raw traces, logs, or metrics into a second observability store." sections={[
    { title: 'What Tracey reads', body: 'Tracey uses bounded queries to discover agent runs, inspect traces, correlate logs and exceptions, compare metrics, and collect recovery evidence.', items: ['Traces and span attributes', 'Logs and exception events', 'Latency, error-rate, and resource metrics', 'Before-and-after health comparisons'] },
    { title: 'Connection checklist', body: 'Configure the SigNoz endpoint and a credential with the least read access required for the workspace and services Tracey should investigate.', items: ['Confirm the endpoint is reachable from the Tracey deployment', 'Test trace, log, and metric queries independently', 'Verify the service and environment names match emitted telemetry', 'Record connector readiness and missing permissions'] },
    { title: 'Bounded investigation flow', body: 'Tracey does not hand an unrestricted query surface to the model. The investigator selects bounded tools, applies time and result limits, and attaches the returned evidence to the investigation.', code: `Question\n  → bounded query plan\n  → SigNoz traces / logs / metrics\n  → normalized evidence\n  → answer with sources and limitations` },
    { title: 'When data is missing', body: 'A failed query, incomplete span, or absent semantic field is reported as a limitation. Tracey should narrow the answer or ask for more evidence rather than fabricate a diagnosis.', note: 'SigNoz remains the system of record. Tracey stores bounded semantic summaries, investigations, policies, and audit history—not a replacement copy of raw telemetry.' },
  ]} />;
}
