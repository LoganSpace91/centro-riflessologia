import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import QA from '@/components/QA'
import CheckItem from '@/components/CheckItem'
import ServiceCard from '@/components/ServiceCard'
import Reveal from '@/components/motion/Reveal'
import { SERVICES, getService } from '@/lib/services'
import { ARTICLES } from '@/lib/articles'
import { getWhatsAppUrl, INSTAGRAM_URL } from '@/lib/constants'

type Params = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const s = getService(params.slug)
  return s ? { title: s.metaTitle, description: s.description, keywords: s.keywords, alternates: { canonical: `/servizi/${s.slug}` } } : {}
}

const h2 = 'font-display text-2xl font-semibold text-brand md:text-3xl'

export default function ServicePage({ params }: Params) {
  const s = getService(params.slug)
  if (!s) notFound()

  const wa = getWhatsAppUrl(s.waMessage)
  const i = SERVICES.indexOf(s)
  const others = [1, 2].map((n) => SERVICES[(i + n) % SERVICES.length])
  const articles = ARTICLES.filter((a) => a.service === s.slug)

  return (
    <>
      <Hero
        eyebrow="Trattamento · San Bonifacio (VR)"
        title={s.title}
        subtitle={s.subtitle}
        primary={{ label: 'Prenota su WhatsApp', href: wa, variant: 'whatsapp' }}
        secondary={{ label: 'Scrivi su Instagram', href: INSTAGRAM_URL, variant: 'instagram' }}
        imageUrl={s.image}
        facts={[
          { label: 'Durata', value: s.duration },
          { label: 'Prezzo', value: s.price },
        ]}
      />

      <div className="container grid gap-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
        <div className="space-y-16">
          {s.about.map((b) => (
            <Reveal key={b.heading} as="section" className="max-w-2xl">
              <h2 className={h2}>{b.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">{b.text}</p>
            </Reveal>
          ))}

          {s.benefits ? (
            <section>
              <Reveal as="h2" className={h2}>
                {s.benefits.title}
              </Reveal>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.benefits.items.map((b) => (
                  <li key={b} className="card !p-4">
                    <CheckItem className="text-gray-700">{b}</CheckItem>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="grid gap-6 md:grid-cols-2">
            <section className={`card ${s.forWho ? '' : 'md:col-span-2'}`}>
              <h2 className="text-xl font-semibold text-brand">Come si svolge</h2>
              <p className="mt-3 leading-relaxed text-gray-700">{s.how}</p>
            </section>
            {s.forWho ? (
              <section className="card">
                <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
                <p className="mt-3 leading-relaxed text-gray-700">{s.forWho}</p>
              </section>
            ) : null}
          </div>

          <section>
            <Reveal as="h2" className={h2}>
              Domande frequenti
            </Reveal>
            <div className="mt-6 grid gap-3">
              {s.faq.map((f) => (
                <QA key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </section>

          {articles.length ? (
            <section>
              <h2 className={h2}>Approfondimenti</h2>
              <ul className="mt-6 grid gap-3">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/approfondimenti/${a.slug}`} className="card block !p-5 transition hover:-translate-y-0.5">
                      <span className="font-display text-lg font-semibold text-brand">{a.title}</span>
                      <span className="mt-1 block text-gray-600">{a.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-black/5 bg-[#FFFCF8] p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand/60">Prenota</p>
            <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-brand">{s.title}</h2>
            <dl className="mt-5 divide-y divide-black/5 border-y border-black/5">
              <div className="flex justify-between py-3">
                <dt className="text-gray-600">Durata</dt>
                <dd className="font-semibold text-brand">{s.duration}</dd>
              </div>
              <div className="flex justify-between py-3">
                <dt className="text-gray-600">Prezzo</dt>
                <dd className="font-display text-xl font-semibold text-brand">{s.price}</dd>
              </div>
            </dl>
            {s.priceNote ? <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.priceNote}</p> : null}
            <a className="btn-whatsapp mt-6 w-full" href={wa}>
              Prenota su WhatsApp
            </a>
            <a className="btn btn-outline mt-3 w-full" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Scrivi su Instagram
            </a>
          </div>
        </aside>
      </div>

      <section className="border-t border-black/5 bg-surface/50 py-14 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className={h2}>Altri trattamenti</h2>
            <Link href="/servizi" className="font-semibold text-brand hover:underline">
              Tutti i servizi →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <ServiceCard
                key={o.slug}
                title={o.cardTitle}
                description={o.cardDescription}
                href={`/servizi/${o.slug}`}
                backgroundUrl={o.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
