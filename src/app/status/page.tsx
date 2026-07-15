import type { Metadata } from 'next';
import BusinessPage from '@/components/BusinessPage';

export const metadata: Metadata = { title: 'Status | Crumbles', description: 'Crumbles service status and operational contact.', alternates: { canonical: '/status' } };

export default function StatusPage() {
  return <BusinessPage eyebrow="09 / Status" title="Operational status, without the mystery." intro="Crumbles does not yet have a public status feed. Until the hosted platform is generally available, operational questions and access issues are handled directly by the team." sections={[
    { title: 'Current availability', body: 'The public website is available. Sena, Tracy, Atlas, Clara, and Riley are in product development and design-partner onboarding.' },
    { title: 'Report an issue', body: 'Email team@crumbles.dev with the product, environment, timestamp, and a short description of the failure.' },
    { title: 'Incident communication', body: 'Design partners receive direct incident communication while the public status service is being built.' },
    { title: 'Planned status feed', body: 'A public component-level status page will be added before hosted production access opens broadly.' },
  ]} ctaLabel="Report an issue" ctaHref="mailto:team@crumbles.dev?subject=Crumbles%20issue" />;
}
