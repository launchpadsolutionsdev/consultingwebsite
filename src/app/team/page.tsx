import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team | Launchpad Solutions',
  description:
    'Meet the team behind Launchpad Solutions — charitable gaming veterans who have built and operated some of the largest raffle programs in North America.',
}

const team = [
  {
    name: 'Torin Gunnell',
    role: 'Founder & CEO',
    bio: 'Torin founded Launchpad Solutions after building and operating some of the largest electronic 50/50 raffle programs in North America, including the record-breaking Thunder Bay Regional Health Sciences Foundation program. He has helped charities raise over $180M in cumulative ticket revenue over his career.',
    expertise: ['Program design', '50/50 + Catch the Ace operations', 'Regulatory compliance', 'Team leadership'],
    image: '/images/Torin-Glenn-Cass-SMALL.jpg',
    linkedin: '#',
  },
  {
    name: 'Program Director',
    role: 'Operations',
    bio: 'Day-to-day operations lead across our client portfolio. Manages weekly marketing cadence, draw operations, and cross-client playbook consistency.',
    expertise: ['Operations', 'Marketing execution', 'Client success'],
    image: null,
    linkedin: '#',
  },
  {
    name: 'Compliance Lead',
    role: 'Licensing & Regulatory',
    bio: 'Leads our licensing and ongoing compliance work across AGCO, provincial commissions, and U.S. state regulators. Ensures every client program operates cleanly within every jurisdiction\u2019s framework.',
    expertise: ['AGCO', 'Multi-jurisdictional licensing', 'Gaming-related supplier coordination'],
    image: null,
    linkedin: '#',
  },
  {
    name: 'Marketing Strategist',
    role: 'Creative & Campaigns',
    bio: 'Designs and executes marketing campaigns across client programs. Builds the weekly cadence, the creative, and the paid media strategy that drives ticket volume.',
    expertise: ['Email + SMS marketing', 'Paid social', 'Creative direction', 'PR strategy'],
    image: null,
    linkedin: '#',
  },
]

const values = [
  {
    title: 'Operational discipline over novelty',
    body: "We don't chase the latest platform or trend. We run programs with the same rigor every cycle, and let compound iteration do the work.",
  },
  {
    title: 'Honest assessment, always',
    body: 'If we don\u2019t think we\u2019re the right fit for your organization, we\u2019ll tell you \u2014 on the first call, before any money changes hands.',
  },
  {
    title: 'Transparent numbers',
    body: 'Every report, every retrospective, every performance review is numerical and evidence-based. Marketing vanity metrics stay in the marketing department.',
  },
  {
    title: 'Regulatory hygiene',
    body: 'We hold ourselves \u2014 and every program we run \u2014 to a higher compliance standard than regulators require. Zero shortcuts, ever.',
  },
]

export default function TeamPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Our Team
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              Operators who&apos;ve <span className="gradient-text">actually done this.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The team behind Launchpad Solutions has built, operated, and scaled some of the largest
              charitable gaming programs in North America. We&apos;ve broken records, written
              retrospectives on cycles that didn&apos;t work, and everything in between. That
              experience now comes with every client engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  {person.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-900 via-primary-700 to-accent-blue relative">
                      <div className="absolute inset-0 opacity-40">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-cyan rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-pink-500 rounded-full blur-3xl" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-7xl font-bold text-white/20">
                          {person.name
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-1">
                    {person.role}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 tracking-tight mb-4">
                    {person.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5">{person.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {person.expertise.map((e) => (
                      <span
                        key={e}
                        className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              How we operate
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-6">
              The principles we run on.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Want to work with our team?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Book a free 30-minute consultation. We&apos;ll discuss your program, your goals, and
            whether we&apos;re the right partner.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
