import type { Business } from '@/lib/types';
import { siteUrl } from '@/lib/site';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME
// Replace these values with the real gym details. Change them once here and
// they update everywhere — header, footer, SEO metadata, structured data,
// contact section.
// ─────────────────────────────────────────────────────────────────────────────

export const business: Business = {
  name: 'Apex Athletic Club',
  shortName: 'Apex',
  tagline: 'Train With Intent',
  description:
    'A strength and conditioning gym built for real progress — expert coaching, a community that shows up, and programming that gets you stronger every single week.',
  category: 'Gym & Fitness Studio',
  priceRange: '₹₹',
  phone: '+91 99590 34412',
  email: 'train@apexathletic.com',
  bookingUrl: '#join',
  address: {
    street: 'Plot 42, Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500033',
    country: 'India',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Jubilee+Hills+Hyderabad&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Jubilee+Hills+Hyderabad',
  },
  geo: { latitude: 17.4326, longitude: 78.4071 },
  hours: [
    { day: 'Monday', open: '5:00 AM', close: '10:00 PM' },
    { day: 'Tuesday', open: '5:00 AM', close: '10:00 PM' },
    { day: 'Wednesday', open: '5:00 AM', close: '10:00 PM' },
    { day: 'Thursday', open: '5:00 AM', close: '10:00 PM' },
    { day: 'Friday', open: '5:00 AM', close: '9:00 PM' },
    { day: 'Saturday', open: '7:00 AM', close: '6:00 PM' },
    { day: 'Sunday', open: '7:00 AM', close: '6:00 PM' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
    { label: 'TikTok', href: 'https://tiktok.com', icon: 'tiktok' },
  ],
  url: `${siteUrl}/gym`,
};
