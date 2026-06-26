// Shared content types. Editing content/*.ts is type-checked against these,
// so a non-technical editor gets guard rails while personalizing the site.

export interface BusinessHours {
  day: string;
  open: string; // e.g. "12:00 PM" — or "Closed"
  close: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'whatsapp' | 'tripadvisor';
}

export interface Business {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  cuisine: string;
  priceRange: string; // e.g. "$$"
  phone: string;
  email: string;
  reservationsUrl?: string;
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
  url: string; // canonical production URL
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  /** Image lives in /public/images/menu and is named after the dish. */
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
