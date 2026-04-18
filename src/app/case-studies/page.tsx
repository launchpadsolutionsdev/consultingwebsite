import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllItems, formatDate } from '@/lib/content'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
  title: 'Case Studies | Launchpad Solutions',
  description:
    'Real results from real raffle programs. Detailed case studies of how charitable gaming programs we\u2019ve worked with have broken records and scaled their impact.',
}

export default function CaseStudiesIndex() {
  const items = getAllItems('case-studies')

  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Case Studies
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              Real charities. <span className="gradient-text">Real results.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Detailed breakdowns of what it actually took to build some of the largest, most successful
              raffle programs in North American charitable gaming — the numbers, the strategy, the lessons.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {items.map((item, i) => (
            <Link
              key={item.slug}
              href={`/case-studies/${item.slug}`}
              className="group grid md:grid-cols-5 gap-8 bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="md:col-span-2">
                <div
                  className="aspect-[4/3] rounded-2xl relative overflow-hidden"
                  style={{
                    background: item.image
                      ? `url(${item.image}) center/cover`
                      : `linear-gradient(135deg, ${
                          i % 2 === 0 ? '#1B2A4A 0%, #FF6B2B 100%' : '#FF6B2B 0%, #F5A623 100%'
                        })`,
                  }}
                >
                  {!item.image && (
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange rounded-full blur-3xl" />
                    </div>
                  )}
                </div>
              </div>
              <div className="md:col-span-3 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue font-semibold">
                    {item.category}
                  </span>
                  {item.location && <span className="text-gray-500">{item.location}</span>}
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-500">{formatDate(item.date)}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3 tracking-tight group-hover:text-accent-blue transition-colors">
                  {item.title}
                </h2>
                {item.client && (
                  <div className="text-sm font-semibold text-gray-700 mb-3">Client: {item.client}</div>
                )}
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <span className="inline-flex items-center font-semibold text-accent-blue group-hover:text-primary-900 transition-colors text-sm">
                  Read the full case study
                  <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  )
}
