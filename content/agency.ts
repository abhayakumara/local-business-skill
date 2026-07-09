// ─────────────────────────────────────────────────────────────────────────────
// AGENCY LANDING PAGE CONTENT
// Everything on the landing page is editable here — brand, copy, demos,
// FAQs. Components never hard-code business copy.
// ─────────────────────────────────────────────────────────────────────────────

export const agency = {
  name: 'A Studios',
  tagline: 'Websites that win local customers',
  description:
    'We design and build premium, conversion-focused websites for local businesses — restaurants, salons, dental practices, gyms and more. Every site is fast, beautiful on every screen, and engineered to turn visitors into bookings.',
  email: 'hello@astudios.com',
  phone: '+91 80 4711 2345',
  city: 'Bengaluru, India',
};

export const heroStats = [
  { id: 'sites', value: 40, suffix: '+', label: 'Sites launched' },
  { id: 'lighthouse', value: 98, suffix: '', label: 'Avg. Lighthouse score' },
  { id: 'enquiries', value: 2.4, suffix: '×', decimals: 1, label: 'Avg. enquiry lift' },
  { id: 'days', value: 7, suffix: '-day', label: 'Typical launch' },
];

// Names scrolling in the trust marquee. The first four are the live demos.
export const clientNames = [
  'Saffron & Sage',
  'Maison Lumière',
  'Northway Dental',
  'Apex Athletic Club',
  'Bluebird Café',
  'Harbor & Vine',
  'Petal + Stem Florists',
  'Summit Physio',
  'Copperline Barbers',
  'The Daily Grind',
];

export interface AgencyService {
  id: string;
  icon: 'sparkle' | 'search' | 'pen' | 'shield';
  name: string;
  description: string;
  points: string[];
}

export const services: AgencyService[] = [
  {
    id: 'design-build',
    icon: 'sparkle',
    name: 'Design & build',
    description:
      'A bespoke website designed around your brand and your customers — not a template with your logo dropped in.',
    points: ['Custom design system', 'Cinematic motion', 'Flawless on every device'],
  },
  {
    id: 'local-seo',
    icon: 'search',
    name: 'Local SEO',
    description:
      'Structured data, Google Business signals, and page speed that puts you above the competition on the map.',
    points: ['Schema & rich results', 'Google Maps ready', '95+ performance scores'],
  },
  {
    id: 'brand-content',
    icon: 'pen',
    name: 'Brand & content',
    description:
      'Words and imagery that sound like you on your best day — we write, art-direct, and polish every section.',
    points: ['Conversion copywriting', 'Photography direction', 'Menu & service curation'],
  },
  {
    id: 'care-growth',
    icon: 'shield',
    name: 'Care & growth',
    description:
      'We stay after launch: updates, seasonal refreshes, and monthly improvements driven by real analytics.',
    points: ['Same-day edits', 'Uptime & monitoring', 'Quarterly growth reviews'],
  },
];

export interface DemoSite {
  slug: 'restaurant' | 'salon' | 'dental' | 'gym';
  industry: string;
  name: string;
  tagline: string;
  blurb: string;
  chips: string[];
  /** Preview image (each demo's OG art). */
  image: string;
  /** Tailwind gradient classes for the card wash. */
  wash: string;
  /** Accent text color for the industry eyebrow. */
  accent: string;
}

export const demoSites: DemoSite[] = [
  {
    slug: 'restaurant',
    industry: 'Restaurant',
    name: 'Saffron & Sage',
    tagline: 'A modern Indian kitchen',
    blurb:
      'Warm editorial design, a filterable menu with dietary badges, and a reservation flow that fills tables.',
    chips: ['Filterable menu', 'Reservations', 'Gallery', 'Local SEO'],
    image: '/images/restaurant/og-image.svg',
    wash: 'from-[#e2922b]/25 via-transparent to-[#557a4b]/20',
    accent: 'text-[#e9ad53]',
  },
  {
    slug: 'salon',
    industry: 'Salon & spa',
    name: 'Maison Lumière',
    tagline: 'Hair, skin & sanctuary',
    blurb:
      'Soft, luxurious art direction with a full treatment menu, stylist profiles, and effortless booking.',
    chips: ['Service menu', 'Team profiles', 'Booking', 'Reviews'],
    image: '/images/salon/og-image.svg',
    wash: 'from-[#a87f9d]/25 via-transparent to-[#cf9c3c]/20',
    accent: 'text-[#c4a8bd]',
  },
  {
    slug: 'dental',
    industry: 'Dental practice',
    name: 'Northway Dental Studio',
    tagline: 'Modern, gentle dentistry',
    blurb:
      'Clinical calm meets warm design — treatments, clinician bios, and an insurance band that removes fear of cost.',
    chips: ['Treatments', 'Insurance band', 'Appointments', 'Clinician bios'],
    image: '/images/dental/og-image.svg',
    wash: 'from-[#459ace]/25 via-transparent to-[#3fbf9c]/20',
    accent: 'text-[#79bade]',
  },
  {
    slug: 'gym',
    industry: 'Gym & fitness',
    name: 'Apex Athletic Club',
    tagline: 'Train with intent',
    blurb:
      'High-energy athletic brand with filterable programs, coach profiles, and membership tiers that sell themselves.',
    chips: ['Programs', 'Membership tiers', 'Coaches', 'Free-class funnel'],
    image: '/images/gym/og-image.svg',
    wash: 'from-[#f24a16]/25 via-transparent to-[#9eea1a]/20',
    accent: 'text-[#ff9568]',
  },
];

