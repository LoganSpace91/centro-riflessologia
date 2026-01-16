"use client"
import { useState } from 'react'
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

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 border-b border-gray-100 bg-white shadow-lg md:hidden">
          <nav className="container flex flex-col py-4">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-gray-700 hover:text-brand"
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
