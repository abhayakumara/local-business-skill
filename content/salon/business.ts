import type { Business } from '@/lib/types';
import { siteUrl } from '@/lib/site';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME
// Replace these values with the real salon details. Change them once here and
// they update everywhere — header, footer, SEO metadata, structured data,
// contact section.
// ─────────────────────────────────────────────────────────────────────────────

export const business: Business = {
  name: 'Maison Lumière',
  shortName: 'Maison Lumière',
  tagline: 'Hair · Skin · Spa',
  description:
    'An intimate hair and skin sanctuary where master stylists and therapists craft a calm, considered ritual around you — beauty, unhurried.',
  category: 'Hair Salon & Day Spa',
  priceRange: '₹₹₹',
  phone: '+91 98200 40143',
  email: 'hello@maisonlumiere.com',
  bookingUrl: '#book',
  address: {
    street: '54 Hill Road, Bandra West',
    city: 'Mumbai',
    region: 'Maharashtra',
    postalCode: '400050',
    country: 'India',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Hill+Road+Bandra+West+Mumbai&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Hill+Road+Bandra+West+Mumbai',
  },
  geo: { latitude: 19.0596, longitude: 72.8295 },
  hours: [
    { day: 'Monday', open: 'Closed', close: '' },
    { day: 'Tuesday', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Wednesday', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Thursday', open: '9:00 AM', close: '8:00 PM' },
    { day: 'Friday', open: '9:00 AM', close: '8:00 PM' },
    { day: 'Saturday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Sunday', open: '10:00 AM', close: '5:00 PM' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'WhatsApp', href: 'https://wa.me/14155550143', icon: 'whatsapp' },
    { label: 'Pinterest', href: 'https://pinterest.com', icon: 'pinterest' },
  ],
  url: `${siteUrl}/salon`,
};
