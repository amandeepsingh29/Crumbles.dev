import Link from 'next/link';
import type { Metadata } from 'next';
import { FiArrowUpRight, FiCheck, FiMail } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Contact | Crumbles',
  description: 'Talk to the Crumbles team about reliable AI agent infrastructure and product access.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Crumbles',
    description: 'Talk to the Crumbles team about reliable AI agent infrastructure and product access.',
    url: '/contact',
    images: ['/opengraph-image'],
  },
};

const contactRoutes = [
  {
    number: '01',
    title: 'Product access',
    body: 'Tell us which agent workflow you run and where reliability breaks. We will point you to the right Crumbles product.',
    href: 'mailto:team@crumbles.dev?subject=Crumbles%20product%20access',
    label: 'Request access',
  },
  {
    number: '02',
    title: 'Design partners',
    body: 'Share the systems, models, and operational constraints you want to bring into production with an agent layer.',
    href: 'mailto:team@crumbles.dev?subject=Crumbles%20design%20partner',
    label: 'Discuss a partnership',
  },
  {
    number: '03',
    title: 'Careers',
    body: 'Interested in building reliable production agents? See the current founding engineer and intern roles.',
    href: '/careers',
    label: 'See open roles',
  },
];

export default function ContactPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-6 pb-32 pt-32 text-gray-950 dark:bg-gray-950 dark:text-white md:pt-40">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-12 border-b border-gray-950/15 pb-16 dark:border-white/15 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-24">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              06 / Contact
            </p>
            <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-gray-950 dark:text-white md:text-8xl">
              Put your agents into <span className="text-sky-600 dark:text-sky-300">production.</span>
            </h1>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Tell us what you are running, where it fails, and what a reliable run looks like. Start a direct conversation with the Crumbles team.
            </p>
            <a
              href="mailto:team@crumbles.dev?subject=Talk%20to%20Crumbles"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-gray-950"
            >
              Email team@crumbles.dev <FiArrowUpRight />
            </a>
          </div>
        </header>

        <section className="grid gap-8 border-b border-gray-950/15 py-16 dark:border-white/15 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-violet-600 dark:text-violet-300">Make the first message useful</p>
            <h2 className="mt-5 max-w-md text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Give us the system, not a pitch.</h2>
          </div>
          <div className="rounded-[1.75rem] bg-gray-950 p-7 text-white dark:bg-white dark:text-gray-950 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Useful context</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {['Your current stack', 'The failure mode', 'The outcome you need'].map((item, index) => (
                <div key={item} className="border-t border-white/20 pt-4 dark:border-gray-950/15">
                  <span className="font-mono text-sm text-sky-300 dark:text-sky-600">0{index + 1}</span>
                  <p className="mt-3 text-lg font-black leading-tight">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-gray-400 dark:text-gray-600">Include the models, tools, data sources, or approval steps involved. Concrete details help us route the conversation quickly.</p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="flex flex-col gap-5 border-b border-gray-950/15 pb-8 dark:border-white/15 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">Choose a thread</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Start with the right conversation.</h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400"><FiMail /> team@crumbles.dev</div>
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] border border-gray-950/15 bg-gray-950/15 dark:border-white/15 dark:bg-white/15 md:grid-cols-3">
            {contactRoutes.map((route) => (
              <article key={route.number} className="flex min-h-72 flex-col bg-[#f4f1e8] p-7 dark:bg-gray-950 md:p-8">
                <span className="font-mono text-sm text-gray-400">{route.number}</span>
                <h3 className="mt-12 text-2xl font-black tracking-tight md:text-3xl">{route.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-gray-600 dark:text-gray-400">{route.body}</p>
                {route.href.startsWith('/') ? (
                  <Link href={route.href} className="mt-8 inline-flex items-center gap-2 text-sm font-black text-sky-600 dark:text-sky-300">{route.label} <FiArrowUpRight /></Link>
                ) : (
                  <a href={route.href} className="mt-8 inline-flex items-center gap-2 text-sm font-black text-sky-600 dark:text-sky-300">{route.label} <FiArrowUpRight /></a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 border-t border-gray-950/15 pt-8 text-sm text-gray-500 dark:border-white/15 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2"><FiCheck className="text-emerald-500" /> No form. No routing maze. Just the team.</p>
          <a href="mailto:team@crumbles.dev" className="font-black text-gray-950 underline decoration-sky-400 decoration-2 underline-offset-4 dark:text-white">team@crumbles.dev</a>
        </section>
      </div>
    </main>
  );
}
