'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Item {
  q: string
  a: string
}
interface Category {
  category: string
  items: Item[]
}

function renderAnswer(a: string) {
  // Very simple inline markdown link rendering for our FAQ answers.
  const parts = a.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (match) {
      const [, text, href] = match
      return (
        <Link key={i} href={href} className="text-accent-blue underline underline-offset-2 hover:text-primary-900">
          {text}
        </Link>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export default function FaqAccordion({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="space-y-12">
      {categories.map((cat) => (
        <div key={cat.category}>
          <h2 className="text-2xl font-bold text-primary-900 mb-5 tracking-tight">{cat.category}</h2>
          <div className="space-y-2">
            {cat.items.map((item, i) => {
              const key = `${cat.category}-${i}`
              const isOpen = open === key
              return (
                <div
                  key={key}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-accent-blue/30 transition-colors"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-semibold text-primary-900">{item.q}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                      {renderAnswer(item.a)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
