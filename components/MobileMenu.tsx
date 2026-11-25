"use client"
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'motion/react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contatti', label: 'Contatti' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [touched, setTouched] = useState<string | null>(null)
  const pathname = usePathname()
  const activeHref = nav.find((i) => (i.href === '/' ? pathname === '/' : pathname.startsWith(i.href)))?.href
  // Come su desktop: la pillola sta sulla pagina attiva e scorre sulla voce toccata.
  const pill = touched ?? activeHref

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
    setTouched(null)
  }, [pathname])

  return (
    <>
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-16 z-30 bg-black/20 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        className={`absolute left-3 right-3 top-[4.25rem] z-40 rounded-3xl bg-[#F7F0E8] shadow-[0_18px_40px_-12px_rgba(16,81,102,0.3)] ring-1 ring-black/5 transition-all duration-300 md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 p-2" onPointerLeave={() => setTouched(null)}>
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              aria-current={i.href === activeHref ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
              onPointerEnter={() => setTouched(i.href)}
              onPointerDown={() => setTouched(i.href)}
              className={`relative rounded-2xl px-4 py-3 text-base transition-colors ${
                pill === i.href ? 'font-semibold text-brand' : 'text-gray-700'
              }`}
            >
              {pill === i.href ? (
                <motion.span
                  layoutId="mobile-nav-glass"
                  className="absolute inset-0 rounded-2xl bg-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_6px_18px_-8px_rgba(16,81,102,0.3)] ring-1 ring-white/80 backdrop-blur-xl"
                  transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.8 }}
                  aria-hidden
                />
              ) : null}
              <span className="relative">{i.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
