import RSS from 'rss'
import { getAllItems } from '@/lib/content'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://launchpadsolutions.ca'

export async function GET() {
  const feed = new RSS({
    title: 'Launchpad Solutions — Blog & Insights',
    description: 'Practical playbooks, market research, and strategic analysis on charitable gaming and raffle management.',
    site_url: BASE_URL,
    feed_url: `${BASE_URL}/feed.xml`,
    language: 'en',
    pubDate: new Date(),
  })

  const blog = getAllItems('blog').map((i) => ({ ...i, path: 'blog' }))
  const insights = getAllItems('insights').map((i) => ({ ...i, path: 'insights' }))

  const all = [...blog, ...insights].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  for (const item of all) {
    feed.item({
      title: item.title,
      description: item.description,
      url: `${BASE_URL}/${item.path}/${item.slug}`,
      author: item.author,
      date: new Date(item.date),
      categories: [item.category, ...item.tags],
    })
  }

  return new Response(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/xml' },
  })
}
