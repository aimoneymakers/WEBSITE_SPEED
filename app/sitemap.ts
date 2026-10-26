import type { MetadataRoute } from 'next'
import { site } from '@/site.config'
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/pricing', '/about', '/contact'].map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }))
}
