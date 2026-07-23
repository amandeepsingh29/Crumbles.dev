import Link from 'next/link';
import { FiArrowLeft, FiArrowUpRight, FiBookOpen } from 'react-icons/fi';

interface DocSection {
  title: string;
  body: string;
  items?: string[];
  code?: string;
  note?: string;
}

interface TraceyDocPageProps {
  current: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: DocSection[];
}

const navigation = [
  { heading: 'Start here', links: [{ label: 'Documentation home', href: '/tracey/docs', key: 'home' }, { label: 'Getting started', href: '/tracey/docs/getting-started', key: 'getting-started' }] },
  { heading: 'Concepts', links: [{ label: 'Agent runs', href: '/tracey/docs/concepts/agent-runs', key: 'agent-runs' }, { label: 'Investigations', href: '/tracey/docs/investigations', key: 'investigations' }, { label: 'Approval workflow', href: '/tracey/docs/remediation/approval', key: 'approval' }] },
  { heading: 'Integrations', links: [{ label: 'SigNoz', href: '/tracey/docs/integrations/signoz', key: 'signoz' }, { label: 'Custom OpenTelemetry', href: '/tracey/docs/integrations/custom-otel', key: 'custom-otel' }] },
  { heading: 'Trust and reference', links: [{ label: 'Security and privacy', href: '/tracey/docs/security', key: 'security' }, { label: 'OpenTelemetry contract', href: '/tracey/docs/reference/otel-contract', key: 'otel-contract' }] },
];

export default function TraceyDocPage({ current, eyebrow, title, intro, sections }: TraceyDocPageProps) {
  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-5 pb-24 pt-28 text-gray-950 dark:bg-gray-950 dark:text-white md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-sm font-bold text-gray-500 dark:text-gray-400">
          <Link href="/products/tracey" className="inline-flex items-center gap-2 transition-colors hover:text-sky-500"><FiArrowLeft /> Tracey product</Link>
          <a href="mailto:team@crumbles.dev?subject=Tracey%20access" className="inline-flex items-center gap-2 transition-colors hover:text-sky-500">Get started <FiArrowUpRight /></a>
        </div>

        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Link href="/tracey/docs" className="flex items-center gap-3 text-lg font-black text-gray-950 dark:text-white"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-white"><FiBookOpen /></span> Tracey docs</Link>
            <nav aria-label="Tracey documentation" className="mt-8 grid grid-cols-2 gap-7 sm:grid-cols-4 lg:block">
              {navigation.map((group) => (
                <div key={group.heading} className="mb-7">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{group.heading}</p>
                  <div className="space-y-1">
                    {group.links.map((link) => <Link key={link.key} href={link.href} className={`block rounded-lg px-3 py-2 text-sm font-bold transition-colors ${current === link.key ? 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300' : 'text-gray-600 hover:bg-white/70 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-white/[0.05] dark:hover:text-white'}`}>{link.label}</Link>)}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          <article className="min-w-0">
            <header className="max-w-4xl border-b border-gray-950/15 pb-12 dark:border-white/15 md:pb-16">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-sky-500 dark:text-sky-300">{eyebrow}</p>
              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-gray-950 dark:text-white md:text-7xl">{title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">{intro}</p>
            </header>

            <div className="max-w-4xl divide-y divide-gray-950/10 dark:divide-white/10">
              {sections.map((section) => (
                <section key={section.title} className="py-10 md:py-14">
                  <h2 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white md:text-3xl">{section.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">{section.body}</p>
                  {section.items && <ul className="mt-6 space-y-3">{section.items.map((item) => <li key={item} className="flex gap-3 text-base font-bold leading-relaxed text-gray-700 dark:text-gray-300"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />{item}</li>)}</ul>}
                  {section.code && <pre className="mt-6 overflow-x-auto rounded-2xl bg-gray-950 p-5 font-mono text-xs leading-loose text-sky-200 dark:bg-black md:p-6">{section.code}</pre>}
                  {section.note && <p className="mt-6 rounded-2xl border-l-4 border-sky-500 bg-sky-50 p-5 text-sm font-bold leading-relaxed text-sky-950 dark:bg-sky-950/40 dark:text-sky-100">{section.note}</p>}
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
