import { FundRaiseMark, PRODUCT_URL, SUPPORT_EMAIL } from './brand'

export default function FinalCta() {
  return (
    <section
      className="py-20 border-t"
      style={{ background: '#F8F9FB', borderColor: '#E5E7EB' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <FundRaiseMark size={32} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#3434D6' }}>
                Ready when you are
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.05]"
              style={{ color: '#1A223D' }}
            >
              See Fund-Raise on your data.
            </h2>
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: '#4B5266' }}>
              Launch the product to start a trial, or email us for a walkthrough on your
              RE NXT dataset. Either path takes under 15 minutes to see your first
              dashboard.
            </p>
            <div className="mt-6 text-sm" style={{ color: '#6E7180' }}>
              Fund-Raise is a product of{' '}
              <a href="/" className="underline hover:no-underline" style={{ color: '#1A223D' }}>
                Launchpad Solutions
              </a>
              .
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 w-full md:w-auto"
              style={{
                background: 'linear-gradient(135deg, #1960F9, #3434D6)',
                boxShadow: '0 10px 30px rgba(25, 96, 249, 0.3)',
              }}
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
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Fund-Raise%20walkthrough`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold border transition-colors w-full md:w-auto"
              style={{
                borderColor: '#D3D6E0',
                background: '#FFFFFF',
                color: '#1A223D',
              }}
            >
              Email {SUPPORT_EMAIL}
            </a>
            <div className="text-xs mt-1 md:text-right" style={{ color: '#9DA2B3' }}>
              No credit card required to start.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
