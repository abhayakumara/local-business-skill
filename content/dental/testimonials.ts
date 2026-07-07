import type { Testimonial } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — real patient reviews build trust fastest. Swap these for
// genuine quotes (Google / Healthgrades) with permission.
// ─────────────────────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 'rachel',
    quote:
      'I have always been nervous at the dentist. Dr. Marsh explained every step and I genuinely felt relaxed. The cleanest, calmest practice I have been to.',
    author: 'Rachel T.',
    context: 'Check-up & whitening',
    rating: 5,
  },
  {
    id: 'daniel',
    quote:
      'My implant looks and feels exactly like a real tooth. Dr. Oduya was meticulous and the whole team made it painless. Worth every penny.',
    author: 'Daniel P.',
    context: 'Dental implant',
    rating: 5,
  },
  {
    id: 'sofia',
    quote:
      'The clear aligners fit perfectly into my life and my smile is transformed. Friendly reminders, easy appointments, real results.',
    author: 'Sofia R.',
    context: 'Clear aligners',
    rating: 5,
  },
  {
    id: 'marcus',
    quote:
      'They are brilliant with my kids — no tears, lots of smiles. Honest advice and never any pressure. We have finally found our family dentist.',
    author: 'Marcus L.',
    context: "Children's dentistry",
    rating: 5,
  },
];