export interface ProcessStep {
  id: string;
  number: string;
  name: string;
  description: string;
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    name: 'Discover',
    description:
      'A 30-minute call about your business, your customers, and what a great month looks like. We audit your current presence and competitors.',
    duration: 'Day 1',
  },
  {
    id: 'design',
    number: '02',
    name: 'Design',
    description:
      'You see a real homepage concept — your brand, your photos, your voice — not wireframes. One round of focused revisions.',
    duration: 'Days 2–4',
  },
  {
    id: 'launch',
    number: '03',
    name: 'Launch',
    description:
      'We build, load your content, wire up local SEO and analytics, and go live on your domain with 95+ performance scores.',
    duration: 'Days 5–7',
  },
  {
    id: 'grow',
    number: '04',
    name: 'Grow',
    description:
      'Care plans keep the site fresh: menu updates, seasonal campaigns, review widgets, and quarterly improvement sprints.',
    duration: 'Ongoing',
  },
];

export interface AgencyTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  result: string;
}

export const agencyTestimonials: AgencyTestimonial[] = [
  {
    id: 'priya',
    quote:
      'The site paid for itself in the first month. People walk in and say they booked because the website “felt like the food tastes.”',
    author: 'Priya Raman',
    role: 'Owner, Saffron & Sage',
    result: '+38% weekend reservations',
  },
  {
    id: 'elena',
    quote:
      'Patients tell us the site made the practice feel calm before they ever sat in the chair. New-patient requests doubled.',
    author: 'Dr. Elena Marsh',
    role: 'Principal Dentist, Northway Dental Studio',
    result: '2× new-patient requests',
  },
  {
    id: 'marcus',
    quote:
      'We stopped paying for a booking platform we hated. The free-class funnel on the new site converts better than anything we ran ads on.',
    author: 'Marcus Reid',
    role: 'Head Coach, Apex Athletic Club',
    result: '+120 trial sign-ups / quarter',
  },
];

export interface AgencyFaq {
  id: string;
  question: string;
  answer: string;
}

export const agencyFaqs: AgencyFaq[] = [
  {
    id: 'timeline',
    question: 'How fast can you really launch?',
    answer:
      'Seven days is our standard for a focused site: discovery Monday, design concept by Wednesday, live by the following Monday. Larger multi-section projects typically take two to three weeks depending on photography and content.',
  },
  {
    id: 'content',
    question: 'We don’t have good photos or copy. Is that a problem?',
    answer:
      'Not at all — most of our clients start there. We write every word with you, art-direct a simple photo shoot (or select premium stock that doesn’t look like stock), and launch with placeholder-free content.',
  },
  {
    id: 'ownership',
    question: 'Do we own the website?',
    answer:
      'Yes, entirely. The code, the domain, the content — it’s all yours. If we ever part ways, the site keeps working and any developer can maintain it. No proprietary lock-in.',
  },
  {
    id: 'updates',
    question: 'How do we update the menu / prices / hours later?',
    answer:
      'Every site is built content-first: your menu, services, hours and photos live in simple, clearly-labelled files. On a care plan we make edits same-day; otherwise we hand you a 10-minute guide.',
  },
  {
    id: 'seo',
    question: 'Will we show up on Google?',
    answer:
      'Every site ships with technical SEO done properly: structured data for your industry, fast Core Web Vitals, local business schema, sitemaps, and Google Business alignment. That’s the foundation ads can’t buy.',
  },
  {
    id: 'industries',
    question: 'What industries do you work with?',
    answer:
      'Restaurants, cafés, salons and spas, dental and medical practices, gyms and studios, trades, and professional services. If your customers are local, we can make you the obvious choice. Browse the live demos above to see the range.',
  },
];

export const footerNav = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];
