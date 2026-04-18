import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { formatDate, getRelatedItems, type ContentItem, type ContentType } from '@/lib/content'
import { mdxComponents } from './MDXComponents'
import ArticleCard from './ArticleCard'
import Newsletter from '@/components/Newsletter'

interface Props {
  item: ContentItem
  type: ContentType
  basePath: string
  hubLabel: string
}

export default function ArticleLayout({ item, type, basePath, hubLabel }: Props) {
  const related = getRelatedItems(type, item.slug, 3)

  return (
    <>
      <article className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href={basePath} className="hover:text-accent-blue transition-colors font-medium">
              {hubLabel}
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-700">{item.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue">
              {item.category}
            </span>
            {item.featured && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-900 leading-tight mb-6">
            {item.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">{item.description}</p>

          <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-semibold text-sm">
                {item.author
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <div className="text-sm font-semibold text-primary-900">{item.author}</div>
                <div className="text-xs text-gray-500">
                  {formatDate(item.date)} · {item.readingTime}
                </div>
              </div>
            </div>
            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 ml-auto">
                {item.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-12">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={item.content} components={mdxComponents} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-16">
          <Newsletter variant="inline" />
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-2">
                  Keep Reading
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight">
                  Related {hubLabel}
                </h2>
              </div>
              <Link href={basePath} className="hidden md:inline-flex nav-link">
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <ArticleCard
                  key={r.slug}
                  href={`${basePath}/${r.slug}`}
                  title={r.title}
                  description={r.description}
                  category={r.category}
                  date={r.date}
                  readingTime={r.readingTime}
                  author={r.author}
                  image={r.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
