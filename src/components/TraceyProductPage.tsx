import Link from 'next/link';
import type { ReactNode } from 'react';
import { FiActivity, FiArrowDown, FiArrowUpRight, FiCheck, FiChevronRight, FiClock, FiCpu, FiLock, FiPlay } from 'react-icons/fi';
import type { Product } from '@/data/products';

interface TraceyProductPageProps {
  product: Product;
}

const integrations = ['SigNoz', 'Kubernetes', 'OpenTelemetry', 'Codex', 'Claude Code', 'MCP'];

function RunVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-gray-950/10 bg-white/75 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.05] md:p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400" />
      <div className="flex items-center justify-between border-b border-gray-950/10 pb-4 dark:border-white/10">
        <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" /><span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Sample run / telemetry schema</span></div>
        <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-sky-700 dark:bg-sky-950 dark:text-sky-300">evidence ready</span>
      </div>
      <div className="grid gap-3 py-5 sm:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl bg-gray-950 p-4 text-white dark:bg-black">
          <div className="mb-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-sky-300"><FiActivity /> execution trace</div>
          <div className="space-y-3 font-mono text-[11px]">
            <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-sky-400" /><span className="text-gray-300">agent.run</span><span className="ml-auto text-gray-500">root</span></div>
            <div className="ml-4 border-l border-sky-500/40 pl-4"><div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-violet-400" /><span className="text-gray-300">gen_ai.chat</span><span className="ml-auto text-gray-500">model</span></div></div>
            <div className="ml-4 border-l border-sky-500/40 pl-4"><div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-400" /><span className="text-gray-300">retrieval.query</span><span className="ml-auto text-gray-500">context</span></div></div>
            <div className="ml-4 border-l border-sky-500/40 pl-4"><div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="text-gray-300">tool.call</span><span className="ml-auto text-gray-500">action</span></div></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl border border-gray-950/10 bg-[#f4f1e8] p-4 dark:border-white/10 dark:bg-gray-950"><div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-gray-400"><FiClock /> latency</div><p className="mt-3 text-2xl font-black text-gray-950 dark:text-white">Trace data</p><p className="mt-1 text-xs font-bold text-sky-600">measured per run</p></div>
          <div className="rounded-2xl border border-gray-950/10 bg-[#f4f1e8] p-4 dark:border-white/10 dark:bg-gray-950"><div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-gray-400"><FiCpu /> model cost</div><p className="mt-3 text-2xl font-black text-gray-950 dark:text-white">Token data</p><p className="mt-1 text-xs font-bold text-sky-600">emitted by the agent</p></div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-950/10 pt-4 text-[10px] font-black uppercase tracking-[0.16em] text-gray-400 dark:border-white/10"><span>Evidence attached</span><span className="flex items-center gap-1 text-sky-600 dark:text-sky-300">Open investigation <FiChevronRight /></span></div>
    </div>
  );
}

function MediaSlot({ label, children }: { label: string; children: ReactNode }) {
  return <div className="relative min-h-64 overflow-hidden rounded-[2rem] bg-gray-950 p-6 text-white dark:bg-black md:min-h-80 md:p-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.3),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.25),transparent_38%)]" /><div className="relative flex h-full min-h-52 flex-col justify-between"><div className="flex items-center justify-between"><span className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-sky-200">{label}</span><FiPlay className="text-sky-300" /></div>{children}</div></div>;
}

