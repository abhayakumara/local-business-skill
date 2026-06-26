import type { Trainer } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the coaches members will train with. Real names, certs, and
// action shots build trust fast. Images live in /public/images/trainers named
// after each person.
// ─────────────────────────────────────────────────────────────────────────────

export const trainers: Trainer[] = [
  {
    id: 'marcus-reid',
    name: 'Marcus Reid',
    role: 'Head Coach · CSCS',
    specialty: 'Strength & powerlifting',
    image: '/images/trainers/marcus-reid.svg',
    imageAlt: 'Portrait of Marcus Reid, Head Coach',
  },
  {
    id: 'tasha-bell',
    name: 'Tasha Bell',
    role: 'Conditioning Coach',
    specialty: 'HIIT & engine building',
    image: '/images/trainers/tasha-bell.svg',
    imageAlt: 'Portrait of Tasha Bell, Conditioning Coach',
  },
  {
    id: 'diego-santos',
    name: 'Diego Santos',
    role: 'Weightlifting Coach',
    specialty: 'Olympic lifting & technique',
    image: '/images/trainers/diego-santos.svg',
    imageAlt: 'Portrait of Diego Santos, Weightlifting Coach',
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Movement & Recovery Coach',
    specialty: 'Mobility & yoga',
    image: '/images/trainers/priya-nair.svg',
    imageAlt: 'Portrait of Priya Nair, Movement Coach',
  },
];
