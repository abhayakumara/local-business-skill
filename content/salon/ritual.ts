import type { RitualStep } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the signature experience, told as a story. Three steps is
// the sweet spot; keep descriptions sensory and short.
// ─────────────────────────────────────────────────────────────────────────────

export const ritualSteps: RitualStep[] = [
  {
    id: 'arrive',
    number: '01',
    name: 'Arrive & exhale',
    description:
      'Warm towels, a cup of chamomile–saffron tea, and five quiet minutes before anything begins. Your consultation happens in a soft chair, not at a counter.',
    image: '/images/salon/gallery/reception.svg',
    imageAlt: 'The calm reception lounge at Maison Lumière',
  },
  {
    id: 'ritual',
    number: '02',
    name: 'The ritual itself',
    description:
      'Every treatment follows our house method — unhurried, precise, and tailored on the day to your skin, your hair, your mood. No clock-watching, ever.',
    image: '/images/salon/gallery/spa-room.svg',
    imageAlt: 'A treatment in progress in the candlelit spa room',
  },
  {
    id: 'glow',
    number: '03',
    name: 'Leave glowing',
    description:
      'We finish with styling, honest product advice from our apothecary shelf, and a plan for keeping the glow going at home — only if you want it.',
    image: '/images/salon/gallery/product-shelf.svg',
    imageAlt: 'The curated apothecary shelf of finishing products',
  },
];
