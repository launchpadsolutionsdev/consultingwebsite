import type { MetadataRoute } from 'next'
import { getAllItems } from '@/lib/content'
import { TEAM } from '@/lib/team'
import { RESOURCES } from '@/lib/resources'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://launchpadsolutions.ca'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/fund-raise',
    '/services',
    '/services/5050-management',
    '/services/catch-the-ace',
    '/services/prize-raffle',
    '/services/consulting',
    '/blog',
    '/insights',
    '/case-studies',
    '/team',
    '/process',
    '/resources',
    '/resources/roi-calculator',
    '/events',
    '/faq',
    '/glossary',
    '/press',
    '/clients',
    '/testimonials',
    '/careers',
    '/newsletter',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const contentRoutes = [
    ...getAllItems('blog').map((i) => ({
      url: `${BASE_URL}/blog/${i.slug}`,
      lastModified: new Date(i.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...getAllItems('insights').map((i) => ({
      url: `${BASE_URL}/insights/${i.slug}`,
      lastModified: new Date(i.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...getAllItems('case-studies').map((i) => ({
      url: `${BASE_URL}/case-studies/${i.slug}`,
      lastModified: new Date(i.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...TEAM.map((m) => ({
      url: `${BASE_URL}/team/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...RESOURCES.filter((r) => !r.toolHref).map((r) => ({
      url: `${BASE_URL}/resources/${r.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticRoutes, ...contentRoutes]
}
