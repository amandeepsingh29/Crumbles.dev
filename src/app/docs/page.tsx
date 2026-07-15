import type { Metadata } from 'next';
import BusinessPage from '@/components/BusinessPage';

export const metadata: Metadata = { title: 'Docs | Crumbles', description: 'Documentation for the Crumbles AI agent operating layer.', alternates: { canonical: '/docs' } };

export default function DocsPage() {
  return <BusinessPage eyebrow="07 / Documentation" title="Build agents on a layer you can inspect." intro="The public product documentation is being assembled around the Sena, Tracy, and Atlas platform APIs. Request access to receive the current integration notes and architecture brief." sections={[
    { title: 'Sena', body: 'Reliability primitives for SLOs, incidents, fallbacks, cost controls, and safe rollbacks.' },
    { title: 'Tracy', body: 'Execution traces for model calls, prompts, tools, handoffs, retrieved context, and outputs.' },
    { title: 'Atlas', body: 'Permission-aware retrieval with source provenance, freshness, and connector controls.' },
    { title: 'Integration brief', body: 'Start with your existing APIs and software. Crumbles sits above them and keeps each action traceable.' },
  ]} ctaLabel="Request documentation" ctaHref="mailto:hello@crumbles.dev?subject=Request%20documentation" />;
}
