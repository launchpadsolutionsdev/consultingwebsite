export default function AskFundRaise() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #1A223D 0%, #20286B 60%, #3434D6 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #12DEFF 0%, transparent 60%)' }}
        />
        <div
          className="absolute bottom-0 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #29C8F9 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: '#12DEFF' }}
            >
              Ask Fund-Raise · AI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Conversational analytics, powered by Claude.
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-6">
              Ask in plain English. Fund-Raise queries Blackbaud via the SKY API in real
              time, analyses your imported CRM data, and answers with charts, tables, and
              exports.
            </p>
            <ul className="space-y-3 text-white/85 text-base">
              <li className="flex gap-3">
                <span style={{ color: '#12DEFF' }}>◆</span>
                CRM Mode + Deep Dive mode
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#12DEFF' }}>◆</span>
                Image uploads (receipts, letters, handwritten notes)
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#12DEFF' }}>◆</span>
                Live Blackbaud SKY API constituent lookups
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#12DEFF' }}>◆</span>
                One-click CSV export on any answer
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function ChatMockup() {
  return (
    <div
      className="rounded-2xl border border-white/15 p-5 backdrop-blur-sm"
      style={{ background: 'rgba(255,255,255,0.06)' }}
    >
      <Bubble
        who="you"
        text="Show me everyone who gave $500+ last year but not this year."
      />
      <Bubble
        who="fr"
        text="Found 47 donors totaling $284,750 last FY. Biggest gap: 12 donors who gave $2,500+ and haven't renewed. Want the list by recency, or draft a stewardship outreach?"
      />
      <Bubble
        who="you"
        text="Draft a warm stewardship email for the top 12."
      />
      <Bubble
        who="fr"
        text="Done — 12 personalised drafts generated in Writing Assistant, each referencing the donor's last gift, fund, and campaign. Review & send from the Action Centre."
      />
      <div
        className="mt-3 flex items-center gap-2 px-4 py-3 rounded-xl"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <span className="text-white/50 text-sm">Ask Fund-Raise…</span>
        <span className="ml-auto text-xs text-white/40 font-mono">⌘ + K</span>
      </div>
    </div>
  )
}

function Bubble({ who, text }: { who: 'you' | 'fr'; text: string }) {
  const isYou = who === 'you'
  return (
    <div className={`mb-3 flex ${isYou ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm ${
          isYou ? 'text-white' : 'text-white'
        }`}
        style={{
          background: isYou
            ? 'linear-gradient(135deg, #1960F9, #0D8CFF)'
            : 'rgba(255,255,255,0.08)',
          border: isYou ? 'none' : '1px solid rgba(255,255,255,0.1)',
          borderBottomRightRadius: isYou ? 4 : 16,
          borderBottomLeftRadius: isYou ? 16 : 4,
        }}
      >
        {text}
      </div>
    </div>
  )
}
