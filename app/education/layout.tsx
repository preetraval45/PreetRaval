import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'Education and certifications of Preet Raval, who holds a B.A. in Computer Science from UNC Charlotte. 12+ certifications including AWS Solutions Architect, O’Reilly Software Architecture, Anthropic AI and MCP, CCNA, cybersecurity, and data analytics.',
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
