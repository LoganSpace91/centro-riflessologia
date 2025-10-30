import Hero from '@/components/Hero'

export const metadata = {
  title: 'Stone massage',
  description:
    'Massaggio con pietre calde per sciogliere tensioni e favorire un profondo rilassamento.',
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
        title="Stone massage"
        subtitle="Il calore delle pietre per sciogliere tensioni e ritrovare equilibrio."
        primary={{ label: 'Prenota ora', href: 'https://wa.me/393494493683?text=Stone%20massage' }}
        secondary={{ label: 'Chiama', href: 'tel:+393494493683' }}
        backgroundUrl="/hot-stone-massage-benefits.png"
        overlay="light"
      />

      <div className="container py-12">
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Introduzione</h2>
          <p className="mt-2 text-gray-700">
            Trattamento che utilizza pietre levigate riscaldate per accompagnare il massaggio e favorire un rilassamento profondo.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Cos’è</h2>
            <p className="mt-2 text-gray-700">Una tecnica avvolgente che integra il calore delle pietre con manualità dolci e lente.</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Benefici principali</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Decontrazione muscolare e scioglimento delle tensioni</li>
              <li>Rilassamento profondo e sensazione di benessere</li>
              <li>Stimolo alla circolazione</li>
            </ul>
          </section>
          <section className="card md:col-span-2">
            <h2 className="text-xl font-semibold text-brand">Come si svolge</h2>
            <p className="mt-2 text-gray-700">
              Colloquio iniziale, preparazione delle pietre, massaggio con integrazione del calore nelle aree necessarie. Durata media 50–60
              minuti.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
            <p className="mt-2 text-gray-700">Adatto a chi desidera sciogliere tensioni e godere di un profondo relax.</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA q="Le pietre sono molto calde?" a="La temperatura è confortevole e sempre controllata dall’operatore." />
              <QA q="Ci sono controindicazioni?" a="In caso di problematiche acute è consigliato rimandare e sentire il medico." />
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="https://wa.me/393494493683?text=Prenotazione%20Stone%20massage">Prenota su WhatsApp</a>
          <a className="btn btn-outline" href="tel:+393494493683">Chiama il centro</a>
        </div>
      </div>
    </>
  )
}


