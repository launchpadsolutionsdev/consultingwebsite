import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ArticleCard from '@/components/content/ArticleCard'
import { AUTHORS, getAuthorBySlug } from '@/lib/authors'
import { getAllItems } from '@/lib/content'

interface Params {
  params: { slug: string }
}

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const a = getAuthorBySlug(params.slug)
  if (!a) return { title: 'Not Found' }
  return {
    title: `${a.name} — ${a.role} | Launchpad Solutions`,
    description: a.bio.slice(0, 200),
  }
}

export default function AuthorPage({ params }: Params) {
  const author = getAuthorBySlug(params.slug)
  if (!author) notFound()

  const byThisAuthor = [...getAllItems('blog'), ...getAllItems('insights')]
    .filter((i) => i.author.toLowerCase() === author.name.toLowerCase())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const initials = author.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/team" className="hover:text-accent-blue transition-colors font-medium">
              Team
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-700">Authors</span>
          </nav>

          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square relative overflow-hidden rounded-3xl">
                {author.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-900 via-primary-700 to-accent-blue relative">
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute top-0 right-0 w-60 h-60 bg-accent-cyan rounded-full blur-3xl" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl font-bold text-white/30">{initials}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
                {author.role}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 leading-tight mb-5">
                {author.name}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{author.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {author.expertise.map((e) => (
                  <span key={e} className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                    {e}
                  </span>
                ))}
              </div>
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:underline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-8">
            Articles by {author.name}
          </h2>
          {byThisAuthor.length === 0 ? (
            <p className="text-gray-600">No articles yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byThisAuthor.map((item) => (
                <ArticleCard
                  key={`${item.type}-${item.slug}`}
                  href={`/${item.type === 'case-studies' ? 'case-studies' : item.type}/${item.slug}`}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  date={item.date}
                  readingTime={item.readingTime}
                  author={item.author}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
