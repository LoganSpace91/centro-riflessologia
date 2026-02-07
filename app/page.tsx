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
        <div className="absolute inset-0 bg-cream/75" aria-hidden />
        <div className="container relative z-10 max-w-5xl text-center">
          <h2 className="text-2xl font-semibold text-brand">Benefici che potresti percepire</h2>
          <div className="mx-auto mt-6 grid gap-3 text-left sm:grid-cols-2 sm:gap-4">
            {[
              { title: 'Rilassamento profondo', desc: 'Riduce stress e tensioni, favorendo calma generale' },
              { title: 'Qualità del sonno', desc: "Contrasta l'insonnia e sostiene il riposo rigenerante" },
              { title: 'Circolazione sanguigna', desc: 'Migliora il flusso nei piedi e nel corpo' },
              { title: 'Eliminazione tossine', desc: 'Favorisce la depurazione tramite il sistema linfatico' },
              { title: 'Equilibrio energetico', desc: 'Armonizza le funzioni degli organi e ristabilisce corpo-mente' },
              { title: 'Dolori e tensioni', desc: 'Supporta in caso di mal di schiena, emicranie o cervicalgia' },
              { title: 'Digestione', desc: 'Stimola il sistema digerente e allevia gonfiori o stitichezza' },
              { title: 'Sistema immunitario', desc: 'Aiuta a rafforzare le difese naturali' },
              { title: 'Vitalità', desc: 'Dona benessere diffuso e più energia' },
              { title: 'Disturbi emotivi', desc: "Riduce l'ansia e favorisce un umore più positivo" },
            ].map((b) => (
              <div key={b.title} className="flex items-start gap-3 rounded-xl bg-cream/80 p-3 shadow-sm">
                <div>
                  <p className="font-semibold text-brand">{b.title}</p>
                  <p className="text-sm text-gray-700">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
        <div className="absolute inset-0 bg-cream/75" aria-hidden />
        <div className="container relative z-10 text-center">
          <h2 className="text-2xl font-semibold text-brand">Prenditi un momento per te</h2>
          <p className="mt-2 text-gray-700">Scrivimi e fissiamo insieme il tuo appuntamento.</p>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a className="btn-whatsapp w-full text-center sm:w-auto" href={getWhatsAppUrl('Ciao Danya, vorrei prenotare un appuntamento.')}>Prenota su WhatsApp</a>
            <a
              className="btn-instagram w-full text-center sm:w-auto"
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
