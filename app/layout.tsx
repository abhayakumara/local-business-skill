import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { siteUrl } from '@/lib/site';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import './globals.css';

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body-inter',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display-agency',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lumen Studio — Websites that win local customers',
    template: '%s · Lumen Studio',
  },
  description:
    'Lumen Studio designs premium, conversion-focused websites for local businesses — restaurants, salons, dental practices, gyms and more. Explore live demos of our work.',
  keywords: [
    'web design agency',
    'local business websites',
    'restaurant website design',
    'dental website design',
    'salon website design',
    'gym website design',
  ],
  authors: [{ name: 'Lumen Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Lumen Studio',
    title: 'Lumen Studio — Websites that win local customers',
    description:
      'Premium, conversion-focused websites for local businesses. Explore live demos for restaurants, salons, dental practices and gyms.',
    images: [
      {
        url: '/images/agency/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Lumen Studio — Websites that win local customers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumen Studio — Websites that win local customers',
    description:
      'Premium, conversion-focused websites for local businesses. Explore live demos.',
    images: ['/images/agency/og-image.svg'],
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#07070d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-zinc-950 focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:ring-2 focus:ring-violet-400"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
