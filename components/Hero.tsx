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
        `relative py-16 ${
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
            overlay === 'dark' ? 'bg-black/40' : 'bg-white/65'
          }`}
          aria-hidden="true"
        />
      ) : null}
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-brand md:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-4 text-lg text-gray-700">{subtitle}</p> : null}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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


