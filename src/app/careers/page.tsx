import { FiArrowUpRight, FiBriefcase, FiCheck, FiMapPin } from 'react-icons/fi';
import type { Metadata } from 'next';
import { openRoles } from '@/data/careers';

export const metadata: Metadata = {
  title: 'Careers | Crumbles',
  description: 'Join Crumbles and help build AI systems worth breaking.',
  alternates: { canonical: '/careers' },
  openGraph: { title: 'Careers | Crumbles', description: 'Join Crumbles and help build AI systems worth breaking.', url: '/careers', images: ['/opengraph-image'] },
};

const typeStyles: Record<string, string> = {
  'Full-time': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
  Contract: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
  'Part-time': 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300',
};

const values = ['Autonomy over ceremony', 'Learning as a deliverable', 'Build in the open', 'Break things responsibly'];

export default function CareersPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-6 pb-32 pt-32 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-10 border-b border-gray-900/15 pb-16 dark:border-white/15 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">04 / Join the lab</p>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-gray-950 dark:text-white md:text-8xl">Come build what <span className="text-emerald-600 dark:text-emerald-300">breaks.</span></h1>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-gray-700 dark:text-gray-400 lg:justify-self-end">We are a small team working on hard systems problems with a generous definition of “done.”</p>
        </header>

        <div className="grid gap-16 pt-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">The working agreement</p>
            <p className="mt-6 max-w-md text-2xl font-black leading-tight text-gray-950 dark:text-white">Good work needs room to get weird before it gets useful.</p>
            <ul className="mt-10 space-y-4 border-t border-gray-900/15 pt-6 dark:border-white/15">
              {values.map((value) => <li key={value} className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-gray-300"><FiCheck className="text-emerald-600 dark:text-emerald-300" /> {value}</li>)}
            </ul>
          </aside>

          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">Open positions</h2>
              <span className="font-mono text-xs text-gray-400">{String(openRoles.length).padStart(2, '0')} roles</span>
            </div>
            <div className="border-t border-gray-900/15 dark:border-white/15">
              {openRoles.map((role, index) => (
                <article key={role.title} className="group border-b border-gray-900/15 py-8 dark:border-white/15">
                  <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-5">
                      <span className="pt-1 font-mono text-sm text-gray-400">0{index + 1}</span>
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white md:text-3xl">{role.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                          <span className={`rounded-full px-3 py-1 ${typeStyles[role.type] || typeStyles['Full-time']}`}><FiBriefcase className="mr-1 inline" />{role.type}</span>
                          <span className="rounded-full bg-white/70 px-3 py-1 text-gray-600 dark:bg-white/10 dark:text-gray-300"><FiMapPin className="mr-1 inline" />{role.location}</span>
                        </div>
                        <p className="mt-6 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">{role.description}</p>
                      </div>
                    </div>
                    <a href={`mailto:careers@crumbles.ai?subject=${encodeURIComponent(`Application: ${role.title}`)}`} className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-gray-950 px-5 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-gray-950">Apply <FiArrowUpRight /></a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
