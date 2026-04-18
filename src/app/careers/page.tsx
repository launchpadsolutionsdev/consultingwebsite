import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers | Launchpad Solutions',
  description:
    'Join Launchpad Solutions. We hire sparingly, for depth of craft rather than resume surface area, and we pay people for what they\u2019re worth.',
}

const openRoles: { title: string; type: string; location: string; description: string }[] = []

const whatWeLookFor = [
  {
    title: 'Domain depth',
    body: 'You\u2019ve actually run a raffle program, managed a charitable campaign, or operated inside a regulated gaming business. Book knowledge isn\u2019t enough for most roles \u2014 scars are.',
  },
  {
    title: 'Write to think',
    body: 'Great thinkers can explain their reasoning clearly in writing. Our team produces work \u2014 playbooks, retros, client reviews \u2014 that people read carefully. Bring the craft.',
  },
  {
    title: 'Low ego, high standards',
    body: 'Our best people are simultaneously hard on their own work and warm with their teammates and clients. They disagree openly, commit fully, and clean up after themselves.',
  },
  {
    title: 'Client proximity',
    body: 'Every role at Launchpad is close to the client. Whether you\u2019re in engineering, marketing, or operations, you understand who the work is for and what they actually need.',
  },
]

const perks = [
  { title: 'Remote-first', body: 'Canada and U.S. candidates. Quarterly in-person gatherings for deep work.' },
  { title: 'Real ownership', body: 'Every full-time team member is on a path to meaningful equity ownership.' },
  { title: 'Professional growth budget', body: 'Annual budget for courses, conferences, books, and coaching. Use it.' },
  { title: 'Fair comp', body: 'Transparent salary bands published internally. We pay competitively against tech, not against nonprofit.' },
  { title: 'Unlimited PTO (with a 4-week floor)', body: 'Minimum vacation encouraged. We don\u2019t trust "unlimited" without a floor.' },
  { title: 'Parental leave', body: '16 weeks for primary caregivers, 8 weeks for secondary. Paid.' },
]

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Careers
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              Small team. <span className="gradient-text">Uncommon craft.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We hire sparingly. We pay well. We expect unusually high standards of writing,
              thinking, and operational rigor. If that sounds like your kind of place, let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-8">
            Open roles
          </h2>
          {openRoles.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 md:p-14 border border-gray-100 text-center">
              <svg className="w-12 h-12 text-accent-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-bold text-primary-900 mb-3 tracking-tight">
                No open roles right now.
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                We hire only when we need to — not to a quota. That said, if you think
                you&apos;d be exceptional on our team, send us a note. We keep great candidates on
                file and reach out when something opens.
              </p>
              <a
                href="mailto:careers@launchpadsolutions.ca"
                className="btn-primary !rounded-full inline-flex"
              >
                Send us your pitch
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {openRoles.map((r) => (
                <div key={r.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">{r.title}</h3>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        <span>{r.type}</span>
                        <span>·</span>
                        <span>{r.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4">{r.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              What we look for
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-6">
              The traits we actually hire against.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whatWeLookFor.map((v) => (
              <div key={v.title} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              How we take care of the team
            </div>
            <h2 className="text-4xl font-bold text-primary-900 tracking-tight">
              The real list of perks — no foosball.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Not seeing the right role?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Send us a thoughtful note about what you&apos;d want to build here. We read every one.
          </p>
          <a
            href="mailto:careers@launchpadsolutions.ca"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            careers@launchpadsolutions.ca
          </a>
        </div>
      </section>
    </>
  )
}
