import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ArticleLayout from '@/components/content/ArticleLayout'
import { getAllSlugs, getItemBySlug } from '@/lib/content'

interface Params {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs('blog').map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const item = getItemBySlug('blog', params.slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.title} | Launchpad Solutions`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      type: 'article',
      publishedTime: item.date,
      authors: [item.author],
    },
  }
}

export default function BlogArticle({ params }: Params) {
  const item = getItemBySlug('blog', params.slug)
  if (!item) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: item.title,
    description: item.description,
    datePublished: item.date,
    author: { '@type': 'Person', name: item.author },
    publisher: {
      '@type': 'Organization',
      name: 'Launchpad Solutions',
      logo: { '@type': 'ImageObject', url: '/launchpad-logo-full.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `/blog/${item.slug}` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleLayout item={item} type="blog" basePath="/blog" hubLabel="Blog" />
    </>
  )
}
