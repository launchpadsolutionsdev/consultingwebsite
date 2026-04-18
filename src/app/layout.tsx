import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://launchpadsolutions.ca'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Launchpad Solutions | Raffle Management & Charitable Gaming Experts',
    template: '%s | Launchpad Solutions',
  },
  description:
    'Unleash your fundraising potential with Launchpad Solutions. Expert raffle management and charitable gaming solutions for organizations of all sizes.',
  keywords:
    'raffle management, charitable gaming, fundraising, lottery management, nonprofit fundraising, 50/50 raffle, Catch the Ace, AGCO',
  icons: {
    icon: [
      { url: '/brand/logos/launchpad-mark-color.svg', type: 'image/svg+xml' },
      { url: '/brand/logos/launchpad-mark-color.png' },
    ],
    apple: '/brand/logos/launchpad-mark-color.png',
  },
  openGraph: {
    title: 'Launchpad Solutions | Raffle Management & Charitable Gaming Experts',
    description:
      'Expert raffle management and charitable gaming solutions. We help organizations unleash their fundraising potential.',
    type: 'website',
    siteName: 'Launchpad Solutions',
  },
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'Launchpad Solutions Feed' }],
    },
  },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Launchpad Solutions',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logos/launchpad-horizontal-color.png`,
  description:
    'Raffle management and charitable gaming experts helping nonprofits build record-breaking fundraising programs.',
  sameAs: [],
  foundingDate: '2023',
  founder: { '@type': 'Person', name: 'Torin Gunnell' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['English'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
