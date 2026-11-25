"use client"
import { useEffect } from 'react'
import { track } from '@vercel/analytics'

/** Canale di contatto dedotto dall'href, oppure null se non è un link di contatto. */
function channelOf(href: string): string | null {
  if (href.includes('wa.me')) return 'whatsapp'
  if (href.startsWith('tel:')) return 'telefono'
  if (href.includes('instagram.com')) return 'instagram'
  if (href.startsWith('mailto:')) return 'email'
  return null
}

/**
 * Traccia ogni clic su link di contatto (WhatsApp, telefono, Instagram, email) con un solo
 * listener delegato: nessun bottone va modificato. La pagina di provenienza è già registrata
 * da Vercel Analytics (requestPath); qui aggiungiamo canale ed etichetta del bottone.
 */
export default function ContactTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]')
      if (!a) return
      const channel = channelOf(a.getAttribute('href') ?? '')
      if (!channel) return
      const label = (a.textContent || a.getAttribute('aria-label') || '').trim().slice(0, 60)
      track('Contatto', { canale: channel, bottone: label || '(icona)' })
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
