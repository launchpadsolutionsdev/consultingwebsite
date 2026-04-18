import Link from 'next/link'
import { FundRaiseMark, PRODUCT_URL, SUPPORT_EMAIL } from './brand'

export default function Hero() {
  return (
    <section
      className="pt-32 pb-20 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #1A223D 0%, #20286B 55%, #3434D6 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute -top-24 -right-20 w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #12DEFF 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #1960F9 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <nav className="mb-8 text-sm text-white/70">
          <Link href="/" className="hover:text-white transition-colors">
            Launchpad Solutions
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">Fund-Raise</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur text-xs font-semibold text-white/90 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full" style={{ background: '#FF6B2B' }} />
            A Launchpad Solutions product
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <FundRaiseMark size={44} />
              <span className="text-3xl font-bold text-white tracking-tight">Fund-Raise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              The fundraising intelligence platform for{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #12DEFF, #29C8F9)' }}
              >
                RE NXT foundations.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              One AI-powered platform replacing $7,000–$24,000 of scattered tools —
              Insight Designer, MissionBI, Power BI, Crystal Reports, and standalone AI.
              30+ dashboards, conversational analytics, and 6 writing tools for{' '}
              <span className="font-semibold text-white">$199/month.</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #1960F9, #0D8CFF)',
                  boxShadow: '0 10px 30px rgba(25, 96, 249, 0.35)',
                }}
              >
                Launch Fund-Raise
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14M5 5h5v2H7v10h10v-3h2v5H5V5z" />
                </svg>
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Fund-Raise%20demo%20request`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/30 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
              >
                Book a demo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <HeroStat number="30+" label="dashboards" />
              <HeroStat number="50" label="AI analysis tools" />
              <HeroStat number="6" label="AI writing tools" />
              <HeroStat number="10" label="one-click PDF reports" />
              <HeroStat number="∞" label="users — no per-seat fees" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold text-white">{number}</span>
      <span>{label}</span>
    </div>
  )
}

function HeroMockup() {
  return (
    <div
      className="rounded-2xl p-5 border border-white/15 backdrop-blur-sm"
      style={{ background: 'rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs text-white/60 font-mono">CRM Dashboard</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'YTD raised', value: '$2.4M', delta: '+18%' },
          { label: 'Donors', value: '4,812', delta: '+312' },
          { label: 'Retention', value: '64%', delta: '+3pt' },
        ].map((k) => (
          <div key={k.label} className="rounded-xl p-3 bg-white/8 border border-white/10">
            <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">{k.label}</div>
            <div className="text-lg font-bold text-white">{k.value}</div>
            <div className="text-[11px]" style={{ color: '#12DEFF' }}>{k.delta}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl p-4 bg-white/8 border border-white/10 mb-3">
        <div className="text-[11px] uppercase tracking-wider text-white/50 mb-3">Revenue by month</div>
        <div className="flex items-end gap-1.5 h-24">
          {[32, 45, 38, 58, 50, 72, 65, 80, 70, 88, 82, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: 'linear-gradient(180deg, #29C8F9 0%, #3434D6 100%)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {['Annual', 'Mail', 'Events', 'Major', 'Legacy'].map((d) => (
          <div
            key={d}
            className="rounded-lg px-2 py-1.5 text-[10px] text-center text-white/80 bg-white/5 border border-white/10"
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}
