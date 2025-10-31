import Hero from '@/components/Hero'

export const metadata = {
  title: 'Stone massage',
  description:
    'Massaggio con pietre calde per sciogliere tensioni e favorire un profondo rilassamento.',
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
        title="Stone massage"
        subtitle="Il calore delle pietre per sciogliere tensioni e ritrovare equilibrio."
        primary={{ label: 'Prenota su WhatsApp', href: 'https://wa.me/393494493683?text=Prenotazione%20Stone%20massage', variant: 'whatsapp' }}
        secondary={{ label: 'Scrivi su Instagram', href: 'https://instagram.com/centro_riflessologia_sanbo', variant: 'instagram' }}
        backgroundUrl="/hot-stone-massage-benefits.png"
        overlay="light"
      />

      <div className="container py-12">
        <section className="card">
          <h2 className="text-xl font-semibold text-brand">Cos’è il Stone Massage</h2>
          <p className="mt-2 text-gray-700">
            Il massaggio con pietre calde utilizza pietre di basalto vulcanico riscaldate tra 35 e 70°C per sciogliere le tensioni
            muscolari. Le pietre vengono posizionate lungo la colonna, sui chakra o sulle zone doloranti, scivolando sulla pelle con oli
            essenziali che amplificano l’effetto terapeutico.
          </p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Benefici principali</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>Rilassamento profondo di corpo e mente</li>
              <li>Decontratturazione muscolare e miglioramento della circolazione</li>
              <li>Riduzione di infiammazioni, dolori muscolari e articolari</li>
              <li>Eliminazione delle tossine e pelle più levigata</li>
              <li>Supporto contro stress, ansia, insonnia e stanchezza generale</li>
            </ul>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Come si svolge</h2>
            <p className="mt-2 text-gray-700">
              Il trattamento dura circa 60 minuti. Alterna pietre calde e fresche per stimolare la circolazione; il calore avvolge il corpo
              mentre il massaggio con oli aromatici induce un profondo benessere fisico e mentale.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Per chi è indicato</h2>
            <p className="mt-2 text-gray-700">
              Ideale per chi desidera sciogliere contratture, migliorare la circolazione e rilassarsi in modo naturale. Da evitare in caso di
              problemi cardiaci, fragilità capillare, pelle molto sensibile, gravidanza o infiammazioni acute.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Durata e prezzo</h2>
            <p className="mt-2 text-gray-700">
              Una seduta dura circa 60 minuti e ha un costo di <span className="font-semibold text-brand">60€</span>. Possiamo proporre cicli dedicati
              per un rilascio graduale delle tensioni.
            </p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold text-brand">Domande frequenti</h2>
            <div className="mt-2 grid gap-3">
              <QA q="Le pietre sono molto calde?" a="La temperatura è sempre controllata per essere confortevole e sicura." />
              <QA q="Quali oli vengono usati?" a="Oli essenziali naturali scelti in base alle tue esigenze per amplificare il beneficio." />
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn-whatsapp" href="https://wa.me/393494493683?text=Prenotazione%20Stone%20massage">Prenota su WhatsApp</a>
        </div>
      </div>
    </>
  )
}


