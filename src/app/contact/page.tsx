import type { Metadata } from 'next';
import BusinessPage from '@/components/BusinessPage';

export const metadata: Metadata = {
  title: 'Contact | Crumbles',
  description: 'Talk to the Crumbles team about AI agent infrastructure and product access.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <BusinessPage eyebrow="06 / Contact" title="Talk to the team building the agent layer." intro="Tell us what you are running, where agents are failing, or which workflow you want to automate. We will respond from the team at hello@crumbles.dev." sections={[
    { title: 'Product access', body: 'Request access to Sena, Tracy, Atlas, Clara, or Riley and include the workflow you want to put into production.' },
    { title: 'Partnerships', body: 'We work with teams building on top of existing software, models, and operational data.' },
    { title: 'Careers', body: 'If you want to build reliable agent infrastructure, see the open roles on our Careers page.' },
    { title: 'Email', body: 'Write directly to hello@crumbles.dev. We use direct email until a form endpoint is connected.' },
  ]} ctaLabel="Email Crumbles" ctaHref="mailto:hello@crumbles.dev" />;
}
