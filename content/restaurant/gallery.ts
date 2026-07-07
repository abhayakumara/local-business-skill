import type { GalleryImage } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — ambiance + food photography for the gallery grid.
// Drop real .webp photos into /public/images/restaurant/gallery and update the paths.
// ─────────────────────────────────────────────────────────────────────────────

export const gallery: GalleryImage[] = [
  {
    id: 'dining-room',
    image: '/images/restaurant/gallery/dining-room.svg',
    alt: 'Warm, candle-lit dining room with arched windows',
    span: 'wide',
  },
  {
    id: 'tandoor',
    image: '/images/restaurant/gallery/tandoor.svg',
    alt: 'Chef working the glowing tandoor oven',
    span: 'tall',
  },
  {
    id: 'thali',
    image: '/images/restaurant/gallery/thali.svg',
    alt: 'Colourful sharing thali plated on brass',
    span: 'normal',
  },
  {
    id: 'spices',
    image: '/images/restaurant/gallery/spices.svg',
    alt: 'Bowls of vivid ground spices',
    span: 'normal',
  },
  {
    id: 'cocktails',
    image: '/images/restaurant/gallery/cocktails.svg',
    alt: 'Pair of saffron-hued signature cocktails',
    span: 'normal',
  },
  {
    id: 'terrace',
    image: '/images/restaurant/gallery/terrace.svg',
    alt: 'Evening terrace seating strung with warm lights',
    span: 'wide',
  },
];
