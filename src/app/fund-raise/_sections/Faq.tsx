const FAQS = [
  {
    q: 'What is Fund-Raise?',
    a: 'A fundraising intelligence platform for foundations and nonprofits running Blackbaud RE NXT. 30+ dashboards, AI conversational analytics, donor scoring, 6 writing tools — replacing Insight Designer, MissionBI, Crystal Reports, and standalone AI tools.',
  },
  {
    q: 'How does the AI assistant work?',
    a: 'Ask Fund-Raise uses Claude by Anthropic. It looks up donors in Blackbaud via SKY API, analyses imported CRM data, compares campaigns year-over-year, flags anomalies, and accepts image uploads.',
  },
  {
    q: 'Is my data secure?',
    a: 'TLS in transit and at-rest encryption, Google OAuth 2.0, role-based access control, and PostgreSQL row-level security for tenant isolation. Data is never sold or shared. AI queries do not retain data.',
  },
  {
    q: 'Do I need Blackbaud RE NXT?',
    a: 'No. Fund-Raise works standalone with CSV/Excel uploads. The Blackbaud integration is optional and adds real-time lookups.',
  },
  {
    q: 'How do I get my data in?',
    a: 'Drag-and-drop CSV or Excel (auto-column mapping, background processing, 300 MB cap) — or connect Blackbaud RE NXT via OAuth.',
  },
  {
    q: 'How much does it cost?',
    a: '$199/month, or $2,030/year (save 15%). Unlimited users. Everything included.',
  },
]

export default function Faq() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <div
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: '#3434D6' }}
          >
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight">
            Questions, answered.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-gray-200 bg-white px-5 py-4 open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-primary-900 pr-6">{f.q}</span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
