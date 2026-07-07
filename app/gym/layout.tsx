import type { Metadata, Viewport } from 'next';
import { Oswald } from 'next/font/google';
import { business } from '@/content/gym';
import { StructuredData } from '@/components/gym/StructuredData';
import { ShowcaseBar } from '@/components/ui/ShowcaseBar';

const display = Oswald({
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
    business.category ?? 'gym',
    'gym',
    'strength training',
    'fitness classes',
    'personal training',
    'HIIT',
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
        url: '/images/gym/og-image.svg',
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
    images: ['/images/gym/og-image.svg'],
  },
  alternates: { canonical: '/gym' },
};

export const viewport: Viewport = {
  themeColor: '#15130f',
  width: 'device-width',
  initialScale: 1,
};

export default function GymLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${display.variable} theme-gym min-h-screen`}>
      <StructuredData />
      {children}
      <ShowcaseBar current="gym" />
    </div>
  );
}
