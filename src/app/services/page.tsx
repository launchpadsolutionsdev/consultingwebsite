import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Launchpad Solutions',
  description:
    'Full-service raffle management for charities of every size. From 50/50 and Catch the Ace programs to Catch the Ace and strategic consulting engagements.',
}

const services = [
  {
    slug: '5050-management',
    title: '50/50 Raffle Management',
    tag: 'Flagship Program',
    description:
      'End-to-end management of electronic 50/50 raffle programs — from licensing and platform setup to marketing, customer support, and post-cycle optimization.',
    highlights: [
      'AGCO and multi-jurisdictional licensing',
      'Prize architecture optimized for conversion',
      'Weekly marketing cadence (email, SMS, paid, PR)',
      'Live-draw operations and audit-grade reporting',
      'Staffed customer support during peak windows',
    ],
    color: 'from-primary-900 via-primary-700 to-accent-blue',
  },
  {
    slug: 'catch-the-ace',
    title: 'Catch the Ace',
    tag: 'Progressive Raffle',
    description:
      'Design, launch, and operations for Catch the Ace progressive raffles — including weekly draw management, card-board controls, and the AGCO-specific compliance work this format demands.',
    highlights: [
      'AGCO progressive raffle licensing',
      'Weekly live-draw operations',
      'Card board + sealed envelope audit controls',
      'Year-round marketing and supporter engagement',
      'Final-weeks viral push strategy',
    ],
    color: 'from-accent-blue via-blue-500 to-accent-cyan',
  },
  {
    slug: 'prize-raffle',
    title: 'Prize Raffles',
    tag: 'Acquisition Engine',
    description:
      'High-value physical-prize raffles (vehicles, homes, experiences) designed as acquisition channels — to bring net-new supporters into your broader program.',
    highlights: [
      'Prize selection and supplier relationships',
      'Prize insurance and financial control design',
      'Storytelling-first creative and campaign',
      'Regional marketing targeting',
      'Acquisition funnel to 50/50 / recurring giving',
    ],
    color: 'from-emerald-500 via-emerald-600 to-teal-500',
  },
  {
    slug: 'consulting',
    title: 'Strategic Consulting',
    tag: 'For Boards & Leadership',
    description:
      'Program audits, feasibility studies, and strategic assessments for charity boards considering a new program — or evaluating an existing one that has plateaued.',
    highlights: [
      'Feasibility and readiness assessment',
      'Existing program audits and benchmark',
      'Platform selection and negotiation support',
      'Cross-border and multi-jurisdiction planning',
      'Board-ready investment case preparation',
    ],
    color: 'from-purple-600 via-purple-500 to-pink-500',
  },
]

const packages = [
  {
    name: 'Lift-Off',
    price: 'Starter',
    target: 'First-time raffle operators',
    description:
      'Launch support for charities running their first electronic raffle. Licensing, platform, first-cycle marketing, and training.',
    features: [
      'Full licensing preparation (provincial or state)',
      'Platform selection and setup',
      'Launch marketing plan + first-cycle creative',
      'Draw-day operations for cycle 1',
      'Post-cycle handoff and training',
    ],
  },
  {
    name: 'Mission Control',
    price: 'Full Service',
    target: 'Ongoing program operations',
    description:
      'Full-service, ongoing management of your raffle program. We own day-to-day operations; you own the strategic relationship with your supporters.',
    features: [
      'Everything in Lift-Off',
      'Ongoing marketing execution',
      'Weekly operations and draw management',
      'Staffed peak-period customer support',
      'Quarterly performance reviews + iteration',
    ],
    featured: true,
  },
  {
    name: 'Custom Support',
    price: 'Scoped',
    target: 'Hybrid and specialized needs',
    description:
      'Scoped engagements for charities with specific challenges: cross-border expansion, second-program launch, program turnaround, platform migration.',
    features: [
      'Custom scope against defined outcomes',
      'Senior-team involvement throughout',
      'Transparent deliverables and timeline',
      'Clear handoff to your team at project close',
      'Follow-up support package available',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              Full-service raffle management. <span className="gradient-text">End-to-end.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We handle the licensing, the platform, the marketing, the draw, and the customer
              support — so your team can focus on the mission. Below is what we do, and how it fits
              together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => {
              const href = `/services/${s.slug}`
              return (
                <Link
                  key={s.slug}
                  href={href}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:border-accent-blue/40 transition-all hover:-translate-y-1 hover:shadow-2xl p-8"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${s.color}`} />
                  <div className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-3">
                    {s.tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 tracking-tight group-hover:text-accent-blue transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-accent-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center font-semibold text-accent-blue group-hover:text-primary-900 transition-colors">
                    Learn more
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Packages
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-6">
              How we structure engagements.
            </h2>
            <p className="text-xl text-gray-600">
              Three primary engagement models. The right one depends on where you are in your
              raffle journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`rounded-3xl p-8 border-2 transition-all ${
                  p.featured
                    ? 'border-accent-blue bg-gradient-brand text-white shadow-2xl scale-105'
                    : 'border-gray-100 bg-white'
                }`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                    p.featured ? 'text-accent-cyan' : 'text-accent-blue'
                  }`}
                >
                  {p.price}
                </div>
                <h3 className={`text-3xl font-bold mb-1 ${p.featured ? 'text-white' : 'text-primary-900'}`}>
                  {p.name}
                </h3>
                <div className={`text-sm mb-5 ${p.featured ? 'text-white/80' : 'text-gray-500'}`}>
                  {p.target}
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${p.featured ? 'text-white/80' : 'text-gray-600'}`}>
                  {p.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        p.featured ? 'text-white/90' : 'text-gray-700'
                      }`}
                    >
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.featured ? 'text-accent-cyan' : 'text-accent-blue'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`block text-center rounded-full px-6 py-3 font-semibold transition-colors ${
                    p.featured
                      ? 'bg-white text-primary-900 hover:bg-gray-100'
                      : 'bg-primary-900 text-white hover:bg-primary-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
