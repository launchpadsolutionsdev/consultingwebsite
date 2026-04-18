'use client'

import { useMemo, useState } from 'react'

type Format = '5050' | 'catch-the-ace' | 'prize'
type Maturity = 'first' | 'established' | 'mature'

interface Inputs {
  listSize: number
  format: Format
  maturity: Maturity
  cycles: number
  marketingSpend: number
  operatingModel: 'in-house' | 'agency'
}

function currency(n: number) {
  return n.toLocaleString('en-CA', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

function formatPercent(n: number) {
  return `${(n * 100).toFixed(1)}%`
}

// --- Model -------------------------------------------------------------------

// Revenue per subscriber per cycle varies with format and program maturity.
// Based on aggregated client data across our portfolio.
const REVENUE_PER_SUB: Record<Format, Record<Maturity, number>> = {
  '5050': { first: 3.5, established: 8.5, mature: 16 },
  'catch-the-ace': { first: 2.5, established: 6, mature: 11 },
  prize: { first: 2, established: 5, mature: 9 },
}

// Paid-marketing revenue multiplier (dollars of paid → dollars of revenue).
// Well-run 50/50 programs routinely see 5–8x return on paid marketing spend.
const PAID_MULTIPLIER: Record<Format, Record<Maturity, number>> = {
  '5050': { first: 3.5, established: 5.5, mature: 7 },
  'catch-the-ace': { first: 3, established: 4.5, mature: 6 },
  prize: { first: 2.8, established: 4, mature: 5 },
}

// Prize payout as a fraction of gross revenue (50% for 50/50 by definition,
// approximate for other formats considering prize insurance + secondary prizes).
const PRIZE_PAYOUT_RATIO: Record<Format, number> = {
  '5050': 0.5,
  'catch-the-ace': 0.55,
  prize: 0.42,
}

// Non-marketing operating costs as a fraction of gross, by model.
const OPERATING_COST_RATIO: Record<'in-house' | 'agency', number> = {
  'in-house': 0.22,
  agency: 0.18,
}

// Fixed annual agency cost (if applicable), in USD.
const AGENCY_ANNUAL_FEE = 120_000

// Year-2 growth multiplier on gross revenue (if the program is re-run cycles).
const YEAR_TWO_GROWTH = 1.45

interface Result {
  grossPerCycle: number
  annualGross: number
  annualPrizePayout: number
  annualOperatingCost: number
  annualMarketingSpend: number
  annualAgencyFee: number
  netProceeds: number
  netMargin: number
  yearTwoNet: number
}

function calculate(i: Inputs): Result {
  const rps = REVENUE_PER_SUB[i.format][i.maturity]
  const listRevenue = i.listSize * rps

  const pmult = PAID_MULTIPLIER[i.format][i.maturity]
  const paidRevenuePerCycle = (i.marketingSpend / Math.max(i.cycles, 1)) * pmult

  const grossPerCycle = listRevenue + paidRevenuePerCycle
  const annualGross = grossPerCycle * i.cycles

  const annualPrizePayout = annualGross * PRIZE_PAYOUT_RATIO[i.format]
  const annualOperatingCost = annualGross * OPERATING_COST_RATIO[i.operatingModel]
  const annualAgencyFee = i.operatingModel === 'agency' ? AGENCY_ANNUAL_FEE : 0

  const netProceeds = Math.max(
    0,
    annualGross - annualPrizePayout - annualOperatingCost - i.marketingSpend - annualAgencyFee,
  )
  const netMargin = annualGross > 0 ? netProceeds / annualGross : 0

  const yearTwoGross = annualGross * YEAR_TWO_GROWTH
  const yearTwoNet = Math.max(
    0,
    yearTwoGross -
      yearTwoGross * PRIZE_PAYOUT_RATIO[i.format] -
      yearTwoGross * OPERATING_COST_RATIO[i.operatingModel] -
      i.marketingSpend * YEAR_TWO_GROWTH -
      annualAgencyFee,
  )

  return {
    grossPerCycle,
    annualGross,
    annualPrizePayout,
    annualOperatingCost,
    annualMarketingSpend: i.marketingSpend,
    annualAgencyFee,
    netProceeds,
    netMargin,
    yearTwoNet,
  }
}

// --- UI ----------------------------------------------------------------------

export default function RoiCalculator() {
  const [inputs, setInputs] = useState<Inputs>({
    listSize: 8000,
    format: '5050',
    maturity: 'first',
    cycles: 4,
    marketingSpend: 40_000,
    operatingModel: 'agency',
  })

  const result = useMemo(() => calculate(inputs), [inputs])

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Inputs */}
      <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-primary-900 tracking-tight mb-6">Your program</h2>
        <div className="space-y-6">
          <Field label="Supporter list size" hint="Engaged email subscribers or previous ticket buyers.">
            <input
              type="number"
              min={0}
              value={inputs.listSize}
              onChange={(e) => setInputs({ ...inputs, listSize: Number(e.target.value) || 0 })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
            />
          </Field>

          <Field label="Raffle format">
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { v: '5050', label: '50/50' },
                  { v: 'catch-the-ace', label: 'Catch the Ace' },
                  { v: 'prize', label: 'Prize Raffle' },
                ] as const
              ).map((o) => (
                <button
                  key={o.v}
                  type="button"
                  onClick={() => setInputs({ ...inputs, format: o.v })}
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    inputs.format === o.v
                      ? 'bg-primary-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </Field>

          <Field
            label="Program maturity"
            hint="First cycle programs earn less per supporter than mature ones."
          >
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { v: 'first', label: 'First year' },
                  { v: 'established', label: 'Year 2–3' },
                  { v: 'mature', label: 'Year 4+' },
                ] as const
              ).map((o) => (
                <button
                  key={o.v}
                  type="button"
                  onClick={() => setInputs({ ...inputs, maturity: o.v })}
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    inputs.maturity === o.v
                      ? 'bg-primary-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Cycles per year" hint="Monthly ~12, bi-monthly ~6, quarterly 4.">
            <input
              type="range"
              min={1}
              max={12}
              value={inputs.cycles}
              onChange={(e) => setInputs({ ...inputs, cycles: Number(e.target.value) })}
              className="w-full"
            />
            <div className="text-sm text-gray-600 mt-1 font-semibold">
              {inputs.cycles} cycle{inputs.cycles === 1 ? '' : 's'} per year
            </div>
          </Field>

          <Field label="Annual marketing budget" hint="Paid social, PR, local media, collateral.">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                $
              </span>
              <input
                type="number"
                min={0}
                step={1000}
                value={inputs.marketingSpend}
                onChange={(e) =>
                  setInputs({ ...inputs, marketingSpend: Number(e.target.value) || 0 })
                }
                className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
              />
            </div>
          </Field>

          <Field label="Operating model">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setInputs({ ...inputs, operatingModel: 'in-house' })}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  inputs.operatingModel === 'in-house'
                    ? 'bg-primary-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                In-house
              </button>
              <button
                type="button"
                onClick={() => setInputs({ ...inputs, operatingModel: 'agency' })}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  inputs.operatingModel === 'agency'
                    ? 'bg-primary-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                With an agency
              </button>
            </div>
            {inputs.operatingModel === 'agency' && (
              <p className="text-xs text-gray-500 mt-2">
                Assumes a mid-tier agency engagement at {currency(AGENCY_ANNUAL_FEE)}/year.
              </p>
            )}
          </Field>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-2 bg-primary-900 gradient-mesh-card text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2">
            Modeled projection
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-8">Year 1 results</h2>

          <div className="mb-8">
            <div className="text-sm text-white/70 mb-1">Net proceeds to cause</div>
            <div className="text-5xl font-bold bg-gradient-to-r from-white to-accent-cyan bg-clip-text text-transparent mb-2 leading-tight">
              {currency(result.netProceeds)}
            </div>
            <div className="text-sm text-white/60">
              {formatPercent(result.netMargin)} net margin on {currency(result.annualGross)} gross
            </div>
          </div>

          <div className="space-y-3 border-t border-white/15 pt-6 mb-6">
            <Breakdown label="Gross ticket revenue" value={currency(result.annualGross)} />
            <Breakdown label="Prize payout" value={`\u2212 ${currency(result.annualPrizePayout)}`} negative />
            <Breakdown
              label="Marketing spend"
              value={`\u2212 ${currency(result.annualMarketingSpend)}`}
              negative
            />
            <Breakdown
              label="Operating costs"
              value={`\u2212 ${currency(result.annualOperatingCost)}`}
              negative
            />
            {result.annualAgencyFee > 0 && (
              <Breakdown
                label="Agency fee"
                value={`\u2212 ${currency(result.annualAgencyFee)}`}
                negative
              />
            )}
            <div className="border-t border-white/15 pt-3 flex items-center justify-between">
              <span className="font-semibold">Net to cause</span>
              <span className="font-bold text-accent-cyan">{currency(result.netProceeds)}</span>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <div className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-1">
              Year 2 projection
            </div>
            <div className="text-3xl font-bold mb-1">{currency(result.yearTwoNet)}</div>
            <div className="text-xs text-white/60">
              Assumes {(YEAR_TWO_GROWTH * 100 - 100).toFixed(0)}% gross growth from operational iteration.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-primary-900 mb-2">{label}</label>
      {children}
      {hint && <p className="text-xs text-gray-500 mt-1.5">{hint}</p>}
    </div>
  )
}

function Breakdown({
  label,
  value,
  negative,
}: {
  label: string
  value: string
  negative?: boolean
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-white/70">{label}</span>
      <span className={negative ? 'text-white/80' : 'font-semibold'}>{value}</span>
    </div>
  )
}
