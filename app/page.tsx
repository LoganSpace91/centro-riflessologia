import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import MapEmbed from '@/components/MapEmbed'
import ReviewsSection from '@/components/ReviewsSection'
import { getWhatsAppUrl, INSTAGRAM_URL, ADDRESS } from '@/lib/constants'

export const metadata = {
  title: 'Massaggio di riflessologia a San Bonifacio | Professionisti dei piedi',
  description:
    'Centro Riflessologia a San Bonifacio (VR) e Verona: massaggio di riflessologia plantare per i piedi eseguito da professionisti. Prenota ora una seduta di benessere.',
  keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio', 'Riflessologia plantare Verona'],
}

export default function HomePage() {
  return (
    <>
      <Hero
        title="Parti dal piede per lavorare nel corpo"
        subtitle="Ritrova equilibrio e benessere con il massaggio di riflessologia plantare, anche a Verona e provincia."
        primary={{ label: 'Prenota su WhatsApp', href: getWhatsAppUrl('Ciao Danya, vorrei prenotare un trattamento di riflessologia.'), variant: 'whatsapp' }}
        secondary={{ label: 'Scrivi su Instagram', href: INSTAGRAM_URL, variant: 'instagram' }}
        backgroundUrl="/Piede_home.png"
        overlay="light"
      />

      <section className="container py-14 text-center">
        <h2 className="text-2xl font-semibold text-brand">Servizi principali</h2>
        <p className="mt-2 text-gray-600">Un percorso pensato per il tuo benessere, a partire dai piedi.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Riflessologia plantare"
            description="Stimolazione mirata dei punti riflessi del piede per armonizzare funzioni e tensioni del corpo."
            href="/riflessologia-plantare"
          />
          <ServiceCard
            title="Trattamenti olistici personalizzati"
            description="Un approccio che considera la persona nel suo insieme: corpo, mente ed emozioni."
            href="/servizi"
          />
        </div>
      </section>

      <section
        className="relative bg-cover bg-center py-14 text-center"
        style={{ backgroundImage: 'url(/images/bamboo-leaves.jpg)' }}
      >
        <div className="absolute inset-0 bg-white/70" aria-hidden />
        <div className="container relative z-10 max-w-5xl text-center">
          <h2 className="text-2xl font-semibold text-brand">Benefici che potresti percepire</h2>
          <ul className="mx-auto mt-6 grid list-disc gap-y-3 pl-6 text-left text-gray-700 md:grid-cols-2 md:gap-x-10 md:pl-8">
            <li>Rilassamento profondo: riduce stress e tensioni, favorendo calma generale</li>
            <li>Miglioramento della qualità del sonno: contrasta l'insonnia e sostiene il riposo rigenerante</li>
            <li>Stimolazione della circolazione sanguigna: migliora il flusso nei piedi e nel corpo</li>
            <li>Eliminazione delle tossine: favorisce la depurazione tramite il sistema linfatico</li>
            <li>Equilibrio energetico: armonizza le funzioni degli organi e ristabilisce corpo-mente</li>
            <li>Riduzione di dolori e tensioni muscolari: supporta in caso di mal di schiena, emicranie o cervicalgia</li>
            <li>Miglioramento della digestione: stimola il sistema digerente e allevia gonfiori o stitichezza</li>
            <li>Supporto al sistema immunitario: aiuta a rafforzare le difese naturali</li>
            <li>Aumento della vitalità: dona benessere diffuso e più energia</li>
            <li>Alleviamento dei disturbi emotivi: riduce l'ansia e favorisce un umore più positivo</li>
          </ul>
        </div>
      </section>
      <ReviewsSection />
      <section className="container pb-16 pt-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-brand">Dove siamo</h2>
            <p className="mt-2 text-gray-700">{ADDRESS}</p>
            <div className="mt-4">
              <a
                className="btn btn-primary"
                href="https://www.google.com/maps/dir/?api=1&destination=Centro%20Riflessologia%2C%20Via%20Tombole%20168%2C%20San%20Bonifacio%20(VR)"
                target="_blank"
                rel="noreferrer"
              >
                Guidami al centro
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl shadow-card">
            <MapEmbed />
          </div>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=2400&q=80)' }}
      >
        <div className="absolute inset-0 bg-white/70" aria-hidden />
        <div className="container relative z-10 text-center">
          <h2 className="text-2xl font-semibold text-brand">Prenditi un momento per te</h2>
          <p className="mt-2 text-gray-700">Scrivimi e fissiamo insieme il tuo appuntamento.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a className="btn-whatsapp" href={getWhatsAppUrl('Ciao Danya, vorrei prenotare un appuntamento.')}>Prenota su WhatsApp</a>
            <a
              className="btn-instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Scrivi su Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
