import type { Metadata } from 'next';
import BusinessPage from '@/components/BusinessPage';

export const metadata: Metadata = { title: 'Terms | Crumbles', description: 'Crumbles terms and service information.', alternates: { canonical: '/terms' } };

export default function TermsPage() {
  return <BusinessPage eyebrow="12 / Terms" title="Clear terms for software that takes action." intro="These are preliminary service principles. Binding terms, acceptable-use rules, and data-processing terms will be provided before any hosted product access begins." sections={[
    { title: 'Use of products', body: 'Customers remain responsible for the workflows, permissions, data, and actions they configure for their agents.' },
    { title: 'Human oversight', body: 'Crumbles products should be configured with approval boundaries appropriate to the consequences of each action.' },
    { title: 'Service terms', body: 'Availability, support, security commitments, billing, and data processing will be defined in the final agreement.' },
    { title: 'Questions', body: 'Email hello@crumbles.dev for the current design-partner terms.' },
  ]} ctaLabel="Ask about terms" ctaHref="mailto:hello@crumbles.dev?subject=Crumbles%20terms" />;
}
