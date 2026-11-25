import Image from 'next/image'
import CTAButton from './CTAButton'
import Atmosphere from './Atmosphere'
import KineticHeading from './motion/KineticHeading'
import Reveal from './motion/Reveal'
import Parallax from './motion/Parallax'

type Action = { label: string; href: string; variant?: 'primary' | 'outline' | 'whatsapp' | 'instagram' }

/** Hero split: testo a sinistra, foto in cornice a destra (sotto, su mobile). */
export default function Hero({
  title,
  subtitle,
  primary,
  secondary,
  imageUrl,
  eyebrow,
  facts,
  badge,
}: {
  title: string
  subtitle?: string
  primary: Action
  secondary?: Action
  imageUrl: string
  eyebrow?: string
  /** Piccoli dati in evidenza sotto i pulsanti (es. durata, prezzo). */
  facts?: { label: string; value: string }[]
  /** Etichetta flottante sulla foto. */
  badge?: { value: string; label: string }
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-surface/70 via-cream to-cream">
      <Atmosphere />
      {/* Sfuma gli orb sul bordo inferiore, evitando un taglio netto. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-cream" aria-hidden />

      <div className="container grid items-center gap-12 py-12 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:py-20 lg:py-24">
        <div>
          {eyebrow ? (
            <Reveal as="p" y={12} className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand/70">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-peach align-middle" aria-hidden />
              {eyebrow}
            </Reveal>
          ) : null}

          <KineticHeading
            text={title}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand md:text-5xl lg:text-6xl"
          />

          {subtitle ? (
            <Reveal as="p" delay={0.15} className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700">
              {subtitle}
            </Reveal>
          ) : null}

          <Reveal delay={0.3} className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CTAButton href={primary.href} label={primary.label} variant={primary.variant ?? 'primary'} />
            {secondary ? <CTAButton href={secondary.href} label={secondary.label} variant={secondary.variant ?? 'outline'} /> : null}
          </Reveal>

          {facts?.length ? (
            <Reveal as="dl" delay={0.4} className="mt-8 flex flex-wrap gap-2">
              {facts.map((f) => (
                <div key={f.label} className="rounded-full border border-brand/10 bg-white/60 px-4 py-1.5 text-sm backdrop-blur-sm">
                  <dt className="inline text-gray-600">{f.label} · </dt>
                  <dd className="inline font-semibold text-brand">{f.value}</dd>
                </div>
              ))}
            </Reveal>
          ) : null}
        </div>

        {/* Niente Reveal qui: la foto è l'elemento LCP e deve essere visibile subito. */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-peach/35 via-transparent to-brand/20 blur-2xl" aria-hidden />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-black/5">
            <Parallax distance={24} className="absolute inset-0">
              <Image src={imageUrl} alt="" fill priority sizes="(min-width: 768px) 46vw, 100vw" className="scale-110 object-cover" />
            </Parallax>
          </div>
          {badge ? (
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-cream/90 px-5 py-3 shadow-card ring-1 ring-black/5 backdrop-blur-md">
              <p className="font-display text-2xl font-semibold leading-none text-brand">{badge.value}</p>
              <p className="mt-1 text-xs text-gray-600">{badge.label}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
