import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://centro-riflessologia.vercel.app'),
  title: {
    default: 'Centro Riflessologia — Paganotto Danya',
    template: '%s | Centro Riflessologia',
  },
  description:
    'Trattamenti di riflessologia plantare e approccio olistico per il benessere a Verona e provincia. San Bonifacio (VR). Prenota ora con Danya Paganotto.',
  keywords: [
    'Massaggio',
    'Riflessologia',
    'piedi',
    'professionisti',
    'San Bonifacio',
    'Riflessologia plantare',
    'Riflessologia plantare Verona',
  ],
  openGraph: {
    title: 'Centro Riflessologia — Paganotto Danya',
    description:
      'Trattamenti di riflessologia plantare e approccio olistico per il benessere a Verona e provincia. San Bonifacio (VR).',
    url: 'https://centro-riflessologia.vercel.app',
    siteName: 'Centro Riflessologia',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Centro Riflessologia — Paganotto Danya',
  description: 'Trattamenti di riflessologia plantare e approccio olistico per il benessere a Verona e provincia.',
  url: 'https://centro-riflessologia.vercel.app',
  telephone: '+393494493683',
  email: 'paganottodanya@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Tombole, 168',
    addressLocality: 'San Bonifacio',
    addressRegion: 'VR',
    postalCode: '37047',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.3967,
    longitude: 11.2689,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '€€',
  image: 'https://centro-riflessologia.vercel.app/SanBonifacio_logo.png',
  sameAs: [
    'https://instagram.com/centro_riflessologia_sanbo',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} text-gray-800`}>
        <a
          href="#maincontent"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand focus:shadow"
        >
          Salta al contenuto
        </a>
        <Navbar />
        <main id="maincontent" className="min-h-[70vh]">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
        <Analytics />
      </body>
    </html>
  )
}