export default function TraceyProductPage({ product }: TraceyProductPageProps) {
  if (!product.detail) return null;
  const detail = product.detail;

  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-[#f4f1e8] px-5 pb-24 pt-28 text-gray-950 dark:bg-gray-950 dark:text-white md:px-8 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between text-sm font-bold text-gray-500 dark:text-gray-400">
          <Link href="/products" className="group inline-flex items-center gap-2 transition-colors hover:text-gray-950 dark:hover:text-white"><span className="transition-transform group-hover:-translate-x-1">←</span> All products</Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">Tracey / 01</span>
        </div>

        <section className="grid gap-12 border-b border-gray-950/10 pb-14 pt-16 dark:border-white/10 md:gap-16 md:pb-20 md:pt-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300"><span className="h-2 w-2 rounded-full bg-sky-500" /> AI SRE / observability</div>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.86] tracking-[-0.07em] text-gray-950 dark:text-white md:text-8xl lg:text-[7.5rem]">Production agents, <span className="text-sky-500">with evidence.</span></h1>
            <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">{detail.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5"><a href="mailto:team@crumbles.dev?subject=Request%20access%20to%20Tracey" className="inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-gray-950">Get started <FiArrowUpRight /></a><Link href="/tracey/docs/getting-started" className="inline-flex items-center gap-2 text-sm font-black text-sky-700 dark:text-sky-300">Read the docs <FiArrowUpRight /></Link></div>
          </div>
          <RunVisual />
        </section>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-gray-950/10 py-6 text-xs font-black uppercase tracking-[0.18em] text-gray-400 dark:border-white/10 md:gap-x-12"><span className="text-gray-500 dark:text-gray-300">Works with</span>{integrations.map((integration) => <span key={integration}>{integration}</span>)}</div>

        <section className="grid gap-10 border-b border-gray-950/10 py-16 dark:border-white/10 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><p className="text-xs font-black uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">The operating problem</p><h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-gray-950 dark:text-white md:text-6xl">Your agents are running. Their failures should not be a mystery.</h2></div>
          <div><p className="max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">Traditional observability shows spans and charts. Tracey connects model decisions, tool calls, side effects, infrastructure dependencies, and user outcomes into one operational explanation.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{['Which agent failed?', 'What changed before it?', 'Which dependency is slow?', 'Did recovery actually work?'].map((question) => <div key={question} className="flex items-center gap-3 rounded-2xl border border-gray-950/10 bg-white/55 p-4 text-sm font-black text-gray-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200"><FiCheck className="text-sky-500" />{question}</div>)}</div></div>
        </section>

        <section className="border-b border-gray-950/10 py-16 dark:border-white/10 md:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">One reliability loop</p><h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-gray-950 dark:text-white md:text-6xl">From signal to safe fix.</h2></div><FiArrowDown className="hidden text-3xl text-sky-500 md:block" /></div>
          <div className="grid gap-4 md:grid-cols-3">{detail.workflow.map((item) => <article key={item.step} className="group rounded-[2rem] border border-gray-950/10 bg-white/55 p-7 transition-transform hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04] md:p-9"><span className="font-mono text-xs font-bold text-sky-500">{item.step}</span><h3 className="mt-12 text-2xl font-black text-gray-950 dark:text-white">{item.title}</h3><p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">{item.body}</p><FiArrowUpRight className="mt-10 text-sky-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></article>)}</div>
        </section>

        <section className="grid gap-6 border-b border-gray-950/10 py-16 dark:border-white/10 md:py-24 lg:grid-cols-2">
          <MediaSlot label="Observe / live runs"><div><p className="max-w-md text-3xl font-black leading-tight md:text-4xl">See every prompt, model call, tool, handoff, and outcome in context.</p><p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-300">A replaceable media slot for an approved Tracey product demo.</p></div></MediaSlot>
          <MediaSlot label="Recover / verified changes"><div><p className="max-w-md text-3xl font-black leading-tight md:text-4xl">A change is not successful until production health proves it.</p><p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-300">Show the policy, approval, execution, verification, and rollback timeline.</p></div></MediaSlot>
        </section>

        <section className="grid gap-10 border-b border-gray-950/10 py-16 dark:border-white/10 md:py-24 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div><p className="text-xs font-black uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">Control by design</p><h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-gray-950 dark:text-white md:text-6xl">AI can prepare the change. Policy decides if it ships.</h2><p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Tracey keeps model intelligence and infrastructure authority separate, with approval-first controls and evidence-bound recovery.</p></div>
          <div className="space-y-3">{detail.modes.map((mode, index) => <div key={mode.name} className="flex gap-5 border-b border-gray-950/10 py-5 dark:border-white/10"><span className="font-mono text-xs font-bold text-gray-400">0{index + 1}</span><div><h3 className="font-black text-gray-950 dark:text-white">{mode.name}</h3><p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{mode.body}</p></div></div>)}</div>
        </section>

        <section className="grid gap-10 border-b border-gray-950/10 py-16 dark:border-white/10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
          <div className="rounded-[2rem] bg-gray-950 p-6 text-white dark:bg-black md:p-8"><div className="mb-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-sky-300"><FiLock /> Evidence boundary</div><div className="grid gap-3 sm:grid-cols-2">{detail.principles.slice(0, 4).map((principle) => <div key={principle} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm font-bold leading-relaxed text-gray-200">{principle}</div>)}</div></div>
          <div><p className="text-xs font-black uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">Built for real agent operations</p><h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-gray-950 dark:text-white md:text-6xl">Make failure a workflow, not a surprise.</h2><p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Raw telemetry stays in SigNoz. Agents stay independently deployed. Tracey owns the semantic investigation, policy, controlled execution, and verification layer above them.</p><Link href="/tracey/docs" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-sky-700 dark:text-sky-300">Explore Tracey docs <FiArrowUpRight /></Link></div>
        </section>

      </div>
    </main>
  );
}
