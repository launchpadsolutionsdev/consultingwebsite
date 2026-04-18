import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/content/MDXComponents'
import Newsletter from '@/components/Newsletter'
import { formatDate, getAllItems, getAllSlugs, getItemBySlug } from '@/lib/content'

interface Params {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs('case-studies').map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const item = getItemBySlug('case-studies', params.slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.title} | Launchpad Case Study`,
    description: item.description,
  }
}

export default function CaseStudyPage({ params }: Params) {
  const item = getItemBySlug('case-studies', params.slug)
  if (!item) notFound()

  const all = getAllItems('case-studies').filter((i) => i.slug !== item.slug).slice(0, 3)

  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 text-sm text-white/60">
            <Link href="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{item.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan text-primary-900">
              {item.category}
            </span>
            {item.location && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white">
                {item.location}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            {item.title}
          </h1>

          <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">{item.description}</p>

          {item.result && (
            <div className="inline-flex flex-col border-l-4 border-accent-cyan pl-5 py-2">
              <span className="text-5xl md:text-6xl font-bold text-white">{item.result}</span>
              <span className="text-sm text-white/70 font-medium mt-1">Headline Result</span>
            </div>
          )}

          <div className="flex items-center gap-4 mt-10 text-sm text-white/60">
            {item.client && <span>Client: <span className="text-white/90 font-medium">{item.client}</span></span>}
            <span>·</span>
            <span>{formatDate(item.date)}</span>
            <span>·</span>
            <span>{item.readingTime}</span>
          </div>
        </div>
      </section>

      <article className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={item.content} components={mdxComponents} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-16">
          <Newsletter variant="inline" />
        </div>
      </article>

      {all.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-10">
              More case studies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {all.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}`}
                  className="group card card-3d block !p-6"
                >
                  <div className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-3">
                    {c.category}
                  </div>
                  <h3 className="font-bold text-primary-900 mb-2 text-lg leading-tight group-hover:text-accent-blue transition-colors">
                    {c.title}
                  </h3>
                  {c.result && (
                    <div className="text-2xl font-bold gradient-text mb-3">{c.result}</div>
                  )}
                  <p className="text-sm text-gray-600 line-clamp-2">{c.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
