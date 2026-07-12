import type { Metadata } from "next";
import { Nunito, Geist_Mono, DynaPuff } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dynaPuff = DynaPuff({
  variable: "--font-dynapuff",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import CrumbleCanvas from "@/components/CrumbleCanvas";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Crumbles",
  description: "Labs that build (& break) AI.",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Crumbles",
    title: "Crumbles",
    description: "Labs that build (& break) AI.",
    url: siteUrl,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Crumbles AI Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crumbles",
    description: "Labs that build (& break) AI.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${geistMono.variable} ${dynaPuff.variable} antialiased`}
    >
      <head>
        {/* Apply the saved/system theme before paint to avoid a flash of the
            wrong theme. Runs synchronously, before hydration. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex flex-col font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <CrumbleCanvas />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
