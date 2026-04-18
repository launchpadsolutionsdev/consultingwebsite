import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ArticleLayout from '@/components/content/ArticleLayout'
import { getAllSlugs, getItemBySlug } from '@/lib/content'

interface Params {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs('insights').map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const item = getItemBySlug('insights', params.slug)
  if (!item) return { title: 'Not Found' }
  const ogParams = new URLSearchParams({
    title: item.title,
    category: item.category,
    author: item.author,
    type: 'insights',
  })
  const ogImage = `/api/og?${ogParams.toString()}`
  return {
    title: `${item.title} | Launchpad Insights`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      type: 'article',
      publishedTime: item.date,
      authors: [item.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: item.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.description,
      images: [ogImage],
    },
  }
}

export default function InsightArticle({ params }: Params) {
  const item = getItemBySlug('insights', params.slug)
  if (!item) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.description,
    datePublished: item.date,
    author: { '@type': 'Person', name: item.author },
    publisher: {
      '@type': 'Organization',
      name: 'Launchpad Solutions',
      logo: { '@type': 'ImageObject', url: '/launchpad-logo-full.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `/insights/${item.slug}` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleLayout item={item} type="insights" basePath="/insights" hubLabel="Insights" />
    </>
  )
}
