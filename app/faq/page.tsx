import QA from '@/components/QA'
import { getWhatsAppUrl, PHONE, EMAIL } from '@/lib/constants'

export const metadata = {
  title: 'Missione e FAQ',
  description:
    'La missione del Centro Riflessologia e le risposte alle domande più frequenti su trattamenti, prenotazioni e approccio olistico.',
}

export default function FAQPage() {
  return (
    <div className="container py-14">
      <section className="mx-auto max-w-4xl">
        <div
          className="relative mt-4 overflow-hidden rounded-3xl bg-cover bg-center shadow-card"
          style={{ backgroundImage: 'url(/ZEN_1.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <div className="relative space-y-4 p-8 leading-relaxed text-white sm:p-12">
            <h1 className="text-3xl font-bold sm:text-4xl">La nostra missione</h1>
            <p>
              Il Centro nasce dal sogno di Danya e Jessica, due anime sensibili che hanno voluto dimostrare che la bellezza esteriore non racconta mai
              tutta la verità. Il corpo è un libro aperto, ogni emozione vi lascia un segno, e quando sentimenti come dolore, rabbia o tristezza
              rimangono imprigionati dentro di noi, iniziano a pesare come libri su una mensola troppo carica, fino a farci perdere l'equilibrio.
            </p>
            <p>
              Non sei cattivo, non sei sbagliato: sei semplicemente il riflesso di tutto ciò che non hai potuto esprimere. La nostra missione va oltre il
              semplice prendersi cura del corpo; è un invito a vivere pienamente le tue emozioni, a liberarle con rispetto e delicatezza, per ritrovare
              armonia e benessere. Vogliamo accompagnarti in un percorso di ascolto e ritrovamento, perché solo attraverso la cura di sé possiamo
              scoprire la forza per essere veramente vivi, leggeri e presenti.
            </p>
            <p>
              In questo spazio accogliente, ogni trattamento è un abbraccio che ascolta, sostiene e nutre, dando valore al tuo mondo interiore e alla tua
              energia. Qui non si tratta di risolvere malanni, ma di coccolare il corpo e la mente, favorire l'equilibrio e risvegliare quella naturale
              vitalità che tutti abbiamo dentro.
            </p>
            <p>
              Perché prendersi cura di sé non è un dovere, ma un atto d'amore verso la propria vita.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-4xl">
        <h2 className="text-3xl font-bold text-brand">Domande frequenti</h2>
        <div className="mt-8 grid gap-4">
          <QA q="Quanto dura una seduta?" a="In media 50–60 minuti, a seconda delle esigenze." />
          <QA q="Quante sedute servono?" a="È molto personale: dopo un primo incontro valuteremo insieme un eventuale percorso." />
          <QA q="La riflessologia fa male?" a="Le pressioni sono dolci e rispettose. Potresti avvertire sensibilità in alcuni punti, che gestiremo insieme." />
          <QA q="Ci sono controindicazioni?" a="In caso di condizioni acute o dubbi, è consigliato confrontarsi con il medico e rimandare il trattamento." />
          <QA q="Come posso prenotare?" a={`Scrivimi su WhatsApp al ${PHONE} o invia una mail a ${EMAIL}.`} />
          <QA q="Quali metodi di pagamento accetti?" a="Contanti e metodi digitali più comuni. Chiedi al momento della prenotazione." />
        </div>

        <div className="mt-10">
          <a
            className="btn-whatsapp"
            href={getWhatsAppUrl('Ciao Danya, ho una domanda sui trattamenti.')}
          >
            Non trovi la risposta? Scrivimi
          </a>
        </div>
      </section>
    </div>
  )
}
