import type { JourneyStep } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the four steps of a new patient's first experience.
// This section exists to remove fear: keep it warm, concrete, and honest.
// ─────────────────────────────────────────────────────────────────────────────

export const journeySteps: JourneyStep[] = [
  {
    id: 'book',
    number: '01',
    name: 'Book in minutes',
    description:
      'Request an appointment online or over WhatsApp — evenings and Saturday slots included. We confirm the same day.',
    icon: 'clock',
    note: 'Takes 2 minutes',
  },
  {
    id: 'meet',
    number: '02',
    name: 'Meet your dentist',
    description:
      'A relaxed first visit: full check-up, digital scans on screen, and every question answered in plain language. No lectures.',
    icon: 'tooth',
    note: 'Your first visit',
  },
  {
    id: 'plan',
    number: '03',
    name: 'A plan you approve',
    description:
      'Clear options with exact ₹ pricing and insurance coverage worked out before anything starts. You decide the pace.',
    icon: 'shield',
    note: 'Transparent pricing',
  },
  {
    id: 'smile',
    number: '04',
    name: 'Gentle care, lasting smile',
    description:
      'Treatment built around comfort — numbing that works, breaks when you need them, and follow-up checks on us.',
    icon: 'sparkle',
    note: 'Aftercare included',
  },
];
