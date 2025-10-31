import Hero from '@/components/Hero'

export const metadata = {
  title: 'Trattamento corpo per inestetismo ALIUS',
  description:
    'Percorso corpo dedicato agli inestetismi: tecniche dolci, prodotti mirati, benessere globale.',
  keywords: ['Massaggio', 'San Bonifacio', 'professionisti'],
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
        title="Trattamento corpo ALIUS"
        subtitle="Un’attenzione mirata agli inestetismi con approccio dolce e personalizzato."
        primary={{ label: 'Prenota ora', href: 'https://wa.me/393494493683?text=ALIUS%20corpo' }}
        secondary={{ label: 'Chiama', href: 'tel:+393494493683' }}
        backgroundUrl="/images/bamboo-leaves.jpg"
        overlay="light"
      />

      <div className="container py-12">
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Un percorso delicato e mirato per prendersi cura di sé</h2>
          <p className="mt-2 text-gray-700">
            Il trattamento corpo ALIUS accompagna la persona in un viaggio di rinascita. Tecniche manuali dolci e prodotti specifici lavorano
            in sinergia per donare alla pelle un aspetto più levigato, equilibrato e radioso, nel rispetto della tua natura.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Un’esperienza oltre la bellezza</h2>
            <p className="mt-2 text-gray-700">
              Ingredienti naturali, oli essenziali e principi attivi ALIUS attivano un’azione riequilibrante su corpo e mente. Riduce gli
              inestetismi, migliora tono e compattezza, e dona un momento di profondo rilassamento.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Come funziona</h2>
            <p className="mt-2 text-gray-700">
              Inizia con una valutazione attenta della pelle. Poi, manovre dolci e precise, abbinate a prodotti mirati, nutrono in profondità e
              stimolano la rigenerazione cutanea, liberando le tensioni e donando benessere totale.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è pensato</h2>
            <p className="mt-2 text-gray-700">
              Indicato per chi desidera affrontare inestetismi come rilassamento cutaneo, irregolarità o secchezza con delicatezza. Perfetto per
              ritrovare fiducia nel proprio corpo e sentirsi avvolti in un’esperienza di cura su misura.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA q="Quante sedute servono?" a="Dipende dall’obiettivo: si definisce un percorso personalizzato dopo la valutazione iniziale." />
              <QA q="Posso proseguire con prodotti a casa?" a="Sì, possiamo consigliarti routine di mantenimento per proseguire i benefici." />
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="https://wa.me/393494493683?text=Prenotazione%20ALIUS%20corpo">Prenota su WhatsApp</a>
          <a className="btn btn-outline" href="tel:+393494493683">Chiama il centro</a>
        </div>
      </div>
    </>
  )
}


