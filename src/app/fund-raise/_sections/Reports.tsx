const REPORTS = [
  'Executive Summary',
  'Retention',
  'RFM Scoring',
  'Recurring Donors',
  'LYBUNT / SYBUNT',
  'Gift Trends',
  'Campaign Performance',
  'Fund Health',
  'Donor Lifecycle',
  'Upgrade / Downgrade',
]

export default function Reports() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: '#3434D6' }}
            >
              Reports & Exports
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-5">
              10 one-click PDF reports. CSV on every table.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Board-ready PDFs, formatted and branded. CSV export from any table so your
              team can hand data to finance, auditors, or a grant application without
              re-running queries.
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-800">
              {REPORTS.map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: '#3434D6' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div
              className="rounded-2xl p-8 border h-full flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #EFF1F4, #EDEFF7)',
                borderColor: '#D3D6E0',
              }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: '#3434D6' }}
              >
                Integrations
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A223D' }}>
                Blackbaud RE NXT · SKY API
              </h3>
              <div className="space-y-3 mb-5">
                <IntegRow label="OAuth 2.0 authentication" />
                <IntegRow label="Encrypted token storage (AES-256-GCM)" />
                <IntegRow label="Real-time constituent lookups" />
                <IntegRow label="CSV / Excel import with auto-column mapping" />
                <IntegRow label="Google OAuth 2.0 sign-in" />
                <IntegRow label="300 MB upload cap, background processing" />
              </div>
              <div className="mt-auto pt-5 border-t border-white/60 text-xs text-gray-600">
                Fund-Raise also runs standalone without Blackbaud — just drag in your CSV or Excel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegRow({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-3 text-sm text-gray-800">
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: 'linear-gradient(135deg, #1960F9, #0D8CFF)' }}
      >
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span>{label}</span>
    </div>
  )
}
