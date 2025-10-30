import Hero from '@/components/Hero'

export const metadata = {
  title: 'Riflessologia plantare con impacco terapeutico',
  description:
    'Massaggio di riflessologia plantare con impacco terapeutico: trattamento sinergico per piedi e benessere generale a San Bonifacio.',
  keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio'],
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
        title="Riflessologia con impacco terapeutico"
        subtitle="La sinergia tra riflessologia plantare e impacco caldo/funzionale per un rilassamento profondo."
        primary={{ label: 'Prenota ora', href: 'https://wa.me/393494493683?text=Riflessologia%20con%20impacco%20terapeutico' }}
        secondary={{ label: 'Chiama', href: 'tel:+393494493683' }}
        backgroundUrl="/images/foot-massage-2.jpg"
        overlay="light"
      />

      <div className="container py-12">
        <h1 className="sr-only">Riflessologia plantare con impacco terapeutico</h1>
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Introduzione</h2>
          <p className="mt-2 text-gray-700">
            Un massaggio di riflessologia plantare integrato con impacco terapeutico selezionato dall’operatore per favorire
            decontrazione, calore e benessere dei piedi e dell’intero organismo.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Cos’è</h2>
            <p className="mt-2 text-gray-700">
              La riflessologia agisce sui punti riflessi dei piedi; l’impacco terapeutico (caldo o specifico) amplifica la sensazione di
              sollievo e il rilassamento locale, rendendo il trattamento particolarmente avvolgente.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Benefici principali</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Rilassamento profondo e senso di leggerezza</li>
              <li>Benessere dei piedi e decontrazione delle tensioni</li>
              <li>Supporto alla qualità del sonno</li>
            </ul>
          </section>
          <section className="card md:col-span-2">
            <h2 className="text-xl font-semibold text-brand">Come si svolge</h2>
            <p className="mt-2 text-gray-700">
              Colloquio iniziale, applicazione dell’impacco scelto, trattamento di riflessologia con pressioni dolci sui punti riflessi,
              conclusione con consigli pratici. Durata media 50–60 minuti.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
            <p className="mt-2 text-gray-700">Adulti e persone che desiderano un trattamento avvolgente e distensivo.</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA q="Serve una preparazione?" a="No, è sufficiente indossare abiti comodi e arrivare qualche minuto prima." />
              <QA q="È doloroso?" a="Le pressioni sono dolci e rispettose; eventuali sensibilità vengono gestite insieme." />
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="https://wa.me/393494493683?text=Prenotazione%20Riflessologia%20con%20impacco">Prenota su WhatsApp</a>
          <a className="btn btn-outline" href="tel:+393494493683">Chiama il centro</a>
        </div>
      </div>
    </>
  )
}


