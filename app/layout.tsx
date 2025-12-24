import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Preet Raval - Full-Stack Developer & AI Specialist',
  description:
    'Professional portfolio of Preet Raval - Full-Stack Developer & AI Specialist specializing in Next.js, React, FastAPI, PostgreSQL, Docker, and AI integration. Based in Charlotte, NC.',
  keywords: [
    'Preet Raval',
    'Full-Stack Developer',
    'AI Specialist',
    'Next.js',
    'React',
    'FastAPI',
    'PostgreSQL',
    'Docker',
    'Charlotte NC',
    'Software Engineer',
  ],
  authors: [{ name: 'Preet Raval' }],
  openGraph: {
    title: 'Preet Raval - Full-Stack Developer & AI Specialist',
    description:
      'Professional portfolio showcasing enterprise-grade SaaS platforms, AI-powered automation systems, and innovative solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preet Raval - Full-Stack Developer & AI Specialist',
    description: 'Building innovative solutions with Next.js, AI, and modern tech stack',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
