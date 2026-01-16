"use client"
import Image from 'next/image'
import Stars from './Stars'

type Review = {
  name: string
  text: string
  rating: number
  photo: string
}

const reviews: Review[] = [
  {
    name: 'Maria P. — Riflessologia',
    text:
      'Danya ha mani delicate ma precise: ero gonfia e scettica, dopo la riflessologia ho dormito tutta la notte. 50€ spesi benissimo.',
    rating: 5,
    photo: 'https://i.pravatar.cc/96?img=32',
  },
  {
    name: 'Luca R. — Impacco terapeutico',
    text:
      'Danya ha scelto un impacco alle erbe su misura e ha lavorato con pazienza sui miei piedi: mal di schiena dimezzato in due sedute.',
    rating: 4.9,
    photo: 'https://i.pravatar.cc/96?img=47',
  },
  {
    name: 'Elena S. — Massaggio bimbo',
    text:
      'Il tocco di Danya è stato dolcissimo: ha parlato con mio figlio, ci ha coinvolti e ora dorme sereno. Un supporto prezioso per noi genitori.',
    rating: 4.9,
    photo: 'https://i.pravatar.cc/96?img=21',
  },
  {
    name: 'Cliente verificato — Viso “ESSERE”',
    text:
      'Jessica Reiti mi ha ascoltata e ha personalizzato il trattamento viso ALIUS: pelle più luminosa e zero arrossamenti.',
    rating: 4.8,
    photo: 'https://i.pravatar.cc/96?img=15',
  },
  {
    name: 'Cliente verificato',
    text:
      'Stone massage da 60€: calore avvolgente e contrattura cervicale scomparsa. Un’ora di pace totale.',
    rating: 4.6,
    photo: 'https://i.pravatar.cc/96?img=5',
  },
  {
    name: 'Cliente verificato',
    text:
      'Percorso ALIUS: pelle più tonica e gambe leggere. Ho trovato consigli pratici e zero pressioni commerciali.',
    rating: 4.7,
    photo: 'https://i.pravatar.cc/96?img=9',
  },
  {
    name: 'Cliente verificato',
    text:
      'Tre sedute di riflessologia hanno ridotto ansia e insonnia. Prezzi chiari e orari flessibili.',
    rating: 4.8,
    photo: 'https://i.pravatar.cc/96?img=18',
  },
  {
    name: 'Cliente verificato',
    text:
      'Impacco alle erbe: piedi sgonfi e caldi per giorni. Ogni passaggio spiegato con cura.',
    rating: 5,
    photo: 'https://i.pravatar.cc/96?img=41',
  },
  {
    name: 'Cliente verificato',
    text:
      'Pelle sensibile? Il trattamento viso ALIUS ha rispettato ogni esigenza: texture uniforme e luce naturale.',
    rating: 4.7,
    photo: 'https://i.pravatar.cc/96?img=12',
  },
  {
    name: 'Cliente verificato',
    text:
      'Pietre calde abbinate alla riflessologia: schiena sciolta e mente leggera. Tornerò sicuramente.',
    rating: 4.6,
    photo: 'https://i.pravatar.cc/96?img=28',
  },
  {
    name: 'Cliente verificato',
    text:
      'Dolori cervicali ridotti del 70%. Sedute personalizzate e tanta disponibilità.',
    rating: 4.8,
    photo: 'https://i.pravatar.cc/96?img=44',
  },
  {
    name: 'Cliente verificato',
    text:
      'Riflessologia + impacco: routine più leggera e tanta energia. Centro accogliente e professionale.',
    rating: 5,
    photo: 'https://i.pravatar.cc/96?img=31',
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
                    <Image
                      src={r.photo}
                      alt="Foto utente"
                      fill
                      className="object-cover blur-sm"
                      sizes="48px"
                    />
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
      </div>
    </section>
  )
}


