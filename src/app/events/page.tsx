import type { Metadata } from 'next'
import Link from 'next/link'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
  title: 'Events & Webinars | Launchpad Solutions',
  description:
    'Live webinars, in-person workshops, and conference sessions from the Launchpad Solutions team on charitable gaming, raffle strategy, and fundraising operations.',
}

const upcoming = [
  {
    title: 'The 2026 Charitable Gaming Playbook',
    series: 'Launchpad Live',
    type: 'Webinar',
    date: '2026-05-14',
    time: '1:00 PM ET',
    duration: '60 min',
    description:
      'An annual live walkthrough of what\u2019s changing in charitable gaming in 2026 \u2014 regulatory shifts, platform consolidation, and the operational moves that matter. Q&A with Torin Gunnell and our senior team.',
    registrationHref: '/events/registration?event=2026-playbook',
    spots: 'Free · limited to 500',
  },
  {
    title: 'Catch the Ace: From Pilot to Scale',
    series: 'Launchpad Live',
    type: 'Webinar',
    date: '2026-06-11',
    time: '1:00 PM ET',
    duration: '75 min',
    description:
      'A tactical deep-dive on launching and scaling a Catch the Ace program. Includes the weekly operating rhythm, the final-weeks viral push, and the regulatory controls that keep programs clean.',
    registrationHref: '/events/registration?event=catch-the-ace-scale',
    spots: 'Free · limited to 500',
  },
  {
    title: 'Raffle Roundtable (quarterly, invite-only)',
    series: 'Roundtable',
    type: 'In-person',
    date: '2026-06-18',
    time: 'TBD',
    duration: 'Half day',
    description:
      'A quarterly peer roundtable for raffle program directors. Invite-only, limited to 15 charities. Conversation, not presentation. Hosted in Toronto.',
    registrationHref: '/events/registration?event=roundtable-q2',
    spots: 'By invitation',
  },
]

const past = [
  {
    title: 'State of Charitable Gaming 2026',
    date: '2026-02-04',
    description:
      'Our flagship annual industry briefing. Findings published as our State of Charitable Gaming 2026 report.',
    recordingHref: '/insights/state-of-charitable-gaming-2026',
    recordingLabel: 'Read the companion report',
  },
  {
    title: 'Licensing Masterclass: AGCO Edition',
    date: '2026-01-22',
    description:
      'A 90-minute working session on preparing a clean AGCO raffle license application. Companion guide available on request.',
    recordingHref: '/blog/how-to-get-your-agco-raffle-license-ontario',
    recordingLabel: 'Read the companion guide',
  },
  {
    title: 'Supporter List Health & Revenue',
    date: '2025-11-12',
    description:
      'Why supporter-list quality drives raffle revenue more than platform choice \u2014 and what to do about it.',
    recordingHref: '/blog/building-supporter-list-drives-raffle-success',
    recordingLabel: 'Read the companion post',
  },
]

function formatEventDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

export default function EventsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Events & Webinars
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              Live sessions. <span className="gradient-text">Real working rooms.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Quarterly webinars, an invite-only peer roundtable, and periodic in-person workshops
              for charity leadership. Our goal: fewer &ldquo;inspirational&rdquo; talks, more
              practical sessions you can take back to your team on Monday.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight">
              Upcoming sessions
            </h2>
            <Link href="#past" className="text-accent-blue font-semibold hover:underline text-sm">
              Past events ↓
            </Link>
          </div>
          <div className="space-y-5">
            {upcoming.map((e) => (
              <div
                key={e.title}
                className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wide">
                        {e.type}
                      </span>
                      <span className="text-xs font-medium text-gray-500">{e.series}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-900 tracking-tight mb-3">
                      {e.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{e.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatEventDate(e.date)}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {e.time} · {e.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {e.spots}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-1 flex lg:justify-end">
                    <Link
                      href={e.registrationHref}
                      className="btn-primary !rounded-full inline-flex w-full lg:w-auto justify-center"
                    >
                      Register →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="past" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              Past sessions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight">
              Catch up on what you missed.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {past.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-xs text-gray-500 mb-2">{formatEventDate(p.date)}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.description}</p>
                <Link
                  href={p.recordingHref}
                  className="text-sm font-semibold text-accent-blue hover:underline"
                >
                  {p.recordingLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Newsletter
            title="Be the first to hear about new sessions."
            description="Subscribers get event invitations 48 hours before public registration opens, plus event-only companion materials."
          />
        </div>
      </section>
    </>
  )
}
