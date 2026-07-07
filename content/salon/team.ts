import type { TeamMember } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the people behind the chair. Real names + headshots build
// trust fast. Images live in /public/images/salon/team named after each person.
// ─────────────────────────────────────────────────────────────────────────────

export const team: TeamMember[] = [
  {
    id: 'amara-okafor',
    name: 'Amara Okafor',
    role: 'Creative Director · Master Stylist',
    specialty: 'Precision cutting & curly hair',
    image: '/images/salon/team/amara-okafor.svg',
    imageAlt: 'Portrait of Amara Okafor, Creative Director',
  },
  {
    id: 'lena-park',
    name: 'Lena Park',
    role: 'Senior Colourist',
    specialty: 'Balayage & blonding',
    image: '/images/salon/team/lena-park.svg',
    imageAlt: 'Portrait of Lena Park, Senior Colourist',
  },
  {
    id: 'sofia-rossi',
    name: 'Sofia Rossi',
    role: 'Lead Skin Therapist',
    specialty: 'Facials & advanced skincare',
    image: '/images/salon/team/sofia-rossi.svg',
    imageAlt: 'Portrait of Sofia Rossi, Lead Skin Therapist',
  },
  {
    id: 'maya-singh',
    name: 'Maya Singh',
    role: 'Spa & Massage Therapist',
    specialty: 'Aromatherapy & hot stone',
    image: '/images/salon/team/maya-singh.svg',
    imageAlt: 'Portrait of Maya Singh, Spa Therapist',
  },
];
