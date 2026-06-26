import type { Faq } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the questions patients ask before they book.
// ─────────────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    id: 'new-patients',
    question: 'Are you taking new patients?',
    answer:
      'Yes — we are always happy to welcome new patients and families. Your first visit includes a full exam, any necessary X-rays, and a clear, no-pressure plan for your care.',
  },
  {
    id: 'nervous',
    question: 'I am nervous about the dentist. Can you help?',
    answer:
      'Absolutely. A calm, gentle experience is at the heart of what we do. Tell us how you feel and we will go at your pace, explain everything, and offer comfort options to keep you relaxed.',
  },
  {
    id: 'insurance',
    question: 'Do you take my insurance?',
    answer:
      'We accept most major dental plans and will file claims on your behalf. If you are unsure, call us with your provider and we will confirm your coverage before any treatment.',
  },
  {
    id: 'emergency',
    question: 'What if I have a dental emergency?',
    answer:
      'Call us as early as you can and we will do everything possible to see you the same day. For pain, swelling, or a broken tooth, we keep emergency slots open daily.',
  },
  {
    id: 'parking',
    question: 'Is there parking and easy access?',
    answer:
      'There is free patient parking behind the building and step-free access throughout. We are also a short walk from the 24th Street transit stop.',
  },
];
