import Link from 'next/link'
import { getAllItems, formatDate } from '@/lib/content'

export default function HomeKnowledgePreview() {
  const blog = getAllItems('blog').slice(0, 3)
  const insights = getAllItems('insights').slice(0, 2)
  const featuredInsight = insights[0]
  const secondInsight = insights[1]

  return (
    <section className="py-20 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              Knowledge Hub
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-900 leading-tight">
              Insights on the charitable gaming industry —{' '}
              <span className="gradient-text">written by people who run it.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-100 text-primary-900 font-semibold text-sm hover:bg-gray-200 transition-colors"
            >
              All articles
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary-900 text-white font-semibold text-sm hover:bg-primary-800 transition-colors"
            >
              Research & reports
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {featuredInsight && (
            <Link
              href={`/insights/${featuredInsight.slug}`}
              className="group lg:col-span-3 relative rounded-3xl overflow-hidden bg-primary-900 gradient-mesh-card text-white p-8 lg:p-12 min-h-[24rem] flex flex-col justify-end"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-accent-cyan text-primary-900">
                    Featured Report
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20">
                    {featuredInsight.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-4 group-hover:text-accent-cyan transition-colors">
                  {featuredInsight.title}
                </h3>
                <p className="text-white/80 mb-6 max-w-2xl">{featuredInsight.description}</p>
                <div className="text-sm text-white/70">
                  {featuredInsight.author} · {formatDate(featuredInsight.date)} · {featuredInsight.readingTime}
                </div>
              </div>
            </Link>
          )}

          <div className="lg:col-span-2 flex flex-col gap-6">
            {secondInsight && (
              <Link
                href={`/insights/${secondInsight.slug}`}
                className="group flex-1 rounded-3xl overflow-hidden bg-gradient-to-br from-accent-blue to-accent-cyan text-white p-6 lg:p-8 min-h-[11rem] flex flex-col justify-end"
              >
                <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-white/80">
                  {secondInsight.category}
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-tight group-hover:text-primary-900 transition-colors">
                  {secondInsight.title}
                </h3>
                <div className="text-xs text-white/80 mt-2">{secondInsight.readingTime}</div>
              </Link>
            )}
            {blog[0] && (
              <Link
                href={`/blog/${blog[0].slug}`}
                className="group flex-1 rounded-3xl p-6 lg:p-8 border-2 border-gray-100 hover:border-accent-blue/40 transition-all hover:-translate-y-1"
              >
                <div className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
                  From the Blog · {blog[0].category}
                </div>
                <h3 className="text-xl font-bold text-primary-900 leading-tight tracking-tight mb-2 group-hover:text-accent-blue transition-colors">
                  {blog[0].title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{blog[0].description}</p>
                <div className="text-xs text-gray-500">{blog[0].readingTime}</div>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {blog.slice(1, 3).map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}`}
              className="group rounded-2xl p-6 border border-gray-100 hover:border-accent-blue/40 hover:shadow-lg transition-all"
            >
              <div className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
                Blog · {b.category}
              </div>
              <h3 className="font-bold text-primary-900 mb-2 text-lg leading-snug group-hover:text-accent-blue transition-colors">
                {b.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{b.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
