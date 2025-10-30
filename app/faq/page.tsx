export const metadata = {
  title: 'FAQ',
  description:
    'Domande frequenti sul Centro Riflessologia: prenotazioni, durata sedute, controindicazioni, pagamenti.',
}

function QA({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-lg border border-gray-200 p-4 [&_summary]:cursor-pointer">
      <summary className="text-lg font-semibold text-brand">{q}</summary>
      <p className="mt-2 text-gray-700">{a}</p>
    </details>
  )
}

export default function FAQPage() {
  return (
    <div className="container py-14">
      <h1 className="text-3xl font-bold text-brand">Domande frequenti</h1>
      <div className="mt-8 grid gap-4">
        <QA
          q="Quanto dura una seduta?"
          a="In media 50–60 minuti, a seconda delle esigenze."
        />
        <QA
          q="Quante sedute servono?"
          a="È molto personale: dopo un primo incontro valuteremo insieme un eventuale percorso."
        />
        <QA
          q="La riflessologia fa male?"
          a="Le pressioni sono dolci e rispettose. Potresti avvertire sensibilità in alcuni punti, che gestiremo insieme."
        />
        <QA
          q="Ci sono controindicazioni?"
          a="In caso di condizioni acute o dubbi, è consigliato confrontarsi con il medico e rimandare il trattamento."
        />
        <QA
          q="Come posso prenotare?"
          a="Scrivimi su WhatsApp al +39 349 449 36 83 o invia una mail a paganottodanya@gmail.com."
        />
        <QA
          q="Quali metodi di pagamento accetti?"
          a="Contanti e metodi digitali più comuni. Chiedi al momento della prenotazione."
        />
      </div>

      <div className="mt-10">
        <a className="btn btn-primary" href="https://wa.me/393494493683?text=Ciao%20Danya%2C%20ho%20una%20domanda%20sui%20trattamenti.">Non trovi la risposta? Scrivimi</a>
      </div>
    </div>
  )
}


