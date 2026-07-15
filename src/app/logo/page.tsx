import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Crumbles logo",
  description: "The Crumbles brand mark and wordmark.",
  alternates: { canonical: "/logo" },
  openGraph: {
    title: "Crumbles logo",
    description: "The Crumbles brand mark and wordmark.",
    url: "/logo",
  },
};

export default function LogoPage() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-1 items-center justify-center px-6 py-20 sm:px-10">
      <section className="flex w-full flex-col items-center justify-center px-8 py-20 text-center sm:px-16 sm:py-28">
        <Image
          src="/logo-page.png"
          alt="Crumbles logo mark"
          width={360}
          height={360}
          priority
          className="logo-page-mark animate-logo-spin object-contain"
        />
        <h1 className="font-brand mt-10 text-6xl font-black tracking-tight text-gray-950 dark:text-white sm:text-8xl">
          Crumbles
        </h1>
        <p className="mt-5 max-w-md text-base text-gray-600 dark:text-gray-300 sm:text-lg">
          The operating layer for production AI agents.
        </p>
      </section>
    </main>
  );
}
