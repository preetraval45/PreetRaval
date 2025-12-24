import type { Metadata } from 'next';
import { Poppins, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Footer } from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
});

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
      <body className={`${poppins.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
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
