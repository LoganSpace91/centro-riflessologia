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
        La riflessologia plantare è una tecnica di massaggio dolce e naturale che lavora sui punti riflessi situati nella pianta dei piedi.
        Ogni zona del piede corrisponde a organi e aree del corpo: stimolandole con pressioni mirate, si favorisce l’autoguarigione e si
        promuove l’equilibrio globale dell’organismo. È un approccio olistico che non tratta solo il sintomo ma accompagna la persona verso
        un benessere psicofisico completo.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="card md:col-span-2">
          <h2 className="text-xl font-semibold text-brand">Un ambiente pensato per il relax</h2>
          <p className="mt-3 text-gray-700">
            Ogni seduta si svolge in una stanza accogliente, con musica rilassante, temperatura controllata e luci soffuse. Quando utile,
            utilizziamo oli naturali, cuscini ergonomici e coperture morbide per amplificare il senso di comfort e permetterti di lasciare
            andare lo stress in totale tranquillità.
          </p>
        </section>
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Come si svolge una seduta</h2>
          <p className="mt-3 text-gray-700">
            Iniziamo con un breve colloquio per comprendere i tuoi bisogni. Ti accomodi su un lettino confortevole, avvolto da un’atmosfera
            serena. Il terapeuta applica pressioni dolci e precise sui punti riflessi del piede, adattando la tecnica alle tue sensazioni. Al
            termine riceverai consigli personalizzati e, se necessario, la proposta di un percorso mirato.
          </p>
        </section>
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Benefici della riflessologia</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>Rilassamento profondo e riduzione dello stress</li>
            <li>Sostegno alla circolazione, alla digestione e alla qualità del sonno</li>
            <li>Percezione di leggerezza e maggiore equilibrio globale</li>
            <li>Miglioramento della vitalità e della risposta immunitaria</li>
            <li>Sensazione di armonia tra corpo e mente</li>
          </ul>
        </section>
        <section className="card md:col-span-2">
          <h2 className="text-xl font-semibold text-brand">Durata, frequenza e preparazione</h2>
          <p className="mt-3 text-gray-700">
            Ogni seduta dura in media 50–60 minuti. Il numero di incontri varia in base agli obiettivi e alla risposta personale. Non è
            richiesta una preparazione specifica: indossa abiti comodi ed evita pasti molto abbondanti nelle ore immediatamente precedenti.
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


