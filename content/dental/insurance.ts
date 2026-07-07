import type { InsuranceInfo } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the plans you accept and how patients can pay. This reassures
// people before they call. Update the list to match your actual providers.
// ─────────────────────────────────────────────────────────────────────────────

export const insurance: InsuranceInfo = {
  heading: 'Insurance & payment, made simple',
  description:
    'We accept most major dental plans and file claims for you. No insurance? Our in-house membership makes care affordable with predictable, transparent pricing.',
  plans: [
    { id: 'delta-dental', name: 'Delta Dental' },
    { id: 'cigna', name: 'Cigna' },
    { id: 'aetna', name: 'Aetna' },
    { id: 'metlife', name: 'MetLife' },
    { id: 'guardian', name: 'Guardian' },
    { id: 'united', name: 'UnitedHealthcare' },
  ],
  membershipNote:
    'Ask about our Northway Membership — two cleans a year, exams, X-rays, and member-only savings for a simple monthly fee.',
};
