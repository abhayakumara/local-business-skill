import type { Faq } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the questions guests actually ask before they book.
// ─────────────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    id: 'reservations',
    question: 'Do you take reservations?',
    answer:
      'Yes — we recommend booking ahead, especially on weekends. Use the reservation form on this page or call us directly and we will confirm within the hour.',
  },
  {
    id: 'dietary',
    question: 'Can you accommodate dietary requirements?',
    answer:
      'Absolutely. A large part of our menu is vegetarian, and we offer vegan, gluten-free, and nut-free preparations. Let us know when you book and our kitchen will take care of the rest.',
  },
  {
    id: 'groups',
    question: 'Do you host large groups or private events?',
    answer:
      'We love a celebration. Our team can arrange set menus for groups of eight or more and full private buy-outs of the dining room. Email us to start planning.',
  },
  {
    id: 'parking',
    question: 'Is there parking nearby?',
    answer:
      'Street parking is available on Magnolia Avenue, and there is a public garage two minutes away on Oak Street. We are also a short walk from the 24th Street transit stop.',
  },
  {
    id: 'takeaway',
    question: 'Do you offer takeaway or delivery?',
    answer:
      'Yes — the full menu is available for collection, and delivery is offered within three miles through our website and partner apps.',
  },
];
