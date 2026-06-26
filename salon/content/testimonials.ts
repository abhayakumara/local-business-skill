import type { Testimonial } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — real client reviews build trust fastest. Swap these for
// genuine quotes (Google / Instagram) with permission.
// ─────────────────────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 'hannah',
    quote:
      'Best balayage I have ever had — Lena actually listened, and it grows out flawlessly. The whole place feels like a deep exhale.',
    author: 'Hannah W.',
    context: 'Balayage & cut',
    rating: 5,
  },
  {
    id: 'priya',
    quote:
      'My signature facial with Sofia left my skin glowing for a week. Calm, attentive, never rushed. I have already rebooked.',
    author: 'Priya M.',
    context: 'Signature facial',
    rating: 5,
  },
  {
    id: 'james',
    quote:
      'I came for a cut and left feeling looked after. Effortless from booking to the cup of tea on arrival. Genuinely lovely team.',
    author: 'James L.',
    context: 'Cut & style',
    rating: 5,
  },
  {
    id: 'noor',
    quote:
      'The aromatherapy massage is the most relaxed I have felt in months. The room, the scent, the care — all of it is just right.',
    author: 'Noor A.',
    context: 'Aromatherapy massage',
    rating: 5,
  },
];
