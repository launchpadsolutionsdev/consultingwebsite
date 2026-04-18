export default function HeroMockup() {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl border"
      style={{
        background: '#FFFFFF',
        borderColor: 'rgba(255,255,255,0.08)',
        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
      }}
    >
      <TitleBar />
      <div className="p-4 space-y-3" style={{ background: '#FFFFFF' }}>
        <Kpis />
        <div className="grid grid-cols-5 gap-3">
          <RevenueChart />
          <DepartmentGoals />
        </div>
        <div className="grid grid-cols-5 gap-3">
          <RecentGifts />
          <DonorSegments />
        </div>
        <StatusRow />
        <TopFundraisers />
      </div>
      <AskPill />
    </div>
  )
}

function TitleBar() {
  return (
    <div
      className="flex items-center gap-2 px-4 py-3 border-b"
      style={{ background: '#F8F9FB', borderColor: '#E5E7EB' }}
    >
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F56' }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#27C93F' }} />
      <span className="ml-3 text-xs font-semibold" style={{ color: '#6E7180' }}>
        Fund-Raise — CRM Dashboard
      </span>
    </div>
  )
}

const KPIS = [
  { label: 'Total Raised', value: '$4,218,340', delta: '+12.3% YoY', color: '#1960F9' },
  { label: 'Unique Donors', value: '2,847', delta: '+8.1%', color: '#3434D6' },
  { label: 'Avg Gift', value: '$1,482', delta: '+4.7%', color: '#0D8CFF' },
  { label: 'Retention', value: '68.4%', delta: '+2.1%', color: '#22C55E' },
]

function Kpis() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {KPIS.map((k) => (
        <div
          key={k.label}
          className="rounded-xl p-3 border"
          style={{ background: '#FFFFFF', borderColor: '#E5E7EB' }}
        >
          <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#6E7180' }}>
            {k.label}
          </div>
          <div className="text-lg font-bold" style={{ color: k.color }}>
            {k.value}
          </div>
          <div className="text-[11px] mt-0.5" style={{ color: '#22C55E' }}>
            {k.delta}
          </div>
        </div>
      ))}
    </div>
  )
}

