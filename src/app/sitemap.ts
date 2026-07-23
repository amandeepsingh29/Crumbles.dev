import type { MetadataRoute } from 'next';
import { getBlogs } from '@/data/blogs';
import { products } from '@/data/products';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/products', '/blogs', '/team', '/careers', '/contact', '/docs', '/pricing', '/status', '/security', '/privacy', '/terms', '/logo', '/tracey/docs', '/tracey/docs/getting-started', '/tracey/docs/concepts/agent-runs', '/tracey/docs/investigations', '/tracey/docs/remediation/approval', '/tracey/docs/integrations/signoz', '/tracey/docs/integrations/custom-otel', '/tracey/docs/security', '/tracey/docs/reference/otel-contract'].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const blogRoutes = getBlogs().map((blog) => ({
    url: `${siteUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}${product.link}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
