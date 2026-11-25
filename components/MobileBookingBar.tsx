"use client"
import { usePathname } from 'next/navigation'
import { getWhatsAppUrl } from '@/lib/constants'

const bookingUrl = getWhatsAppUrl('Ciao Danya, vorrei prenotare un appuntamento.')

/** Barra "Prenota" fissa in basso, solo mobile; nascosta in /contatti dove i contatti sono già la pagina. */
export default function MobileBookingBar() {
  const pathname = usePathname()
  if (pathname.startsWith('/contatti')) return null

  return (
    <>
      {/* Spazio in fondo alla pagina perché la barra non copra il footer. */}
      <div className="h-24 md:hidden" aria-hidden />
      <div
        className="fixed inset-x-0 bottom-0 z-40 px-4 pt-3 md:hidden"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <a
          href={bookingUrl}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand/90 font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_30px_-10px_rgba(16,81,102,0.55)] ring-1 ring-white/20 backdrop-blur-xl transition active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
            <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 13.6c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.3.2-.3.6-.3.8-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.4.3.2.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.1.1.7-.1 1.3z" />
          </svg>
          Prenota su WhatsApp
        </a>
      </div>
    </>
  )
}
