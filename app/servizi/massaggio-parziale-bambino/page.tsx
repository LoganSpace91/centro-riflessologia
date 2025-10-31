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
        primary={{ label: 'Prenota su WhatsApp', href: 'https://wa.me/393494493683?text=Massaggio%20parziale%20o%20bambino', variant: 'whatsapp' }}
        secondary={{ label: 'Scrivi su Instagram', href: 'https://instagram.com/centro_riflessologia_sanbo', variant: 'instagram' }}
        backgroundUrl="/Bambino_1.jpg"
        overlay="light"
      />

      <div className="container py-12">
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Un massaggio d’amore, delicato e rispettoso</h2>
          <p className="mt-2 text-gray-700">
            Trattamento speciale pensato per le pelli più sensibili: un momento di cura che dona sollievo e benessere senza mai forzare il
            bambino. Un gesto d’affetto che aiuta a ritrovare calma e serenità.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Cos’è il massaggio per il bambino</h2>
            <p className="mt-2 text-gray-700">
              Più che un tocco, è un linguaggio d’amore: movimenti morbidi e ritmati sciolgono tensioni, stimolano la circolazione e favoriscono
              uno sviluppo armonioso. I gesti rispettano sempre i segnali del piccolo, creando un’atmosfera serena e rassicurante.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Benefici</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Calma il sistema nervoso e favorisce il relax</li>
              <li>Aiuta la digestione e allevia piccoli fastidi come le coliche</li>
              <li>Stimola la crescita armoniosa e la coordinazione</li>
              <li>Genera comfort, sicurezza e un legame profondo</li>
            </ul>
          </section>
          <section className="card md:col-span-2">
            <h2 className="text-xl font-semibold text-brand">Come si svolge</h2>
            <p className="mt-2 text-gray-700">
              Si esegue in un ambiente caldo e tranquillo, con luci soffuse e, se piace, musica dolce. Si usa un olio naturale adatto alla pelle
              delicata del bambino e le mani scorrono con dolcezza su gambe, braccia, pancia e schiena, rispettando sempre il ritmo del piccolo.
              La seduta dura circa 25–30 minuti e ha un costo di <span className="font-semibold text-brand">35€</span>.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA q="Si può fare a tutte le età?" a="Sì, modulando intensità e durata in base all’età e alla sensibilità." />
              <QA q="Serve preparazione?" a="Abbigliamento comodo e, se possibile, un pasto leggero prima della seduta." />
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn-whatsapp" href="https://wa.me/393494493683?text=Prenotazione%20Massaggio%20parziale%2Fbambino">Prenota su WhatsApp</a>
        </div>
      </div>
    </>
  )
}


