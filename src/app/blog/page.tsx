import type { Metadata } from 'next'
import ArticleCard from '@/components/content/ArticleCard'
import TagFilter from '@/components/content/TagFilter'
import Newsletter from '@/components/Newsletter'
import { getAllItems, getAllCategories, getFeaturedItem } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog | Launchpad Solutions — Charitable Gaming & Raffle Management',
  description:
    'Practical playbooks, launch checklists, and hard-won lessons from the largest 50/50 and Catch the Ace raffles in North America.',
  openGraph: {
    title: 'Launchpad Solutions Blog',
    description: 'Practical playbooks and lessons from the largest 50/50 and Catch the Ace raffles.',
    type: 'website',
  },
}

export default function BlogIndex() {
  const items = getAllItems('blog')
  const categories = getAllCategories('blog')
  const featured = getFeaturedItem('blog')
  const rest = items.filter((i) => i.slug !== featured?.slug)

  return (
    <>
      <section className="pt-32 pb-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              The Launchpad Blog
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              Playbooks from the <span className="gradient-text">front lines</span> of charitable gaming.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Practical guides, launch checklists, and lessons learned from running some of the largest
              50/50 and Catch the Ace raffles in North America. Written for the people actually running them.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ArticleCard
              variant="hero"
              href={`/blog/${featured.slug}`}
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
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-3">
              All articles
            </h2>
            <p className="text-gray-600">
              {items.length} article{items.length === 1 ? '' : 's'} · Updated regularly
            </p>
          </div>

          <TagFilter items={rest} categories={categories} basePath="/blog" />
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
