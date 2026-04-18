import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type ContentType = 'blog' | 'insights' | 'case-studies'

export interface ContentMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  image?: string
  featured?: boolean
  readingTime: string
  // case-study specific
  client?: string
  result?: string
  location?: string
}

export interface ContentItem extends ContentMeta {
  content: string
  type: ContentType
}

const CONTENT_ROOT = path.join(process.cwd(), 'content')

function contentDir(type: ContentType): string {
  return path.join(CONTENT_ROOT, type)
}

export function getAllSlugs(type: ContentType): string[] {
  const dir = contentDir(type)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => file.replace(/\.mdx?$/, ''))
}

export function getItemBySlug(type: ContentType, slug: string): ContentItem | null {
  const dir = contentDir(type)
  const mdx = path.join(dir, `${slug}.mdx`)
  const md = path.join(dir, `${slug}.md`)
  const file = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null
  if (!file) return null

  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? new Date().toISOString(),
    author: data.author ?? 'Launchpad Solutions',
    category: data.category ?? 'General',
    tags: data.tags ?? [],
    image: data.image,
    featured: data.featured ?? false,
    readingTime: stats.text,
    client: data.client,
    result: data.result,
    location: data.location,
    content,
    type,
  }
}

export function getAllItems(type: ContentType): ContentItem[] {
  return getAllSlugs(type)
    .map((slug) => getItemBySlug(type, slug))
    .filter((x): x is ContentItem => x !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllCategories(type: ContentType): string[] {
  const items = getAllItems(type)
  const set = new Set(items.map((i) => i.category).filter(Boolean))
  return Array.from(set).sort()
}

export function getAllTags(type: ContentType): string[] {
  const items = getAllItems(type)
  const set = new Set<string>()
  items.forEach((i) => i.tags.forEach((t) => set.add(t)))
  return Array.from(set).sort()
}

export function getRelatedItems(type: ContentType, slug: string, limit = 3): ContentItem[] {
  const current = getItemBySlug(type, slug)
  if (!current) return []
  const all = getAllItems(type).filter((i) => i.slug !== slug)

  const scored = all.map((item) => {
    let score = 0
    if (item.category === current.category) score += 3
    current.tags.forEach((t) => {
      if (item.tags.includes(t)) score += 1
    })
    return { item, score }
  })

  return scored
    .sort((a, b) => b.score - a.score || new Date(b.item.date).getTime() - new Date(a.item.date).getTime())
    .slice(0, limit)
    .map((s) => s.item)
}

export function getFeaturedItem(type: ContentType): ContentItem | null {
  const items = getAllItems(type)
  return items.find((i) => i.featured) ?? items[0] ?? null
}

export function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
