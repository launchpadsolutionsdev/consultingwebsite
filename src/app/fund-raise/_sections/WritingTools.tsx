const TOOLS = [
  {
    name: 'Writing Assistant',
    desc: 'Draft from scratch, polish, or reply — with full donor context. Tones: warm, professional, celebratory, empathetic.',
    featured: true,
  },
  {
    name: 'Thank-You Letters',
    desc: 'Personalised acknowledgments referencing gift, fund, and campaign in one click.',
  },
  {
    name: 'Impact Stories',
    desc: 'Turn program data into donor-facing stories that show where the money went.',
  },
  {
    name: 'Meeting Prep',
    desc: 'Pre-meeting brief: giving history, soft credits, household context, next-best-ask.',
  },
  {
    name: 'Weekly Digest',
    desc: 'AI-written weekly summary for leadership — new gifts, at-risk donors, wins.',
  },
  {
    name: 'Quick Notes',
    desc: 'Capture a donor conversation in 30 seconds; Fund-Raise files it and suggests follow-ups.',
  },
]

export default function WritingTools() {
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
            AI Writing Tools
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-5">
            Six writing tools. All personalised with your donor data.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Not generic AI. Every draft is grounded in the donor&apos;s actual giving
            history, fund interest, and campaign engagement — pulled live from your CRM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOLS.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 border transition-all hover:-translate-y-1 ${
                t.featured ? 'text-white' : 'bg-white text-gray-800 border-gray-200'
              }`}
              style={
                t.featured
                  ? {
                      background: 'linear-gradient(135deg, #1960F9, #0D8CFF)',
                      borderColor: 'transparent',
                      boxShadow: '0 10px 30px rgba(25, 96, 249, 0.25)',
                    }
                  : undefined
              }
            >
              <div
                className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  t.featured ? 'text-white/80' : ''
                }`}
                style={t.featured ? undefined : { color: '#3434D6' }}
              >
                {t.featured ? 'Flagship' : 'Tool'}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${t.featured ? 'text-white' : 'text-primary-900'}`}>
                {t.name}
              </h3>
              <p className={`text-sm leading-relaxed ${t.featured ? 'text-white/85' : 'text-gray-600'}`}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
