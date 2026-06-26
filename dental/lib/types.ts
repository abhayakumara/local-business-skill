// Shared content types for the dental practice starter. Editing content/*.ts is
// type-checked against these, giving non-technical editors guard rails.

export interface BusinessHours {
  day: string;
  open: string; // e.g. "8:00 AM" — or "Closed"
  close: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'linkedin' | 'whatsapp';
}

export interface Business {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  category: string;
  priceRange: string;
  phone: string;
  email: string;
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
  url: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string; // typical appointment length, e.g. "45 min"
  /** Image lives in /public/images/services, named after the service. */
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

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}
