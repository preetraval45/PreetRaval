'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Education', href: '/education', fullName: 'Education & Certifications' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Derive active item directly from pathname — no flash on refresh
  const activeItem = navItems.find(item =>
    item.href === '/' ? pathname === '/' : pathname === item.href
  )?.name ?? 'Home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-slate-800'
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50'
      }`}
    >
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0"
          >
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black gradient-text group-hover:scale-105 transition-transform duration-300">
              Preet Raval
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-2.5 lg:px-3 xl:px-4 py-2 rounded-lg text-xs lg:text-sm xl:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  activeItem === item.name
                    ? 'text-white bg-blue-600 dark:bg-blue-500 shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://docs.google.com/document/d/1ioMb8uVqeIjHxnpQzpUtR7N-LuIUneEkGHiLXTdbsDQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs lg:text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-md touch-manipulation active:scale-95"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 lg:hidden cursor-default"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu */}
          <div className="lg:hidden bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-xl max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto relative z-50">
            <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1.5 sm:space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 touch-manipulation ${
                    activeItem === item.name
                      ? 'text-white bg-blue-600 dark:bg-blue-500 shadow-md transform scale-100'
                      : 'text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.fullName || item.name}
                </Link>
              ))}
              <a
                href="https://docs.google.com/document/d/1ioMb8uVqeIjHxnpQzpUtR7N-LuIUneEkGHiLXTdbsDQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors touch-manipulation"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
