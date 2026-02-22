import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills of Preet Raval — 50+ technologies spanning AI/ML, full-stack development (Next.js, React, FastAPI), databases (PostgreSQL, MongoDB), cybersecurity, cloud (AWS, Azure), and DevOps (Docker, Kubernetes, CI/CD).',
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
