'use client';

import { useState, type FormEvent } from 'react';
import { agency, demoSites } from '@/content/agency';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Magnetic } from '@/components/ui/Magnetic';
import { MailIcon, PhoneIcon } from './icons';

// Zero-backend contact form: composes a pre-filled email in the visitor's
// mail client. Swap for a form service later without touching the markup.
export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Project enquiry — ${data.get('business') || 'my business'}`;
    const bodyLines = [
      `Name: ${data.get('name')}`,
      `Business: ${data.get('business')}`,
      `Industry: ${data.get('industry')}`,
      '',
      `${data.get('message')}`,
    ];
    window.location.href = `mailto:${agency.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative scroll-mt-24 pb-28 pt-4 sm:pb-36">
      <div className="container-page">
        <Reveal className="noise relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-aurora-violet/[0.16] via-white/[0.03] to-aurora-cyan/[0.1] p-8 sm:p-14">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-aurora-violet/20 blur-[100px]"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col gap-8">
              <SectionHeading
                align="left"
                eyebrow="Start a project"
                title="Your competitors’ websites are one tab away. Let’s make that a problem for them."
                description="Tell us about your business — we’ll reply within one working day with honest advice, whether or not we work together."
              />
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${agency.email}`}
                  className="inline-flex w-fit items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <span className="glass-dark grid h-10 w-10 place-items-center rounded-xl text-aurora-cyan">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  {agency.email}
                </a>
                <a
                  href={`tel:${agency.phone.replace(/[^\d+]/g, '')}`}
                  className="inline-flex w-fit items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <span className="glass-dark grid h-10 w-10 place-items-center rounded-xl text-aurora-cyan">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  {agency.phone}
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Your name
                  </span>
                  <input name="name" required autoComplete="name" className="field" placeholder="Alex Rivera" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Business name
                  </span>
                  <input name="business" required className="field" placeholder="Rivera’s Kitchen" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Industry
                </span>
                <select name="industry" className="field" defaultValue="Restaurant">
                  {demoSites.map((d) => (
                    <option key={d.slug} value={d.industry}>
                      {d.industry}
                    </option>
                  ))}
                  <option value="Other">Something else</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  What are you hoping for?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="field resize-none"
                  placeholder="We need a site that finally does our food justice…"
                />
              </label>
              <Magnetic strength={8} className="mt-2">
                <button type="submit" className="btn-aurora w-full !py-4">
                  Send enquiry
                </button>
              </Magnetic>
              <p aria-live="polite" className="min-h-5 text-center text-xs text-white/45">
                {sent
                  ? 'Your email app should be open — we’ll reply within one working day.'
                  : 'Opens your email app — no data is stored on this site.'}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
