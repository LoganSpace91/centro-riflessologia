import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton'
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://centro-riflessologia.vercel.app'),
  title: {
    default: 'Centro Riflessologia — Paganotto Danya',
    template: '%s | Centro Riflessologia',
  },
  description:
    'Trattamenti di riflessologia plantare e approccio olistico per il benessere. San Bonifacio (VR). Prenota ora con Danya Paganotto.',
  keywords: [
    'Massaggio',
    'Riflessologia',
    'piedi',
    'professionisti',
    'San Bonifacio',
    'Riflessologia plantare',
  ],
  openGraph: {
    title: 'Centro Riflessologia — Paganotto Danya',
    description:
      'Trattamenti di riflessologia plantare e approccio olistico per il benessere. San Bonifacio (VR).',
    url: 'https://centro-riflessologia.vercel.app',
    siteName: 'Centro Riflessologia',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={`${inter.className} text-gray-800`}>
        <a
          href="#maincontent"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand focus:shadow"
        >
          Salta al contenuto
        </a>
        <div className={`${poppins.className} sr-only`}>Centro Riflessologia</div>
        <Navbar />
        <main id="maincontent" className="min-h-[70vh]">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
        <Analytics />
      </body>
    </html>
  )
}


