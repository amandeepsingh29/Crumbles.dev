import { FiCpu } from 'react-icons/fi';
import type { Metadata } from 'next';
import { teamMembers } from '@/data/team';

export const metadata: Metadata = {
  title: 'Team | Crumbles',
  description: 'Meet the humans and agents behind Crumbles AI.',
  alternates: { canonical: '/team' },
  openGraph: { title: 'Team | Crumbles', description: 'Meet the humans and agents behind Crumbles AI.', url: '/team', images: ['/opengraph-image'] },
};

function initials(name: string) {
  return name.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
}

export default function TeamPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-6 pb-32 pt-32 text-gray-950 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-12 border-b border-gray-950/15 pb-16 dark:border-white/15 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300"><span className="h-2 w-2 rounded-full bg-sky-500" /> 03 / Roster</p>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-gray-950 dark:text-white md:text-8xl">The people behind <span className="text-sky-700 dark:text-sky-300">reliable agents.</span></h1>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-sm text-lg leading-relaxed text-gray-600 dark:text-gray-400">Engineers and systems thinkers building the control plane, context layer, and evaluation loops agents need in production.</p>
            <div className="mt-8 flex items-center gap-3 text-sm font-bold text-gray-500 dark:text-gray-500"><FiCpu className="text-sky-500 dark:text-sky-300" /> 04 minds in the loop</div>
          </div>
        </header>

        <section className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-gray-950/15 bg-gray-950/15 dark:border-white/15 dark:bg-white/15 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <article key={member.name} className="group bg-[#f4f1e8] p-8 transition-colors hover:bg-white dark:bg-gray-950 dark:hover:bg-gray-900 md:p-10">
              <div className="mb-14 flex items-start justify-between">
                <span className="font-mono text-sm text-gray-600">0{index + 1}</span>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sky-500/40 bg-sky-500/10 text-sm font-black text-sky-700 dark:text-sky-200">{initials(member.name)}</div>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-gray-950 dark:text-white md:text-4xl">{member.name}</h2>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">{member.role}</p>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-400">{member.bio}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
