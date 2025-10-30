import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://centro-riflessologia.vercel.app'
  const routes = [
    '',
    '/servizi',
    '/riflessologia-plantare',
    '/operatore-olistico',
    '/faq',
    '/contatti',
  ]
  const now = new Date()
  return routes.map((path) => ({
    url: baseUrl + (path || '/'),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}


