"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
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
  const [hovered, setHovered] = useState<string | null>(null)
  const activeHref = nav.find((i) => (i.href === '/' ? pathname === '/' : pathname.startsWith(i.href)))?.href
  // La pillola segue il mouse; quando esce torna sulla pagina attiva.
  const pill = hovered ?? activeHref

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
        <nav
          className="hidden items-center justify-center gap-1 rounded-full bg-brand/[0.05] p-1 ring-1 ring-brand/[0.06] backdrop-blur-md md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {nav.map((i) => {
            const active = i.href === activeHref
            return (
              <Link
                key={i.href}
                href={i.href}
                aria-current={active ? 'page' : undefined}
                onMouseEnter={() => setHovered(i.href)}
                onFocus={() => setHovered(i.href)}
                onBlur={() => setHovered(null)}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                  pill === i.href ? 'font-medium text-brand' : 'text-gray-600 hover:text-brand'
                }`}
              >
                {pill === i.href ? (
                  <motion.span
                    layoutId="nav-glass"
                    className="absolute inset-0 rounded-full bg-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(16,81,102,0.06),0_6px_18px_-6px_rgba(16,81,102,0.25)] ring-1 ring-white/80 backdrop-blur-xl backdrop-saturate-150"
                    transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.8 }}
                    aria-hidden
                  />
                ) : null}
                <span className="relative">{i.label}</span>
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
