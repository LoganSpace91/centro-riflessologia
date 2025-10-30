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
          <h2 className="text-xl font-semibold text-brand">Introduzione</h2>
          <p className="mt-2 text-gray-700">
            Trattamento corpo che combina manualità dolci e prodotti selezionati. L’obiettivo è favorire un aspetto più armonioso nel tempo,
            in sinergia con sane abitudini quotidiane.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Cos’è</h2>
            <p className="mt-2 text-gray-700">Un percorso personalizzato su aree specifiche, costruito dopo un breve colloquio iniziale.</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Benefici principali</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Sensazione di leggerezza e tonicità</li>
              <li>Momento di cura e benessere per sé</li>
              <li>Supporto agli obiettivi estetici personali</li>
            </ul>
          </section>
          <section className="card md:col-span-2">
            <h2 className="text-xl font-semibold text-brand">Come si svolge</h2>
            <p className="mt-2 text-gray-700">
              Colloquio, preparazione della zona, applicazione di prodotti specifici e manualità dedicate. Durata media 50–60 minuti,
              numero di incontri da concordare.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
            <p className="mt-2 text-gray-700">Adulti che desiderano prendersi cura di aree specifiche con un approccio non invasivo.</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA q="Sono necessari molti incontri?" a="Dipende dagli obiettivi: viene proposto un breve percorso personalizzato." />
              <QA q="Posso abbinare attività fisica?" a="Sì, abitudini salutari e movimento favoriscono i risultati." />
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


