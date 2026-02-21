import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
          Page Not Found
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Looks like this page doesn&apos;t exist. Maybe it was moved, or you followed a broken link.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