function RevenueChart() {
  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']
  const fy26 = [30, 48, 42, 60, 72, 92, 68, 74, 80]
  const fy25 = [22, 38, 45, 52, 58, 70, 60, 56, 62]
  const toPath = (vals: number[]) => {
    const stepX = 280 / (vals.length - 1)
    return vals
      .map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX},${100 - v}`)
      .join(' ')
  }
  return (
    <div
      className="col-span-3 rounded-xl p-4 border"
      style={{ background: '#FFFFFF', borderColor: '#E5E7EB' }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold" style={{ color: '#1A223D' }}>
          Revenue by Month
        </span>
        <div className="flex gap-3 text-[10px]" style={{ color: '#6E7180' }}>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-0.5" style={{ background: '#1960F9' }} />
            FY26
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-0.5" style={{ background: '#9DA2B3' }} />
            FY25
          </span>
        </div>
      </div>
      <svg viewBox="0 0 280 110" className="w-full h-24" preserveAspectRatio="none">
        <path d={toPath(fy25)} fill="none" stroke="#BCBFCC" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d={toPath(fy26)} fill="none" stroke="#1960F9" strokeWidth="2" />
        <circle cx={(280 / 8) * 5} cy={100 - 92} r="3" fill="#1960F9" />
      </svg>
      <div className="flex justify-between mt-1 text-[9px]" style={{ color: '#9DA2B3' }}>
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  )
}

const DEPTS = [
  { name: 'Major Gifts', pct: 87, color: '#1960F9' },
  { name: 'Annual Giving', pct: 72, color: '#1A223D' },
  { name: 'Events', pct: 64, color: '#0D8CFF' },
  { name: 'Planned Giving', pct: 91, color: '#22C55E' },
  { name: 'Corporate', pct: 58, color: '#8B5CF6' },
]

function DepartmentGoals() {
  return (
    <div
      className="col-span-2 rounded-xl p-4 border"
      style={{ background: '#FFFFFF', borderColor: '#E5E7EB' }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#6E7180' }}>
        Department Goals
      </div>
      <div className="space-y-2.5">
        {DEPTS.map((d) => (
          <div key={d.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span style={{ color: '#1A223D' }}>{d.name}</span>
              <span className="font-semibold" style={{ color: '#1A223D' }}>
                {d.pct}%
              </span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: '#EDEFF7' }}>
              <div
                className="h-full rounded-full"
                style={{ width: `${d.pct}%`, background: d.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const GIFTS = [
  { name: 'Margaret Wilson', fund: 'Annual Campaign', amt: '$15,000' },
  { name: 'Kingston Rotary', fund: 'Capital Campaign', amt: '$25,000' },
  { name: 'David & Sarah Chen', fund: 'Gala 2026', amt: '$5,000' },
  { name: 'Smith Foundation', fund: 'Major Gifts', amt: '$50,000' },
]

function RecentGifts() {
  return (
    <div
      className="col-span-3 rounded-xl p-4 border"
      style={{ background: '#FFFFFF', borderColor: '#E5E7EB' }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#6E7180' }}>
        Recent Gifts
      </div>
      <div className="space-y-2">
        {GIFTS.map((g) => (
          <div key={g.name} className="flex items-center text-[11px]">
            <span className="flex-1 font-medium" style={{ color: '#1A223D' }}>
              {g.name}
            </span>
            <span className="flex-1 text-right" style={{ color: '#6E7180' }}>
              {g.fund}
            </span>
            <span className="w-16 text-right font-semibold" style={{ color: '#1960F9' }}>
              {g.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const SEGMENTS = [
  { name: 'Champion', count: 142, value: '$1.2M', bg: '#DCFCE7', fg: '#15803D' },
  { name: 'Loyal', count: 318, value: '$890K', bg: '#DBEAFE', fg: '#1960F9' },
  { name: 'At Risk', count: 87, value: '$340K', bg: '#FEF3C7', fg: '#B45309' },
  { name: 'New', count: 203, value: '$180K', bg: '#EDE9FE', fg: '#6D28D9' },
]

function DonorSegments() {
  return (
    <div
      className="col-span-2 rounded-xl p-4 border"
      style={{ background: '#FFFFFF', borderColor: '#E5E7EB' }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#6E7180' }}>
        Donor Segments
      </div>
      <div className="space-y-2">
        {SEGMENTS.map((s) => (
          <div key={s.name} className="flex items-center text-[11px]">
            <span
              className="inline-block px-2 py-0.5 rounded-full font-semibold text-[10px] w-20 text-center"
              style={{ background: s.bg, color: s.fg }}
            >
              {s.name}
            </span>
            <span className="flex-1 text-right ml-2" style={{ color: '#6E7180' }}>
              {s.count}
            </span>
            <span className="w-14 text-right font-semibold" style={{ color: '#1A223D' }}>
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const STATUSES = [
  { label: '12 LYBUNT donors need outreach', color: '#F59E0B' },
  { label: 'Retention up 2.1% this quarter', color: '#22C55E' },
  { label: '3 anomalous gifts flagged', color: '#EF4444' },
]

function StatusRow() {
  return (
    <div
      className="rounded-xl p-3 border flex items-center justify-around text-[11px]"
      style={{ background: '#F8F9FB', borderColor: '#E5E7EB' }}
    >
      {STATUSES.map((s) => (
        <span key={s.label} className="flex items-center gap-2" style={{ color: '#1A223D' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
          {s.label}
        </span>
      ))}
    </div>
  )
}

const FUNDRAISERS = [
  { name: 'Sarah Mitchell', dept: 'Major Gifts', amt: '$1.42M', pct: 100, color: '#1960F9' },
  { name: 'James Thornton', dept: 'Annual Giving', amt: '$1.16M', pct: 82, color: '#1A223D' },
  { name: 'Karen Liu', dept: 'Events', amt: '$948K', pct: 67, color: '#F59E0B' },
  { name: 'Michael Davis', dept: 'Corporate', amt: '$775K', pct: 55, color: '#8B5CF6' },
  { name: 'Emily Nakamura', dept: 'Planned Giving', amt: '$670K', pct: 47, color: '#22C55E' },
  { name: 'Robert Patel', dept: 'Major Gifts', amt: '$562K', pct: 40, color: '#1960F9' },
]

function TopFundraisers() {
  return (
    <div
      className="rounded-xl p-4 border"
      style={{ background: '#FFFFFF', borderColor: '#E5E7EB' }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#6E7180' }}>
        Top Fundraisers — FY2026
      </div>
      <div className="space-y-2">
        {FUNDRAISERS.map((f, i) => (
          <div key={f.name} className="flex items-center gap-3 text-[11px]">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]"
              style={{ background: '#EDEFF7', color: '#1A223D' }}
            >
              {i + 1}
            </span>
            <span className="w-28 font-medium truncate" style={{ color: '#1A223D' }}>
              {f.name}
            </span>
            <span className="flex-1">
              <span className="block h-1.5 rounded-full" style={{ background: '#EDEFF7' }}>
                <span
                  className="block h-full rounded-full"
                  style={{ width: `${f.pct}%`, background: f.color }}
                />
              </span>
            </span>
            <span className="w-20 text-right" style={{ color: '#6E7180' }}>
              {f.dept}
            </span>
            <span className="w-14 text-right font-semibold" style={{ color: '#1A223D' }}>
              {f.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AskPill() {
  return (
    <div className="relative">
      <div
        className="absolute -top-6 right-3 flex items-center gap-2 px-3 py-2 rounded-full text-white text-xs font-semibold shadow-lg"
        style={{ background: 'linear-gradient(135deg, #1960F9, #3434D6)' }}
      >
        <span
          className="w-4 h-4 rounded flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.2)' }}
        >
          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path d="M2 10l16-8-8 16-2-7-6-1z" />
          </svg>
        </span>
        Ask Fund-Raise
      </div>
    </div>
  )
}
