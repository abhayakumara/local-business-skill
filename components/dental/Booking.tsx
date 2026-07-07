'use client';

import { useState, type FormEvent } from 'react';
import { business, services } from '@/content/dental';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowIcon } from './icons';

// Demo booking form. No backend required — on submit it composes a pre-filled
// email so the demo is fully functional on Vercel with zero config. Swap
// `handleSubmit` for a POST to your scheduling provider when going live.
export function Booking() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Appointment request — ${data.get('service')} for ${data.get('name')}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
        `Phone: ${data.get('phone')}\n` +
        `Treatment: ${data.get('service')}\n` +
        `New patient: ${data.get('newPatient')}\n` +
        `Preferred date: ${data.get('date')}\n` +
        `Preferred time: ${data.get('time')}\n\n` +
        `Notes: ${data.get('notes') || '—'}`,
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  }

  return (
    <section
      id="book"
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="overflow-hidden rounded-4xl bg-sky-700 shadow-lift lg:grid lg:grid-cols-2">
          {/* Copy side */}
          <div className="relative flex flex-col justify-center gap-6 p-10 sm:p-14">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(63,191,156,0.30),transparent_60%)]"
              aria-hidden
            />
            <div className="relative">
              <span className="eyebrow text-mint-200">
                <span className="h-px w-6 bg-mint-300" aria-hidden />
                Appointments
              </span>
              <h2 className="heading-display mt-4 text-4xl text-white sm:text-5xl">
                Book your visit
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                Tell us what you need and when suits you. We&apos;ll confirm your
                appointment within the hour during opening times. Prefer to talk
                it through? Just give us a call.
              </p>
              <div className="mt-8 space-y-2 text-sm text-white/75">
                <p>
                  <span className="text-white/45">Call&nbsp;&nbsp;</span>
                  <a
                    href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
                    className="font-semibold text-mint-200 hover:underline"
                  >
                    {business.phone}
                  </a>
                </p>
                <p>
                  <span className="text-white/45">Email&nbsp;</span>
                  <a
                    href={`mailto:${business.email}`}
                    className="font-semibold text-mint-200 hover:underline"
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
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-600">
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
                  Almost there!
                </h3>
                <p className="max-w-sm text-sm text-ink/60">
                  Your email app should have opened with the request ready to
                  send. We&apos;ll confirm your appointment shortly after you hit
                  send.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-2"
                >
                  Make another request
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
                  <Field label="New patient?" htmlFor="newPatient">
                    <select
                      id="newPatient"
                      name="newPatient"
                      required
                      className="field"
                    >
                      <option value="Yes, new patient">Yes, new patient</option>
                      <option value="No, existing patient">
                        No, existing patient
                      </option>
                    </select>
                  </Field>
                </div>

                <Field label="Treatment" htmlFor="service">
                  <select id="service" name="service" required className="field">
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet — please advise</option>
                  </select>
                </Field>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Preferred date" htmlFor="date">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="field"
                    />
                  </Field>
                  <Field label="Preferred time" htmlFor="time">
                    <input
                      id="time"
                      name="time"
                      type="time"
                      required
                      className="field"
                    />
                  </Field>
                </div>

                <Field label="Notes (optional)" htmlFor="notes">
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className="field resize-none"
                    placeholder="Anything we should know — symptoms, anxieties, insurance…"
                  />
                </Field>

                <button type="submit" className="btn-primary mt-1 w-full text-base">
                  Request Appointment
                  <ArrowIcon width={18} height={18} />
                </button>
                <p className="text-center text-xs text-ink/45">
                  We&apos;ll never share your details. Confirmation usually within
                  the hour.
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
        className="text-xs font-semibold uppercase tracking-wide text-ink/55"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
