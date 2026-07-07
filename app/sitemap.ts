import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

// Every route in the showcase: the agency landing page plus one URL per demo.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ['', '/restaurant', '/salon', '/dental', '/gym'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
