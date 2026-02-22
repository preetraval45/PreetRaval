import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'Education and certifications of Preet Raval — B.A. Computer Science at UNC Charlotte. 9+ certifications including AWS Solutions Architect, CCNA, cybersecurity, SQL, and full-stack development.',
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
