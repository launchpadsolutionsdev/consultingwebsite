import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from './FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ | Launchpad Solutions',
  description:
    'Frequently asked questions about charitable raffle management, licensing, pricing, and how a Launchpad engagement works.',
}

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'How do I know if my charity is a good fit for a raffle program?',
        a: 'Most charities with an engaged supporter base (event attendees, newsletter subscribers, social followers) can run a viable raffle. The best-fit organizations have a cause with strong emotional resonance in a defined geography — hospital foundations, pro sports team foundations, rotary clubs, first responders, and regional community charities tend to excel. We offer a free 30-minute consultation that includes an honest fit assessment.',
      },
      {
        q: 'How long does it take to launch a first raffle?',
        a: 'Realistic end-to-end timeline for a first-time operator is 4\u20136 months from initial engagement to first draw. Licensing is typically the rate-limiting step (12\u201318 weeks for a first-time AGCO applicant). Organizations that push for a faster launch almost always regret it.',
      },
      {
        q: 'What does a typical engagement cost?',
        a: 'Engagements range from ~$60K/year for a modest Lift-Off launch to $200K+/year for full-service Mission Control on a large program. Revenue-share and hybrid structures are also available. We\u2019ll walk through realistic pricing for your specific situation on the first call.',
      },
      {
        q: 'Do you work with U.S.-based charities or only Canadian?',
        a: 'Both. We operate across Canada and in U.S. states that permit online raffles. Our regulatory expertise is deepest in Ontario (AGCO) given our origins, but we have active licensed programs in multiple U.S. states.',
      },
    ],
  },
  {
    category: 'Licensing & Compliance',
    items: [
      {
        q: 'Do I need a license to run a raffle?',
        a: 'Yes \u2014 in virtually every Canadian province and every U.S. state where raffles are permitted. The specific licensing authority, thresholds, and process vary by jurisdiction. For a detailed overview, see our [Electronic Raffles by State/Province regulatory report](/insights/electronic-raffles-by-state-regulatory-landscape).',
      },
      {
        q: 'Who handles licensing \u2014 you or us?',
        a: 'For full-service engagements, we handle it end-to-end: application preparation, regulator coordination, ongoing compliance reporting, and renewals. You\u2019ll still need to provide organizational documentation (bylaws, financials, director list) but we do the heavy lifting.',
      },
      {
        q: 'What happens if a regulator raises a compliance issue mid-cycle?',
        a: 'We have processes for this. Most minor compliance questions are resolved within a day without any impact on the program. Serious issues are rare if the program was set up correctly \u2014 which is why the upfront licensing work matters so much.',
      },
    ],
  },
  {
    category: 'Operations',
    items: [
      {
        q: 'What platforms do you work with?',
        a: 'We\u2019re platform-agnostic. We work with the enterprise-grade raffle platforms (Ascend, BUMP CBN, Stride) as well as select regional specialists. Platform selection is a downstream decision after program design \u2014 not a starting point.',
      },
      {
        q: 'Who owns the supporter data?',
        a: 'You do. Always. Every supporter list, every piece of data collected through your program remains your property. We\u2019re operators of your program, not owners of your supporter relationships.',
      },
      {
        q: 'What happens if we part ways?',
        a: 'We build engagement agreements with clean exit provisions: defined handoff process, full data portability, platform continuity (or migration support), and no \u201clock-in\u201d mechanics. If we\u2019re not the right partner anymore, we\u2019ll help you transition cleanly.',
      },
      {
        q: 'Do you guarantee specific jackpot numbers?',
        a: 'No, and be skeptical of any agency that does. Raffle outcomes depend on many factors \u2014 supporter base, marketing execution, competitive landscape, economic conditions \u2014 that no agency can fully control. We will give you honest ranges based on comparable programs we\u2019ve operated.',
      },
    ],
  },
  {
    category: 'Results & Reporting',
    items: [
      {
        q: 'What performance reports do I get?',
        a: 'Weekly operational reports during active cycles (revenue, marketing performance, support metrics), post-cycle retrospective reports with full numerical analysis, and quarterly strategic reviews covering program-level trends and opportunities.',
      },
      {
        q: 'Can I see results from other client programs?',
        a: 'Specific named client results are confidential unless clients have given us explicit permission to share (see [our case studies](/case-studies)). For general benchmarks, see our [quarterly Pulse Check report](/insights/q1-2026-charitable-gaming-pulse-check). We\u2019re also happy to arrange a reference call with a current client at an appropriate stage of your evaluation.',
      },
    ],
  },
  {
    category: 'About Launchpad',
    items: [
      {
        q: 'Who founded Launchpad Solutions?',
        a: 'Torin Gunnell, who led and operated the Thunder Bay Regional Health Sciences Foundation 50/50 program during its record-breaking years. Launchpad was founded to bring that operational expertise to other charities across North America.',
      },
      {
        q: 'What\u2019s Lightspeed?',
        a: 'Our AI-powered productivity suite built specifically for raffle operators. Automates donor communications, generates creative, and accelerates daily operations. Learn more on [the Lightspeed page](/lightspeed).',
      },
    ],
  },
]

export default function FaqPage() {
  const allQuestions = faqs.flatMap((cat) => cat.items)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: {
        '@type': 'Answer',
        // strip our markdown link syntax for the schema text
        text: q.a.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1'),
      },
    })),
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
            Frequently asked questions.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The questions we hear most often from charity boards, fundraising directors, and program
            managers considering a raffle program.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FaqAccordion categories={faqs} />
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-4">
            Didn&apos;t find your question?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Email us directly or book a free 30-minute consultation. We&apos;ll give you a real
            answer, not a canned one.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-primary-900 text-white font-semibold hover:bg-primary-800 transition-colors text-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
