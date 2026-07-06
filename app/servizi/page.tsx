import ServiceCard from '@/components/ServiceCard'
import Reveal from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { getWhatsAppUrl, WHATSAPP_BASE_URL, INSTAGRAM_URL, EMAIL, PHONE } from '@/lib/constants'

export const metadata = {
  title: 'Servizi — Massaggio di riflessologia a San Bonifacio',
  description:
    'Servizi del Centro Riflessologia: massaggio di riflessologia plantare per i piedi e trattamenti olistici personalizzati a San Bonifacio, eseguiti da professionisti.',
  keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio'],
}

const servizi = [
  {
    title: 'Massaggio corpo con riflessologia plantare',
    description: 'Massaggio mirato ai punti riflessi dei piedi per favorire equilibrio e rilassamento.',
    href: '/servizi/massaggio-riflessologia-corpo',
    backgroundUrl: '/piede_2.jpg',
  },
  {
    title: 'Massaggio corpo con riflessologia plantare + impacco terapeutico',
    description: 'Riflessologia dei piedi con applicazione di impacco: azione sinergica, profondo relax.',
    href: '/servizi/riflessologia-impacco',
    backgroundUrl: '/images/foot-massage-2.jpg',
  },
  {
    title: 'Massaggio corpo parziale / bambino',
    description: 'Trattamento delicato, mirato a zone specifiche. Ideale anche per i più piccoli.',
    href: '/servizi/massaggio-parziale-bambino',
    backgroundUrl: '/Bambino_1.jpg',
  },
  {
    title: 'Trattamento corpo per inestetismo ALIUS',
    description: 'Percorso dedicato agli inestetismi con tecniche dolci e prodotti mirati.',
    href: '/servizi/alius-corpo',
    backgroundUrl: '/images/bamboo-leaves.jpg',
  },
  {
    title: 'Trattamento viso "ESSERE" ALIUS',
    description: 'Cura del viso rigenerante per ritrovare luminosità e benessere.',
    href: '/servizi/alius-viso-essere',
    backgroundUrl: '/faccia_1.jpeg',
  },
  {
    title: 'Stone massage',
    description: 'Massaggio con pietre calde per sciogliere tensioni e favorire il rilassamento.',
    href: '/servizi/stone-massage',
    backgroundUrl: '/hot-stone-massage-benefits.png',
  },
]

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
        {servizi.map((s) => (
          <StaggerItem key={s.title} className="h-full">
            <ServiceCard {...s} />
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


