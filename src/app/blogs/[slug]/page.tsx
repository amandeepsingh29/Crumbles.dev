import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogs } from '@/data/blogs';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  return getBlogs().map((blog) => ({
    slug: blog.slug,
  }));
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogs().find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="relative z-10 min-h-screen px-6 pt-40 pb-32">
      <div className="max-w-3xl mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white/50 dark:border-gray-700/50">
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">{blog.date}</p>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight">{blog.title}</h1>
        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
          <MDXRemote source={blog.content} />
        </div>
      </div>
    </main>
  );
}
