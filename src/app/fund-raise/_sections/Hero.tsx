import Link from 'next/link'
import { FundRaiseMark, PRODUCT_URL, SUPPORT_EMAIL } from './brand'
import HeroMockup from './HeroMockup'

export default function Hero() {
  return (
    <section
      className="pt-28 pb-24 relative overflow-hidden"
      style={{ background: '#0B1224' }}
    >
      <div className="absolute inset-0 opacity-60 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-40 -right-20 w-[40rem] h-[40rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(25,96,249,0.35) 0%, transparent 60%)' }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(52,52,214,0.25) 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <nav className="mb-8 text-sm text-white/60">
          <Link href="/" className="hover:text-white transition-colors">
            Launchpad Solutions
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">Fund-Raise</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <FundRaiseMark size={32} />
          <span className="text-xl font-bold text-white tracking-tight">Fund-Raise</span>
          <span className="ml-3 hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold text-white/80 uppercase tracking-wider"
            style={{ borderColor: 'rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.04)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#FF6B2B' }} />
            A Launchpad Solutions product
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7"
              style={{
                borderColor: 'rgba(255, 166, 35, 0.35)',
                background: 'rgba(255, 166, 35, 0.08)',
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: '#F5A623' }} />
              <span className="text-[13px] font-medium" style={{ color: '#F5A623' }}>
                Replacing $7,000–$24,000 in scattered tools
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.02] mb-6">
              The fundraising intelligence platform{' '}
              <span className="whitespace-nowrap">for{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #1960F9, #0D8CFF)' }}
                >
                  RE NXT
                </span>
              </span>{' '}
              foundations.
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              30+ dashboards, AI-powered conversational analytics, donor scoring, and smart
              writing tools — one platform that replaces Insight Designer, MissionBI,
              Crystal Reports, and standalone AI tools.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #1960F9, #3434D6)',
                  boxShadow: '0 10px 30px rgba(25, 96, 249, 0.45)',
                }}
              >
                Get Started Free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Fund-Raise%20demo%20request`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border transition-colors hover:bg-white/5"
                style={{ borderColor: 'rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.02)' }}
              >
                Book a demo
              </a>
            </div>

            <TrustRow />
          </div>

          <div className="lg:col-span-7">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustRow() {
  const initials = [
    { label: 'JL', bg: '#1960F9' },
    { label: 'SM', bg: '#8B5CF6' },
    { label: 'KR', bg: '#F59E0B' },
    { label: 'DP', bg: '#3434D6' },
  ]
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-2">
        {initials.map((a) => (
          <span
            key={a.label}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold ring-2"
            style={{ background: a.bg, ['--tw-ring-color' as string]: '#0B1224' }}
          >
            {a.label}
          </span>
        ))}
      </div>
      <div>
        <div className="flex gap-0.5 mb-1" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} className="w-4 h-4" fill="#F5A623" viewBox="0 0 20 20" aria-hidden>
              <path d="M10 1l2.9 6 6.6.9-4.8 4.6 1.1 6.5L10 16l-5.8 3 1.1-6.5L.5 7.9l6.6-.9L10 1z" />
            </svg>
          ))}
        </div>
        <div className="text-xs text-white/60">Trusted by foundations across Canada</div>
      </div>
    </div>
  )
}
