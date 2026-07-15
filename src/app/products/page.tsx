import Link from 'next/link';
import type { Metadata } from 'next';
import { FiArrowUpRight, FiGithub, FiLayers } from 'react-icons/fi';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products | Crumbles',
  description: 'AI SRE and knowledge infrastructure for teams running agents in production.',
  alternates: { canonical: '/products' },
  openGraph: { title: 'Products | Crumbles', description: 'AI SRE and knowledge infrastructure for teams running agents in production.', url: '/products', images: ['/opengraph-image'] },
};

const statusStyles: Record<string, string> = {
  Platform: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
  'SaaS product': 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
  Beta: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
  'Early Access': 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  'Internal Testing': 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300',
  'Research Phase': 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
};

export default function ProductsPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-6 pb-32 pt-32 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-10 border-b border-gray-900/15 pb-16 dark:border-white/15 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">
              <span className="h-2 w-2 rounded-full bg-sky-500" /> 01 / Agent infrastructure
            </p>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-gray-950 dark:text-white md:text-8xl">
              The stack for <span className="text-sky-500">reliable agents.</span>
            </h1>
          </div>
          <div className="max-w-sm lg:justify-self-end">
            <p className="text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
              Three platform systems and two full-stack agent products for teams building on top of existing software.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm font-bold text-gray-500 dark:text-gray-400">
              <FiLayers className="text-sky-500" /> 03 platform systems / 02 SaaS products
            </div>
          </div>
        </header>

        <div className="mt-10">
          {products.map((product, index) => {
            const isLive = product.link !== '#';
            const content = (
              <div className="group grid gap-6 border-b border-gray-900/15 py-8 transition-colors hover:bg-white/60 dark:border-white/15 dark:hover:bg-white/[0.04] md:grid-cols-[72px_minmax(0,1fr)_auto] md:items-center md:px-5">
                <span className="font-mono text-sm text-gray-400">0{index + 1}</span>
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white md:text-3xl">{product.title}</h2>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">{product.category}</span>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${statusStyles[product.status] || statusStyles.Beta}`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">{product.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-black text-gray-700 dark:text-gray-300 md:justify-self-end">
                  {isLive ? <FiGithub /> : <span className="text-gray-400">Soon</span>}
                  <span>{isLive ? 'Open product' : 'Building'}</span>
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            );

            return isLive ? (
              <Link key={product.title} href={product.link} target="_blank" rel="noopener noreferrer" className="block">
                {content}
              </Link>
            ) : (
              <div key={product.title}>{content}</div>
            );
          })}
        </div>

        <footer className="mt-12 flex flex-col gap-4 text-sm text-gray-500 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
          <span>Built for teams shipping agents.</span>
          <Link href="/careers" className="font-black text-gray-900 hover:text-sky-500 dark:text-white dark:hover:text-sky-300">Build the next layer <FiArrowUpRight className="ml-1 inline" /></Link>
        </footer>
      </div>
    </main>
  );
}
