import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { FiArrowLeft, FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { products } from '@/data/products';

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

  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-6 pb-32 pt-32 text-gray-950 dark:bg-gray-950 dark:text-white md:pt-40">
      <div className="mx-auto max-w-7xl">
        <Link href="/products" className="group inline-flex items-center gap-2 text-sm font-black text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" /> Back to products
        </Link>

        <header className="mt-12 max-w-5xl border-b border-gray-950/15 pb-16 dark:border-white/15 md:mt-16 md:pb-20">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.28em] text-sky-500 dark:text-sky-300">{product.category} / {product.status}</p>
          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.04em] text-gray-950 dark:text-white md:text-8xl">{product.title}</h1>
          <p className="mt-10 max-w-3xl text-2xl font-medium leading-relaxed text-gray-600 dark:text-gray-300">{product.promise}</p>
          <a href={`mailto:team@crumbles.dev?subject=${encodeURIComponent(`Request access: ${product.title}`)}`} className="mt-10 inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-gray-950">
            Request access <FiArrowUpRight />
          </a>
        </header>

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
              <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-300 dark:text-sky-600">Built on the Crumbles layer</p>
              <p className="mt-5 max-w-2xl text-xl font-bold leading-relaxed">Every product connects to the same reliability, observability, and knowledge primitives, so teams can add autonomy without losing control.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-sky-300 dark:text-sky-600">Talk to the team <FiArrowUpRight /></Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
