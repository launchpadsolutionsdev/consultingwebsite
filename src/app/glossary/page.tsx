import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Glossary | Charitable Gaming Terms Explained',
  description:
    'A plain-English glossary of the terminology used in charitable gaming, electronic raffles, and lottery management. For charity boards and operators.',
}

const terms: { term: string; definition: string; seeAlso?: string[] }[] = [
  {
    term: '50/50 Raffle',
    definition: 'A progressive raffle in which a single winning ticket-holder receives 50% of total ticket revenue, and the charity retains the other 50%. Jackpots grow with ticket sales throughout the cycle.',
    seeAlso: ['Progressive Raffle', 'Catch the Ace'],
  },
  {
    term: 'AGCO',
    definition: 'The Alcohol and Gaming Commission of Ontario \u2014 the provincial regulator overseeing charitable gaming, lotteries, raffles, and related licensing in Ontario. The benchmark framework most other Canadian provinces reference.',
  },
  {
    term: 'AMOE (Alternative Method of Entry)',
    definition: 'A free entry path into a sweepstakes or raffle that does not require purchase, required in U.S. jurisdictions to avoid classification as illegal gambling.',
  },
  {
    term: 'Audit Trail',
    definition: 'The documented record of every ticket sold, every draw conducted, and every prize paid \u2014 required for regulatory review. Electronic raffles must maintain audit-grade trails with high integrity standards.',
  },
  {
    term: 'Calendar Raffle',
    definition: 'A raffle format in which a single ticket gives the buyer multiple daily or weekly draw entries over a defined period (e.g. 30-day calendar, 52-week calendar). Common in community and service-club fundraising.',
  },
  {
    term: 'Catch the Ace',
    definition: 'A progressive, weekly-draw raffle in which a weekly winner selects an envelope from a board of 52 playing cards. If the Ace of Spades is selected, they win the progressive jackpot; otherwise, they win a consolation prize and the jackpot rolls over.',
    seeAlso: ['50/50 Raffle', 'Progressive Raffle'],
  },
  {
    term: 'CAGR (Compound Annual Growth Rate)',
    definition: 'The mean annual growth rate over a specified period. Used in market sizing to describe industry growth (e.g. online raffles projected at 11.2% CAGR through 2030).',
  },
  {
    term: 'CASL',
    definition: 'Canada\u2019s Anti-Spam Legislation. Governs commercial electronic messages (email, SMS) sent to Canadian recipients. Strict consent and unsubscribe requirements apply to all raffle marketing.',
  },
  {
    term: 'Charitable Gaming',
    definition: 'The umbrella category covering raffles, bingo, pull-tabs, charity poker, and other gaming activities conducted by eligible charitable organizations for fundraising purposes.',
  },
  {
    term: 'Consolation Prize',
    definition: 'A secondary prize awarded to a ticket-holder who wins a weekly draw but does not hit the progressive jackpot (most common in Catch the Ace).',
  },
  {
    term: 'CPA (Customer Acquisition Cost \u2014 Per Acquisition)',
    definition: 'The total marketing spend required to acquire one new ticket-buyer. In charitable gaming, typically $8\u2013$18 \u2014 meaningfully lower than comparable iGaming CPAs ($150\u2013$400+).',
  },
  {
    term: 'Draw',
    definition: 'The act of selecting a winning ticket, typically conducted on a fixed schedule (weekly, monthly, end of cycle). Must be performed to specific regulatory controls including audit documentation and, in many jurisdictions, live video recording.',
  },
  {
    term: 'Early-Bird Prize',
    definition: 'A secondary prize awarded to a ticket-holder who purchases before a specific deadline or threshold. Used to incentivize early purchases and smooth the revenue curve over a raffle cycle.',
  },
  {
    term: 'Eligible Use of Proceeds',
    definition: 'The specific charitable programs or services to which raffle proceeds must be directed, as declared in the license application. Regulators require documented evidence that proceeds were used as declared.',
  },
  {
    term: 'Gaming-Related Supplier',
    definition: 'The regulatory designation for companies that provide raffle platforms, RNG systems, draw equipment, or operational services to licensed charitable gaming. Must be separately registered with regulators (e.g. AGCO\u2019s Gaming-Related Supplier registration).',
  },
  {
    term: 'Jackpot',
    definition: 'The headline prize in a progressive raffle, grown by ticket sales over the cycle. In 50/50 raffles, 50% of total ticket revenue; in Catch the Ace, the accumulated rollover amount from previous weeks\u2019 unselected aces.',
  },
  {
    term: 'License',
    definition: 'The legal authorization required to conduct a raffle. Issued at the municipal level (for smaller programs) or provincial/state level (for larger or electronic programs). A specific license is required per raffle cycle in most jurisdictions.',
  },
  {
    term: 'LTV (Lifetime Value)',
    definition: 'The total expected revenue from a single supporter across their relationship with the program. Raffle supporter LTV typically 4\u20136x the value of a single-cycle ticket purchase when subscriber or recurring relationships are established.',
  },
  {
    term: 'Municipal License',
    definition: 'A raffle license issued by a municipality or township (e.g. a city clerk\u2019s office) for raffles below a specified prize-value threshold. Requirements and responsiveness vary significantly by jurisdiction.',
  },
  {
    term: 'POS (Point of Sale)',
    definition: 'In-person ticket sale systems \u2014 typically tablets at events or kiosks \u2014 operated in compliance with raffle licensing. Most mature programs combine online sales with POS for maximum reach.',
  },
  {
    term: 'Progressive Raffle',
    definition: 'A raffle format where the jackpot grows with ticket sales rather than being fixed. 50/50 raffles and Catch the Ace are both progressive formats, distinguished by their draw mechanics and cycle length.',
  },
  {
    term: 'Pull-Tab',
    definition: 'A paper or electronic instant-win game common in charitable gaming, particularly in bingo halls and community events. Electronic pull-tabs are a growing segment in U.S. charitable gaming.',
  },
  {
    term: 'Prize Insurance',
    definition: 'A financial instrument that ensures the charitable organization can pay the advertised prize regardless of ticket sales performance. Common in prize-driven raffles (e.g. vehicle raffles) where the prize value is fixed.',
  },
  {
    term: 'Provincial License',
    definition: 'A raffle license issued by a provincial gaming authority (e.g. AGCO in Ontario, GPEB in B.C., AGLC in Alberta). Required for raffles above municipal thresholds, or those conducted electronically.',
  },
  {
    term: 'Retrospective',
    definition: 'A structured post-cycle review covering revenue, marketing performance, operational metrics, and lessons learned. Critical for iterative program improvement; skipped by underperforming programs.',
  },
  {
    term: 'RNG (Random Number Generator)',
    definition: 'The technology (software or hardware) used to select winning ticket numbers. Electronic raffles require certified RNG systems with documented randomness properties; requirements vary by jurisdiction.',
  },
  {
    term: 'Rollover',
    definition: 'The mechanism by which an unclaimed jackpot in one draw carries forward to the next. Characteristic of Catch the Ace, where the jackpot rolls over each week the Ace of Spades is not selected.',
  },
  {
    term: 'Secondary Draw',
    definition: 'An additional prize draw beyond the grand prize, typically triggered at a specific ticket-sales milestone or time threshold. Used in prize architecture to smooth revenue curves.',
  },
  {
    term: 'Sunset Flow',
    definition: 'An email automation sequence that attempts to re-engage inactive subscribers before removing them from the list. Essential for maintaining list hygiene and deliverability.',
  },
  {
    term: 'Ticket Tiers',
    definition: 'The pricing structure for ticket bundles (e.g. 1 ticket / $10, 5 tickets / $25, 25 tickets / $50). Tier structure has meaningful impact on average order value and should be designed against buyer behavior data.',
  },
  {
    term: 'Use of Proceeds',
    definition: 'The documented plan for how raffle revenue will be allocated to charitable programs. A required element of all license applications; ongoing reporting requirements vary by jurisdiction.',
  },
]

