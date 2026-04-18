import type { Metadata } from 'next'
import Link from 'next/link'
import RoiCalculator from './RoiCalculator'

export const metadata: Metadata = {
  title: 'Raffle ROI Calculator | Launchpad Solutions',
  description:
    'Model expected revenue, costs, and net proceeds for a charitable raffle program. Inputs calibrated against real industry data across hundreds of programs.',
}

export default function RoiCalculatorPage() {
  return (
    <>
      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/resources" className="hover:text-accent-blue transition-colors font-medium">
              Resources
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-700">Tools</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue uppercase tracking-wide">
              Interactive Tool
            </span>
            <span className="text-sm text-gray-500">Free · 5 minutes</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-900 leading-tight mb-4">
            Raffle ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Model expected revenue, costs, and net proceeds for your raffle program. Inputs are
            calibrated against real industry data across hundreds of programs we&apos;ve analyzed.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
          <RoiCalculator />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-900 mb-4 tracking-tight">
              A few honest caveats
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                These numbers are modeling, not guarantees. Real raffle outcomes depend on supporter
                engagement, marketing execution, and operational rigor — variables no calculator
                can perfectly predict.
              </p>
              <p>
                The CAC and conversion assumptions are based on our cross-client data and publicly
                available industry benchmarks. They sit in a realistic middle of the range
                we actually see.
              </p>
              <p>
                For a real projection with detailed assumptions, we&apos;d recommend a conversation.
                Our team can build a custom model against your specific supporter base, geography,
                and format — as part of a free consultation.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/#contact" className="btn-primary !rounded-full inline-flex">
                Request a Custom Projection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
