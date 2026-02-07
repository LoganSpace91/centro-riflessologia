import CTAButton from './CTAButton'

type Action = { label: string; href: string; variant?: 'primary' | 'outline' | 'whatsapp' | 'instagram' }

export default function Hero({
  title,
  subtitle,
  primary,
  secondary,
  backgroundUrl,
  overlay = 'light',
}: {
  title: string
  subtitle?: string
  primary: Action
  secondary?: Action
  backgroundUrl?: string
  overlay?: 'light' | 'dark'
}) {
  return (
    <section
      className={
        `relative py-10 md:py-16 ${
          backgroundUrl
            ? 'bg-cover bg-center'
            : 'bg-gradient-to-b from-brand/5 to-transparent'
        }`
      }
      style={backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : undefined}
    >
      {backgroundUrl ? (
        <div
          className={`absolute inset-0 ${
            overlay === 'dark' ? 'bg-black/40' : 'bg-cream/70'
          }`}
          aria-hidden="true"
        />
      ) : null}
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-brand md:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-4 text-lg text-gray-700">{subtitle}</p> : null}
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <CTAButton
              href={primary.href}
              label={primary.label}
              variant={primary.variant ?? 'primary'}
            />
            {secondary ? (
              <CTAButton
                href={secondary.href}
                label={secondary.label}
                variant={secondary.variant ?? 'outline'}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}


