import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://centro-riflessologia.vercel.app'
  const now = new Date()

  return [
    { url: baseUrl + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: baseUrl + '/servizi', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/riflessologia-plantare', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/servizi/massaggio-riflessologia-corpo', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/servizi/riflessologia-impacco', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/servizi/stone-massage', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/servizi/alius-corpo', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/servizi/alius-viso-essere', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/servizi/massaggio-parziale-bambino', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/operatore-olistico', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/faq', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: baseUrl + '/contatti', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
