import Hero from '@/components/Hero'

export const metadata = {
  title: 'Massaggio corpo con riflessologia plantare',
  description:
    'Trattamento corpo completo che integra massaggio distensivo e riflessologia plantare per un benessere profondo.',
  keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio'],
}

type QAProps = { q: string; a: string }

function QA({ q, a }: QAProps) {
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
        title="Massaggio corpo con riflessologia plantare"
        subtitle="Unisce manualità distensive e stimolazione dei punti riflessi del piede per riequilibrare tutto il corpo."
        primary={{ label: 'Prenota ora', href: 'https://wa.me/393494493683?text=Massaggio%20corpo%20con%20riflessologia%20plantare' }}
        secondary={{ label: 'Chiama', href: 'tel:+393494493683' }}
        backgroundUrl="/piede_2.jpg"
        overlay="light"
      />

      <div className="container py-12">
        <section className="card">
          <h1 className="text-3xl font-bold text-brand">Massaggio corpo con riflessologia plantare</h1>
          <p className="mt-2 text-gray-700">
            La riflessologia plantare è un’arte antica che ascolta il corpo partendo dai piedi. Attraverso un massaggio delicato ma
            profondo sui punti riflessi della pianta, il corpo ritrova il suo naturale equilibrio e un senso di rilassamento profondo. Ogni
            punto nei piedi corrisponde a un organo o a una parte del corpo, e stimolandoli si favorisce il benessere totale, riducendo le
            tensioni e rinvigorendo corpo e mente.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">I benefici principali</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Scioglie lo stress e dona una calma immediata</li>
              <li>Migliora la circolazione, aiutando il corpo a rigenerarsi</li>
              <li>Allevia dolori muscolari e tensioni, riportando leggerezza</li>
              <li>Favorisce un sonno più profondo e rigenerante</li>
              <li>Stimola le difese naturali dell’organismo</li>
              <li>Dona una sensazione di armonia dentro e fuori</li>
            </ul>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Come si svolge il massaggio</h2>
            <p className="mt-2 text-gray-700">
              Dopo un breve colloquio per comprendere le tue esigenze, il massaggiatore lavora con dolci pressioni e carezze sui piedi. Ogni
              movimento è pensato per liberare l’energia e ristabilire l’equilibrio. La seduta dura circa 45 minuti e, già dalla prima, puoi
              percepire le tensioni sciogliersi.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
            <p className="mt-2 text-gray-700">
              Perfetto per chi desidera prendersi cura di sé in modo naturale, ritrovare serenità e vivere con più energia. Indicato in caso
              di stress, tensioni muscolari, mal di testa o semplicemente per regalarsi un momento di relax totale. Adatto anche ai bambini
              con manualità dolce e rispettosa.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA
                q="Serve preparazione particolare?"
                a="È sufficiente indossare abbigliamento comodo e evitare pasti molto pesanti nelle due ore precedenti la seduta."
              />
              <QA
                q="È un trattamento doloroso?"
                a="No. Le manualità sono dolci ma efficaci, sempre calibrate in base alla tua sensibilità."
              />
            </div>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Tariffe</h2>
            <p className="mt-2 text-gray-700">
              Seduta singola: <span className="font-semibold text-brand">50€</span>. Possibilità di percorsi personalizzati su richiesta.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            className="btn btn-primary"
            href="https://wa.me/393494493683?text=Vorrei%20prenotare%20il%20massaggio%20corpo%20con%20riflessologia%20plantare"
          >
            Prenota su WhatsApp
          </a>
          <a className="btn btn-outline" href="tel:+393494493683">
            Chiama il centro
          </a>
        </div>
      </div>
    </>
  )
}


