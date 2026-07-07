import type { Faq } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the questions clients ask before they book.
// ─────────────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    id: 'booking',
    question: 'How do I book an appointment?',
    answer:
      'Use the booking form on this page or call us directly. We will confirm your stylist and time within the hour. For colour services we always start with a quick consultation.',
  },
  {
    id: 'consultation',
    question: 'Do colour appointments include a consultation?',
    answer:
      'Yes. Every colour and major restyle begins with a complimentary consultation so we can understand your hair, your routine, and the look you are after before we start.',
  },
  {
    id: 'cancellation',
    question: 'What is your cancellation policy?',
    answer:
      'Plans change — we simply ask for 24 hours notice so we can offer the slot to someone else. Late cancellations may incur a small fee for longer services.',
  },
  {
    id: 'products',
    question: 'What products do you use?',
    answer:
      'We work with professional, cruelty-free hair and skincare lines chosen for results and kindness to skin. Your therapist is happy to recommend a simple routine to take home.',
  },
  {
    id: 'parking',
    question: 'Is there parking nearby?',
    answer:
      'There is metered street parking on Linden Court and a public garage one block away on Gough Street. We are also a five-minute walk from the Van Ness transit stop.',
  },
];
