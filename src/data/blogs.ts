import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content/blogs');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const getBlogs = (): BlogPost[] => {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir);
  const blogs = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace('.mdx', ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
      };
    });

  // Newest first.
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
