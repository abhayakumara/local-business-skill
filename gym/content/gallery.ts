import type { GalleryImage } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — gym floor + community photography for the gallery grid.
// Drop real .webp photos into /public/images/gallery and update the paths.
// ─────────────────────────────────────────────────────────────────────────────

export const gallery: GalleryImage[] = [
  {
    id: 'training-floor',
    image: '/images/gallery/training-floor.svg',
    alt: 'Open training floor with racks and platforms',
    span: 'wide',
  },
  {
    id: 'rig',
    image: '/images/gallery/rig.svg',
    alt: 'Members training on the pull-up rig',
    span: 'tall',
  },
  {
    id: 'free-weights',
    image: '/images/gallery/free-weights.svg',
    alt: 'Dumbbell and free-weight area',
    span: 'normal',
  },
  {
    id: 'conditioning-zone',
    image: '/images/gallery/conditioning-zone.svg',
    alt: 'Rowers and assault bikes in the conditioning zone',
    span: 'normal',
  },
  {
    id: 'community',
    image: '/images/gallery/community.svg',
    alt: 'Members high-fiving after a class',
    span: 'normal',
  },
  {
    id: 'recovery-lounge',
    image: '/images/gallery/recovery-lounge.svg',
    alt: 'Stretching and recovery lounge',
    span: 'wide',
  },
];
