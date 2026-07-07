import type { Metadata, Viewport } from 'next';
import { Fraunces } from 'next/font/google';
import { business } from '@/content/dental';
import { StructuredData } from '@/components/dental/StructuredData';
import { ShowcaseBar } from '@/components/ui/ShowcaseBar';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const description = business.description;

export const metadata: Metadata = {
  title: { absolute: `${business.name} — ${business.tagline}` },
  description,
  keywords: [
    business.category ?? 'dentist',
    'dentist',
    'dental clinic',
    'teeth whitening',
    'dental implants',
    'clear aligners',
    business.address.city,
    business.name,
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.url,
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description,
    images: [
      {
        url: '/images/dental/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${business.name} — ${business.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${business.name} — ${business.tagline}`,
    description,
    images: ['/images/dental/og-image.svg'],
  },
  alternates: { canonical: '/dental' },
};

export const viewport: Viewport = {
  themeColor: '#1f6498',
  width: 'device-width',
  initialScale: 1,
};

export default function DentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${display.variable} theme-dental min-h-screen`}>
      <StructuredData />
      {children}
      <ShowcaseBar current="dental" />
    </div>
  );
}
