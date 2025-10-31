export const metadata = {
  title: 'Operatore olistico',
  description:
    'Chi è e cosa fa un operatore olistico: approccio, metodo e ambiti del Centro Riflessologia a San Bonifacio (VR).',
}

import Hero from '@/components/Hero'

export default function OperatoreOlisticoPage() {
  return (
    <>
      <Hero
        title="Operatore olistico"
        subtitle="Ascolto, empatia e competenza: un accompagnamento dolce verso il benessere globale."
        primary={{ label: 'Scrivi su WhatsApp', href: 'https://wa.me/393494493683?text=Ciao%20Danya%2C%20vorrei%20informazioni%20sull%27approccio%20olistico', variant: 'whatsapp' }}
        secondary={{ label: 'Tutti i contatti', href: '/contatti' }}
        backgroundUrl="/images/bamboo-leaves.jpg"
        overlay="light"
      />

      <section
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: 'url(/images/zen-essential-oils.jpg)' }}
      >
        <div className="absolute inset-0 bg-white/75" aria-hidden />
        <div className="container relative z-10">
          <h1 className="text-3xl font-bold text-brand">Operatore olistico</h1>
          <p className="mt-3 max-w-3xl text-gray-700">
            L’operatore olistico guida la persona verso il benessere globale considerando corpo, mente ed emozioni in modo integrato. Le tecniche
            sono dolci, non invasive e mirano a rilassamento, ascolto profondo e riequilibrio naturale.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Doti, qualità e capacità</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
              <li>
                <span className="font-medium">Ascolto attivo ed empatia:</span> attenzione a ciò che la persona esprime, a livello verbale,
                corporeo ed emotivo.
              </li>
              <li>
                <span className="font-medium">Personalizzazione del trattamento:</span> ogni sessione si adatta ai bisogni individuali,
                rispettando tempi e sensibilità.
              </li>
              <li>
                <span className="font-medium">Educazione al benessere:</span> consigli per aumentare la consapevolezza corporea e mantenere
                l’equilibrio anche dopo il trattamento.
              </li>
              <li>
                <span className="font-medium">Etica professionale:</span> non sostituisce figure sanitarie, non fa diagnosi né prescrive
                farmaci; può integrare i percorsi medici come supporto.
              </li>
            </ul>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Formazione continua e aggiornamento</h2>
            <p className="mt-3 text-gray-700">
              Gli operatori olistici seguono regolarmente corsi di aggiornamento per apprendere nuove tecniche e migliorare le competenze.
              Frequentano workshop, seminari e certificazioni su massaggi, tecniche energetiche, anatomia e approcci integrati alla salute
              naturale. La formazione continua garantisce trattamenti efficaci e aggiornati e include anche un percorso di crescita personale,
              per offrire un servizio di alta qualità.
            </p>
          </section>
        </div>

          <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Nota importante:</strong> l’operatore olistico non sostituisce medici e professionisti sanitari. Non effettua diagnosi né
            prescrive farmaci; può affiancare i percorsi terapeutici come supporto al benessere.
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              className="btn-whatsapp"
              href="https://wa.me/393494493683?text=Ciao%20Danya%2C%20vorrei%20maggiori%20informazioni%20sui%20trattamenti%20olistici."
            >
              Scrivi su WhatsApp
            </a>
            <a className="btn btn-outline" href="/contatti">
              Tutti i contatti
            </a>
          </div>
        </div>
      </section>
    </>
  )
}


