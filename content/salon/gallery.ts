import type { GalleryImage } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — interior + result photography for the gallery grid.
// Drop real .webp photos into /public/images/salon/gallery and update the paths.
// ─────────────────────────────────────────────────────────────────────────────

export const gallery: GalleryImage[] = [
  {
    id: 'salon-interior',
    image: '/images/salon/gallery/salon-interior.svg',
    alt: 'Light, airy salon interior with arched mirrors',
    span: 'wide',
  },
  {
    id: 'styling-station',
    image: '/images/salon/gallery/styling-station.svg',
    alt: 'Elegant styling station with brass details',
    span: 'tall',
  },
  {
    id: 'spa-room',
    image: '/images/salon/gallery/spa-room.svg',
    alt: 'Candle-lit treatment room set for a facial',
    span: 'normal',
  },
  {
    id: 'product-shelf',
    image: '/images/salon/gallery/product-shelf.svg',
    alt: 'Curated shelf of premium hair and skin products',
    span: 'normal',
  },
  {
    id: 'nail-bar',
    image: '/images/salon/gallery/nail-bar.svg',
    alt: 'Minimalist nail bar with marble counter',
    span: 'normal',
  },
  {
    id: 'reception',
    image: '/images/salon/gallery/reception.svg',
    alt: 'Warm reception lounge with fresh flowers',
    span: 'wide',
  },
];
