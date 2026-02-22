import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Preet Raval — Software Engineer at American Circuits Inc., Full-Stack Developer specializing in Next.js, FastAPI, AI integration, and enterprise SaaS. B.A. Computer Science, UNC Charlotte. Open to full-time roles.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
