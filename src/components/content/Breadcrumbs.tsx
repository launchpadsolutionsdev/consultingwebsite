import Link from 'next/link'

export interface Crumb {
  name: string
  href?: string
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.href,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <ol className="flex flex-wrap items-center gap-1">
          {crumbs.map((c, i) => (
            <li key={c.name} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-300">/</span>}
              {c.href && i < crumbs.length - 1 ? (
                <Link href={c.href} className="hover:text-accent-blue transition-colors font-medium">
                  {c.name}
                </Link>
              ) : (
                <span className="text-gray-700">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
