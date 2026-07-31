import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Featured projects by Preet Raval, including VYNE, an AI-native company operating system, the NEXUS traveler management platform, ACI Forge enterprise SaaS portal, KOSH inventory management, an AI-powered PDF to BOM converter, and the Serenity Living client site.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
