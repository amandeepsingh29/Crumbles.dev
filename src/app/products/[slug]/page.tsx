import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { FiActivity, FiArrowLeft, FiArrowUpRight, FiCheck, FiShield } from 'react-icons/fi';
import { products } from '@/data/products';
import TraceyProductPage from '@/components/TraceyProductPage';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: 'Product not found | Crumbles' };

  return {
    title: `${product.title} | Crumbles`,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.title} | Crumbles`,
      description: product.description,
      url: `/products/${product.slug}`,
      images: ['/opengraph-image'],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const detail = product.detail;

  if (product.slug === 'tracey') return <TraceyProductPage product={product} />;

  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-6 pb-24 pt-28 text-gray-950 dark:bg-gray-950 dark:text-white md:pt-32">
      <div className="mx-auto max-w-7xl">
        <Link href="/products" className="group inline-flex items-center gap-2 text-sm font-black text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" /> Back to products
        </Link>

        <header className="mt-8 max-w-5xl border-b border-gray-950/15 pb-10 dark:border-white/15 md:mt-10 md:pb-14">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-sky-500 dark:text-sky-300">{product.category} / {product.status}</p>
          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.04em] text-gray-950 dark:text-white md:text-8xl">{product.title}</h1>
          <p className="mt-7 max-w-3xl text-2xl font-medium leading-relaxed text-gray-600 dark:text-gray-300">{product.promise}</p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href={`mailto:team@crumbles.dev?subject=${encodeURIComponent(`Request access: ${product.title}`)}`} className="inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-gray-950">
              Request access <FiArrowUpRight />
            </a>
            {product.slug === 'tracey' && <Link href="/tracey/docs" className="inline-flex items-center gap-2 text-sm font-black text-sky-600 hover:text-sky-500 dark:text-sky-300">Read the docs <FiArrowUpRight /></Link>}
          </div>
        </header>

        {detail && (
          <>
            <section className="grid gap-7 border-b border-gray-950/15 py-9 dark:border-white/15 md:grid-cols-3 md:py-14">
              <div className="md:col-span-2">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 dark:text-sky-300">{detail.label}</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-gray-950 dark:text-white md:text-6xl">{detail.headline}</h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">{detail.body}</p>
              </div>
              <div className="rounded-3xl border border-gray-950/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"><FiActivity className="text-sky-500" /> Signals in every run</div>
                <ul className="mt-5 space-y-3">
                  {detail.signals.map((signal) => <li key={signal} className="flex gap-3 text-sm font-bold leading-relaxed text-gray-700 dark:text-gray-300"><FiCheck className="mt-1 shrink-0 text-sky-500" />{signal}</li>)}
                </ul>
              </div>
            </section>

            <section className="border-b border-gray-950/15 py-9 dark:border-white/15 md:py-14">
              <div className="mb-7 flex items-end justify-between gap-6">
                <div><p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 dark:text-sky-300">The Tracey loop</p><h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white md:text-5xl">From signal to safe fix.</h2></div>
                <FiShield className="hidden text-4xl text-sky-500 md:block" />
              </div>
              <div className="grid gap-px overflow-hidden rounded-3xl border border-gray-950/10 bg-gray-950/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-3">
                {detail.workflow.map((item) => <div key={item.step} className="bg-[#f4f1e8] p-6 dark:bg-gray-950 md:p-7"><p className="font-mono text-xs font-bold text-sky-500">{item.step}</p><h3 className="mt-6 text-xl font-black text-gray-950 dark:text-white">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.body}</p></div>)}
              </div>
            </section>

            <section className="border-b border-gray-950/15 py-9 dark:border-white/15 md:py-14">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 dark:text-sky-300">One operating surface</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white md:text-5xl">Observe. Investigate. Act. Verify.</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Tracey connects agent telemetry, observability data, and Kubernetes state so operators can move from a failed run to a verified recovery without switching between disconnected systems.</p>
              </div>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {detail.pillars.map((pillar, index) => (
                  <article key={pillar.title} className="rounded-3xl border border-gray-950/10 bg-white/60 p-7 dark:border-white/10 dark:bg-white/[0.04] md:p-9">
                    <div className="flex items-center justify-between"><span className="font-mono text-xs font-bold text-sky-500">0{index + 1}</span><span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">{pillar.title}</span></div>
                    <p className="mt-5 text-xl font-black leading-tight text-gray-950 dark:text-white">{pillar.body}</p>
                    <ul className="mt-5 space-y-2 border-t border-gray-950/10 pt-4 dark:border-white/10">
                      {pillar.items.map((item) => <li key={item} className="text-sm font-bold text-gray-600 dark:text-gray-400">{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-8 border-b border-gray-950/15 py-9 dark:border-white/15 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 md:py-14">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 dark:text-sky-300">Control by design</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white md:text-5xl">AI can prepare the change. Policy decides if it ships.</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Tracey keeps model intelligence and infrastructure authority separate. No mode gives the model a shell or unrestricted cloud credentials.</p>
              </div>
              <div className="space-y-3">
                {detail.modes.map((mode, index) => <div key={mode.name} className="flex gap-5 border-b border-gray-950/10 py-4 dark:border-white/10"><span className="font-mono text-xs font-bold text-gray-400">0{index + 1}</span><div><h3 className="font-black text-gray-950 dark:text-white">{mode.name}</h3><p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{mode.body}</p></div></div>)}
              </div>
            </section>

            <section className="border-b border-gray-950/15 py-9 dark:border-white/15 md:py-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 dark:text-sky-300">The boundary</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white md:text-5xl">Evidence, not confident guesses.</h2>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Tracey separates observed facts, deterministic calculations, and hypotheses that need more evidence. Raw traces stay in SigNoz; Tracey adds the semantic and control layer above them.</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {detail.principles.map((principle) => <li key={principle} className="rounded-2xl bg-gray-950 p-5 text-sm font-bold leading-relaxed text-white dark:bg-white dark:text-gray-950">{principle}</li>)}
                </ul>
              </div>
            </section>

            <section className="border-b border-gray-950/15 py-9 dark:border-white/15 md:py-14">
              <div className="mb-7 max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 dark:text-sky-300">Connect what you already use</p><h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white md:text-5xl">Independent agents. Shared reliability workflow.</h2></div>
              <div className="grid gap-px overflow-hidden rounded-3xl border border-gray-950/10 bg-gray-950/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-2">
                {detail.integrations.map((integration) => <div key={integration.name} className="bg-[#f4f1e8] p-6 dark:bg-gray-950 md:p-7"><h3 className="text-xl font-black text-gray-950 dark:text-white">{integration.name}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{integration.body}</p></div>)}
              </div>
            </section>

            <section className="py-9 md:py-14">
              <div className="mb-7"><p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 dark:text-sky-300">Questions operators ask</p><h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white md:text-5xl">Clear boundaries, clear answers.</h2></div>
              <div className="divide-y divide-gray-950/10 border-y border-gray-950/10 dark:divide-white/10 dark:border-white/10">
                {detail.faqs.map((faq) => <details key={faq.question} className="group py-4"><summary className="cursor-pointer list-none pr-8 text-lg font-black text-gray-950 marker:hidden dark:text-white">{faq.question}<span className="float-right text-sky-500 transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600 dark:text-gray-400">{faq.answer}</p></details>)}
              </div>
            </section>
          </>
        )}

        {product.slug !== 'tracey' && (
          <div className="grid gap-14 pt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:pt-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">What it does</p>
            <p className="mt-6 text-2xl font-black leading-tight text-gray-950 dark:text-white">{product.description}</p>
          </aside>

          <section>
            <div className="mb-6 border-b border-gray-950/15 pb-5 dark:border-white/15">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 dark:text-sky-300">Core capabilities</p>
            </div>
            <ul className="divide-y divide-gray-950/15 border-y border-gray-950/15 dark:divide-white/15 dark:border-white/15">
              {product.capabilities.map((capability, index) => (
                <li key={capability} className="flex items-center gap-5 py-6 text-xl font-bold text-gray-800 dark:text-gray-200">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"><FiCheck /></span>
                  <span><span className="mr-4 font-mono text-xs text-gray-400">0{index + 1}</span>{capability}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 rounded-3xl bg-gray-950 p-8 text-white dark:bg-white dark:text-gray-950 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-300 dark:text-sky-600">{product.slug === 'tracey' ? 'Start with one agent' : 'Built on the Crumbles layer'}</p>
              <p className="mt-5 max-w-2xl text-xl font-bold leading-relaxed">{product.slug === 'tracey' ? 'Connect your existing agent stack and get a complete view of production behavior before you change the system.' : 'Every product connects to the same reliability, observability, and knowledge primitives, so teams can add autonomy without losing control.'}</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-sky-300 dark:text-sky-600">Talk to the team <FiArrowUpRight /></Link>
            </div>
          </section>
          </div>
        )}
      </div>
    </main>
  );
}
