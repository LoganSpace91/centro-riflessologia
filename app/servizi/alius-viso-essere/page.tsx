import Hero from '@/components/Hero'

export const metadata = {
  title: 'Trattamento viso “ESSERE” ALIUS',
  description:
    'Percorso viso ALIUS: prodotti naturali, massaggio olistico e luminosità immediata per ogni tipo di pelle.',
  keywords: ['Trattamento viso', 'San Bonifacio', 'professionisti'],
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
        primary={{ label: 'Prenota su WhatsApp', href: 'https://wa.me/393494493683?text=ALIUS%20viso%20ESSERE', variant: 'whatsapp' }}
        secondary={{ label: 'Scrivi su Instagram', href: 'https://instagram.com/centro_riflessologia_sanbo', variant: 'instagram' }}
        backgroundUrl="/faccia_1.jpeg"
        overlay="light"
      />

      <div className="container py-12">
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Un percorso di bellezza consapevole</h2>
          <p className="mt-2 text-gray-700">
            Il trattamento viso “ESSERE” ALIUS è pensato per nutrire, rigenerare e riequilibrare la pelle con ingredienti naturali e tecniche
            delicate. Oltre all’estetica, valorizza la persona nella sua interezza attraverso una coccola personalizzata che favorisce drenaggio,
            ossigenazione e rinnovamento cellulare.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Benefici principali</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Riduce secchezza, tono irregolare e piccoli inestetismi</li>
              <li>Dona luminosità, compattezza e una texture più levigata</li>
              <li>Favorisce il drenaggio e l’ossigenazione, rilassando i tratti</li>
              <li>Rigenera la vitalità del viso rispettando anche le pelli sensibili</li>
            </ul>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Come si svolge</h2>
            <p className="mt-2 text-gray-700">
              Si parte da un colloquio e da una detersione mirata. Seguono applicazioni detossinanti e idratanti con prodotti ALIUS, massaggio
              dolce di viso e collo e una fase finale riequilibrante. La durata media è di 50–60 minuti.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
            <p className="mt-2 text-gray-700">
              È adatto a tutti i tipi di pelle, anche le più sensibili. Ideale per chi desidera un’esperienza naturale, olistica e rispettosa
              dell’equilibrio cutaneo.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA q="Ogni quanto è consigliato?" a="Si può programmare un percorso mensile o stagionale in base alle esigenze della pelle." />
              <QA q="Posso truccarmi dopo?" a="Meglio attendere qualche ora per permettere ai principi attivi di agire in profondità." />
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn-whatsapp" href="https://wa.me/393494493683?text=Prenotazione%20ALIUS%20viso%20ESSERE">Prenota su WhatsApp</a>
        </div>
      </div>
    </>
  )
}


