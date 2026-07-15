# Crumbles

Crumbles is a product website for AI agent infrastructure, built with Next.js. It presents the AI SRE control plane, the AI Knowledge Layer, supporting product surfaces, research notes, team, and open roles through a lightweight editorial interface.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Three.js / React Three Fiber for the sun and moon theme transition
- Local MDX content for lab notes
- Framer Motion for small interface transitions

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev       # start the development server
npm run lint      # run ESLint
npm run build     # create a production build
npm run start     # serve the production build
```

## Project structure

```text
src/app/             Routes, metadata, sitemap, robots, and OG image
src/components/      Navbar, theme provider, and theme transition canvas
src/data/             Products, team, careers, and blog data
content/blogs/       MDX lab notes
public/              Optimized images and favicon
```

Set `NEXT_PUBLIC_SITE_URL` when deploying to a different domain. It defaults to `https://www.crumbles.dev` and is used for canonical URLs, the sitemap, robots metadata, and Open Graph metadata.

## Content

Blog posts are `.mdx` files in `content/blogs/` with `title`, `date`, and `excerpt` frontmatter. Products, team members, and careers are currently maintained as typed local data files in `src/data/`.
