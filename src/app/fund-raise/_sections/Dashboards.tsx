const DASHBOARDS = [
  'CRM Master',
  'Donor Scoring',
  'Retention',
  'LYBUNT / SYBUNT',
  'Campaign Compare',
  'Appeal Compare',
  'Fund Health',
  'Anomaly Detection',
  'Recurring Donors',
  'Donor Lifecycle',
  'First-Time Donor Conversion',
  'Upgrade / Downgrade',
  'Household Giving',
  'Gift Trends',
  'Payment Methods',
  'Matching Gifts',
  'Soft Credits',
  'Acknowledgments',
  'YoY Compare',
  'Department Analytics',
  'Data Quality',
  'Geographic',
  'Donor Detail',
  'Gift Search',
  'Fundraiser Performance',
  'Fundraiser Goals',
  'Department Goals',
  'Scenario Planner',
  'Campaign Thermometer',
  'Board Report PDF',
  'AI Recommendations',
]

export default function Dashboards() {
  return (
    <section
      className="py-24 border-t border-gray-100"
      style={{ background: '#F7F8FC' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: '#3434D6' }}
          >
            Dashboards
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-5">
            30+ dashboards built for RE NXT data.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every metric a development office actually uses — retention, LYBUNT/SYBUNT,
            fund health, fundraiser performance, board-ready PDFs — all prebuilt, all
            live against your donor data.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {DASHBOARDS.map((d) => (
            <span
              key={d}
              className="fr-chip inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-800 transition-colors"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .fr-chip:hover {
          background: linear-gradient(135deg, #1960F9, #0D8CFF);
          border-color: transparent;
          color: #fff;
        }
      `}</style>
    </section>
  )
}
