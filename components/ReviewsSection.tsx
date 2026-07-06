"use client"
import Image from 'next/image'
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import Stars from './Stars'
import Reveal from './motion/Reveal'

type Review = {
  name: string
  text: string
  rating: number
  photo: string
}

/** Velocità di scorrimento del marquee, in px/secondo. */
const SPEED = 45

function Marquee({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const halfWidth = useRef(0)
  const paused = useRef(false)
  const reduce = useReducedMotion()

  useAnimationFrame((_, delta) => {
    if (paused.current || reduce) return
    const el = trackRef.current
    if (!el) return
    if (!halfWidth.current) halfWidth.current = el.scrollWidth / 2
    const half = halfWidth.current
    if (!half) return
    let next = x.get() - (SPEED * delta) / 1000
    if (next <= -half) next += half
    x.set(next)
  })

  return (
    <motion.div
      ref={trackRef}
      className="flex w-max cursor-grab gap-4 active:cursor-grabbing"
      style={{ x }}
      drag="x"
      dragMomentum={false}
      dragElastic={0}
      onDragStart={() => (paused.current = true)}
      onDragEnd={() => (paused.current = false)}
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
    >
      {children}
    </motion.div>
  )
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
    <section className="bg-surface/40 py-16 md:py-20">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand/60">Recensioni</p>
          <h2 className="font-display text-3xl font-semibold text-brand md:text-4xl">Cosa dicono i clienti</h2>
          <p className="mt-3 text-gray-700">Esperienze reali: qualità del massaggio e benessere percepito. Trascina per esplorare.</p>
        </Reveal>

        <div className="relative mt-10 overflow-hidden">
          <Marquee>
            {doubled.map((r, i) => (
              <article
                key={i}
                className="relative w-[280px] shrink-0 select-none overflow-hidden rounded-2xl border border-white/60 p-5 shadow-card sm:w-[320px] md:w-[420px]"
                style={{ backgroundColor: '#FFFCF8' }}
              >
                <svg className="absolute right-4 top-3 text-peach/30" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.6A3.6 3.6 0 0 1 9.2 7.6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.6a3.6 3.6 0 0 1 3.6-3.57z" />
                </svg>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-peach/40">
                    <Image src={r.photo} alt="Foto utente" fill className="object-cover blur-sm" sizes="48px" draggable={false} />
                  </div>
                  <div>
                    <Stars rating={r.rating} />
                    <p className="text-xs text-gray-500">{r.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-800">“{r.text}”</p>
              </article>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-surface/70 to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-surface/70 to-transparent md:w-20" />
        </div>
      </div>
    </section>
  )
}


