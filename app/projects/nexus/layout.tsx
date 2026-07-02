import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEXUS Case Study',
  description:
    'NEXUS — the traveler management and workflow automation platform Preet Raval built as the operational backbone of American Circuits Inc. Step-based routing enforcement, QR/barcode scanning, a live operations dashboard, predictive delay analytics, and a full audit trail.',
};

export default function NexusCaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
