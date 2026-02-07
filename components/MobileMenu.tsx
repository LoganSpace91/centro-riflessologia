"use client"
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/riflessologia-plantare', label: 'Riflessologia' },
  { href: '/operatore-olistico', label: 'Operatore olistico' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contatti', label: 'Contatti' },
]

export default function MobileMenu({ bookingUrl }: { bookingUrl: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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
  }, [pathname])

  return (
    <>
      <div className="flex items-center gap-2 md:hidden">
        <a className="btn btn-primary text-sm" href={bookingUrl}>
          Prenota
        </a>
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
        className={`absolute left-0 right-0 top-16 z-40 border-b border-surface bg-cream shadow-lg transition-all duration-300 md:hidden ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-2 pointer-events-none opacity-0'
        }`}
      >
        <nav className="container flex flex-col py-4">
          {nav.map((i) => {
            const isActive = pathname === i.href ||
              (i.href !== '/' && pathname.startsWith(i.href))
            return (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-base transition-colors ${
                  isActive
                    ? 'font-semibold text-brand'
                    : 'text-gray-700 active:text-brand'
                }`}
              >
                {i.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
