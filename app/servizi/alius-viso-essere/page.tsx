import Hero from '@/components/Hero'

export const metadata = {
  title: 'Trattamento viso “ESSERE” ALIUS',
  description:
    'Cura del viso rigenerante con prodotti mirati: luminosità e benessere in armonia con la pelle.',
  keywords: ['San Bonifacio', 'professionisti'],
}

function QA({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-lg border border-gray-200 p-4 [&_summary]:cursor-pointer">
      <summary className="text-lg font-semibold text-brand">{q}</summary>
      <p className="mt-2 text-gray-700">{a}</p>
    </details>
  )
}

export default function Page() {
  return (
    <>
      <Hero
        title="Trattamento viso “ESSERE” ALIUS"
        subtitle="Un momento di cura e luminosità per la pelle del viso."
        primary={{ label: 'Prenota ora', href: 'https://wa.me/393494493683?text=ALIUS%20viso%20ESSERE' }}
        secondary={{ label: 'Chiama', href: 'tel:+393494493683' }}
        backgroundUrl="/images/water-ripples.jpg"
        overlay="light"
      />

      <div className="container py-12">
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Introduzione</h2>
          <p className="mt-2 text-gray-700">Trattamento viso riequilibrante e rigenerante con prodotti selezionati in base alla pelle.</p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Cos’è</h2>
            <p className="mt-2 text-gray-700">Una sequenza di detersione, applicazioni funzionali e massaggio rilassante del viso e del collo.</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Benefici principali</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Luminosità e idratazione</li>
              <li>Rilassamento dei tratti del viso</li>
              <li>Momento di benessere profondo</li>
            </ul>
          </section>
          <section className="card md:col-span-2">
            <h2 className="text-xl font-semibold text-brand">Come si svolge</h2>
            <p className="mt-2 text-gray-700">
              Colloquio iniziale, detersione, applicazione di prodotti e massaggio viso/collo. Durata media 50–60 minuti.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
            <p className="mt-2 text-gray-700">Per chi desidera prendersi cura della pelle con un momento di relax rigenerante.</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA q="È adatto a pelli sensibili?" a="Sì, i prodotti vengono scelti in base alla sensibilità e alle esigenze." />
              <QA q="Posso truccarmi dopo?" a="Meglio attendere qualche ora per beneficiare al massimo del trattamento." />
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="https://wa.me/393494493683?text=Prenotazione%20ALIUS%20viso%20ESSERE">Prenota su WhatsApp</a>
          <a className="btn btn-outline" href="tel:+393494493683">Chiama il centro</a>
        </div>
      </div>
    </>
  )
}


