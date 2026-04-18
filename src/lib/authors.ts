export interface Author {
  slug: string
  name: string
  role: string
  bio: string
  expertise: string[]
  image?: string
  linkedin?: string
  twitter?: string
}

export const AUTHORS: Author[] = [
  {
    slug: 'torin-gunnell',
    name: 'Torin Gunnell',
    role: 'Founder & CEO',
    bio: 'Torin founded Launchpad Solutions after building and operating some of the largest electronic 50/50 raffle programs in North America, including the record-breaking Thunder Bay Regional Health Sciences Foundation program. He has helped charities raise over $180M in cumulative ticket revenue over his career. He writes about operational rigor, supporter psychology, and what it takes to build raffle programs that compound year over year.',
    expertise: ['Program design', '50/50 + Catch the Ace operations', 'Regulatory compliance', 'Team leadership'],
    image: '/images/Torin-Glenn-Cass-SMALL.jpg',
    linkedin: '#',
  },
  {
    slug: 'launchpad-research',
    name: 'Launchpad Research',
    role: 'Research Team',
    bio: 'Collective bylined work from the Launchpad research team. Covers industry benchmarks, quarterly pulse checks, and jurisdictional analysis \u2014 drawing on anonymized data from across our client portfolio plus publicly available regulatory and market information.',
    expertise: ['Market research', 'Regulatory analysis', 'Industry benchmarking', 'Data modeling'],
  },
  {
    slug: 'launchpad-solutions',
    name: 'Launchpad Solutions',
    role: 'Team Byline',
    bio: 'Shared byline used when content is written collaboratively across the Launchpad team. Typically case studies, client profiles, and cross-functional playbooks.',
    expertise: ['Case studies', 'Client profiles', 'Cross-functional playbooks'],
  },
]

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug)
}

export function getAuthorByName(name: string): Author | undefined {
  return AUTHORS.find((a) => a.name.toLowerCase() === name.toLowerCase())
}

export function authorSlugFromName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}
