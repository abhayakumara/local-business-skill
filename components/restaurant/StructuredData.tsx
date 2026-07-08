import { business, dishes, faqs } from '@/content/restaurant';
import { siteUrl } from '@/lib/site';

// JSON-LD for local SEO: Restaurant + Menu + FAQ. Rendered server-side so
// crawlers see it in the initial HTML.
export function StructuredData() {
  const dayMap: Record<string, string> = {
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday',
  };

  const openingHours = business.hours
    .filter((h) => h.open !== 'Closed')
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap[h.day],
      opens: to24h(h.open),
      closes: to24h(h.close),
    }));

  const restaurant = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: business.name,
    description: business.description,
    servesCuisine: business.cuisine,
    priceRange: business.priceRange,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    image: `${siteUrl}/images/restaurant/og-image.svg`,
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
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: {
        '@type': 'MenuSection',
        name: 'Signature',
        hasMenuItem: dishes
          .filter((d) => d.isSignature)
          .map((d) => ({
            '@type': 'MenuItem',
            name: d.name,
            description: d.description,
            offers: { '@type': 'Offer', price: d.price.replace(/[^\d.]/g, ''), priceCurrency: 'INR' },
          })),
      },
    },
    acceptsReservations: true,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurant) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

// "5:00 PM" -> "17:00" for schema.org opening hours.
function to24h(time: string): string {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return time;
  let [, hh, mm, period] = match;
  let hours = parseInt(hh, 10);
  if (period.toUpperCase() === 'PM' && hours !== 12) hours += 12;
  if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, '0')}:${mm}`;
}
