import type { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import Reveal from '@/components/motion/Reveal'
import { ARTICLES, formatDate } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Approfondimenti su riflessologia, benessere e sport',
  description:
    'Articoli dello studio di riflessologia di San Bonifacio (VR): consigli pratici su riflessologia plantare, benessere, sport e recupero.',
  alternates: { canonical: '/approfondimenti' },
}

export default function ArticlesPage() {
  return (
    <section className="container py-16 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand/60">Approfondimenti</p>
        <h1 className="font-display text-4xl font-semibold text-brand md:text-5xl">Consigli dallo studio</h1>
        <p className="mt-4 text-gray-600">Riflessologia, benessere, sport e recupero: quello che spieghiamo ogni giorno in studio.</p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {ARTICLES.map((a) => (
          <ServiceCard
            key={a.slug}
            title={a.title}
            description={`${formatDate(a.date)} · ${a.description}`}
            href={`/approfondimenti/${a.slug}`}
            backgroundUrl={a.image}
          />
        ))}
      </div>
    </section>
  )
}
