import Link from 'next/link';
import { ArrowLeft, Briefcase, FolderOpen, Mail } from 'lucide-react';

const quickLinks = [
  { href: '/projects', icon: FolderOpen, label: 'Projects' },
  { href: '/experience', icon: Briefcase, label: 'Experience' },
  { href: '/contact', icon: Mail, label: 'Contact' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="text-8xl sm:text-9xl font-black bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 bg-clip-text text-transparent select-none">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
            Page not found
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Looks like this page doesn&apos;t exist. Maybe it was moved, or you followed a broken link.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="pt-2">
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-widest font-semibold">Or jump to</p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
