'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export default function TableOfContents({ minHeadings = 4 }: { minHeadings?: number }) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    // Find all h2 and h3 inside .prose (the article body)
    const proseEls = document.querySelectorAll('.prose h2, .prose h3')
    const collected: Heading[] = []
    proseEls.forEach((el) => {
      const h = el as HTMLHeadingElement
      const text = h.textContent?.trim() ?? ''
      if (!text) return
      if (!h.id) h.id = slugify(text)
      collected.push({
        id: h.id,
        text,
        level: h.tagName === 'H2' ? 2 : 3,
      })
    })

    if (collected.length < minHeadings) {
      setHeadings([])
      return
    }
    setHeadings(collected)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 },
    )

    proseEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [minHeadings])

  if (headings.length === 0) return null

  return (
    <nav className="hidden xl:block fixed top-40 right-8 w-64 max-h-[calc(100vh-12rem)] overflow-y-auto text-sm">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
        On this page
      </div>
      <ul className="space-y-1.5 border-l border-gray-200">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'ml-3' : ''}>
            <a
              href={`#${h.id}`}
              className={`block pl-3 -ml-px border-l leading-snug py-0.5 transition-colors ${
                active === h.id
                  ? 'border-accent-blue text-accent-blue font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
