import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://centro-riflessologia.vercel.app'
  const now = new Date()

  return [
    { url: baseUrl + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: baseUrl + '/servizi', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/riflessologia-plantare', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...SERVICES.map((s) => ({ url: `${baseUrl}/servizi/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: baseUrl + '/operatore-olistico', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/faq', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: baseUrl + '/contatti', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
