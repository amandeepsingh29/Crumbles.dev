import type { Metadata } from 'next';
import BusinessPage from '@/components/BusinessPage';

export const metadata: Metadata = { title: 'Security | Crumbles', description: 'Security principles for the Crumbles AI agent operating layer.', alternates: { canonical: '/security' } };

export default function SecurityPage() {
  return <BusinessPage eyebrow="10 / Security" title="Agents should have boundaries." intro="Security is part of the product boundary: least-privilege tools, permission-aware context, traceable actions, and human approval for consequential work." sections={[
    { title: 'Least privilege', body: 'Agents should receive only the tools, sources, and actions needed for the current workflow.' },
    { title: 'Traceability', body: 'Every retrieved source and external action should be available for review after a run.' },
    { title: 'Approval gates', body: 'High-impact actions should pause for an explicit approval instead of relying on model confidence.' },
    { title: 'Security questions', body: 'Email hello@crumbles.dev for the current architecture and security review process.' },
  ]} ctaLabel="Ask a security question" ctaHref="mailto:hello@crumbles.dev?subject=Crumbles%20security" />;
}
