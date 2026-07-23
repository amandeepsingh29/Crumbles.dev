import type { Metadata } from 'next';
import TraceyDocPage from '@/components/TraceyDocPage';

export const metadata: Metadata = { title: 'Approval Workflow | Tracey Documentation', description: 'Prepare and approve typed remediation plans in Tracey.', alternates: { canonical: '/tracey/docs/remediation/approval' } };

export default function ApprovalWorkflowPage() {
  return <TraceyDocPage current="approval" eyebrow="Remediation / Approval workflow" title="A plan is not permission." intro="Tracey separates model reasoning from infrastructure authority. The planner can propose a change; deterministic policy and an authorized operator decide whether it can execute." sections={[
    { title: 'Plan contents', body: 'Every plan should be understandable before it reaches an executor.', items: ['Proposed typed action and target resource', 'Supporting evidence and observed failure', 'Expected impact and risk', 'Estimated blast radius and affected services', 'Verification criteria and recovery behavior', 'Idempotency key and audit context'] },
    { title: 'Policy evaluation', body: 'The policy engine evaluates environment, resource scope, action type, risk, confidence, blast radius, cooldowns, concurrency, and maintenance windows. Generic apply, patch, and delete operations require explicit administrator confirmation.', code: `Investigation\n  → typed remediation plan\n  → policy evaluation\n  → denied | approval required | permitted\n  → restricted executor` },
    { title: 'Approval and execution', body: 'The operator reviews what will change, why it was recommended, which resources are affected, which policy allowed or denied it, and how success will be measured. Approved actions are sent to a separately authenticated restricted executor.' },
    { title: 'Verification and recovery', body: 'Tracey checks workload readiness, replica recovery, rollout state, error-rate changes, latency changes, and minimum evidence requirements. If verification detects a regression, the permitted recovery path runs and is verified again.', note: 'A successful Kubernetes API response is not proof that production recovered.' },
    { title: 'Operating modes', body: 'Start with Observe or Recommend. Production teams should begin with Approval, then move to Guarded autopilot only for reversible, allowlisted actions with proven verification and rollback criteria.' },
  ]} />;
}
