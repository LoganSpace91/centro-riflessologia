import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import MapEmbed from '@/components/MapEmbed'
import ReviewsSection from '@/components/ReviewsSection'

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
        primary={{ label: 'Prenota su WhatsApp', href: 'https://wa.me/393494493683?text=Ciao%20Danya%2C%20vorrei%20prenotare%20un%20trattamento%20di%20riflessologia.' }}
        secondary={{ label: 'Chiama Danya', href: 'tel:+393494493683' }}
        backgroundUrl="/Piede_home.png"
        overlay="light"
      />

      <section className="container py-14">
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
        className="relative bg-cover bg-center py-14"
        style={{ backgroundImage: 'url(/images/bamboo-leaves.jpg)' }}
      >
        <div className="absolute inset-0 bg-white/70" aria-hidden />
        <div className="container relative z-10">
          <h2 className="text-2xl font-semibold text-brand">Benefici che potresti percepire</h2>
          <ul className="mt-6 grid list-disc gap-2 pl-6 text-gray-700 md:grid-cols-2">
            <li>Rilassamento profondo e migliore qualità del sonno</li>
            <li>Alleggerimento di tensioni e stress</li>
            <li>Supporto a digestione e circolazione</li>
            <li>Maggiore energia e senso di equilibrio</li>
          </ul>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-brand">Dove siamo</h2>
            <p className="mt-2 text-gray-700">Via Tombole, 168 – San Bonifacio (VR)</p>
            <div className="mt-4 flex gap-3">
              <a className="btn btn-primary" href="https://wa.me/393494493683?text=Ciao%20Danya%2C%20vorrei%20prenotare%20un%20trattamento.">Prenota ora</a>
              <a className="btn btn-outline" href="/contatti">Contatti</a>
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
            <a className="btn-whatsapp" href="https://wa.me/393494493683?text=Ciao%20Danya%2C%20vorrei%20prenotare%20un%20appuntamento.">Prenota su WhatsApp</a>
            <a className="btn btn-outline" href="tel:+393494493683">Chiama Danya</a>
            <a
              className="btn-instagram"
              href="https://instagram.com/centro_riflessologia_sanbo"
              target="_blank"
              rel="noreferrer"
            >
              Scrivi su Instagram
            </a>
          </div>
        </div>
      </section>
      <ReviewsSection />
    </>
  )
}


