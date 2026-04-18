import { PRODUCT_URL } from './brand'

export default function Pricing() {
  return (
    <section
      className="py-24 border-t border-gray-100"
      style={{ background: '#F7F8FC' }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: '#3434D6' }}
          >
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-5">
            $199/month. Unlimited users. Everything included.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            No per-seat fees. No add-ons. No surprise renewals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 bg-white border border-gray-200">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              The patchwork today
            </div>
            <div className="text-4xl font-bold text-gray-400 mb-2 line-through">
              $7,000–$24,000
            </div>
            <div className="text-sm text-gray-500 mb-6">/ year, across 5–6 tools</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Insight Designer · MissionBI · Power BI + CData</li>
              <li>• Crystal Reports · standalone AI writing tools</li>
              <li>• Manual Excel, exports, and analyst hours</li>
              <li>• Per-user fees that balloon with your team</li>
            </ul>
          </div>

          <div
            className="rounded-2xl p-8 text-white relative overflow-hidden border"
            style={{
              background: 'linear-gradient(135deg, #1A223D 0%, #3434D6 100%)',
              borderColor: 'transparent',
              boxShadow: '0 20px 60px rgba(52, 52, 214, 0.35)',
            }}
          >
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-40"
              style={{ background: '#12DEFF' }}
            />
            <div className="relative">
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: '#12DEFF' }}
              >
                Fund-Raise
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-bold">$199</span>
                <span className="text-white/70">/ month CAD</span>
              </div>
              <div className="text-sm text-white/70 mb-6">
                Or $2,030/yr — save 15% (~$358)
              </div>
              <ul className="space-y-2 text-sm text-white/90 mb-8">
                <li>◆ 30+ dashboards, 10 PDF reports</li>
                <li>◆ Ask Fund-Raise AI (50 analysis tools)</li>
                <li>◆ 6 AI writing tools</li>
                <li>◆ Blackbaud RE NXT + CSV/Excel</li>
                <li>◆ Unlimited users — no per-seat fees</li>
              </ul>
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-primary-900 bg-white hover:bg-gray-100 transition-colors"
              >
                Launch Fund-Raise
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7v7m0-7L10 14M5 5h5v2H7v10h10v-3h2v5H5V5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
