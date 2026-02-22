import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Work experience of Preet Raval — Software Engineer at American Circuits Inc. leading NEXUS, ACI Forge, and ACI ChatGPT. Enterprise SaaS, workflow automation, AI integration, and full-stack development.',
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
