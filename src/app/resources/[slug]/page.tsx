import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/content/MDXComponents'
import { RESOURCES, getResourceBySlug } from '@/lib/resources'
import ResourceGate from './ResourceGate'

interface Params {
  params: { slug: string }
}

function readResourceContent(slug: string): string | null {
  const mdx = path.join(process.cwd(), 'content', 'resources', `${slug}.mdx`)
  const md = path.join(process.cwd(), 'content', 'resources', `${slug}.md`)
  const file = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null
  if (!file) return null
  return fs.readFileSync(file, 'utf8')
}

export function generateStaticParams() {
  // Only generate for resources that are gated (no toolHref)
  return RESOURCES.filter((r) => !r.toolHref).map((r) => ({ slug: r.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const r = getResourceBySlug(params.slug)
  if (!r) return { title: 'Not Found' }
  return {
    title: `${r.title} | Launchpad Solutions`,
    description: r.description,
  }
}

export default function ResourcePage({ params }: Params) {
  const resource = getResourceBySlug(params.slug)
  if (!resource || resource.toolHref) notFound()

  const content = readResourceContent(params.slug)
  if (!content) notFound()

  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/resources" className="hover:text-accent-blue transition-colors font-medium">
              Resources
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-700">{resource.type}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue uppercase tracking-wide">
              {resource.type}
            </span>
            <span className="text-sm text-gray-500">{resource.length}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-900 leading-tight mb-6">
            {resource.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">{resource.description}</p>
        </div>
      </section>

      <ResourceGate resourceTitle={resource.title} resourceSlug={resource.slug}>
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          </div>
        </article>
      </ResourceGate>
    </>
  )
}
