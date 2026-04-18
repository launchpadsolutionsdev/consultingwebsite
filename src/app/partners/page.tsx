import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partners & Ecosystem | Launchpad Solutions',
  description:
    'The platforms, processors, regulators, and service providers we work with to deliver raffle programs at scale.',
}

const partnerGroups = [
  {
    title: 'Raffle Platforms',
    blurb:
      'We\u2019re platform-agnostic. We work with the enterprise-grade raffle platforms as well as select regional specialists. Selection is driven by program fit, not affiliation.',
    items: [
      {
        name: 'Ascend Fundraising Solutions',
        type: 'Full-stack platform',
        description: 'Canadian leader in enterprise 50/50 and Catch the Ace platforms.',
      },
      {
        name: 'BUMP CBN',
        type: 'Full-stack platform',
        description: 'Digital raffle leader in North America, strong in pro sports foundations.',
      },
      {
        name: 'Stride Management',
        type: 'Full-stack platform',
        description: 'Canadian lottery management with mature subscription and recurring ticket tooling.',
      },
      {
        name: 'Rosewood',
        type: 'Regional specialist',
        description: 'AGCO-registered Catch the Ace specialist based in Ontario.',
      },
    ],
  },
  {
    title: 'Payment & Infrastructure',
    blurb:
      'Payment processing, identity verification, and fraud prevention \u2014 the plumbing that keeps a program running clean during a jackpot surge.',
    items: [
      {
        name: 'Stripe',
        type: 'Payment processing',
        description: 'Primary payment processor for most client programs. Strong raffle-category support.',
      },
      {
        name: 'Moneris',
        type: 'Payment processing',
        description: 'Canadian processor with specific charitable gaming experience.',
      },
      {
        name: 'Persona',
        type: 'Identity verification',
        description: 'KYC and age verification where regulatory frameworks require it.',
      },
      {
        name: 'Sift',
        type: 'Fraud prevention',
        description: 'Transaction-level fraud scoring during peak-revenue windows.',
      },
    ],
  },
  {
    title: 'Regulators',
    blurb:
      'We work alongside provincial and state regulators to ensure every client program operates cleanly within every jurisdiction\u2019s framework.',
    items: [
      {
        name: 'AGCO',
        type: 'Ontario',
        description: 'Alcohol and Gaming Commission of Ontario. Our deepest regulatory relationship.',
      },
      {
        name: 'GPEB',
        type: 'British Columbia',
        description: 'Gaming Policy and Enforcement Branch.',
      },
      {
        name: 'AGLC',
        type: 'Alberta',
        description: 'Alberta Gaming, Liquor and Cannabis Commission.',
      },
      {
        name: 'State Commissions',
        type: 'United States',
        description: 'Active engagements with charitable gaming regulators in permitting U.S. states.',
      },
    ],
  },
  {
    title: 'Communications & Creative',
    blurb:
      'The tools and partners that power our marketing execution \u2014 from email sends to SMS to ad creative to public relations.',
    items: [
      {
        name: 'Mailchimp',
        type: 'Email marketing',
        description: 'Primary ESP for client marketing campaigns.',
      },
      {
        name: 'Twilio',
        type: 'SMS',
        description: 'Compliant SMS for final-weeks engagement and winner notifications.',
      },
      {
        name: 'Meta & Google Ads',
        type: 'Paid acquisition',
        description: 'Geographic and interest-targeted paid acquisition at scale.',
      },
      {
        name: 'Regional PR Firms',
        type: 'Press & media',
        description: 'Local press partnerships that amplify jackpot milestones.',
      },
    ],
  },
]

export default function PartnersPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Partners & Ecosystem
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              We don&apos;t run raffles alone — <span className="gradient-text">nobody does.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The best raffle programs are built on a stack of specialized platforms, processors,
              and regulatory relationships. Here&apos;s the ecosystem we work in — and why your
              program\u2019s success depends on picking the right pieces, not just a platform.
            </p>
          </div>
        </div>
      </section>

      {partnerGroups.map((g, i) => (
        <section
          key={g.title}
          className={`py-16 ${i % 2 === 0 ? 'bg-gray-50 border-t border-gray-100' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
                {g.title}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{g.blurb}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {g.items.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl p-6 border border-gray-100 h-full">
                  <div className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
                    {item.type}
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Want to partner with Launchpad?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            We\u2019re always looking for platforms, regulators, and creative partners with depth
            in charitable gaming.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
