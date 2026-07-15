import type { Metadata } from 'next';
import BusinessPage from '@/components/BusinessPage';

export const metadata: Metadata = { title: 'Pricing | Crumbles', description: 'Talk to Crumbles about access and deployment options for AI agent products.', alternates: { canonical: '/pricing' } };

export default function PricingPage() {
  return <BusinessPage eyebrow="08 / Pricing" title="Pricing that follows the work your agents do." intro="Crumbles pricing will be based on the platform capacity and product workflows you run. We are currently onboarding design partners and will scope access with each team." sections={[
    { title: 'Platform access', body: 'Sena, Tracy, and Atlas are scoped around runs, traces, indexed sources, retention, and deployment requirements.' },
    { title: 'Product access', body: 'Clara and Riley are scoped around seats, connected systems, workflow volume, and approval requirements.' },
    { title: 'Deployment', body: 'Teams can discuss hosted, private, and enterprise deployment requirements before committing to a plan.' },
    { title: 'Get a quote', body: 'Email team@crumbles.dev with your agent count, data sources, and primary workflow for a concrete access conversation.' },
  ]} ctaLabel="Discuss pricing" ctaHref="mailto:team@crumbles.dev?subject=Crumbles%20pricing" />;
}
