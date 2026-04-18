import type { Metadata } from 'next'
import Link from 'next/link'
import { STAFF_MEMBERS, ADVISORS, type TeamMember } from '@/lib/team'

export const metadata: Metadata = {
  title: 'Team | Launchpad Solutions',
  description:
    'Meet the team behind Launchpad Solutions — charitable gaming veterans and strategic advisors who have built and operated some of the largest raffle programs in North America.',
}

function initialsOf(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function Avatar({ member }: { member: TeamMember }) {
  if (member.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
    )
  }
  const gradients = [
    'from-primary-900 via-primary-700 to-accent-blue',
    'from-accent-blue via-blue-500 to-accent-cyan',
    'from-purple-700 via-purple-500 to-pink-500',
    'from-emerald-600 via-emerald-500 to-teal-500',
  ]
  // Deterministic gradient per slug
  const g = gradients[member.slug.length % gradients.length]
  return (
    <div className={`w-full h-full bg-gradient-to-br ${g} relative`}>
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-400/40 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-5xl md:text-6xl font-bold text-white/80 tracking-tight">
          {initialsOf(member.name)}
        </div>
      </div>
    </div>
  )
}

function TeamCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className={`group block bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <Avatar member={member} />
      </div>
      <div className="p-7">
        <div className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-1.5">
          {member.role}
        </div>
        <h3 className="text-2xl font-bold text-primary-900 tracking-tight mb-3 group-hover:text-accent-blue transition-colors">
          {member.name}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-5">{member.shortBio}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {member.expertise.slice(0, 3).map((e) => (
            <span
              key={e}
              className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium"
            >
              {e}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center text-sm font-semibold text-accent-blue group-hover:text-primary-900 transition-colors">
          Read full profile
          <svg
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

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
          <div className="max-w-3xl mb-10">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              The team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight">
              Day-to-day, we&apos;re {STAFF_MEMBERS.length} people.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {STAFF_MEMBERS.map((m, i) => (
              <TeamCard key={m.slug} member={m} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {ADVISORS.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-3">
                Strategic Advisors
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-3">
                The people we turn to when it matters.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our advisors aren&apos;t part of day-to-day client operations. They bring perspective,
                institutional memory, and hard-earned judgment to the strategic calls that shape
                where Launchpad \u2014 and our clients &mdash; go next.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADVISORS.map((m) => (
                <Link
                  key={m.slug}
                  href={`/team/${m.slug}`}
                  className="group relative rounded-3xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan/90 text-primary-900 backdrop-blur-sm">
                      Advisor
                    </span>
                  </div>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Avatar member={m} />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-1.5">
                      {m.role}
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 tracking-tight mb-2 group-hover:text-accent-blue transition-colors">
                      {m.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{m.shortBio}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-gray-50 border-t border-gray-100">
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
              <div key={v.title} className="p-8 bg-white rounded-3xl border border-gray-100">
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
