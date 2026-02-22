import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Preet Raval — Software Engineer open to full-time roles. Reach out via email at preetraval45@gmail.com, phone, or through LinkedIn. Based in Charlotte, NC.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
