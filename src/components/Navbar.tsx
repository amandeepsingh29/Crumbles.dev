'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between rounded-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50'
          : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-white/40 dark:border-gray-700/40'
      } px-6 py-3`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setIsOpen(false)}>
          <Image src="/logo.png" alt="Crumbles Logo" width={36} height={36} style={{ width: 36, height: 36 }} className="rounded-lg object-contain" />
          <span className="font-brand text-xl font-black tracking-tight text-gray-900 dark:text-white hidden sm:inline">
            Crumbles
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    isActive(link.href)
                      ? 'w-full bg-sky-500'
                      : 'w-0 bg-gradient-to-r from-sky-400 to-cyan-500 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <FiMoon className="text-gray-700 dark:text-gray-300" size={20} />
            ) : (
              <FiSun className="text-gray-700 dark:text-gray-300" size={20} />
            )}
          </button>

        </div>

        {/* Mobile Theme & Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <FiMoon size={20} />
            ) : (
              <FiSun size={20} />
            )}
          </button>
          <button
            className="md:hidden p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="flex flex-col gap-2 mb-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-sm ${
                    isActive(link.href)
                      ? 'bg-sky-100 dark:bg-sky-900/30 text-sky-900 dark:text-sky-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
