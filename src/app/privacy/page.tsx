import type { Metadata } from 'next';
import BusinessPage from '@/components/BusinessPage';

export const metadata: Metadata = { title: 'Privacy | Crumbles', description: 'Crumbles privacy information.', alternates: { canonical: '/privacy' } };

export default function PrivacyPage() {
  return <BusinessPage eyebrow="11 / Privacy" title="Your data should remain understandable and controlled." intro="This draft privacy page explains the principles behind Crumbles data handling. Production service terms and a complete policy will be published before customer data is processed through a hosted product." sections={[
    { title: 'Data minimization', body: 'We aim to collect only the information needed to operate the website, communicate with teams, and deliver the requested product service.' },
    { title: 'Customer data', body: 'Design-partner data handling, retention, deletion, and subprocessors will be documented in the applicable service agreement.' },
    { title: 'Contact data', body: 'Messages sent to Crumbles are used to respond to the request and manage the relationship. Email hello@crumbles.dev for privacy questions.' },
    { title: 'Policy status', body: 'This is an informational draft, not a substitute for the final legal privacy policy.' },
  ]} ctaLabel="Ask about privacy" ctaHref="mailto:hello@crumbles.dev?subject=Crumbles%20privacy" />;
}
