import ServiceCard from '@/components/ServiceCard'
import Reveal from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { SERVICES } from '@/lib/services'
import { getWhatsAppUrl, WHATSAPP_BASE_URL, INSTAGRAM_URL, EMAIL, PHONE } from '@/lib/constants'

export const metadata = {
  alternates: { canonical: '/servizi' },
  title: 'Servizi — Massaggio di riflessologia a San Bonifacio',
  description:
    'Servizi del Centro Riflessologia: massaggio di riflessologia plantare per i piedi e trattamenti olistici personalizzati a San Bonifacio, eseguiti da professionisti.',
  keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio'],
}

export default function ServiziPage() {
  return (
    <div className="container py-14 md:py-20">
      <Reveal className="max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand/60">I trattamenti</p>
        <h1 className="font-display text-4xl font-semibold text-brand md:text-5xl">Servizi</h1>
        <p className="mt-4 text-gray-700">
          Ogni percorso è personalizzato in base alle tue esigenze: massaggio di riflessologia per i piedi e trattamenti olistici eseguiti da professionisti a San Bonifacio.
        </p>
      </Reveal>
      <Stagger className="mt-10 grid gap-6 md:grid-cols-2" staggerChildren={0.08} amount={0.05}>
        {SERVICES.map((s) => (
          <StaggerItem key={s.slug} className="h-full">
            <ServiceCard title={s.cardTitle} description={s.cardDescription} href={`/servizi/${s.slug}`} backgroundUrl={s.image} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-12 rounded-3xl border border-black/5 bg-surface p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold text-brand">Come prenotare</h2>
        <p className="mt-2 text-gray-700">
          Scrivimi su WhatsApp al <a className="underline" href={WHATSAPP_BASE_URL}>{PHONE}</a> o invia una mail a
          <a className="ml-1 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn-whatsapp w-full text-center sm:w-auto" href={getWhatsAppUrl('Ciao Danya, vorrei informazioni e prenotare.')}>
            Scrivi su WhatsApp
          </a>
          <a
            className="btn-instagram w-full text-center sm:w-auto"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Chatta su Instagram
          </a>
        </div>
      </Reveal>
    </div>
  )
}


