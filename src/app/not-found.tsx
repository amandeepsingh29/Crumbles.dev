import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-white/30 backdrop-blur-md p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white/50 max-w-2xl w-full">
        <h1 className="text-8xl font-black mb-4 text-coral">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Crumbled</h2>
        <p className="text-xl text-gray-600 mb-10 font-medium">
          The requested page broke our system and disintegrated into particles. Let&apos;s get you back to safety.
        </p>
        <Link href="/" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl">
          Return to Lab
        </Link>
      </div>
    </main>
  );
}
