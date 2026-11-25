import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import Reveal from '@/components/motion/Reveal'
import { ARTICLES, getArticle, formatDate, readingTime } from '@/lib/articles'
import { getService } from '@/lib/services'
import { getWhatsAppUrl, SITE_URL } from '@/lib/constants'

type Params = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const a = getArticle(params.slug)
  if (!a) return {}
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `/approfondimenti/${a.slug}` },
    openGraph: { type: 'article', url: `/approfondimenti/${a.slug}`, title: a.title, description: a.description, publishedTime: a.date, images: [a.image] },
  }
}

export default function ArticlePage({ params }: Params) {
  const a = getArticle(params.slug)
  if (!a) notFound()
  const service = a.service ? getService(a.service) : undefined
  const wa = getWhatsAppUrl(service?.waMessage ?? 'Ciao Danya, vorrei prenotare un trattamento.')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    image: `${SITE_URL}${a.image}`,
    mainEntityOfPage: `${SITE_URL}/approfondimenti/${a.slug}`,
    author: { '@type': 'Organization', name: 'Centro Riflessologia', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Centro Riflessologia', url: SITE_URL },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        eyebrow="Approfondimenti"
        title={a.title}
        subtitle={a.description}
        primary={{ label: service ? `Prenota: ${service.title}` : 'Prenota su WhatsApp', href: wa, variant: 'whatsapp' }}
        imageUrl={a.image}
        facts={[
          { label: 'Pubblicato', value: formatDate(a.date) },
          { label: 'Lettura', value: `${readingTime(a)} min` },
        ]}
      />

      <article className="container max-w-2xl py-14 md:py-20">
        <p className="text-xl leading-relaxed text-gray-800">{a.intro}</p>

        {a.sections.map((s) => (
          <Reveal key={s.heading} as="section" className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-brand md:text-3xl">{s.heading}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-gray-700">
                {p}
              </p>
            ))}
            {s.list ? (
              <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-700 marker:text-peach">
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ))}

        {service ? (
          <div className="mt-16 rounded-3xl border border-black/5 bg-[#FFFCF8] p-6 shadow-card md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand/60">In studio</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-brand">{service.title}</h2>
            <p className="mt-3 text-gray-700">{service.cardDescription}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a className="btn-whatsapp text-center" href={wa}>
                Prenota su WhatsApp
              </a>
              <Link className="btn btn-outline" href={`/servizi/${service.slug}`}>
                Scopri il trattamento
              </Link>
            </div>
          </div>
        ) : null}

        <Link href="/approfondimenti" className="mt-10 inline-block font-semibold text-brand hover:underline">
          ← Tutti gli approfondimenti
        </Link>
      </article>
    </>
  )
}
