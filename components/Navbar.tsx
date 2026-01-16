import Link from 'next/link'
import Image from 'next/image'
import { getWhatsAppUrl } from '@/lib/constants'
import MobileMenu from './MobileMenu'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/riflessologia-plantare', label: 'Riflessologia' },
  { href: '/operatore-olistico', label: 'Operatore olistico' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contatti', label: 'Contatti' },
]

const bookingUrl = getWhatsAppUrl('Ciao Danya, vorrei prenotare un appuntamento.')

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-brand">
          <Image
            src="/SanBonifacio_logo.png"
            alt="Logo Centro Riflessologia"
            width={32}
            height={32}
            className="rounded-sm object-cover"
            priority
          />
          <span className="text-lg font-semibold">Centro Riflessologia</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm text-gray-700 hover:text-brand">
              {i.label}
            </Link>
          ))}
          <a className="btn btn-primary ml-2" href={bookingUrl}>
            Prenota
          </a>
        </nav>
        <MobileMenu bookingUrl={bookingUrl} />
      </div>
    </header>
  )
}
