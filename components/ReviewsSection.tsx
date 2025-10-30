"use client"
import Stars from './Stars'
import CTAButton from './CTAButton'

type Review = {
  name: string
  text: string
  rating: number
  photo: string
}

const reviews: Review[] = [
  {
    name: 'Cliente verificato',
    text:
      'Esperienza meravigliosa: massaggio ai piedi preciso e delicato. Mi sono sentita subito più leggera e rilassata.',
    rating: 5,
    photo: 'https://i.pravatar.cc/96?img=32',
  },
  {
    name: 'Cliente verificato',
    text:
      'Riflessologia fatta con grande professionalità. Il dolore alla schiena è migliorato e ho dormito benissimo.',
    rating: 4.8,
    photo: 'https://i.pravatar.cc/96?img=47',
  },
  {
    name: 'Cliente verificato',
    text:
      'Ambiente sereno e accogliente. Consigli utili e trattamento molto efficace. Tornerò presto!',
    rating: 4.9,
    photo: 'https://i.pravatar.cc/96?img=15',
  },
  {
    name: 'Cliente verificato',
    text:
      'Massaggio impeccabile, mani esperte. Ho percepito subito un miglioramento della circolazione.',
    rating: 4.7,
    photo: 'https://i.pravatar.cc/96?img=5',
  },
  {
    name: 'Cliente verificato',
    text: 'Professionalità e gentilezza. Massaggio ai piedi davvero utile per scaricare lo stress.',
    rating: 4.8,
    photo: 'https://i.pravatar.cc/96?img=21',
  },
  {
    name: 'Cliente verificato',
    text: 'Ottima esperienza, mi sono sentito ascoltato e seguito con attenzione. Consiglio!',
    rating: 4.9,
    photo: 'https://i.pravatar.cc/96?img=9',
  },
]

export default function ReviewsSection() {
  const doubled = [...reviews, ...reviews]
  return (
    <section className="bg-white py-14">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-brand">Cosa dicono i clienti</h2>
          <p className="mt-2 text-gray-700">Esperienze positive e reali: qualità del massaggio e benessere percepito.</p>
        </div>

        <div className="marquee relative mt-8">
          <div className="marquee-track">
            {doubled.map((r, i) => (
              <article key={i} className="relative w-[300px] shrink-0 overflow-hidden rounded-2xl bg-white p-5 shadow-card md:w-[420px]">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-amber-200">
                    <img src={r.photo} alt="Foto utente sfocata" className="h-full w-full object-cover blur-sm" />
                  </div>
                  <div>
                    <Stars rating={r.rating} />
                    <p className="text-xs text-gray-500">{r.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-800">“{r.text}”</p>
              </article>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
        </div>
        <div className="mt-10 text-center">
          <CTAButton
            href="https://wa.me/393494493683?text=Ciao%20Danya%2C%20ho%20letto%20le%20recensioni%20e%20vorrei%20prenotare."
            label="Prenota ora"
          />
        </div>
      </div>
    </section>
  )
}


