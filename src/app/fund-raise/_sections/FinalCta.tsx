import { FundRaiseMark, PRODUCT_URL, SUPPORT_EMAIL } from './brand'

export default function FinalCta() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #1A223D 0%, #20286B 55%, #3434D6 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #12DEFF 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
        <div className="flex justify-center mb-5">
          <FundRaiseMark size={44} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
          Ready to see Fund-Raise on your data?
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
          Launch the product to start a trial, or reach out for a walkthrough on your RE NXT
          dataset. Either path takes under 15 minutes to see your first dashboard.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-primary-900 bg-white hover:bg-gray-100 transition-colors"
          >
            Launch Fund-Raise
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14M5 5h5v2H7v10h10v-3h2v5H5V5z" />
            </svg>
          </a>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Fund-Raise%20walkthrough`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/30 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
          >
            Email support@fund-raise.com
          </a>
        </div>
        <div className="mt-10 text-sm text-white/60">
          Fund-Raise is a product of{' '}
          <a href="/" className="underline hover:text-white transition-colors">
            Launchpad Solutions
          </a>
          .
        </div>
      </div>
    </section>
  )
}
