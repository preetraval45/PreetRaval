'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-2xl hover:shadow-purple-500/50 hover:scale-110 active:scale-95 transition-all duration-300 pulse-glow group"
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-500" />
        )}
        <div className="absolute inset-0 blur-xl bg-yellow-400/50 dark:bg-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
