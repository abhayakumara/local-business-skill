import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import { business } from '@/content/restaurant';
import { StructuredData } from '@/components/restaurant/StructuredData';
import { ShowcaseBar } from '@/components/ui/ShowcaseBar';

const display = Cormorant_Garamond({
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
    business.cuisine ?? 'restaurant',
    'restaurant',
    business.address.city,
    'dining',
    'reservations',
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
        url: '/images/restaurant/og-image.svg',
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
    images: ['/images/restaurant/og-image.svg'],
  },
  alternates: { canonical: '/restaurant' },
};

export const viewport: Viewport = {
  themeColor: '#d97915',
  width: 'device-width',
  initialScale: 1,
};

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${display.variable} theme-restaurant min-h-screen`}>
      <StructuredData />
      {children}
      <ShowcaseBar current="restaurant" />
    </div>
  );
}
