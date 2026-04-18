import { NextResponse } from 'next/server'
import { getAllItems } from '@/lib/content'
import { TEAM } from '@/lib/team'

export const dynamic = 'force-static'

interface SearchEntry {
  title: string
  description: string
  category: string
  href: string
  type: string
  tags: string[]
}

export async function GET() {
  const entries: SearchEntry[] = []

  for (const type of ['blog', 'insights', 'case-studies'] as const) {
    for (const item of getAllItems(type)) {
      const pathSegment = type === 'case-studies' ? 'case-studies' : type
      entries.push({
        title: item.title,
        description: item.description,
        category: item.category,
        href: `/${pathSegment}/${item.slug}`,
        type: type === 'case-studies' ? 'Case Study' : type === 'insights' ? 'Insight' : 'Blog',
        tags: item.tags,
      })
    }
  }

  // Also index static pages
  const pages = [
    { title: 'Services', description: 'Full-service raffle management — end-to-end.', category: 'Services', href: '/services', type: 'Page' },
    { title: '50/50 Raffle Management', description: 'Flagship program management', category: 'Services', href: '/services/5050-management', type: 'Page' },
    { title: 'Catch the Ace', description: 'Progressive weekly raffles', category: 'Services', href: '/services/catch-the-ace', type: 'Page' },
    { title: 'Prize Raffles', description: 'Vehicle, home, and experience raffles', category: 'Services', href: '/services/prize-raffle', type: 'Page' },
    { title: 'Strategic Consulting', description: 'Audits, feasibility, board-level assessments', category: 'Services', href: '/services/consulting', type: 'Page' },
    { title: 'Team', description: 'Meet the Launchpad team', category: 'Company', href: '/team', type: 'Page' },
    { title: 'Our Process', description: 'How a Launchpad engagement actually works', category: 'Company', href: '/process', type: 'Page' },
    { title: 'Testimonials', description: 'What our clients say', category: 'Company', href: '/testimonials', type: 'Page' },
    { title: 'Careers', description: 'Join Launchpad Solutions', category: 'Company', href: '/careers', type: 'Page' },
    { title: 'Partners', description: 'Ecosystem partners and platforms', category: 'Company', href: '/partners', type: 'Page' },
    { title: 'Clients', description: 'Charities we\u2019ve worked with', category: 'Company', href: '/clients', type: 'Page' },
    { title: 'Press & Media', description: 'News coverage and media mentions', category: 'Company', href: '/press', type: 'Page' },
    { title: 'FAQ', description: 'Frequently asked questions', category: 'Help', href: '/faq', type: 'Page' },
    { title: 'Glossary', description: 'Charitable gaming terms explained', category: 'Help', href: '/glossary', type: 'Page' },
    { title: 'Events & Webinars', description: 'Upcoming and past Launchpad sessions', category: 'Events', href: '/events', type: 'Page' },
    { title: 'Resources', description: 'Playbooks, checklists, and tools', category: 'Resources', href: '/resources', type: 'Page' },
    { title: 'ROI Calculator', description: 'Model raffle revenue and net proceeds', category: 'Resources', href: '/resources/roi-calculator', type: 'Page' },
    { title: 'Newsletter', description: 'The Launchpad Briefing', category: 'Resources', href: '/newsletter', type: 'Page' },
    { title: 'Contact', description: 'Book a free consultation', category: 'Contact', href: '/#contact', type: 'Page' },
  ]
  for (const p of pages) {
    entries.push({ ...p, tags: [] })
  }

  // Index team members
  for (const m of TEAM) {
    entries.push({
      title: m.name,
      description: `${m.role} — ${m.shortBio}`,
      category: m.roleType === 'advisor' ? 'Advisor' : 'Team',
      href: `/team/${m.slug}`,
      type: 'Person',
      tags: m.expertise,
    })
  }

  return NextResponse.json({ entries })
}
