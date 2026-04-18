import type { Metadata } from 'next'
import Hero from './_sections/Hero'
import FinalCta from './_sections/FinalCta'

export const metadata: Metadata = {
  title: 'Fund-Raise — Fundraising Intelligence for RE NXT Foundations',
  description:
    'Fund-Raise replaces $7,000–$24,000 in scattered tools with one AI-powered platform. 30+ dashboards, conversational analytics, and smart writing tools — built for foundations running Raiser\u2019s Edge NXT. A Launchpad Solutions product.',
  keywords:
    'fundraising software, nonprofit dashboard, donor analytics, AI fundraising, nonprofit CRM, philanthropy analytics, Blackbaud alternative, RE NXT analytics',
  openGraph: {
    title: 'Fund-Raise — Fundraising Intelligence for RE NXT Foundations',
    description:
      'One AI-powered platform replacing Insight Designer, MissionBI, Power BI, Crystal Reports, and standalone AI tools. $199/mo, unlimited users.',
    type: 'website',
  },
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fund-Raise',
  applicationCategory: 'BusinessApplication',
  description:
    'Fundraising intelligence platform for foundations running Blackbaud Raiser\u2019s Edge NXT. 30+ dashboards, conversational AI analytics, donor scoring, and 6 AI writing tools.',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '199',
    priceCurrency: 'CAD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '199',
      priceCurrency: 'CAD',
      unitText: 'MONTH',
    },
  },
  brand: { '@type': 'Brand', name: 'Launchpad Solutions' },
  url: 'https://fund-raise.onrender.com',
}

export default function FundRaisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <Hero />
      <FinalCta />
    </>
  )
}
