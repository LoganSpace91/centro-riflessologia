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
        className={`container flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}
      >
        <Link href="/" className="flex items-center gap-2 text-brand">
          <Image
            src="/SanBonifacio_logo.png"
            alt="Logo Centro Riflessologia"
            width={44}
            height={32}
            className="h-auto rounded-sm"
            priority
          />
          <span className="font-display text-lg font-semibold">Centro Riflessologia</span>
        </Link>
        <nav className="hidden items-center justify-center gap-8 md:flex">
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
        </nav>
        {/* Wrapper: .btn non è in un @layer e sovrascriverebbe `hidden`. */}
        <div className="hidden justify-self-end md:block">
          <a className="btn btn-primary" href={bookingUrl}>
            Prenota
          </a>
        </div>
        <MobileMenu bookingUrl={bookingUrl} />
      </div>
    </header>
  )
}
