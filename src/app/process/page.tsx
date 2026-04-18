import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Process | How a Launchpad Engagement Actually Works',
  description:
    'What it\u2019s actually like to work with us \u2014 week by week, phase by phase \u2014 from first call to ongoing program operations.',
}

const phases = [
  {
    phase: 'Phase 0',
    label: 'Discovery',
    duration: 'Week 0',
    summary: 'A 30-minute free consultation. We listen to your situation, your goals, and what\u2019s on your mind. No sales pitch.',
    steps: [
      'Initial call (30 minutes, video or phone)',
      'Honest fit assessment: are we the right partner?',
      'Written summary of the conversation + our recommendations',
      'Proposal if there\u2019s a fit; friendly handoff elsewhere if there isn\u2019t',
    ],
    color: 'from-slate-600 to-slate-800',
  },
  {
    phase: 'Phase 1',
    label: 'Program Design',
    duration: 'Weeks 1–4',
    summary: 'Before we submit a single license application, we design the program \u2014 format, cadence, prize structure, marketing plan, operational controls.',
    steps: [
      'Deep-dive workshop with your leadership team',
      'Supporter base audit and segmentation',
      'Format + cadence decision (50/50, Catch the Ace, calendar, hybrid)',
      'Prize architecture modeling against expected ticket-buyer behavior',
      'Marketing plan + budget recommendation',
      'Financial model + first-year revenue projections',
      'Approval from your board (we prepare the deck)',
    ],
    color: 'from-blue-600 to-accent-blue',
  },
  {
    phase: 'Phase 2',
    label: 'Licensing & Setup',
    duration: 'Weeks 4–16',
    summary: 'Usually the rate-limiting step. We handle the regulator work so your team can focus on the mission.',
    steps: [
      'AGCO (or state) license application preparation',
      'Platform selection and contract negotiation',
      'Payment processor setup',
      'Brand and creative development (landing page, email, ad assets)',
      'Financial controls and reporting infrastructure',
      'Regulator coordination through approval',
      'Dry-run of draw procedures and audit controls',
    ],
    color: 'from-accent-blue to-accent-cyan',
  },
  {
    phase: 'Phase 3',
    label: 'Launch',
    duration: 'Weeks 16–20',
    summary: 'First cycle. We run it; you watch, learn, and participate strategically.',
    steps: [
      'Pre-launch marketing ramp (2–4 weeks)',
      'Launch-day operations',
      'Weekly marketing execution',
      'Real-time customer support',
      'Jackpot milestone press releases',
      'Live draw with audit documentation',
      'Winner verification and prize payout',
    ],
    color: 'from-accent-cyan to-emerald-500',
  },
  {
    phase: 'Phase 4',
    label: 'Iteration',
    duration: 'Cycle-over-cycle, ongoing',
    summary: 'The cycle closes; the real work begins. Every cycle improves on the last, measurably.',
    steps: [
      'Post-cycle retrospective (revenue, traffic, support, compliance)',
      'Data-driven recommendations for the next cycle',
      'Prize architecture optimization',
      'Marketing mix refinement',
      'Supporter list quality review',
      'Quarterly strategic review with your leadership',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
]

const principles = [
  {
    title: 'Weekly operating rhythm',
    body: 'Every client program has a weekly ops review. Nothing is left to "check in later." The cadence is the work.',
  },
  {
    title: 'Numbers over narrative',
    body: 'Every decision is measured. We don\u2019t pitch vanity metrics or warm stories. Revenue, conversion, list health \u2014 that\u2019s the vocabulary.',
  },
  {
    title: 'Clean exit terms',
    body: 'You can leave any time, with your data, with platform continuity or migration support. No lock-in mechanics, no "gotcha" clauses.',
  },
  {
    title: 'Your supporter relationship is yours',
    body: 'We operate your program, but supporters are yours. Your list, your data, your brand relationship. Always.',
  },
]

export default function ProcessPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              How We Work
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              What a Launchpad engagement <span className="gradient-text">actually looks like.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              No mystery boxes. Here&apos;s exactly what happens, in what order, at what cadence —
              from the first phone call to a raffle program running at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200" aria-hidden />
            <div className="space-y-10">
              {phases.map((p, i) => (
                <div key={p.phase} className="relative pl-16 md:pl-24">
                  <div
                    className={`absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {i}
                  </div>
                  <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">
                        {p.phase}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                        {p.duration}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-primary-900 tracking-tight mb-3">
                      {p.label}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{p.summary}</p>
                    <ul className="space-y-2">
                      {p.steps.map((s) => (
                        <li key={s} className="flex items-start gap-3 text-gray-700">
                          <svg className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              Operating Principles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-6">
              The rules of engagement.
            </h2>
            <p className="text-xl text-gray-600">
              Every engagement we enter is governed by the same four principles. These aren&apos;t
              marketing copy — they&apos;re in the contract.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready for Phase 0?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            A 30-minute discovery call is how every successful engagement starts.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Book Your Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
