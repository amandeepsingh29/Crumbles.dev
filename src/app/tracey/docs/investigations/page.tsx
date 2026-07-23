import type { Metadata } from 'next';
import TraceyDocPage from '@/components/TraceyDocPage';

export const metadata: Metadata = { title: 'Investigations | Tracey Documentation', description: 'Investigate AI-agent failures with bounded evidence in Tracey.', alternates: { canonical: '/tracey/docs/investigations' } };

export default function InvestigationsPage() {
  return <TraceyDocPage current="investigations" eyebrow="Concepts / Investigations" title="Ask operational questions without losing the evidence." intro="Tracey makes conversational investigation useful by keeping tool activity, grounding status, sources, limitations, and investigation history attached to the answer." sections={[
    { title: 'Start from a real signal', body: 'Open an investigation from an alert, failed run, incident, trace, conversation, or natural-language question. The starting context becomes part of the durable timeline.', items: ['Why did this run fail?', 'Which tool or dependency contributed the most latency?', 'What changed before the error rate increased?', 'Did the workload recover after the approved change?'] },
    { title: 'Evidence gathering', body: 'The investigator chooses bounded read tools across connected systems. It correlates agent spans with SigNoz logs and metrics, Kubernetes workloads and events, recent rollouts, and prior recovery history.', code: `Investigation\n├── question and scope\n├── queries executed\n├── evidence references\n├── observed facts\n├── deterministic calculations\n├── hypotheses\n└── limitations` },
    { title: 'A grounded answer', body: 'A useful answer names what was observed, how the conclusion was calculated, what remains uncertain, and which source or trace supports each important claim.', note: 'If a connector is unavailable or telemetry is incomplete, Tracey reports the limitation and narrows the conclusion.' },
    { title: 'From investigation to plan', body: 'An investigation can produce a typed remediation plan, but the plan is not an execution. It must pass deterministic policy evaluation and, where required, administrator approval before an executor can act.' },
  ]} />;
}
