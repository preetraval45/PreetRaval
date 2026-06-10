import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VYNE Case Study',
  description:
    'VYNE — an AI-native company operating system by Preet Raval. A correlation layer that ties business events to infrastructure events on one unified timeline, with a causal AI engine and integrations across GitHub, Sentry, Datadog, HubSpot, Stripe, Linear, and PagerDuty.',
};

export default function VyneCaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
