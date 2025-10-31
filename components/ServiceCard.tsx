import Link from 'next/link'

type Props = {
  title?: string
  description?: string
  backgroundUrl?: string
  href: string
  titolo?: string
  descrizione?: string
  immagineBackground?: string
}

export default function ServiceCard(props: Props) {
  const title = props.title ?? props.titolo ?? ''
  const description = props.description ?? props.descrizione ?? ''
  const backgroundUrl = props.backgroundUrl ?? props.immagineBackground
  const href = props.href

  if (backgroundUrl) {
    return (
      <div
        className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-cover bg-center shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-lg"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="absolute inset-0 bg-white/65 transition group-hover:bg-white/55" aria-hidden />
        <div className="relative z-10 flex h-full flex-col p-6">
          <div>
            <h3 className="text-xl font-semibold text-brand">{title}</h3>
            <p className="mt-2 max-w-md text-gray-800">{description}</p>
          </div>
          <Link
            href={href}
            className="btn btn-outline mt-auto self-end"
          >
            Scopri di più
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="card relative flex h-full flex-col transition-transform hover:-translate-y-0.5 hover:shadow-lg">
      <div>
        <h3 className="text-lg font-semibold text-brand">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
      <Link href={href} className="btn btn-outline mt-auto self-end">
        Scopri di più
      </Link>
    </div>
  )
}


