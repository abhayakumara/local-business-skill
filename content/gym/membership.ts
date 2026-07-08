import type { MembershipPlan } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — your membership tiers. Set `isFeatured: true` on the plan you
// want highlighted. Prices are plain strings so you can format them any way.
// ─────────────────────────────────────────────────────────────────────────────

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    price: '₹2,999',
    cadence: 'per month',
    description: 'Everything you need to build a consistent training habit.',
    perks: [
      'Up to 8 group classes / month',
      'Full open-gym access',
      'Personalised onboarding session',
      'Member app & progress tracking',
    ],
    ctaLabel: 'Start Foundation',
  },
  {
    id: 'performance',
    name: 'Performance',
    price: '₹4,999',
    cadence: 'per month',
    description: 'Unlimited training for members who are all in.',
    perks: [
      'Unlimited group classes',
      'Full open-gym access',
      'Monthly InBody assessment',
      'Nutrition guidance & check-ins',
      'Bring-a-friend pass each month',
    ],
    isFeatured: true,
    ctaLabel: 'Go Performance',
  },
  {
    id: 'elite',
    name: 'Elite Coaching',
    price: '₹9,999',
    cadence: 'per month',
    description: 'Unlimited training plus dedicated 1-on-1 coaching.',
    perks: [
      'Everything in Performance',
      '2 personal training sessions / month',
      'Custom programming built for you',
      'Priority class booking',
      'Quarterly goal & strategy review',
    ],
    ctaLabel: 'Apply for Elite',
  },
];
