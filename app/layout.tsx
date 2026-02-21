import type { Metadata } from 'next';
import { Poppins, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
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
  title: 'Preet Raval - Software Engineer | Full-Stack & AI',
  description:
    'Portfolio of Preet Raval — Software Engineer specializing in full-stack development, AI integration, and enterprise SaaS platforms. B.S. Computer Science, UNC Charlotte. Open to full-time roles. Based in Charlotte, NC.',
  keywords: [
    'Preet Raval',
    'Software Engineer',
    'Full-Stack Developer',
    'AI Engineer',
    'Next.js Developer',
    'React',
    'FastAPI',
    'PostgreSQL',
    'Docker',
    'TypeScript',
    'Python',
    'Charlotte NC',
    'UNC Charlotte',
    'UNCC',
    'Computer Science',
    'SSO',
    'Enterprise SaaS',
    'AI Integration',
    'LLM',
    'Open to Work',
  ],
  authors: [{ name: 'Preet Raval' }],
  openGraph: {
    title: 'Preet Raval - Software Engineer | Full-Stack & AI',
    description:
      'Portfolio of Preet Raval — Software Engineer building enterprise SaaS platforms, AI automation systems, and scalable full-stack applications. Open to full-time opportunities.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preet Raval - Software Engineer | Full-Stack & AI',
    description:
      'Software Engineer specializing in Next.js, FastAPI, AI integration, and enterprise platforms. Open to full-time roles.',
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
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
