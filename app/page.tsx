import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import MapEmbed from '@/components/MapEmbed'
import ReviewsSection from '@/components/ReviewsSection'
import Reveal from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { getWhatsAppUrl, INSTAGRAM_URL, ADDRESS } from '@/lib/constants'

export const metadata = {
  title: 'Massaggio di riflessologia a San Bonifacio | Professionisti dei piedi',
  description:
    'Centro Riflessologia a San Bonifacio (VR) e Verona: massaggio di riflessologia plantare per i piedi eseguito da professionisti. Prenota ora una seduta di benessere.',
  keywords: ['Massaggio', 'Riflessologia', 'piedi', 'professionisti', 'San Bonifacio', 'Riflessologia plantare Verona'],
}

const benefits = [
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
]

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Riflessologia plantare · San Bonifacio (VR)"
        title="Parti dal piede per lavorare nel corpo"
        subtitle="Ritrova equilibrio e benessere con il massaggio di riflessologia plantare, anche a Verona e provincia."
        primary={{ label: 'Prenota su WhatsApp', href: getWhatsAppUrl('Ciao Danya, vorrei prenotare un trattamento di riflessologia.'), variant: 'whatsapp' }}
        secondary={{ label: 'Scrivi su Instagram', href: INSTAGRAM_URL, variant: 'instagram' }}
        backgroundUrl="/Piede_home.png"
        overlay="light"
      />

      {/* Servizi principali */}
      <section className="container py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand/60">Servizi principali</p>
          <h2 className="font-display text-3xl font-semibold text-brand md:text-4xl">Un percorso a partire dai piedi</h2>
          <p className="mt-3 text-gray-600">Trattamenti pensati per il tuo benessere, dal riflesso plantare all&apos;equilibrio di tutto il corpo.</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2" staggerChildren={0.12} amount={0.15}>
          <StaggerItem className="h-full">
            <FeatureCard
              title="Riflessologia plantare"
              description="Stimolazione mirata dei punti riflessi del piede per armonizzare funzioni e tensioni del corpo."
              href="/riflessologia-plantare"
              imageUrl="/images/foot-massage-1.jpg"
            />
          </StaggerItem>
          <StaggerItem className="h-full">
            <FeatureCard
              title="Trattamenti olistici personalizzati"
              description="Un approccio che considera la persona nel suo insieme: corpo, mente ed emozioni."
              href="/servizi"
              imageUrl="/images/zen-essential-oils.jpg"
            />
          </StaggerItem>
        </Stagger>
      </section>

      {/* Benefici */}
      <section className="relative isolate overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bamboo-leaves.jpg)' }} aria-hidden />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream/90 via-cream/80 to-cream/90" aria-hidden />

        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand/60">Benefici</p>
            <h2 className="font-display text-3xl font-semibold text-brand md:text-4xl">Ciò che potresti percepire</h2>
            <p className="mt-3 text-gray-700">Ogni seduta lavora sull&apos;equilibrio complessivo di corpo e mente.</p>
          </Reveal>

          <Stagger className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.06} amount={0.1}>
            {benefits.map((b) => (
              <StaggerItem key={b.title} className="h-full">
                <div className="flex h-full items-start gap-3 rounded-2xl border border-white/60 bg-cream/85 p-4 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-peach/20 text-brand" aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-brand">{b.title}</p>
                    <p className="mt-0.5 text-sm text-gray-700">{b.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ReviewsSection />

      {/* Dove siamo */}
      <section className="container py-16 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand/60">Dove siamo</p>
            <h2 className="font-display text-3xl font-semibold text-brand md:text-4xl">Vieni a trovarci</h2>
            <p className="mt-3 text-gray-700">{ADDRESS}</p>
            <div className="mt-5">
              <a
                className="btn btn-primary"
                href="https://www.google.com/maps/dir/?api=1&destination=Centro%20Riflessologia%2C%20Via%20Tombole%20168%2C%20San%20Bonifacio%20(VR)"
                target="_blank"
                rel="noreferrer"
              >
                Guidami al centro
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="overflow-hidden rounded-3xl shadow-card">
            <MapEmbed />
          </Reveal>
        </div>
      </section>

      {/* CTA finale */}
      <section className="relative isolate overflow-hidden py-20">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-brand/10 via-cream to-peach/15" aria-hidden />
        <div className="container relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-brand md:text-4xl">Prenditi un momento per te</h2>
            <p className="mt-3 text-gray-700">Scrivimi e fissiamo insieme il tuo appuntamento.</p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <a className="btn-whatsapp w-full text-center sm:w-auto" href={getWhatsAppUrl('Ciao Danya, vorrei prenotare un appuntamento.')}>Prenota su WhatsApp</a>
              <a className="btn-instagram w-full text-center sm:w-auto" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Scrivi su Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