const grouped = terms.reduce<Record<string, typeof terms>>((acc, t) => {
  const letter = t.term.charAt(0).toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(t)
  return acc
}, {})

const letters = Object.keys(grouped).sort()

export default function GlossaryPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
            Glossary
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
            The language of charitable gaming, <span className="gradient-text">explained.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Plain-English definitions of the terminology used across raffles, lotteries, and
            charitable gaming. Built for charity boards, operators, and anyone new to the industry.
          </p>
        </div>
      </section>

      <section className="pb-8 bg-white sticky top-[88px] z-30 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {letters.map((l) => (
              <a
                key={l}
                href={`#letter-${l}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-sm font-semibold text-gray-700 hover:border-accent-blue hover:text-accent-blue transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-48">
              <h2 className="text-4xl font-bold gradient-text mb-6">{letter}</h2>
              <div className="space-y-4">
                {grouped[letter].map((t) => (
                  <div
                    key={t.term}
                    id={`term-${t.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent-blue/30 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{t.term}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{t.definition}</p>
                    {t.seeAlso && (
                      <div className="flex flex-wrap gap-2 items-center text-sm text-gray-500">
                        <span>See also:</span>
                        {t.seeAlso.map((s) => (
                          <a
                            key={s}
                            href={`#term-${s.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            className="text-accent-blue hover:underline"
                          >
                            {s}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4 tracking-tight">
            Term missing?
          </h2>
          <p className="text-gray-600 mb-6">
            If there&apos;s a term you&apos;d like added to this glossary, let us know — we update it regularly.
          </p>
          <Link href="/#contact" className="btn-primary !rounded-full">
            Suggest a Term
          </Link>
        </div>
      </section>
    </>
  )
}
