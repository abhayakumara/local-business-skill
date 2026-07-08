import type { Service, ServiceCategory } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME
// Each service references an image in /public/images/salon/services named after the
// service (Hair Spa -> hair-spa.svg/.webp). Keep that 1:1 mapping so swapping in
// real photography is a drop-in replacement.
// ─────────────────────────────────────────────────────────────────────────────

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'hair',
    name: 'Hair',
    description: 'Precision cuts, lived-in colour, and restorative treatments.',
  },
  {
    id: 'skin',
    name: 'Skin & Facials',
    description: 'Results-driven facials tailored to your skin on the day.',
  },
  {
    id: 'spa',
    name: 'Spa & Body',
    description: 'Massage and body rituals to slow the whole system down.',
  },
  {
    id: 'nails',
    name: 'Nails',
    description: 'Immaculate manicures and pedicures in a calm corner.',
  },
];

export const services: Service[] = [
  // ── Hair ────────────────────────────────────────────────────────────────
  {
    id: 'cut-and-style',
    name: 'Cut & Style',
    description:
      'A consultation-led cut shaped to your hair and finished with a blow-dry.',
    price: 'from ₹2,400',
    duration: '60 min',
    image: '/images/salon/services/cut-and-style.svg',
    imageAlt: 'Stylist finishing a polished blow-dry',
    category: 'hair',
    isSignature: true,
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa',
    description:
      'A deep-conditioning ritual with scalp massage to restore softness and shine.',
    price: 'from ₹2,800',
    duration: '75 min',
    image: '/images/salon/services/hair-spa.svg',
    imageAlt: 'Relaxing hair spa and scalp treatment',
    category: 'hair',
    isSignature: true,
  },
  {
    id: 'balayage',
    name: 'Balayage & Colour',
    description:
      'Hand-painted, sun-kissed dimension designed to grow out beautifully.',
    price: 'from ₹5,500',
    duration: '150 min',
    image: '/images/salon/services/balayage.svg',
    imageAlt: 'Soft, hand-painted balayage colour result',
    category: 'hair',
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Treatment',
    description: 'Smoothing therapy that tames frizz and cuts styling time in half.',
    price: 'from ₹4,800',
    duration: '120 min',
    image: '/images/salon/services/keratin-treatment.svg',
    imageAlt: 'Sleek, smoothed hair after keratin treatment',
    category: 'hair',
  },

  // ── Skin & Facials ────────────────────────────────────────────────────────
  {
    id: 'signature-facial',
    name: 'Signature Facial',
    description:
      'Our bespoke facial — cleanse, exfoliate, massage, and mask for instant glow.',
    price: 'from ₹3,500',
    duration: '60 min',
    image: '/images/salon/services/signature-facial.svg',
    imageAlt: 'Calming signature facial treatment',
    category: 'skin',
    isSignature: true,
  },
  {
    id: 'hydrating-facial',
    name: 'Hydrating Facial',
    description: 'A quenching treatment for tired, dehydrated skin that needs a reset.',
    price: 'from ₹3,200',
    duration: '50 min',
    image: '/images/salon/services/hydrating-facial.svg',
    imageAlt: 'Hydrating facial with serum application',
    category: 'skin',
  },
  {
    id: 'anti-aging-facial',
    name: 'Anti-Aging Facial',
    description:
      'Firming actives and lymphatic massage to lift, smooth, and brighten.',
    price: 'from ₹4,200',
    duration: '70 min',
    image: '/images/salon/services/anti-aging-facial.svg',
    imageAlt: 'Firming anti-aging facial massage',
    category: 'skin',
  },

  // ── Spa & Body ─────────────────────────────────────────────────────────────
  {
    id: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    description: 'Full-body massage with essential oils blended for how you feel today.',
    price: 'from ₹3,800',
    duration: '60 min',
    image: '/images/salon/services/aromatherapy-massage.svg',
    imageAlt: 'Aromatherapy massage in a candle-lit spa room',
    category: 'spa',
    isSignature: true,
  },
  {
    id: 'hot-stone-massage',
    name: 'Hot Stone Massage',
    description: 'Warm basalt stones melt deep tension from shoulders and back.',
    price: 'from ₹4,500',
    duration: '75 min',
    image: '/images/salon/services/hot-stone-massage.svg',
    imageAlt: 'Hot stone massage therapy',
    category: 'spa',
  },
  {
    id: 'body-polish',
    name: 'Body Polish',
    description: 'A gentle exfoliating scrub and hydration to leave skin silky.',
    price: 'from ₹3,400',
    duration: '50 min',
    image: '/images/salon/services/body-polish.svg',
    imageAlt: 'Exfoliating body polish treatment',
    category: 'spa',
  },

  // ── Nails ──────────────────────────────────────────────────────────────────
  {
    id: 'manicure',
    name: 'Signature Manicure',
    description: 'Shaping, cuticle care, and a flawless polish that lasts.',
    price: 'from ₹1,200',
    duration: '40 min',
    image: '/images/salon/services/manicure.svg',
    imageAlt: 'Elegant signature manicure',
    category: 'nails',
  },
  {
    id: 'pedicure',
    name: 'Spa Pedicure',
    description: 'A warm soak, exfoliation, massage, and immaculate finish.',
    price: 'from ₹1,650',
    duration: '55 min',
    image: '/images/salon/services/pedicure.svg',
    imageAlt: 'Relaxing spa pedicure',
    category: 'nails',
  },
  {
    id: 'gel-nails',
    name: 'Gel Nails',
    description: 'Long-wearing gel colour or subtle nail art, chip-free for weeks.',
    price: 'from ₹1,500',
    duration: '50 min',
    image: '/images/salon/services/gel-nails.svg',
    imageAlt: 'Glossy gel manicure',
    category: 'nails',
  },
];
