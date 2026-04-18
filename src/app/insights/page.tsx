import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/content/ArticleCard'
import TagFilter from '@/components/content/TagFilter'
import Newsletter from '@/components/Newsletter'
import { getAllItems, getAllCategories, getFeaturedItem } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Insights | Launchpad Solutions — State of Charitable Gaming',
  description:
    'Original research, market reports, and strategic analysis of the charitable gaming industry. Written for fundraising leaders, board members, and operators.',
  openGraph: {
    title: 'Launchpad Insights — Charitable Gaming Research & Reports',
    description: 'Research and analysis of the charitable gaming industry.',
    type: 'website',
  },
}

const CATEGORIES_COPY: Record<string, string> = {
  'Industry Trends':
    'What\u2019s moving across charitable gaming \u2014 new formats, new technology, new regulation.',
  'Regulatory & Compliance':
    'State-by-state, province-by-province analysis of what\u2019s legal, what\u2019s changing, and what\u2019s coming.',
  'Market Research':
    'Original benchmarks and research from our work with charities across North America.',
  'Fundraising Strategy':
    'Frameworks and playbooks for charity boards and executives planning a raffle program.',
  'Technology & Innovation':
    'How AI, payment infrastructure, and platform evolution are reshaping the industry.',
  'Donor Behavior':
    'Data-driven analysis of how raffle supporters behave \u2014 and how to reach them.',
}

export default function InsightsIndex() {
  const items = getAllItems('insights')
  const categories = getAllCategories('insights')
  const featured = getFeaturedItem('insights')
  const rest = items.filter((i) => i.slug !== featured?.slug)

  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 relative overflow-hidden gradient-mesh-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-4">
              Launchpad Insights
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Research and analysis on the{' '}
              <span className="bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">
                state of charitable gaming.
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Original research, market benchmarks, regulatory deep-dives, and strategic analysis
              — written for fundraising leaders and board members who need to understand where the
              industry is heading.
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-2">
                  Latest Report
                </div>
                <h2 className="text-3xl font-bold text-primary-900 tracking-tight">Featured insight</h2>
              </div>
            </div>
            <ArticleCard
              variant="hero"
              href={`/insights/${featured.slug}`}
              title={featured.title}
              description={featured.description}
              category={featured.category}
              date={featured.date}
              readingTime={featured.readingTime}
              author={featured.author}
              featured
            />
          </div>
        </section>
      )}

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-3">
              Browse the library
            </h2>
            <p className="text-gray-600">
              {items.length} insight{items.length === 1 ? '' : 's'} published ·{' '}
              <Link href="/newsletter" className="text-accent-blue hover:underline font-medium">
                Subscribe to new releases
              </Link>
            </p>
          </div>

          <TagFilter items={rest} categories={categories} basePath="/insights" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-3">
              Insights by category
            </h2>
            <p className="text-gray-600">
              Our research and analysis are organized into six ongoing streams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat} className="card p-6">
                <h3 className="font-bold text-primary-900 mb-2 text-lg">{cat}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {CATEGORIES_COPY[cat] ?? 'Research and analysis from the Launchpad team.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Newsletter
            title="Get Launchpad Insights in your inbox."
            description="Bi-weekly research briefings, regulatory updates, and strategic analysis for charitable gaming leaders."
          />
        </div>
      </section>
    </>
  )
}
