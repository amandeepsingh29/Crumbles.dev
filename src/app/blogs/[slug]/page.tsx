import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { FiArrowLeft, FiArrowUpRight, FiClock, FiHash } from 'react-icons/fi';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogs } from '@/data/blogs';

export async function generateStaticParams() {
  return getBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogs().find((b) => b.slug === slug);
  if (!blog) return { title: 'Not Found' };

  return {
    title: `${blog.title} | Crumbles`,
    description: blog.excerpt,
    alternates: { canonical: `/blogs/${blog.slug}` },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `/blogs/${blog.slug}`,
      images: ['/opengraph-image'],
    },
  };
}

function getReadTime(content: string) {
  return `${Math.max(1, Math.ceil(content.split(/\s+/).length / 200))} min read`;
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getHeadings(content: string) {
  return (content.match(/^##\s+.+$/gm) || []).map((heading) => {
    const title = heading.replace(/^##\s+/, '').trim();
    return { title, id: slugify(title) };
  });
}

const mdxComponents = {
  h1: () => null,
  h2: ({ children }: { children?: ReactNode }) => {
    const title = String(children);
    return <h2 id={slugify(title)} className="scroll-mt-32 pt-10 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white md:text-4xl">{children}</h2>;
  },
  h3: ({ children }: { children?: ReactNode }) => <h3 className="pt-6 text-2xl font-black tracking-tight text-gray-950 dark:text-white">{children}</h3>,
  p: ({ children }: { children?: ReactNode }) => <p className="text-lg leading-[1.85] text-gray-700 dark:text-gray-300">{children}</p>,
  ul: ({ children }: { children?: ReactNode }) => <ul className="space-y-3 pl-6 text-lg leading-relaxed text-gray-700 marker:text-violet-500 dark:text-gray-300">{children}</ul>,
  ol: ({ children }: { children?: ReactNode }) => <ol className="space-y-3 pl-6 text-lg leading-relaxed text-gray-700 marker:font-black marker:text-violet-500 dark:text-gray-300">{children}</ol>,
  li: ({ children }: { children?: ReactNode }) => <li className="pl-2">{children}</li>,
  blockquote: ({ children }: { children?: ReactNode }) => <blockquote className="my-10 border-l-4 border-violet-400 bg-violet-50/70 px-6 py-5 text-xl font-bold leading-relaxed text-gray-900 dark:bg-violet-950/30 dark:text-gray-100">{children}</blockquote>,
  strong: ({ children }: { children?: ReactNode }) => <strong className="font-black text-gray-950 dark:text-white">{children}</strong>,
  a: ({ children, href }: { children?: ReactNode; href?: string }) => <a href={href} className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 transition-colors hover:text-violet-500 dark:text-violet-300">{children}</a>,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogs().find((b) => b.slug === slug);

  if (!blog) notFound();

  const headings = getHeadings(blog.content);
  const blogIndex = getBlogs().findIndex((item) => item.slug === blog.slug) + 1;

  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-6 pb-32 pt-32 text-gray-950 dark:bg-gray-950 dark:text-white md:pt-40">
      <div className="mx-auto max-w-7xl">
        <Link href="/blogs" className="group inline-flex items-center gap-2 text-sm font-black text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" /> Back to lab notes
        </Link>

        <header className="mt-12 border-b border-gray-950/15 pb-14 dark:border-white/15 md:mt-16 md:pb-20">
          <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-black uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2 text-violet-700 dark:text-violet-300"><FiHash /> Field note {String(blogIndex).padStart(2, '0')}</span>
            <span className="h-1 w-1 rounded-full bg-gray-400" />
            <span>{blog.date}</span>
            <span className="h-1 w-1 rounded-full bg-gray-400" />
            <span className="flex items-center gap-2"><FiClock /> {getReadTime(blog.content)}</span>
          </div>
          <h1 className="max-w-6xl text-5xl font-black leading-[0.92] tracking-[-0.07em] text-gray-950 dark:text-white md:text-8xl lg:text-[7.5rem]">{blog.title}</h1>
          <p className="mt-10 max-w-3xl text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">{blog.excerpt}</p>
        </header>

        <div className="grid gap-14 pt-14 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-24 lg:pt-20">
          <article className="min-w-0">
            <div className="mb-10 flex items-center justify-between border-y border-gray-950/15 py-4 text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:border-white/15 dark:text-gray-400">
              <span><span className="font-dynapuff">Crumbles</span> research</span>
              <span>Read slowly</span>
            </div>
            <div className="space-y-6">
              <MDXRemote source={blog.content} components={mdxComponents} />
            </div>
            <div className="mt-16 flex items-center justify-between border-t border-gray-950/15 pt-8 dark:border-white/15">
              <span className="text-sm font-bold text-gray-500 dark:text-gray-400">End of dispatch</span>
              <Link href="/blogs" className="group inline-flex items-center gap-2 text-sm font-black text-gray-950 dark:text-white">More notes <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
            </div>
          </article>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-3xl border border-gray-950/10 bg-white/65 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-700 dark:text-violet-300">In this note</p>
              {headings.length > 0 ? (
                <nav className="mt-5 space-y-4" aria-label="Article sections">
                  {headings.map((heading, index) => (
                    <a key={heading.id} href={`#${heading.id}`} className="group flex gap-3 text-sm font-bold leading-snug text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
                      <span className="font-mono text-xs text-gray-400">0{index + 1}</span>
                      <span>{heading.title}</span>
                    </a>
                  ))}
                </nav>
              ) : (
                <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">A short field note from the Crumbles lab.</p>
              )}
            </div>
            <div className="mt-5 border-l-2 border-yellow-400 pl-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              We publish the useful parts, including the failures that got us there.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
