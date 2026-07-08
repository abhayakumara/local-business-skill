import type { InsuranceInfo } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the plans you accept and how patients can pay. This reassures
// people before they call. Update the list to match your actual providers.
// ─────────────────────────────────────────────────────────────────────────────

export const insurance: InsuranceInfo = {
  heading: 'Insurance & payment, made simple',
  description:
    'We work with all major Indian health insurers and handle the cashless paperwork for you. No insurance? Our in-house membership makes care affordable with predictable, transparent pricing.',
  plans: [
    { id: 'star-health', name: 'Star Health' },
    { id: 'hdfc-ergo', name: 'HDFC ERGO' },
    { id: 'icici-lombard', name: 'ICICI Lombard' },
    { id: 'niva-bupa', name: 'Niva Bupa' },
    { id: 'care-health', name: 'Care Health' },
    { id: 'tata-aig', name: 'Tata AIG' },
  ],
  membershipNote:
    'Ask about our Northway Membership — two cleans a year, exams, X-rays, and member-only savings for a simple monthly fee.',
};
