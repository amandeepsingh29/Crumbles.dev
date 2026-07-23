import Link from 'next/link';
import type { Metadata } from 'next';
import BusinessPage from '@/components/BusinessPage';

export const metadata: Metadata = { title: 'Docs | Crumbles', description: 'Documentation for the Crumbles AI agent operating layer.', alternates: { canonical: '/docs' } };

export default function DocsPage() {
  return <>
    <BusinessPage eyebrow="07 / Documentation" title="Build agents on a layer you can inspect." intro="The public product documentation is being assembled around the Tracey and Atlas platform APIs. Request access to receive the current integration notes and architecture brief." sections={[
    { title: 'Tracey', body: 'Execution traces and reliability controls for model calls, prompts, tools, handoffs, retrieved context, SLOs, failures, and rollbacks.' },
    { title: 'Atlas', body: 'Permission-aware retrieval with source provenance, freshness, and connector controls.' },
    { title: 'Integration brief', body: 'Start with your existing APIs and software. Crumbles sits above them and keeps each action traceable.' },
  ]} ctaLabel="Request documentation" ctaHref="mailto:team@crumbles.dev?subject=Request%20documentation" />
    <div className="relative z-10 -mt-20 px-6 pb-24 md:px-8"><div className="mx-auto max-w-7xl"><Link href="/tracey/docs" className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-6 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1">Open Tracey documentation <span aria-hidden>↗</span></Link></div></div>
  </>;
}
