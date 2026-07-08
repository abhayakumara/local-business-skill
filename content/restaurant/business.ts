import type { Business } from '@/lib/types';
import { siteUrl } from '@/lib/site';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME
// Replace these values with the real business details. Nothing here is
// referenced by hard-coded strings elsewhere — change it once, it updates
// everywhere (header, footer, SEO metadata, structured data, contact section).
// ─────────────────────────────────────────────────────────────────────────────

export const business: Business = {
  name: 'Saffron & Sage',
  shortName: 'Saffron & Sage',
  tagline: 'A Modern Indian Kitchen',
  description:
    'Saffron & Sage reimagines the flavours of India for the modern table — heirloom spices, seasonal produce, and the warmth of a family kitchen, plated with quiet elegance.',
  cuisine: 'Modern Indian',
  priceRange: '₹₹',
  phone: '+91 98450 21188',
  email: 'hello@saffronandsage.com',
  reservationsUrl: '#reserve',
  address: {
    street: '128, 12th Main Road, Indiranagar',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560008',
    country: 'India',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=12th+Main+Road+Indiranagar+Bengaluru&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=12th+Main+Road+Indiranagar+Bengaluru',
  },
  geo: { latitude: 12.9719, longitude: 77.6412 },
  hours: [
    { day: 'Monday', open: 'Closed', close: '' },
    { day: 'Tuesday', open: '5:00 PM', close: '10:00 PM' },
    { day: 'Wednesday', open: '5:00 PM', close: '10:00 PM' },
    { day: 'Thursday', open: '5:00 PM', close: '10:00 PM' },
    { day: 'Friday', open: '12:00 PM', close: '11:00 PM' },
    { day: 'Saturday', open: '12:00 PM', close: '11:00 PM' },
    { day: 'Sunday', open: '12:00 PM', close: '9:00 PM' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'WhatsApp', href: 'https://wa.me/14155550188', icon: 'whatsapp' },
    {
      label: 'Tripadvisor',
      href: 'https://tripadvisor.com',
      icon: 'tripadvisor',
    },
  ],
  url: `${siteUrl}/restaurant`,
};
