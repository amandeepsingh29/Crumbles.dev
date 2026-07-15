import Image from 'next/image';
import Link from 'next/link';
import { FiActivity, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import PantherMascot from '@/components/PantherMascot';

const projects = [
  { number: '01', slug: 'sena', title: 'Agent Sena', type: 'AI SRE', description: 'Keep production agents reliable with incidents, SLOs, fallbacks, and rollbacks.', color: 'text-sky-500' },
  { number: '02', slug: 'tracy', title: 'Observer Tracy', type: 'Observability', description: 'See every prompt, model call, tool call, handoff, and output.', color: 'text-sky-500' },
  { number: '03', slug: 'atlas', title: 'Captain Atlas', type: 'Knowledge layer', description: 'Give agents permission-aware, fresh, source-backed context.', color: 'text-sky-500' },
  { number: '04', slug: 'clara', title: 'Agent Clara', type: 'Customer support', description: 'Resolve customer questions with approved knowledge and safe actions.', color: 'text-sky-500' },
  { number: '05', slug: 'riley', title: 'Operator Riley', type: 'Workflow automation', description: 'Coordinate work across the tools your teams already use.', color: 'text-sky-500' },
];

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-[#f4f1e8] text-gray-950 dark:bg-gray-950 dark:text-white">
      <section className="relative px-6 pb-20 pt-32 md:pb-28">
        <div className="pointer-events-none absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-gray-950/15 pb-5 text-[11px] font-black uppercase tracking-[0.25em] text-gray-500 dark:border-white/15 dark:text-gray-400">
            <span className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-500" /> AI agent infrastructure</span>
            <span>Observe / Ground / Improve</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300"><span className="font-brand normal-case tracking-normal">Crumbles</span> / Core systems</p>
              <h1 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.07em] md:text-8xl lg:text-[9rem]">
                Production <span className="text-sky-500">infrastructure</span> for AI agents.
              </h1>
            </div>
            <div className="max-w-md lg:justify-self-end">
              <p className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300"><span className="font-brand">Crumbles</span> gives agent teams the control plane and knowledge layer they need to run reliably in production.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/products" className="inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-gray-950">Explore the stack <FiArrowRight /></Link>
                <Link href="#architecture" className="inline-flex items-center gap-3 rounded-full border border-gray-950/25 px-6 py-3 text-sm font-black text-gray-950 transition-colors hover:bg-gray-950 hover:text-white dark:border-white/25 dark:text-white dark:hover:bg-white dark:hover:text-gray-950">See the architecture <FiArrowDown /></Link>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-gray-950/15 bg-gray-950/15 dark:border-white/15 dark:bg-white/15 sm:grid-cols-3">
            {[
              ['05', 'connected products'],
              ['03', 'platform systems'],
              ['02', 'production agents'],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#f4f1e8]/90 p-6 dark:bg-gray-950/90">
                <p className="font-mono text-3xl font-bold text-gray-950 dark:text-white">{value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="scroll-mt-24 bg-[#f4f1e8] px-6 py-24 text-gray-950 dark:bg-gray-950 dark:text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">The agent stack</p>
              <h2 className="mt-6 max-w-sm text-4xl font-black leading-tight tracking-[-0.04em] text-gray-950 dark:text-white md:text-5xl">Reliable agents need more than a model.</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/15 md:grid-cols-3">
              {[
                ['01', 'Observe', 'Trace every model call, tool action, handoff, error, and cost.'],
                ['02', 'Ground', 'Retrieve current, permissioned evidence with provenance attached.'],
                ['03', 'Improve', 'Replay failures, evaluate changes, and ship with confidence.'],
              ].map(([number, title, description]) => (
                <article key={number} className="bg-gray-950 p-7 text-white transition-colors hover:bg-gray-900 md:p-8">
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
              <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-600 dark:text-violet-300">Core products</p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-7xl">The stack for agent teams.</h2>
            </div>
            <Link href="/products" className="text-sm font-black text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">See all products <FiArrowUpRight className="ml-1 inline" /></Link>
          </div>
          <div className="border-t border-gray-950/15 dark:border-white/15">
            {projects.map((project) => (
              <Link key={project.number} href={`/products/${project.slug}`} className="group grid gap-5 border-b border-gray-950/15 py-8 transition-colors hover:bg-white/60 md:grid-cols-[72px_minmax(0,0.8fr)_minmax(0,1.2fr)_160px] md:items-center md:px-5 dark:border-white/15 dark:hover:bg-white/[0.04]">
                <span className="font-mono text-sm text-gray-400">{project.number}</span>
                <h3 className="text-lg font-black tracking-tight text-gray-950 dark:text-white md:text-xl">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                <span className={`text-right text-xs font-black uppercase tracking-[0.15em] ${project.color}`}>{project.type}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1e8] px-6 py-24 dark:bg-gray-950 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 p-8 text-white shadow-2xl dark:bg-white dark:text-gray-950 md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-300 dark:text-sky-600">Why this exists</p>
            <div className="mt-12 space-y-8">
              <div className="border-l-2 border-sky-400 pl-5"><p className="font-mono text-xs text-gray-400 dark:text-gray-500">INPUT</p><p className="mt-2 text-xl font-black">Events, documents, tools, models</p></div>
              <div className="ml-8 border-l-2 border-violet-400 pl-5"><p className="font-mono text-xs text-gray-400 dark:text-gray-500">PLATFORM</p><p className="mt-2 text-xl font-black">Sena + Tracy + Atlas</p></div>
              <div className="ml-16 border-l-2 border-emerald-400 pl-5"><p className="font-mono text-xs text-gray-400 dark:text-gray-500">PRODUCTS</p><p className="mt-2 text-xl font-black">Clara + Riley for real work</p></div>
            </div>
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">For teams shipping agents</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 dark:text-white md:text-7xl">Move from demo reliability to production reliability.</h2>
            <p className="mt-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">Know what your agents did, why they did it, which sources they used, and what changed when a run failed.</p>
            {/* Social/project link disabled until a real public repository is available. */}
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 px-6 pb-8 pt-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/15 pb-16 md:grid-cols-[1.2fr_0.7fr_0.7fr_1fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Crumbles logo" width={40} height={40} className="h-10 w-10 rounded-xl object-contain" />
                <h2 className="font-brand text-3xl font-black">Crumbles</h2>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">Production infrastructure for AI agents.</p>
              {/* Social/contact buttons disabled until real destinations are available. */}
            </div>
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Explore</p><div className="mt-5 space-y-3 text-sm text-gray-300"><Link href="/products" className="block hover:text-white">Products</Link><Link href="/blogs" className="block hover:text-white">Lab notes</Link><Link href="/team" className="block hover:text-white">Team</Link><Link href="/careers" className="block hover:text-white">Careers</Link><Link href="/contact" className="block hover:text-white">Contact</Link></div></div>
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Focus</p><div className="mt-5 flex items-center gap-2 text-sm text-gray-300"><FiActivity className="text-emerald-300" /> Agent reliability</div><p className="mt-3 text-sm leading-relaxed text-gray-500">Observe every run. Ground every answer.</p></div>
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Products</p><p className="mt-5 text-sm leading-relaxed text-gray-400">Sena, Tracy, Atlas, Clara, and Riley.</p></div>
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Resources</p><div className="mt-5 space-y-3 text-sm text-gray-300"><Link href="/docs" className="block hover:text-white">Docs</Link><Link href="/pricing" className="block hover:text-white">Pricing</Link><Link href="/status" className="block hover:text-white">Status</Link><Link href="/security" className="block hover:text-white">Security</Link><Link href="/privacy" className="block hover:text-white">Privacy</Link><Link href="/terms" className="block hover:text-white">Terms</Link></div></div>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between"><span>© 2025 <span className="font-brand">Crumbles</span></span><span>Built to be inspected.</span></div>
        </div>
      </footer>
      <PantherMascot />
    </main>
  );
}

function FiArrowDown() {
  return <span aria-hidden="true">↓</span>;
}
