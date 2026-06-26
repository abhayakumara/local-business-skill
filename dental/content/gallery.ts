import type { GalleryImage } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — practice + team photography for the gallery grid.
// Drop real .webp photos into /public/images/gallery and update the paths.
// ─────────────────────────────────────────────────────────────────────────────

export const gallery: GalleryImage[] = [
  {
    id: 'reception',
    image: '/images/gallery/reception.svg',
    alt: 'Bright, calm reception with natural light',
    span: 'wide',
  },
  {
    id: 'treatment-room',
    image: '/images/gallery/treatment-room.svg',
    alt: 'Modern treatment room with comfortable chair',
    span: 'tall',
  },
  {
    id: 'technology',
    image: '/images/gallery/technology.svg',
    alt: 'Digital scanning technology for precise care',
    span: 'normal',
  },
  {
    id: 'consultation',
    image: '/images/gallery/consultation.svg',
    alt: 'Dentist explaining a treatment plan to a patient',
    span: 'normal',
  },
  {
    id: 'kids-corner',
    image: '/images/gallery/kids-corner.svg',
    alt: 'Welcoming kids corner in the waiting area',
    span: 'normal',
  },
  {
    id: 'sterilization',
    image: '/images/gallery/sterilization.svg',
    alt: 'Spotless sterilization and infection-control area',
    span: 'wide',
  },
];
