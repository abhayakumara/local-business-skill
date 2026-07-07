import type { Service, ServiceCategory } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME
// Each service references an image in /public/images/dental/services named after the
// service (Teeth Whitening -> teeth-whitening.svg/.webp). Keep that 1:1 mapping
// so swapping in real photography is a drop-in replacement.
// ─────────────────────────────────────────────────────────────────────────────

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'general',
    name: 'General',
    description: 'Routine care that keeps teeth and gums healthy for life.',
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic',
    description: 'Subtle, natural-looking ways to love your smile again.',
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    description: 'Discreet, modern ways to straighten teeth at any age.',
  },
  {
    id: 'restorative',
    name: 'Restorative',
    description: 'Strong, lasting repairs that look and feel like your own teeth.',
  },
];

export const services: Service[] = [
  // ── General ──────────────────────────────────────────────────────────────
  {
    id: 'checkup-and-clean',
    name: 'Check-up & Clean',
    description:
      'A thorough exam, professional clean, and a clear plan — the foundation of healthy teeth.',
    price: 'from $120',
    duration: '45 min',
    image: '/images/dental/services/checkup-and-clean.svg',
    imageAlt: 'Comfortable dental check-up and hygiene appointment',
    category: 'general',
    isSignature: true,
  },
  {
    id: 'dental-hygiene',
    name: 'Hygiene & Gum Care',
    description:
      'Deeper cleaning and tailored advice to keep gums healthy and prevent problems early.',
    price: 'from $95',
    duration: '40 min',
    image: '/images/dental/services/dental-hygiene.svg',
    imageAlt: 'Dental hygienist providing gum care',
    category: 'general',
  },
  {
    id: 'childrens-dentistry',
    name: "Children's Dentistry",
    description:
      'Gentle, friendly care that helps little ones feel at ease and build great habits.',
    price: 'from $85',
    duration: '30 min',
    image: '/images/dental/services/childrens-dentistry.svg',
    imageAlt: 'Child smiling at a friendly dental visit',
    category: 'general',
  },
  {
    id: 'emergency-care',
    name: 'Emergency Care',
    description:
      'Same-day relief for pain, breaks, and dental emergencies when you need it most.',
    price: 'from $130',
    duration: '30 min',
    image: '/images/dental/services/emergency-care.svg',
    imageAlt: 'Prompt emergency dental treatment',
    category: 'general',
  },

  // ── Cosmetic ─────────────────────────────────────────────────────────────
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    description:
      'Professional whitening for a noticeably brighter smile, with kind-to-enamel results.',
    price: 'from $290',
    duration: '60 min',
    image: '/images/dental/services/teeth-whitening.svg',
    imageAlt: 'Bright smile after professional teeth whitening',
    category: 'cosmetic',
    isSignature: true,
  },
  {
    id: 'porcelain-veneers',
    name: 'Porcelain Veneers',
    description:
      'Custom, hand-finished veneers that reshape and brighten in a natural, lasting way.',
    price: 'from $850',
    duration: '90 min',
    image: '/images/dental/services/porcelain-veneers.svg',
    imageAlt: 'Natural-looking porcelain veneers',
    category: 'cosmetic',
  },
  {
    id: 'composite-bonding',
    name: 'Composite Bonding',
    description:
      'A minimally invasive way to close gaps and reshape teeth in a single visit.',
    price: 'from $220',
    duration: '60 min',
    image: '/images/dental/services/composite-bonding.svg',
    imageAlt: 'Composite bonding to reshape a tooth',
    category: 'cosmetic',
  },

  // ── Orthodontics ─────────────────────────────────────────────────────────
  {
    id: 'clear-aligners',
    name: 'Clear Aligners',
    description:
      'Virtually invisible aligners that straighten teeth on your schedule, comfortably.',
    price: 'from $2,400',
    duration: '45 min',
    image: '/images/dental/services/clear-aligners.svg',
    imageAlt: 'Clear orthodontic aligner being fitted',
    category: 'orthodontics',
    isSignature: true,
  },
  {
    id: 'retainers',
    name: 'Retainers',
    description:
      'Custom retainers to protect your results and keep your smile beautifully aligned.',
    price: 'from $180',
    duration: '30 min',
    image: '/images/dental/services/retainers.svg',
    imageAlt: 'Custom-made dental retainer',
    category: 'orthodontics',
  },

  // ── Restorative ──────────────────────────────────────────────────────────
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    description:
      'A permanent, natural-feeling way to replace a missing tooth and restore your bite.',
    price: 'from $1,900',
    duration: '90 min',
    image: '/images/dental/services/dental-implants.svg',
    imageAlt: 'Dental implant restoration',
    category: 'restorative',
    isSignature: true,
  },
  {
    id: 'crowns-and-bridges',
    name: 'Crowns & Bridges',
    description:
      'Tooth-coloured crowns and bridges that rebuild strength and blend seamlessly.',
    price: 'from $780',
    duration: '75 min',
    image: '/images/dental/services/crowns-and-bridges.svg',
    imageAlt: 'Porcelain crown matched to natural teeth',
    category: 'restorative',
  },
  {
    id: 'tooth-coloured-fillings',
    name: 'Tooth-Coloured Fillings',
    description:
      'Mercury-free, natural-looking fillings that restore teeth discreetly and gently.',
    price: 'from $160',
    duration: '45 min',
    image: '/images/dental/services/tooth-coloured-fillings.svg',
    imageAlt: 'Natural tooth-coloured filling treatment',
    category: 'restorative',
  },
];
