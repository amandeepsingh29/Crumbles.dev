import Image from 'next/image';
import Link from 'next/link';
import { FiActivity, FiArrowRight, FiArrowUpRight, FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

const GITHUB_URL = 'https://github.com';

const projects = [
  { number: '01', title: 'Autonomous Agent Framework', type: 'Open source', description: 'Composable primitives for deterministic agentic workflows.', color: 'text-sky-500' },
  { number: '02', title: 'AI Code Auditor', type: 'Developer tool', description: 'Continuous security analysis for large, moving codebases.', color: 'text-rose-500' },
  { number: '03', title: 'Multi-Agent Playground', type: 'Research', description: 'A controlled arena for testing cooperation, conflict, and failure.', color: 'text-violet-500' },
];

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-[#f4f1e8] text-gray-950 dark:bg-gray-950 dark:text-white">
      <section className="relative px-6 pb-20 pt-32 md:pb-28">
        <div className="pointer-events-none absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-gray-950/15 pb-5 text-[11px] font-black uppercase tracking-[0.25em] text-gray-500 dark:border-white/15 dark:text-gray-400">
            <span className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Independent AI lab</span>
            <span>Make / Break / Learn</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">Crumbles, 2026</p>
              <h1 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.07em] md:text-8xl lg:text-[9rem]">
                Systems worth <span className="text-sky-500">breaking.</span>
              </h1>
            </div>
            <div className="max-w-md lg:justify-self-end">
              <p className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">We build small, useful AI systems, then stress them until the interesting parts fall out.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/products" className="inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-gray-950">Explore the lab <FiArrowRight /></Link>
                <Link href="#loop" className="inline-flex items-center gap-3 rounded-full border border-gray-950/25 px-6 py-3 text-sm font-black text-gray-950 transition-colors hover:bg-gray-950 hover:text-white dark:border-white/25 dark:text-white dark:hover:bg-white dark:hover:text-gray-950">How we work <FiArrowDown /></Link>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-gray-950/15 bg-gray-950/15 dark:border-white/15 dark:bg-white/15 sm:grid-cols-3">
            {[
              ['04', 'active experiments'],
              ['03', 'public projects'],
              ['∞', 'questions left'],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#f4f1e8]/90 p-6 dark:bg-gray-950/90">
                <p className="font-mono text-3xl font-bold text-gray-950 dark:text-white">{value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="loop" className="scroll-mt-24 bg-[#f4f1e8] px-6 py-24 text-gray-950 dark:bg-gray-950 dark:text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">The lab loop</p>
              <h2 className="mt-6 max-w-sm text-4xl font-black leading-tight tracking-[-0.04em] text-gray-950 dark:text-white md:text-5xl">Useful things come from honest failure.</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/15 md:grid-cols-3">
              {[
                ['01', 'Make', 'Start with a sharp question and a small surface area.'],
                ['02', 'Break', 'Push the system past its happy path on purpose.'],
                ['03', 'Learn', 'Keep what works. Share what failed. Repeat.'],
              ].map(([number, title, description]) => (
                <article key={number} className="bg-gray-950 p-7 transition-colors hover:bg-gray-900 md:p-8">
                  <span className="font-mono text-sm text-gray-600">{number}</span>
                  <h3 className="mt-16 text-3xl font-black">{title}</h3>
                  <p className="mt-5 leading-relaxed text-gray-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1e8] px-6 py-24 dark:bg-gray-950 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 border-b border-gray-950/15 pb-8 md:flex-row md:items-end md:justify-between dark:border-white/15">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-600 dark:text-violet-300">Selected work</p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-7xl">Currently crumbling.</h2>
            </div>
            <Link href="/products" className="text-sm font-black text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">See all products <FiArrowUpRight className="ml-1 inline" /></Link>
          </div>
          <div className="border-t border-gray-950/15 dark:border-white/15">
            {projects.map((project) => (
              <Link key={project.number} href="/products" className="group grid gap-5 border-b border-gray-950/15 py-8 transition-colors hover:bg-white/60 md:grid-cols-[72px_1fr_1fr_auto] md:items-center md:px-5 dark:border-white/15 dark:hover:bg-white/[0.04]">
                <span className="font-mono text-sm text-gray-400">{project.number}</span>
                <h3 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                <span className={`text-xs font-black uppercase tracking-[0.15em] ${project.color}`}>{project.type}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1e8] px-6 py-24 dark:bg-gray-950 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl dark:bg-gray-900">
            <Image src="/ai_research.jpg" alt="Illustration of ideas and AI research" width={600} height={600} className="h-auto w-full rounded-[1.5rem]" />
            <div className="absolute bottom-8 left-8 rounded-full bg-gray-950 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">Research in public</div>
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">No black boxes</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 dark:text-white md:text-7xl">Build it. Break it. Show your work.</h2>
            <p className="mt-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">The best tools get better when more people can inspect them, challenge them, and make them their own.</p>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-gray-950"><FiGithub /> Visit GitHub <FiArrowUpRight /></a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 px-6 pb-8 pt-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/15 pb-16 md:grid-cols-[1.4fr_0.6fr_0.6fr_1fr]">
            <div>
              <h2 className="font-dynapuff text-3xl font-black">Crumbles</h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">An independent lab for building and breaking AI systems.</p>
              <div className="mt-6 flex gap-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="rounded-full border border-white/15 p-3 hover:bg-white/10"><FiTwitter /></a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-white/15 p-3 hover:bg-white/10"><FiGithub /></a>
                <a href="mailto:hello@crumbles.ai" aria-label="Email" className="rounded-full border border-white/15 p-3 hover:bg-white/10"><FiMail /></a>
              </div>
            </div>
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Explore</p><div className="mt-5 space-y-3 text-sm text-gray-300"><Link href="/products" className="block hover:text-white">Products</Link><Link href="/blogs" className="block hover:text-white">Lab notes</Link><Link href="/team" className="block hover:text-white">Team</Link><Link href="/careers" className="block hover:text-white">Careers</Link></div></div>
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Signal</p><div className="mt-5 flex items-center gap-2 text-sm text-gray-300"><FiActivity className="text-emerald-300" /> Systems curious</div><p className="mt-3 text-sm leading-relaxed text-gray-500">New experiments when they are ready.</p></div>
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Signal</p><p className="mt-5 text-sm leading-relaxed text-gray-400">New experiments when they are ready. No noise.</p></div>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between"><span>© 2025 Crumbles AI Labs</span><span>Built to be inspected.</span></div>
        </div>
      </footer>
    </main>
  );
}

function FiArrowDown() {
  return <span aria-hidden="true">↓</span>;
}
