import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pashupatastra Case Study',
  description:
    'Pashupatastra is an AI-native autonomous security operations platform by Preet Raval. A closed-loop system that connects fragmented security alerts into causal incidents with MITRE ATT&CK mappings, then proposes risk-scored, human-authorized remediation across Kubernetes, AWS, and observability infrastructure.',
};

export default function PashupatastraCaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
