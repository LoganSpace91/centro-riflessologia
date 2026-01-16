import { getWhatsAppUrl } from '@/lib/constants'

export default function WhatsAppFloatButton() {
  return (
    <a
      href={getWhatsAppUrl('Ciao Danya, vorrei informazioni e prenotare.')}
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
      aria-label="Scrivi su WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.38 0 0 5.38 0 12c0 2.11.55 4.09 1.51 5.81L0 24l6.33-1.65A11.95 11.95 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.27-6.21-3.48-8.52zM12 22a9.9 9.9 0 01-5.04-1.39l-.36-.21-3.76.98.99-3.66-.24-.38A10 10 0 1122 12c0 5.52-4.48 10-10 10zm5.36-6.39c-.3.85-1.48 1.56-2.08 1.65-.53.08-1.21.11-1.95-.12-.45-.14-1.02-.33-1.77-.65-3.12-1.35-5.15-4.47-5.31-4.69-.16-.22-1.27-1.69-1.27-3.23 0-1.54.8-2.29 1.09-2.61.3-.31.65-.39.87-.39.22 0 .43.01.62.01.2 0 .47-.07.73.56.26.63.88 2.17.96 2.33.08.16.13.35.02.57-.11.22-.17.36-.34.55-.17.19-.36.42-.51.57-.17.17-.34.35-.16.68.19.33.84 1.38 1.8 2.24 1.24 1.09 2.29 1.43 2.62 1.62.33.19.53.16.73-.1.2-.26.84-.98 1.07-1.31.22-.33.45-.28.73-.17.28.11 1.77.83 2.08.99.31.16.51.23.59.36.08.13.08.77-.22 1.62z" />
      </svg>
    </a>
  )
}
