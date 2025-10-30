import Hero from '@/components/Hero'

export const metadata = {
  title: 'Massaggio corpo parziale / bambino',
  description:
    'Trattamento mirato e delicato per aree specifiche o per bambini: approccio dolce e personalizzato.',
  keywords: ['Massaggio', 'piedi', 'San Bonifacio', 'professionisti'],
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
        title="Massaggio corpo parziale / bambino"
        subtitle="Un trattamento breve e mirato, pensato per sciogliere tensioni con dolcezza."
        primary={{ label: 'Prenota ora', href: 'https://wa.me/393494493683?text=Massaggio%20parziale%20o%20bambino' }}
        secondary={{ label: 'Chiama', href: 'tel:+393494493683' }}
        backgroundUrl="/images/zen-essential-oils.jpg"
        overlay="light"
      />

      <div className="container py-12">
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Introduzione</h2>
          <p className="mt-2 text-gray-700">
            Trattamento su aree specifiche (es. schiena, gambe, piedi) o dedicato ai bambini: manualità dolci e tempi brevi per un benessere
            rispettoso e su misura.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Cos’è</h2>
            <p className="mt-2 text-gray-700">Un massaggio breve e localizzato, modulato in intensità e durata in base all’età e alla sensibilità.</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Benefici principali</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Alleggerimento di tensioni localizzate</li>
              <li>Rilassamento e migliore qualità del sonno</li>
              <li>Approccio delicato adatto anche ai più piccoli</li>
            </ul>
          </section>
          <section className="card md:col-span-2">
            <h2 className="text-xl font-semibold text-brand">Come si svolge</h2>
            <p className="mt-2 text-gray-700">
              Breve colloquio, massaggio dell’area scelta con olio naturale, durata orientativa 25–30 minuti. Con i bambini la presenza
              del genitore è sempre benvenuta.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
            <p className="mt-2 text-gray-700">Adulti con tensioni localizzate e bambini che necessitano di un approccio dolce.</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA q="Si può fare a tutte le età?" a="Sì, modulando intensità e durata in base all’età e alla sensibilità." />
              <QA q="Serve preparazione?" a="Nessuna preparazione particolare; abbigliamento comodo consigliato." />
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="https://wa.me/393494493683?text=Prenotazione%20Massaggio%20parziale%2Fbambino">Prenota su WhatsApp</a>
          <a className="btn btn-outline" href="tel:+393494493683">Chiama il centro</a>
        </div>
      </div>
    </>
  )
}


