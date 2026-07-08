import type { Business } from '@/lib/types';
import { siteUrl } from '@/lib/site';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME
// Replace these values with the real practice details. Change them once here and
// they update everywhere — header, footer, SEO metadata, structured data,
// contact section.
// ─────────────────────────────────────────────────────────────────────────────

export const business: Business = {
  name: 'Northway Dental Studio',
  shortName: 'Northway Dental',
  tagline: 'Modern, Gentle Dentistry',
  description:
    'A calm, modern dental studio where careful clinicians take the time to listen, explain, and make every visit comfortable — healthy smiles, without the dread.',
  category: 'Dental Practice',
  priceRange: '₹₹',
  phone: '+91 98110 42256',
  email: 'hello@northwaydental.com',
  bookingUrl: '#book',
  address: {
    street: 'C-12, Greater Kailash Part 1',
    city: 'New Delhi',
    region: 'Delhi',
    postalCode: '110048',
    country: 'India',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Greater+Kailash+1+New+Delhi&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Greater+Kailash+1+New+Delhi',
  },
  geo: { latitude: 28.5494, longitude: 77.2425 },
  hours: [
    { day: 'Monday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Tuesday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Thursday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Friday', open: '8:00 AM', close: '4:00 PM' },
    { day: 'Saturday', open: '9:00 AM', close: '2:00 PM' },
    { day: 'Sunday', open: 'Closed', close: '' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],
  url: `${siteUrl}/dental`,
};
