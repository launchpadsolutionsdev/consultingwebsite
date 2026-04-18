import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Testimonials | What Our Clients Say',
  description:
    'What hospital foundations, service clubs, and community charities say about working with Launchpad Solutions.',
}

const testimonials = [
  {
    quote:
      'Torin and his team quietly became the most important operational partner our foundation has. The numbers speak for themselves — but the real value is that our staff gets to focus on the mission, not on running a raffle.',
    name: 'Foundation Executive Director',
    org: 'Regional Hospital Foundation, Ontario',
    category: 'Hospital Foundation',
  },
  {
    quote:
      'We\u2019d been running the same 50/50 the same way for six years, wondering why the numbers had plateaued. Launchpad spent a month asking pointed questions, changed four things, and the next cycle was 41% bigger.',
    name: 'Director of Fundraising',
    org: 'Provincial Charity',
    category: '50/50 Turnaround',
  },
  {
    quote:
      'They pushed back on things we\u2019d been certain about for years. Some of it stung. All of it was right.',
    name: 'Board Chair',
    org: 'Ontario Service Club',
    category: 'Service Club',
  },
  {
    quote:
      'Other agencies promise you the world and hand you a platform. Launchpad promises you an honest assessment and hands you a program.',
    name: 'Fundraising Lead',
    org: 'Western Canada Hospital Foundation',
    category: 'Hospital Foundation',
  },
  {
    quote:
      'The clarity of their retrospective reports is, genuinely, the best reporting we\u2019ve ever received from any vendor.',
    name: 'CFO',
    org: 'Community Health Charity',
    category: 'Operations',
  },
  {
    quote:
      'We were skeptical that a Catch the Ace would work in our community. They insisted on a pilot. Nine months later, it\u2019s the most reliable revenue program we operate.',
    name: 'Executive Director',
    org: 'Rural Community Foundation',
    category: 'Catch the Ace',
  },
  {
    quote:
      'I\u2019ve worked with four raffle agencies. Launchpad is the first one that told us something we genuinely didn\u2019t want to hear \u2014 on our first call. That\u2019s why we hired them.',
    name: 'CEO',
    org: 'Mid-Market Hospital Foundation',
    category: 'Leadership',
  },
  {
    quote:
      'They care about the detail of the program the way I care about the detail of our hospital\u2019s clinical outcomes. That\u2019s the level of rigor you want in a partner.',
    name: 'Board Director',
    org: 'Major Hospital Foundation',
    category: 'Strategic Partnership',
  },
  {
    quote:
      'We went from \u201cwe should probably do a raffle someday\u201d to live in twelve weeks. They made a complicated thing feel entirely tractable.',
    name: 'Operations Manager',
    org: 'First-Time Raffle Client',
    category: 'Launch',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Testimonials
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              In the words of <span className="gradient-text">the charities we serve.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We ask every client for an honest assessment of our work — good, bad, or
              uncomfortable. Below are some of the notes they&apos;ve sent back. Names and
              organizations are withheld by request in some cases; references available on request.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="break-inside-avoid bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
              >
                <svg className="w-8 h-8 text-accent-cyan/60 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.548.743-3.889 2.961-3.889 5.241l-.106.005c.049-.031 3.017.264 3.017 3.302 0 4.075-1.838 7.301-9 7.301zm-14 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.548.743-3.889 2.961-3.889 5.241l-.106.005c.049-.031 3.017.264 3.017 3.302 0 4.075-1.838 7.301-9 7.301z" />
                </svg>
                <blockquote className="text-lg text-gray-800 leading-relaxed mb-5">
                  {t.quote}
                </blockquote>
                <figcaption>
                  <div className="font-semibold text-primary-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.org}</div>
                  <div className="mt-3 inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue">
                    {t.category}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-4">
            Want a direct reference call?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Later in an evaluation, we&apos;re happy to set up a 20-minute call with a current
            client at a comparable stage. Just ask.
          </p>
          <Link href="/#contact" className="btn-primary !rounded-full">
            Request a Reference Call
          </Link>
        </div>
      </section>
    </>
  )
}
