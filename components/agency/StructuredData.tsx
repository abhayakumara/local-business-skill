import { agency, agencyFaqs } from '@/content/agency';
import { siteUrl } from '@/lib/site';

// Organization + FAQ JSON-LD for the agency landing page.
export function StructuredData() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: agency.name,
    description: agency.description,
    url: siteUrl,
    email: agency.email,
    telephone: agency.phone,
    image: `${siteUrl}/images/agency/og-image.svg`,
    areaServed: 'India',
    knowsAbout: [
      'Web design',
      'Local SEO',
      'Restaurant websites',
      'Salon websites',
      'Dental practice websites',
      'Gym websites',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: agencyFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
