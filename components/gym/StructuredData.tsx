import { business, programs, membershipPlans, faqs } from '@/content/gym';
import { siteUrl } from '@/lib/site';

// JSON-LD for local SEO: ExerciseGym + program catalog + membership offers +
// FAQ. Rendered server-side so crawlers see it in the initial HTML.
export function StructuredData() {
  const openingHours = business.hours
    .filter((h) => h.open !== 'Closed')
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: to24h(h.open),
      closes: to24h(h.close),
    }));

  const gym = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: business.name,
    description: business.description,
    priceRange: business.priceRange,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    image: `${siteUrl}/images/gym/og-image.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: openingHours,
    sameAs: business.social.map((s) => s.href),
    makesOffer: membershipPlans.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      price: p.price.replace(/[^\d.]/g, ''),
      priceCurrency: 'USD',
      description: p.description,
      category: 'Gym membership',
    })),
    amenityFeature: programs
      .filter((p) => p.isSignature)
      .map((p) => ({
        '@type': 'LocationFeatureSpecification',
        name: p.name,
        value: true,
      })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gym) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

// "9:00 AM" -> "09:00" for schema.org opening hours.
function to24h(time: string): string {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return time;
  const [, hh, mm, period] = match;
  let hours = parseInt(hh, 10);
  if (period.toUpperCase() === 'PM' && hours !== 12) hours += 12;
  if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, '0')}:${mm}`;
}
