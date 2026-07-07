import type { Testimonial } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — real guest reviews build trust fastest. Swap these for
// genuine quotes (Google/Tripadvisor) with permission.
// ─────────────────────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 'priya',
    quote:
      'The butter chicken is the best I have had outside of Delhi. The room feels like a warm hug — we have already booked again.',
    author: 'Priya N.',
    context: 'Anniversary dinner',
    rating: 5,
  },
  {
    id: 'marcus',
    quote:
      'Every plate looked like art and tasted even better. Service was effortless and the saffron cocktails are dangerous.',
    author: 'Marcus T.',
    context: 'Date night',
    rating: 5,
  },
  {
    id: 'elena',
    quote:
      'We brought a table of twelve and they handled every dietary request with grace. Genuinely the smoothest big group dinner we have hosted.',
    author: 'Elena R.',
    context: 'Birthday celebration',
    rating: 5,
  },
  {
    id: 'david',
    quote:
      'I am a regular now. The dal makhani alone is worth the trip across town. Cosy, refined, never stuffy.',
    author: 'David K.',
    context: 'Weeknight regular',
    rating: 5,
  },
];
