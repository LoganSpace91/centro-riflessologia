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
          <h2 className="text-xl font-semibold text-brand">Un trattamento dolce e rigenerante per corpo e anima</h2>
          <p className="mt-2 text-gray-700">
            Questo massaggio speciale unisce la riflessologia plantare a un impacco terapeutico avvolgente. Mentre le mani lavorano sui punti
            riflessi dei piedi, l’impacco caldo dalle proprietà lenitive e antinfiammatorie amplifica l’effetto rilassante e rigenerante del
            trattamento.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Benefici dell’unione sinergica</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Relax profondo grazie all’azione combinata di impacco caldo e stimolazione riflessa</li>
              <li>Miglioramento della circolazione sanguigna e linfatica, con eliminazione di tossine e gonfiori</li>
              <li>Sollievo da dolori muscolari e articolari per effetto antinfiammatorio e rilassante</li>
              <li>Sensazione di leggerezza e benessere che si irradia in tutto il corpo</li>
              <li>Riequilibrio psicofisico e rivitalizzazione energetica</li>
            </ul>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Come si svolge il trattamento</h2>
            <p className="mt-2 text-gray-700">
              Si inizia con un massaggio riflessologico ai piedi per sciogliere stress e tensioni. Successivamente viene applicato un impacco
              caldo specifico (a base di erbe, alghe o oli naturali) lasciato agire alcuni minuti. Durante l’impacco, il massaggiatore continua
              con manovre dolci per integrare l’effetto e portare a un rilassamento profondo e completo.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
            <p className="mt-2 text-gray-700">
              Ideale per chi cerca un rimedio naturale contro stress, stanchezza muscolare, dolori articolari o piedi stanchi e gonfi. Perfetto
              per chi desidera migliorare la circolazione e vivere un’esperienza di massaggio completa e rigenerante.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA
                q="Serve preparazione?"
                a="È sufficiente indossare abiti comodi e arrivare qualche minuto prima. Evita pasti molto pesanti nelle ore precedenti."
              />
              <QA
                q="L’impacco è sempre lo stesso?"
                a="No, viene scelto di volta in volta in base alle tue esigenze e alla risposta del corpo."
              />
            </div>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Tariffe e durata</h2>
            <p className="mt-2 text-gray-700">
              Durata media: 50–60 minuti. Trattamento singolo <span className="font-semibold text-brand">55€</span>. Possibilità di percorsi personalizzati.
            </p>
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


