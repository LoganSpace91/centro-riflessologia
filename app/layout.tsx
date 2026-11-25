import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Inter, Fraunces } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton'
import MotionProvider from '@/components/motion/MotionProvider'
import { Analytics } from '@vercel/analytics/react'
import { SITE_URL } from '@/lib/constants'
import { SERVICES } from '@/lib/services'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
    siteName: 'Centro Riflessologia',
    type: 'website',
    locale: 'it_IT',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Centro Riflessologia — Trattamenti di riflessologia plantare a San Bonifacio (VR)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro Riflessologia — Paganotto Danya',
    description:
      'Trattamenti di riflessologia plantare e approccio olistico per il benessere a Verona e provincia.',
    images: ['/opengraph-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Centro Riflessologia — Paganotto Danya',
  description: 'Trattamenti di riflessologia plantare e approccio olistico per il benessere a Verona e provincia.',
  url: SITE_URL,
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
  image: `${SITE_URL}/SanBonifacio_logo.png`,
  sameAs: [
    'https://instagram.com/centro_riflessologia_sanbo',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '12',
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi di riflessologia e benessere',
    itemListElement: SERVICES.map((sv) => ({
      '@type': 'Offer',
      price: sv.price.replace('€', ''),
      priceCurrency: 'EUR',
      itemOffered: { '@type': 'Service', name: sv.title, description: sv.cardDescription, url: `${SITE_URL}/servizi/${sv.slug}` },
    })),
  },
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
      <body className={`${inter.variable} ${fraunces.variable} font-sans text-gray-800`}>
        <a
          href="#maincontent"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand focus:shadow"
        >
          Salta al contenuto
        </a>
        <MotionProvider>
          <Navbar />
          <main id="maincontent" className="min-h-[70vh]">{children}</main>
          <Footer />
          <WhatsAppFloatButton />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
