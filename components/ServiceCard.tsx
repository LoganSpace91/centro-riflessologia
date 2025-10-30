import Link from 'next/link'

type Props = {
  // EN names
  title?: string
  description?: string
  backgroundUrl?: string
  href: string
  price?: string
  // IT aliases for convenience
  titolo?: string
  descrizione?: string
  immagineBackground?: string
  prezzo?: string
}

export default function ServiceCard(props: Props) {
  const title = props.title ?? props.titolo ?? ''
  const description = props.description ?? props.descrizione ?? ''
  const backgroundUrl = props.backgroundUrl ?? props.immagineBackground
  const href = props.href
  const price = props.price ?? props.prezzo

  if (backgroundUrl) {
    return (
      <div
        className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-cover bg-center shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-lg"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="absolute inset-0 bg-white/65 transition group-hover:bg-white/55" aria-hidden />
        {price ? (
          <div className="absolute bottom-4 right-4 z-10 rounded-full bg-brand px-3 py-1 text-sm font-semibold text-white shadow">
            {price}
          </div>
        ) : null}
        <div className="relative z-10 p-6">
          <h3 className="text-xl font-semibold text-brand">{title}</h3>
          <p className="mt-2 max-w-md text-gray-800">{description}</p>
          <Link href={href} className="btn btn-outline mt-4 inline-block">
            Scopri di più
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="card relative transition-transform hover:-translate-y-0.5 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-brand">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
      <Link href={href} className="btn btn-outline mt-4 inline-block">
        Scopri di più
      </Link>
      {price ? (
        <div className="absolute bottom-4 right-4 rounded-full bg-brand px-3 py-1 text-sm font-semibold text-white">
          {price}
        </div>
      ) : null}
    </div>
  )
}


