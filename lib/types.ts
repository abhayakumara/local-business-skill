// Shared content types for every demo in the showcase. Editing content/*.ts is
// type-checked against these, so a non-technical editor gets guard rails while
// personalizing a site.

export interface BusinessHours {
  day: string;
  open: string; // e.g. "9:00 AM" — or "Closed"
  close: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon:
    | 'instagram'
    | 'facebook'
    | 'whatsapp'
    | 'tripadvisor'
    | 'pinterest'
    | 'linkedin'
    | 'youtube'
    | 'tiktok';
}

export interface Business {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** Restaurant demos: cuisine style, e.g. "Modern Indian". */
  cuisine?: string;
  /** Service demos: business category, e.g. "Dental practice". */
  category?: string;
  priceRange: string; // e.g. "$$"
  phone: string;
  email: string;
  reservationsUrl?: string;
  bookingUrl?: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    mapsEmbedUrl: string;
    directionsUrl: string;
  };
  geo: { latitude: number; longitude: number };
  hours: BusinessHours[];
  social: SocialLink[];
  url: string; // canonical URL of this demo
}

/* ── Restaurant ─────────────────────────────────────────────────────────── */

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  /** Image lives in /public/images/restaurant/menu, named after the dish. */
  image: string;
  imageAlt: string;
  category: string;
  isVegetarian: boolean;
  spiceLevel?: 0 | 1 | 2 | 3; // 0 = none, 3 = fiery
  isSignature?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

/* ── Salon & dental ─────────────────────────────────────────────────────── */

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string; // e.g. "45 min"
  image: string;
  imageAlt: string;
  category: string;
  isSignature?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  imageAlt: string;
}

export interface InsurancePlan {
  id: string;
  name: string;
}

export interface InsuranceInfo {
  heading: string;
  description: string;
  plans: InsurancePlan[];
  membershipNote: string;
}

/* ── Gym ────────────────────────────────────────────────────────────────── */

export interface Program {
  id: string;
  name: string;
  description: string;
  level: 'All levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string; // class length, e.g. "45 min"
  image: string;
  imageAlt: string;
  category: string;
  isSignature?: boolean;
}

export interface ProgramCategory {
  id: string;
  name: string;
  description: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  imageAlt: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  cadence: string; // e.g. "per month"
  description: string;
  perks: string[];
  isFeatured?: boolean;
  ctaLabel: string;
}

/* ── Shared sections ────────────────────────────────────────────────────── */

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  /** Optional emphasis for the masonry layout. */
  span?: 'wide' | 'tall' | 'normal';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string; // e.g. "Anniversary dinner"
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}
