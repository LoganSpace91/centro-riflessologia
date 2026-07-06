import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton'
import MotionProvider from '@/components/motion/MotionProvider'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

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
  alternates: {
    canonical: 'https://centro-riflessologia.vercel.app',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '12',
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi di riflessologia e benessere',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Massaggio corpo con riflessologia plantare',
          description: 'Massaggio mirato ai punti riflessi dei piedi per favorire equilibrio e rilassamento.',
          url: 'https://centro-riflessologia.vercel.app/servizi/massaggio-riflessologia-corpo',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Riflessologia plantare + impacco terapeutico',
          description: 'Riflessologia dei piedi con applicazione di impacco: azione sinergica, profondo relax.',
          url: 'https://centro-riflessologia.vercel.app/servizi/riflessologia-impacco',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Stone massage',
          description: 'Massaggio con pietre calde per sciogliere tensioni e favorire il rilassamento.',
          url: 'https://centro-riflessologia.vercel.app/servizi/stone-massage',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Trattamento corpo ALIUS',
          description: 'Percorso dedicato agli inestetismi con tecniche dolci e prodotti mirati.',
          url: 'https://centro-riflessologia.vercel.app/servizi/alius-corpo',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Trattamento viso ESSERE ALIUS',
          description: 'Cura del viso rigenerante per ritrovare luminosità e benessere.',
          url: 'https://centro-riflessologia.vercel.app/servizi/alius-viso-essere',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Massaggio parziale / bambino',
          description: 'Trattamento delicato, mirato a zone specifiche. Ideale anche per i più piccoli.',
          url: 'https://centro-riflessologia.vercel.app/servizi/massaggio-parziale-bambino',
        },
      },
    ],
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
      <body className={`${inter.className} text-gray-800`}>
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
