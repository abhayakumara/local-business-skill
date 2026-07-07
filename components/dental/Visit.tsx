import { business } from '@/content/dental';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from './icons';

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-20 bg-cloud py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="Find Us"
          title="Come and visit"
          description="Easy to reach, with free patient parking and step-free access throughout."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Details */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-8 rounded-4xl bg-white p-8 shadow-soft sm:p-10">
              <InfoRow icon={<MapPinIcon />} label="Address">
                <a
                  href={business.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-600"
                >
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region}{' '}
                  {business.address.postalCode}
                </a>
              </InfoRow>

              <InfoRow icon={<ClockIcon />} label="Opening hours">
                <ul className="space-y-1">
                  {business.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-6 text-sm"
                    >
                      <span className="text-ink/60">{h.day}</span>
                      <span className="font-medium text-ink">
                        {h.open === 'Closed'
                          ? 'Closed'
                          : `${h.open} – ${h.close}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </InfoRow>

              <div className="grid grid-cols-1 gap-4 border-t border-ink/10 pt-6 sm:grid-cols-2">
                <InfoRow icon={<PhoneIcon />} label="Call us" compact>
                  <a
                    href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
                    className="hover:text-sky-600"
                  >
                    {business.phone}
                  </a>
                </InfoRow>
                <InfoRow icon={<MailIcon />} label="Email" compact>
                  <a
                    href={`mailto:${business.email}`}
                    className="break-all hover:text-sky-600"
                  >
                    {business.email}
                  </a>
                </InfoRow>
              </div>

              <a
                href={business.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-auto"
              >
                Get Directions
              </a>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="h-full min-h-[360px] overflow-hidden rounded-4xl shadow-soft">
              <iframe
                title={`Map showing the location of ${business.name}`}
                src={business.address.mapsEmbedUrl}
                className="h-full w-full border-0"
                style={{ minHeight: 360 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
  compact,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
        {icon}
      </span>
      <div className={compact ? 'flex flex-col gap-0.5' : 'flex flex-col gap-2'}>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
          {label}
        </p>
        <div className="text-sm leading-relaxed text-ink/80">{children}</div>
      </div>
    </div>
  );
}
