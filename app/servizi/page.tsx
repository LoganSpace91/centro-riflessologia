import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Servizi — Massaggio di riflessologia a San Bonifacio',
  description:
    'Servizi del Centro Riflessologia: massaggio di riflessologia plantare per i piedi e trattamenti olistici personalizzati a San Bonifacio, eseguiti da professionisti.',
  keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio'],
}

export default function ServiziPage() {
  return (
    <div className="container py-14">
      <h1 className="text-3xl font-bold text-brand">Servizi</h1>
      <p className="mt-2 max-w-2xl text-gray-700">
        Ogni percorso è personalizzato in base alle tue esigenze: massaggio di riflessologia per i piedi e trattamenti olistici eseguiti da professionisti a San Bonifacio.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[
          {
            titolo: 'Massaggio corpo con riflessologia plantare',
            descrizione:
              'Massaggio mirato ai punti riflessi dei piedi per favorire equilibrio e rilassamento.',
            href: '/servizi/massaggio-riflessologia-corpo',
            immagineBackground: '/piede_2.jpg',
            prezzo: '50€',
          },
          {
            titolo:
              'Massaggio corpo con riflessologia plantare + impacco terapeutico',
            descrizione:
              'Riflessologia dei piedi con applicazione di impacco: azione sinergica, profondo relax.',
            href: '/servizi/riflessologia-impacco',
            immagineBackground: '/images/foot-massage-2.jpg',
            prezzo: '55€',
          },
          {
            titolo: 'Massaggio corpo parziale / bambino',
            descrizione:
              'Trattamento delicato, mirato a zone specifiche. Ideale anche per i più piccoli.',
            href: '/servizi/massaggio-parziale-bambino',
            immagineBackground: '/Bambino_1.jpg',
            prezzo: '35€',
          },
          {
            titolo: 'Trattamento corpo per inestetismo ALIUS',
            descrizione:
              'Percorso dedicato agli inestetismi con tecniche dolci e prodotti mirati.',
            href: '/servizi/alius-corpo',
            immagineBackground: '/images/bamboo-leaves.jpg',
            prezzo: '60/70€',
          },
          {
            titolo: 'Trattamento viso “ESSERE” ALIUS',
            descrizione:
              'Cura del viso rigenerante per ritrovare luminosità e benessere.',
            href: '/servizi/alius-viso-essere',
            immagineBackground: '/faccia_1.jpeg',
            prezzo: '60€',
          },
          {
            titolo: 'Stone massage',
            descrizione:
              'Massaggio con pietre calde per sciogliere tensioni e favorire il rilassamento.',
            href: '/servizi/stone-massage',
            immagineBackground: '/hot-stone-massage-benefits.png',
            prezzo: '60€',
          },
        ].map((s) => (
          <ServiceCard key={s.titolo} {...s} />
        ))}
      </div>


      <div className="mt-10 rounded-xl bg-surface p-6">
        <h2 className="text-xl font-semibold text-brand">Come prenotare</h2>
        <p className="mt-2 text-gray-700">
          Scrivimi su WhatsApp al <a className="underline" href="https://wa.me/393494493683">+39 349 449 36 83</a> o invia una mail a
          <a className="ml-1 underline" href="mailto:paganottodanya@gmail.com">paganottodanya@gmail.com</a>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn-whatsapp" href="https://wa.me/393494493683?text=Ciao%20Danya%2C%20vorrei%20informazioni%20e%20prenotare.">
            Scrivi su WhatsApp
          </a>
          <a className="btn btn-outline" href="mailto:paganottodanya@gmail.com">
            Manda una mail
          </a>
          <a
            className="btn-instagram"
            href="https://instagram.com/centro_riflessologia_sanbo"
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


