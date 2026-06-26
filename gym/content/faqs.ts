import type { Faq } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the questions people ask before they join.
// ─────────────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    id: 'beginner',
    question: 'I am a total beginner. Is this gym for me?',
    answer:
      'Absolutely. Most of our members started exactly where you are. Every new member gets an onboarding session, and our classes are coached and scalable — you will always train at the right level for you.',
  },
  {
    id: 'trial',
    question: 'Can I try before I commit?',
    answer:
      'Yes. Your first class is on us. Drop your details on the join form or give us a call and we will book you into a session that fits your schedule.',
  },
  {
    id: 'contract',
    question: 'Am I locked into a long contract?',
    answer:
      'No long-term lock-ins. Memberships are month-to-month and you can pause or cancel with 30 days notice. We want you to stay because you love it, not because you are stuck.',
  },
  {
    id: 'schedule',
    question: 'What are your class times?',
    answer:
      'We run classes from early morning through to evening, seven days a week, with open-gym access in between. Live timetables and booking are in the member app.',
  },
  {
    id: 'parking',
    question: 'Is there parking and showers?',
    answer:
      'There is free street parking on Foundry Street and a lot next door. On-site we have full changing rooms, showers, and secure lockers.',
  },
];
