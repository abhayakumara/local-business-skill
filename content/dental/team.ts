import type { TeamMember } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the clinicians patients will meet. Real names, credentials,
// and headshots build trust fast. Images live in /public/images/dental/team named
// after each person.
// ─────────────────────────────────────────────────────────────────────────────

export const team: TeamMember[] = [
  {
    id: 'dr-elena-marsh',
    name: 'Dr. Elena Marsh',
    role: 'Principal Dentist · DDS',
    specialty: 'Cosmetic & restorative dentistry',
    image: '/images/dental/team/dr-elena-marsh.svg',
    imageAlt: 'Portrait of Dr. Elena Marsh, Principal Dentist',
  },
  {
    id: 'dr-james-oduya',
    name: 'Dr. James Oduya',
    role: 'Implant & Restorative Dentist',
    specialty: 'Implants & oral surgery',
    image: '/images/dental/team/dr-james-oduya.svg',
    imageAlt: 'Portrait of Dr. James Oduya, Implant Dentist',
  },
  {
    id: 'dr-aisha-khan',
    name: 'Dr. Aisha Khan',
    role: 'Orthodontist',
    specialty: 'Clear aligners & alignment',
    image: '/images/dental/team/dr-aisha-khan.svg',
    imageAlt: 'Portrait of Dr. Aisha Khan, Orthodontist',
  },
  {
    id: 'marie-chen',
    name: 'Marie Chen',
    role: 'Lead Dental Hygienist',
    specialty: 'Preventive & gum care',
    image: '/images/dental/team/marie-chen.svg',
    imageAlt: 'Portrait of Marie Chen, Lead Dental Hygienist',
  },
];
