import ServiceCard from '@/components/ServiceCard'
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
    <div className="container py-14">
      <h1 className="text-3xl font-bold text-brand">Servizi</h1>
      <p className="mt-2 max-w-2xl text-gray-700">
        Ogni percorso è personalizzato in base alle tue esigenze: massaggio di riflessologia per i piedi e trattamenti olistici eseguiti da professionisti a San Bonifacio.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {servizi.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-surface p-6">
        <h2 className="text-xl font-semibold text-brand">Come prenotare</h2>
        <p className="mt-2 text-gray-700">
          Scrivimi su WhatsApp al <a className="underline" href={WHATSAPP_BASE_URL}>{PHONE}</a> o invia una mail a
          <a className="ml-1 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn-whatsapp" href={getWhatsAppUrl('Ciao Danya, vorrei informazioni e prenotare.')}>
            Scrivi su WhatsApp
          </a>
          <a
            className="btn-instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Chatta su Instagram
          </a>
        </div>
      </div>
    </div>
  )
}


