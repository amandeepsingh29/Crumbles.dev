import type { Metadata } from 'next';
import TraceyDocPage from '@/components/TraceyDocPage';

export const metadata: Metadata = { title: 'Security and Privacy | Tracey Documentation', description: 'Understand Tracey’s evidence, identity, permission, and privacy boundaries.', alternates: { canonical: '/tracey/docs/security' } };

export default function TraceySecurityPage() {
  return <TraceyDocPage current="security" eyebrow="Trust / Security and privacy" title="Operational insight without unrestricted production access." intro="Tracey is designed so model intelligence and infrastructure authority remain separate. The system is evidence-first, approval-aware, and privacy-conscious by default." sections={[
    { title: 'What the model can do', body: 'The model can select bounded investigation tools, summarize returned evidence, and prepare typed remediation plans. It cannot directly call infrastructure adapters, access a shell, or bypass policy evaluation.', items: ['No arbitrary shell execution', 'No direct model-to-cloud access', 'No Kubernetes Secret values', 'No silent mutation without policy evaluation'] },
    { title: 'What the executor can do', body: 'A restricted executor uses a separate authenticated identity. Every mutation is typed, scope-checked, idempotent, persisted, and auditable. Generic Kubernetes operations require explicit administrator confirmation.', items: ['Environment and resource scope are checked', 'Actions carry an idempotency key', 'Execution receipts are persisted', 'Recovery behavior is verified'] },
    { title: 'Privacy boundary', body: 'Raw traces, logs, and metrics remain in SigNoz. Tracey’s default model boundary excludes prompts, model responses, tool arguments and results, credentials, tokens, personal data, Kubernetes Secret values, and raw private application content.', note: 'Tracey stores registrations, investigations, policies, notifications, action history, executor receipts, and bounded semantic summaries in PostgreSQL with pgvector.' },
    { title: 'Identity and connector hygiene', body: 'Use separate least-privilege identities for investigation and execution. Test connector permissions, monitor readiness, and disable or remove integrations without exposing stored secrets in the browser.' },
  ]} />;
}
