import type { MetadataRoute } from 'next';
import { business } from '@/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url;
  const sections = ['', '#menu', '#gallery', '#reserve', '#visit'];

  return sections.map((section) => ({
    url: `${base}/${section}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: section === '' ? 1 : 0.8,
  }));
}
