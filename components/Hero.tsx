import CTAButton from './CTAButton'
import Atmosphere from './Atmosphere'
import KineticHeading from './motion/KineticHeading'
import Reveal from './motion/Reveal'
import Parallax from './motion/Parallax'

type Action = { label: string; href: string; variant?: 'primary' | 'outline' | 'whatsapp' | 'instagram' }

export default function Hero({
  title,
  subtitle,
  primary,
  secondary,
  backgroundUrl,
  overlay = 'light',
  eyebrow,
}: {
  title: string
  subtitle?: string
  primary: Action
  secondary?: Action
  backgroundUrl?: string
  overlay?: 'light' | 'dark'
  eyebrow?: string
}) {
  const dark = overlay === 'dark'
  const titleColor = dark ? 'text-white' : 'text-brand'
  const subtitleColor = dark ? 'text-white/90' : 'text-gray-700'
  const eyebrowColor = dark ? 'text-white/80' : 'text-brand/70'

  return (
    <section className="relative isolate overflow-hidden">
      {/* Sfondo con parallax */}
      {backgroundUrl ? (
        <Parallax distance={60} className="absolute inset-0 -z-20">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundUrl})` }}
          />
        </Parallax>
      ) : (
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-surface via-cream to-cream" />
      )}

      {/* Velatura per leggibilità */}
      <div
        className={`absolute inset-0 -z-10 ${
          dark
            ? 'bg-gradient-to-b from-black/55 via-black/35 to-black/55'
            : 'bg-gradient-to-b from-cream/85 via-cream/70 to-cream'
        }`}
        aria-hidden
      />

      <Atmosphere />

      <div className="container relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <Reveal as="p" y={12} className={`mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowColor}`}>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-peach" aria-hidden />
              {eyebrow}
            </Reveal>
          ) : null}

          <KineticHeading
            text={title}
            className={`font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl ${titleColor}`}
          />

          {subtitle ? (
            <Reveal as="p" delay={0.15} className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed ${subtitleColor}`}>
              {subtitle}
            </Reveal>
          ) : null}

          <Reveal delay={0.3} className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <CTAButton href={primary.href} label={primary.label} variant={primary.variant ?? 'primary'} />
            {secondary ? (
              <CTAButton href={secondary.href} label={secondary.label} variant={secondary.variant ?? 'outline'} />
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
