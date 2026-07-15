import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

interface BusinessSection {
  title: string;
  body: string;
}

interface BusinessPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: BusinessSection[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function BusinessPage({ eyebrow, title, intro, sections, ctaLabel = 'Talk to the team', ctaHref = '/contact' }: BusinessPageProps) {
  return (
    <main className="relative z-10 min-h-screen bg-[#f4f1e8] px-6 pb-32 pt-32 text-gray-950 dark:bg-gray-950 dark:text-white md:pt-40">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-5xl border-b border-gray-950/15 pb-16 dark:border-white/15 md:pb-20">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.28em] text-sky-500 dark:text-sky-300">{eyebrow}</p>
          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.04em] text-gray-950 dark:text-white md:text-8xl">{title}</h1>
          <p className="mt-10 max-w-3xl text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">{intro}</p>
          <Link href={ctaHref} className="mt-10 inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 text-sm font-black text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-gray-950">{ctaLabel} <FiArrowUpRight /></Link>
        </header>

        <div className="grid gap-6 pt-14 md:grid-cols-2 md:pt-20">
          {sections.map((section, index) => (
            <article key={section.title} className="border-t border-gray-950/15 pt-6 dark:border-white/15 md:p-8 md:pt-6">
              <p className="font-mono text-sm text-gray-400">0{index + 1}</p>
              <h2 className="mt-10 text-2xl font-black text-gray-950 dark:text-white md:text-3xl">{section.title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
