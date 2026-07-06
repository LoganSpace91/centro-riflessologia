import Link from 'next/link'
import TiltCard from './motion/TiltCard'

type Props = {
  title: string
  description: string
  backgroundUrl?: string
  href: string
}

export default function ServiceCard({ title, description, backgroundUrl, href }: Props) {
  if (backgroundUrl) {
    return (
      <TiltCard className="group h-full">
        <div
          className="relative flex min-h-[220px] flex-col overflow-hidden rounded-3xl bg-cover bg-center shadow-card transition-shadow duration-300 hover:shadow-xl sm:min-h-[260px]"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        >
          <div className="absolute inset-0 bg-cream/70 transition group-hover:bg-cream/60" aria-hidden />
          <div className="relative z-10 flex h-full flex-col p-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-brand">{title}</h3>
              <p className="mt-2 max-w-md text-gray-800">{description}</p>
            </div>
            <Link href={href} className="btn btn-outline mt-auto self-end">
              Scopri di più
            </Link>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition duration-300 group-hover:ring-peach/50" aria-hidden />
        </div>
      </TiltCard>
    )
  }

  return (
    <TiltCard className="group h-full">
      <div className="relative flex h-full flex-col rounded-3xl border border-white/60 bg-[#FFFCF8] p-6 shadow-card transition-shadow duration-300 hover:shadow-xl">
        <div>
          <h3 className="font-display text-lg font-semibold text-brand">{title}</h3>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
        <Link href={href} className="btn btn-outline mt-auto self-end">
          Scopri di più
        </Link>
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition duration-300 group-hover:ring-peach/50" aria-hidden />
      </div>
    </TiltCard>
  )
}
