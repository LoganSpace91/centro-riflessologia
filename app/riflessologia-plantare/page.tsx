export const metadata = {
  title: 'Riflessologia plantare — Massaggio piedi a San Bonifacio',
  description:
    'Massaggio di riflessologia plantare per i piedi a San Bonifacio: professionisti, benefici e cosa aspettarsi durante la seduta.',
  keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio'],
}

export default function RiflessologiaPlantarePage() {
  return (
    <div className="container py-14">
      <h1 className="text-3xl font-bold text-brand">Riflessologia plantare</h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        La riflessologia plantare è una tecnica dolce che, tramite la stimolazione dei punti riflessi del piede, mira a favorire l’equilibrio
        dell’organismo. L’idea di base è che ad ogni zona del piede corrispondano aree e funzioni del corpo; lavorando sul piede si può
        indurre una risposta di riequilibrio globale.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Come si svolge una seduta</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>Colloquio iniziale per comprendere il tuo stato e gli obiettivi.</li>
            <li>Trattamento su lettino: pressioni dolci e mirate sui punti riflessi.</li>
            <li>Consigli finali e, se utile, proposta di un breve percorso.</li>
          </ul>
        </section>
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Tariffe</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>Massaggio corpo con riflessologia plantare: <span className="font-semibold text-brand">50€</span></li>
            <li>Con impacco terapeutico: <span className="font-semibold text-brand">55€</span></li>
          </ul>
        </section>
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Benefici potenziali</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>Rilassamento profondo e riduzione dello stress</li>
            <li>Sostegno a circolazione, digestione e qualità del sonno</li>
            <li>Percezione di leggerezza e armonia generale</li>
          </ul>
        </section>
        <section className="card md:col-span-2">
          <h2 className="text-xl font-semibold text-brand">Durata, frequenza e preparazione</h2>
          <p className="mt-3 text-gray-700">
            Una seduta dura in media 50–60 minuti. Il numero di incontri varia in base all’obiettivo e alla risposta personale. Non è
            necessaria una preparazione specifica: indossa abiti comodi e, se puoi, evita pasti molto abbondanti subito prima della seduta.
          </p>
        </section>
        <section className="card md:col-span-2">
          <h2 className="text-xl font-semibold text-brand">Quando rimandare</h2>
          <p className="mt-3 text-gray-700">
            In caso di condizioni acute (infezioni, febbre, lesioni ai piedi, trombosi nota, ecc.) è consigliato rimandare e sentire il parere del medico.
            La riflessologia non sostituisce in alcun modo trattamenti o pareri medici.
          </p>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a className="btn btn-primary" href="https://wa.me/393494493683?text=Ciao%20Danya%2C%20vorrei%20prenotare%20una%20seduta%20di%20riflessologia.">Prenota su WhatsApp</a>
        <a className="btn btn-outline" href="tel:+393494493683">Chiama Danya</a>
      </div>
    </div>
  )
}


