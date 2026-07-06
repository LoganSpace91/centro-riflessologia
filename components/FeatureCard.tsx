import Link from 'next/link'
import TiltCard from './motion/TiltCard'

type Props = {
  title: string
  description: string
  href: string
  imageUrl: string
}

/** Card servizio in evidenza: immagine, tilt 3D leggero e bordo che si illumina all'hover. */
export default function FeatureCard({ title, description, href, imageUrl }: Props) {
  return (
    <Link href={href} className="group block h-full [perspective:1000px]">
      <TiltCard className="h-full">
        <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-[#FFFCF8] shadow-card transition-shadow duration-300 group-hover:shadow-xl">
          <div className="relative h-44 overflow-hidden sm:h-52">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCF8] via-[#FFFCF8]/10 to-transparent" aria-hidden />
          </div>

          <div className="relative flex flex-1 flex-col p-6">
            <h3 className="font-display text-2xl font-semibold text-brand">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand transition-[gap] group-hover:gap-2.5">
              Scopri di più
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="translate-y-px">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition duration-300 group-hover:ring-peach/50" aria-hidden />
        </div>
      </TiltCard>
    </Link>
  )
}
