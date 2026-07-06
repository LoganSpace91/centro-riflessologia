"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
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
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-surface bg-cream/85 shadow-card backdrop-blur-md'
          : 'border-transparent bg-cream/60 backdrop-blur-sm'
      }`}
    >
      <div
        className={`container flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}
      >
        <Link href="/" className="flex items-center gap-2 text-brand">
          <Image
            src="/SanBonifacio_logo.png"
            alt="Logo Centro Riflessologia"
            width={32}
            height={32}
            className="rounded-sm object-cover"
            priority
          />
          <span className="font-display text-lg font-semibold">Centro Riflessologia</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => {
            const active = i.href === '/' ? pathname === '/' : pathname.startsWith(i.href)
            return (
              <Link
                key={i.href}
                href={i.href}
                aria-current={active ? 'page' : undefined}
                className={`relative text-sm transition-colors ${
                  active ? 'font-medium text-brand' : 'text-gray-700 hover:text-brand'
                }`}
              >
                {i.label}
                {active ? (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-peach" aria-hidden />
                ) : null}
              </Link>
            )
          })}
          <a className="btn btn-primary ml-2" href={bookingUrl}>
            Prenota
          </a>
        </nav>
        <MobileMenu bookingUrl={bookingUrl} />
      </div>
    </header>
  )
}
