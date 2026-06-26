import type { MetadataRoute } from 'next';
import { business } from '@/content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${business.url}/sitemap.xml`,
    host: business.url,
  };
}
