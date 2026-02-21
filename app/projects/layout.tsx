import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects – Preet Raval | Software Engineer',
  description:
    'Featured projects by Preet Raval — NEXUS traveler management system, ACI Forge enterprise SaaS, ACI ChatGPT AI assistant, YUGMASTRA fraud detection, Supply Chain Intelligence, NeuroSmriti AI research, and more.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
