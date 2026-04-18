const ROWS = [
  {
    pay: 'Blackbaud Insight Designer',
    cost: '$2,500/yr',
    gives: '30+ built-in dashboards',
  },
  {
    pay: 'MissionBI Connect / Zuri Aqueduct',
    cost: '$3,000–$10,000/yr',
    gives: 'Direct CSV/Excel import into PostgreSQL',
  },
  {
    pay: 'Power BI Pro + CData connector',
    cost: '$1,000–$4,000/yr',
    gives: 'Native in-app visualisations',
  },
  {
    pay: 'Excel exports + manual analysis',
    cost: '8–15 hrs/mo staff time',
    gives: 'Board report PDF + AI queries',
  },
  {
    pay: 'Crystal Reports (being sunset 2027)',
    cost: '$500–$1,500/yr',
    gives: 'No coding required',
  },
  {
    pay: 'Standalone AI writing tools',
    cost: '$240–$6,000/yr',
    gives: '6 built-in writing tools',
  },
]

export default function Replaces() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: '#3434D6' }}
          >
            Why Fund-Raise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-5">
            One platform. Six line items off your budget.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Foundations running Raiser&apos;s Edge NXT typically spend $7,000–$24,000/year
            stitching together dashboards, imports, reporting, and AI writing. Fund-Raise
            replaces the whole stack.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div
            className="grid grid-cols-12 gap-4 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ background: 'linear-gradient(135deg, #1A223D, #3434D6)' }}
          >
            <div className="col-span-5">What you pay for today</div>
            <div className="col-span-3">Annual cost</div>
            <div className="col-span-4">What Fund-Raise gives you</div>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.pay}
              className={`grid grid-cols-12 gap-4 px-6 py-4 text-sm ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="col-span-5 text-gray-800 font-medium">{r.pay}</div>
              <div className="col-span-3 text-gray-600">{r.cost}</div>
              <div className="col-span-4 text-gray-800">{r.gives}</div>
            </div>
          ))}
          <div
            className="grid grid-cols-12 gap-4 px-6 py-5 text-sm font-bold"
            style={{
              background: 'linear-gradient(135deg, rgba(52,52,214,0.08), rgba(18,222,255,0.08))',
              color: '#1A223D',
            }}
          >
            <div className="col-span-5">Patchwork total</div>
            <div className="col-span-3">$7,000–$24,000/yr</div>
            <div className="col-span-4" style={{ color: '#3434D6' }}>
              Fund-Raise: $199/mo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
