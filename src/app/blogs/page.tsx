import Link from 'next/link';
import type { Metadata } from 'next';
import { FiArrowUpRight, FiClock } from 'react-icons/fi';
import { getBlogs } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'Lab Notes | Crumbles',
  description: 'Technical notes on operating AI agents, evaluating failures, and building reliable context systems.',
  alternates: { canonical: '/blogs' },
  openGraph: { title: 'Engineering Notes | Crumbles', description: 'Technical notes on operating AI agents, evaluating failures, and building reliable context systems.', url: '/blogs', images: ['/opengraph-image'] },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getReadTime(content: string) {
  return `${Math.max(1, Math.ceil(content.split(/\s+/).length / 200))} min read`;
}

export default function BlogsPage() {
  const blogs = getBlogs();
  const [featured, ...archive] = blogs;

  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-6 pb-32 pt-32 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 flex flex-col gap-8 border-b border-gray-900/15 pb-10 md:flex-row md:items-end md:justify-between dark:border-white/15">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">02 / Field notes</p>
            <h1 className="text-7xl font-black leading-[0.88] tracking-[-0.03em] text-gray-950 dark:text-white md:text-9xl lg:text-[10.5rem]">Lab notes.</h1>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-gray-600 dark:text-gray-400">Technical notes on operating AI agents, evaluating failures, and building reliable context systems.</p>
        </header>

        {featured ? (
          <Link href={`/blogs/${featured.slug}`} className="group block">
            <article className="relative overflow-hidden rounded-[2rem] bg-gray-950 p-8 text-white shadow-2xl md:p-14">
              <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl transition-transform duration-500 group-hover:scale-125" />
              <div className="relative max-w-3xl">
                <div className="mb-16 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                  <span className="text-sky-300">Featured dispatch</span>
                  <span>{formatDate(featured.date)}</span>
                  <span className="flex items-center gap-1"><FiClock /> {getReadTime(featured.content)}</span>
                </div>
                <h2 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-7xl">{featured.title}</h2>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">{featured.excerpt}</p>
                <span className="mt-12 inline-flex items-center gap-2 font-black text-sky-300">Read the dispatch <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </div>
            </article>
          </Link>
        ) : (
          <p className="py-20 text-gray-500">No lab notes yet.</p>
        )}

        {archive.length > 0 && (
          <section className="mt-20">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">Archive</h2>
              <span className="font-mono text-xs text-gray-400">{String(archive.length).padStart(2, '0')} entries</span>
            </div>
            <div className="border-t border-gray-900/15 dark:border-white/15">
              {archive.map((blog, index) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group grid gap-4 border-b border-gray-900/15 py-7 transition-colors hover:bg-white/70 md:grid-cols-[72px_1fr_auto] md:items-center md:px-4 dark:border-white/15 dark:hover:bg-white/[0.04]">
                  <span className="font-mono text-sm text-gray-400">0{index + 2}</span>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-gray-950 group-hover:text-sky-500 dark:text-white dark:group-hover:text-sky-300">{blog.title}</h3>
                    <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-400">{blog.excerpt}</p>
                  </div>
                  <span className="flex items-center gap-3 text-sm font-bold text-gray-500 dark:text-gray-400"><span>{formatDate(blog.date)}</span><FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
