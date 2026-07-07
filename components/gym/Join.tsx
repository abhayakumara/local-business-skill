'use client';

import { useState, type FormEvent } from 'react';
import { business, programs, membershipPlans } from '@/content/gym';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowIcon } from './icons';

// Demo join form. No backend required — on submit it composes a pre-filled email
// so the demo is fully functional on Vercel with zero config. Swap `handleSubmit`
// for a POST to your CRM or trial-booking provider when going live.
export function Join() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Free class request — ${data.get('name')}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
        `Phone: ${data.get('phone')}\n` +
        `Email: ${data.get('email')}\n` +
        `Interested in: ${data.get('program')}\n` +
        `Plan in mind: ${data.get('plan')}\n` +
        `Preferred start: ${data.get('date')}\n\n` +
        `Goals / notes: ${data.get('notes') || '—'}`,
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  }

  return (
    <section
      id="join"
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="overflow-hidden rounded-4xl bg-ink shadow-lift lg:grid lg:grid-cols-2">
          {/* Copy side */}
          <div className="relative flex flex-col justify-center gap-6 p-10 sm:p-14">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(242,74,22,0.35),transparent_60%)]"
              aria-hidden
            />
            <div className="relative">
              <span className="eyebrow text-forge-400">
                <span className="h-px w-6 bg-forge-500" aria-hidden />
                Get Started
              </span>
              <h2 className="heading-display mt-4 text-4xl text-white sm:text-5xl">
                Your first class is free
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                Tell us a little about you and we&apos;ll book you into a session
                that fits. No pressure, no contracts — just come train and see if
                Apex is your kind of gym.
              </p>
              <div className="mt-8 space-y-2 text-sm text-white/75">
                <p>
                  <span className="text-white/45">Call&nbsp;&nbsp;</span>
                  <a
                    href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
                    className="font-semibold text-forge-300 hover:underline"
                  >
                    {business.phone}
                  </a>
                </p>
                <p>
                  <span className="text-white/45">Email&nbsp;</span>
                  <a
                    href={`mailto:${business.email}`}
                    className="font-semibold text-forge-300 hover:underline"
                  >
                    {business.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="bg-white p-8 sm:p-12">
            {status === 'sent' ? (
              <Reveal className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forge-100 text-forge-600">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="heading-display text-2xl text-ink">
                  Let&apos;s go!
                </h3>
                <p className="max-w-sm text-sm text-ink/60">
                  Your email app should have opened with the request ready to
                  send. We&apos;ll confirm your free class shortly after you hit
                  send.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-2"
                >
                  Send another request
                </button>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field label="Full name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="field"
                    placeholder="Jordan Rivera"
                  />
                </Field>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Phone" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="field"
                      placeholder="(415) 555-0000"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="field"
                      placeholder="you@email.com"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Interested in" htmlFor="program">
                    <select id="program" name="program" required className="field">
                      {programs.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </Field>
                  <Field label="Plan in mind" htmlFor="plan">
                    <select id="plan" name="plan" required className="field">
                      {membershipPlans.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Just the free class for now">
                        Just the free class for now
                      </option>
                    </select>
                  </Field>
                </div>

                <Field label="Preferred start date" htmlFor="date">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="field"
                  />
                </Field>

                <Field label="Your goals (optional)" htmlFor="notes">
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className="field resize-none"
                    placeholder="What do you want to achieve? Any injuries we should know about?"
                  />
                </Field>

                <button type="submit" className="btn-forge mt-1 w-full text-base">
                  Claim My Free Class
                  <ArrowIcon width={18} height={18} />
                </button>
                <p className="text-center text-xs text-ink/45">
                  No contracts. We&apos;ll never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs font-bold uppercase tracking-wide text-ink/55"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
