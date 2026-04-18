import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Newsletter from '@/components/Newsletter'

interface ServiceDetail {
  title: string
  tagline: string
  hero: string
  heroColor: string
  sections: {
    heading: string
    body: string
    bullets?: string[]
  }[]
  ctaTitle: string
}

const SERVICES: Record<string, ServiceDetail> = {
  '5050-management': {
    title: '50/50 Raffle Management',
    tagline: 'The flagship program.',
    hero: 'End-to-end management of electronic 50/50 raffle programs — built to the standards of the largest hospital 50/50 in Canada.',
    heroColor: 'from-primary-900 via-primary-700 to-accent-blue',
    sections: [
      {
        heading: 'What a full-service engagement looks like',
        body: 'We take responsibility for the entire program lifecycle. Your team owns the relationship with your supporters and the use of proceeds; we handle everything else.',
        bullets: [
          'Licensing and compliance across every jurisdiction you operate in',
          'Platform selection, setup, and ongoing operations',
          'Prize architecture optimized against conversion data',
          'Weekly marketing execution: email, SMS, paid social, PR, local media',
          'Live customer support staffed for peak periods',
          'Draw-day operations with full audit trail',
          'Post-cycle reporting and retrospective iteration',
        ],
      },
      {
        heading: 'The operating rhythm',
        body: 'A well-run 50/50 is a program, not an event. We run each cycle on a disciplined operating rhythm — weekly reviews, daily marketing, hourly monitoring during peak windows. The result is predictable revenue at scale.',
      },
      {
        heading: 'Who this is for',
        body: 'Hospital foundations, pro sports team foundations, major community charities, and service organizations with an engaged supporter base and a multi-year commitment to building a repeatable revenue program.',
      },
      {
        heading: 'What we look for in a fit',
        body: 'We partner with charities where we can genuinely add value. That typically means:',
        bullets: [
          'An emotionally resonant cause with a defined community',
          'Leadership commitment to operational discipline over months and years',
          'A willingness to invest in marketing the way you would for a product launch',
          'Alignment between your board and operating team on the program\u2019s importance',
        ],
      },
    ],
    ctaTitle: 'Ready to build a 50/50 program that scales?',
  },
  'catch-the-ace': {
    title: 'Catch the Ace',
    tagline: 'The weekly ritual.',
    hero: 'Progressive raffles that keep supporters engaged every week, all year — with the operational discipline and regulatory hygiene Catch the Ace specifically demands.',
    heroColor: 'from-accent-blue via-blue-500 to-accent-cyan',
    sections: [
      {
        heading: 'Why Catch the Ace is different',
        body: 'Unlike a 50/50, Catch the Ace runs continuously — one draw per week for up to a year. That creates a weekly engagement ritual with supporters, but also a weekly operational burden that has to be run cleanly. We handle it end-to-end.',
      },
      {
        heading: 'What our engagement covers',
        body: 'A full Catch the Ace program engagement includes:',
        bullets: [
          'AGCO (or equivalent) progressive raffle licensing',
          'Weekly live-draw operations with audit-grade documentation',
          'Card board design and sealed-envelope controls',
          'Ticket platform operations and payment processing',
          'Weekly marketing: email, social, local media, partnerships',
          'Final-weeks viral push strategy as the board shrinks',
          'Winner verification and prize payout',
          'Weekly regulator reporting',
        ],
      },
      {
        heading: 'The final-weeks playbook',
        body: 'The final 8\u201312 weeks of a Catch the Ace cycle \u2014 as the card count drops below 15, then 10, then 5 \u2014 is where most of the revenue is earned. Our final-weeks playbook is purpose-built for that phase, with escalating marketing cadence, press outreach, and support coverage.',
      },
      {
        heading: 'Who this is for',
        body: 'Charities that can commit to a weekly operating rhythm for 6\u201312 months, with a community base that thrives on recurring, ritualized engagement. Service clubs, community foundations, and mid-sized hospital foundations typically do exceptionally well with this format.',
      },
    ],
    ctaTitle: 'Considering a Catch the Ace program?',
  },
  'prize-raffle': {
    title: 'Prize Raffles',
    tagline: 'New supporters. New revenue. New brand reach.',
    hero: 'High-value physical-prize raffles designed as acquisition engines — bringing net-new supporters into your program and expanding total fundraising capacity beyond what a 50/50 alone can do.',
    heroColor: 'from-emerald-500 via-emerald-600 to-teal-500',
    sections: [
      {
        heading: 'Why prize raffles matter',
        body: 'A 50/50 reaches a specific supporter psychology. A physical-prize raffle \u2014 a vehicle, a home, a vacation \u2014 reaches a different one. Our data shows that 40%+ of prize raffle ticket buyers have never previously engaged with the charity. Prize raffles are an acquisition channel as much as a revenue event.',
      },
      {
        heading: 'What we handle',
        body: 'Running a prize raffle correctly is structurally different from a 50/50. The prize is fixed; the revenue variable. Financial controls, prize insurance, and marketing psychology all work differently.',
        bullets: [
          'Prize selection and supplier negotiation',
          'Prize insurance and financial risk structuring',
          'Licensing specific to prize-driven raffles',
          'Storytelling-first creative (the prize is a protagonist)',
          'Regional marketing targeting based on prize-community fit',
          'Draw operations and winner delivery',
          'Post-raffle supporter retention and conversion to 50/50',
        ],
      },
      {
        heading: 'The acquisition-to-retention arc',
        body: 'The most valuable outcome of a well-designed prize raffle isn\u2019t the raffle revenue itself \u2014 it\u2019s the new supporter data that flows into your broader program. We design prize raffle engagements with post-cycle supporter conversion baked into the plan.',
      },
    ],
    ctaTitle: 'Thinking about a prize-driven raffle?',
  },
  consulting: {
    title: 'Strategic Consulting',
    tagline: 'For boards, executives, and foundations planning the next move.',
    hero: 'Program audits, feasibility studies, and strategic assessments for charity boards considering a new program — or evaluating one that has plateaued.',
    heroColor: 'from-purple-600 via-purple-500 to-pink-500',
    sections: [
      {
        heading: 'Typical engagements',
        body: 'Consulting engagements are scoped to specific strategic questions, not ongoing operations.',
        bullets: [
          'Feasibility assessment for a first raffle program',
          'Performance audit of an existing program that has plateaued',
          'Platform evaluation and negotiation support',
          'Cross-border or multi-jurisdiction expansion planning',
          'Board-ready investment case and financial modeling',
          'Program turnaround after a failed launch',
          'Strategic support through a platform or partner transition',
        ],
      },
      {
        heading: 'How we work',
        body: 'Consulting engagements are senior-led. Typical engagement runs 4\u201312 weeks, with weekly touchpoints, defined deliverables, and a clear handoff at the end. No ongoing entanglement unless you want one.',
      },
      {
        heading: 'What you get',
        body: 'The deliverable from a consulting engagement is always: a board-ready document, a clear decision framework, and a specific recommended path forward with its tradeoffs. Not a vague strategic deck.',
      },
    ],
    ctaTitle: 'Have a strategic question we can help with?',
  },
}

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SERVICES[params.slug]
  if (!s) return { title: 'Not Found' }
  return {
    title: `${s.title} | Launchpad Solutions`,
    description: s.hero,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = SERVICES[params.slug]
  if (!s) notFound()

  return (
    <>
      <section className={`pt-32 pb-20 bg-gradient-to-br ${s.heroColor} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <nav className="mb-8 text-sm text-white/70">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{s.title}</span>
          </nav>
          <div className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            {s.tagline}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            {s.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl">{s.hero}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-14">
          {s.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="text-3xl font-bold text-primary-900 tracking-tight mb-4">
                {sec.heading}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">{sec.body}</p>
              {sec.bullets && (
                <ul className="space-y-3">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                {s.ctaTitle}
              </h2>
              <p className="text-xl text-white/80">
                A 30-minute consultation is usually all it takes to decide whether we&apos;re the right fit.
                No sales pitch.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Book a Free Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  )
}
