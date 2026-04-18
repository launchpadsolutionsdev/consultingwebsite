'use client'

import { useState } from 'react'
import ArticleCard from './ArticleCard'
import type { ContentItem } from '@/lib/content'
// NOTE: only the type is imported; Next.js tree-shakes the fs-using exports.

interface Props {
  items: ContentItem[]
  categories: string[]
  basePath: string
}

export default function TagFilter({ items, categories, basePath }: Props) {
  const [active, setActive] = useState<string>('All')
  const [query, setQuery] = useState('')

  const filtered = items.filter((item) => {
    const matchesCategory = active === 'All' || item.category === active
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    return matchesCategory && matchesQuery
  })

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
        <div className="flex flex-wrap gap-2">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-primary-900 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-accent-blue hover:text-accent-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative lg:w-72">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-all"
          />
          <svg
            className="absolute left-3.5 top-3 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="font-medium mb-1">No articles match your filters.</p>
          <p className="text-sm">Try a different category or search term.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <ArticleCard
              key={item.slug}
              href={`${basePath}/${item.slug}`}
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
    </>
  )
}
