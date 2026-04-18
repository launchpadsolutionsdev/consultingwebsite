const CHIPS = [
  'RFM Scoring',
  'Retention',
  'LYBUNT / SYBUNT',
  'Recurring Donors',
  'Upgrade / Downgrade',
  'Lifecycle',
  'Anomaly Detection',
  'Fund Health',
]

const SEGMENTS = [
  { name: 'Champion', pct: 92, color: '#3434D6' },
  { name: 'Loyal', pct: 74, color: '#1960F9' },
  { name: 'Upgrade Candidate', pct: 58, color: '#0D8CFF' },
  { name: 'New', pct: 41, color: '#29C8F9' },
  { name: 'At Risk', pct: 27, color: '#12DEFF' },
  { name: 'Lapsed', pct: 12, color: '#9DA2B3' },
]

export default function Analytics() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: '#3434D6' }}
          >
            Deep Donor Analytics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-5">
            RFM scoring. Lifecycle. Retention. Anomalies.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Fund-Raise benchmarks your first-time → repeat conversion against the 19%
            national FEP average, deduplicates households, and flags anomalies before
            they become board-meeting surprises.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-12">
          {CHIPS.map((c) => (
            <span
              key={c}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border"
              style={{
                background: 'rgba(52,52,214,0.06)',
                borderColor: 'rgba(52,52,214,0.2)',
                color: '#3434D6',
              }}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Donor segments (RFM)
            </div>
            <div className="space-y-3">
              {SEGMENTS.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-800">{s.name}</span>
                    <span className="text-gray-500">{s.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${s.pct}%`, background: s.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-6 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1A223D, #3434D6)' }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
              Lifecycle funnel · FY24
            </div>
            <div className="space-y-3">
              {[
                { label: 'First-time donors', value: 1842, width: '100%' },
                { label: 'Second gift', value: 421, width: '64%' },
                { label: 'Repeat (3+)', value: 218, width: '42%' },
                { label: 'Recurring', value: 96, width: '22%' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/90">{s.label}</span>
                    <span className="text-white/60">{s.value.toLocaleString()}</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: s.width,
                        background: 'linear-gradient(90deg, #12DEFF, #29C8F9)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 text-xs text-white/70">
              First-time → repeat conversion: <span className="font-bold text-white">23%</span>{' '}
              (vs 19% FEP benchmark)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
