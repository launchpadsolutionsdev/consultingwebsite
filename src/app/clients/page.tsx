import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Clients | Launchpad Solutions',
  description:
    'Hospital foundations, community charities, service clubs, and professional sports foundations we\u2019ve worked with.',
}

const logos = [
  {
    src: '/images/TB5050 Logo Testemonial.png',
    alt: 'Thunder Bay 50/50',
    caption: 'Thunder Bay 50/50',
    result: '$15.7M record month',
    href: 'https://www.thunderbay5050.ca',
  },
  {
    src: '/images/Thunder Bay Catch The Ace Logo Testemonial.png',
    alt: 'Thunder Bay Catch the Ace',
    caption: 'Thunder Bay Catch the Ace',
    result: 'Year-round engagement',
    href: 'https://www.thunderbaycatchtheace.ca',
  },
  {
    src: '/images/Rotary House Lottery Testemonial.png',
    alt: 'Rotary House Lottery',
    caption: 'Rotary House Lottery',
    result: '$1.2M raised to date',
    href: 'https://www.fwrotaryhouselottery.ca',
  },
  {
    src: '/images/CFAC Jeep Raffle Logo Tesetmonial.png',
    alt: 'CFAC Jeep Raffle',
    caption: 'CFAC Jeep Raffle',
    result: '2x total fundraising capacity',
    href: 'https://www.cruisingforacure.ca',
  },
  {
    src: '/images/J&J.png',
    alt: 'J&J',
    caption: 'J&J',
    result: 'Multi-year engagement',
  },
]

const categories = [
  {
    name: 'Hospital Foundations',
    description:
      'Regional and provincial hospital foundations running flagship 50/50 and Catch the Ace programs as primary revenue streams.',
  },
  {
    name: 'Community Charities',
    description:
      'Community foundations, family service charities, and regional nonprofits using raffles to fund expanded community programs.',
  },
  {
    name: 'Service Clubs',
    description:
      'Rotary clubs, Lions clubs, and other service organizations using raffles to free up volunteer energy for actual community service.',
  },
  {
    name: 'Sports Team Foundations',
    description:
      'Pro and amateur sports team charitable foundations leveraging fan bases for high-velocity raffle programs.',
  },
  {
    name: 'First Responders',
    description:
      'Fire, search & rescue, and emergency services charities whose cause-driven supporter bases drive exceptional ticket velocity.',
  },
  {
    name: 'Faith-Based Charities',
    description:
      'Churches, religious orders, and faith-based community organizations running calendar and traditional raffle programs.',
  },
]

export default function ClientsPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Clients
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              Charities we&apos;ve had the privilege of working with.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From the largest hospital 50/50 in Canada to first-time raffle launches, we partner
              with charities across North America to build raffle programs that scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-10 tracking-tight">
            Featured client programs
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {logos.map((l) => {
              const body = (
                <>
                  <div className="aspect-square relative mb-4 bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                    <Image src={l.src} alt={l.alt} fill className="object-contain p-4" />
                  </div>
                  <h3 className="font-bold text-primary-900 text-sm mb-1">{l.caption}</h3>
                  <p className="text-xs text-gray-500">{l.result}</p>
                </>
              )
              const cardClass =
                'bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all text-center'
              return l.href ? (
                <a
                  key={l.caption}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${l.caption}`}
                  className={`block ${cardClass}`}
                >
                  {body}
                </a>
              ) : (
                <div key={l.caption} className={cardClass}>
                  {body}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-4">
              Organizations we work with
            </h2>
            <p className="text-gray-600">
              We specialize in mid-sized-to-large charities across six primary categories. If your
              organization fits one of these profiles, we likely have relevant experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <div key={c.name} className="card p-6">
                <h3 className="font-bold text-primary-900 mb-2 text-lg">{c.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                Want to talk about your organization?
              </h2>
              <p className="text-xl text-white/80">
                Book a free 30-minute consultation. We&apos;ll tell you honestly whether your
                organization is a good fit.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
