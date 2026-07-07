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
  priceRange: '$$',
  phone: '+1 (415) 555-0176',
  email: 'hello@northwaydental.com',
  bookingUrl: '#book',
  address: {
    street: '230 Marlow Avenue, Suite 4',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94110',
    country: 'USA',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=230+Marlow+Avenue+San+Francisco&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=230+Marlow+Avenue+San+Francisco+CA+94110',
  },
  geo: { latitude: 37.7485, longitude: -122.4184 },
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
