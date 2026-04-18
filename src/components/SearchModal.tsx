'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface SearchEntry {
  title: string
  description: string
  category: string
  href: string
  type: string
  tags: string[]
}

let cachedIndex: SearchEntry[] | null = null

function score(entry: SearchEntry, query: string) {
  const q = query.toLowerCase()
  const title = entry.title.toLowerCase()
  const desc = entry.description.toLowerCase()
  const cat = entry.category.toLowerCase()
  const tags = entry.tags.join(' ').toLowerCase()

  if (title.includes(q)) return 100 + (title.startsWith(q) ? 50 : 0)
  if (cat.includes(q)) return 60
  if (tags.includes(q)) return 40
  if (desc.includes(q)) return 20
  return 0
}

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState<SearchEntry[]>([])
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // Hotkey: Cmd/Ctrl + K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Load index when modal opens
  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    if (cachedIndex) {
      setIndex(cachedIndex)
      return
    }
    fetch('/api/search-index')
      .then((r) => r.json())
      .then((data: { entries: SearchEntry[] }) => {
        cachedIndex = data.entries
        setIndex(data.entries)
      })
      .catch(() => setIndex([]))
  }, [open])

  // Reset selection when query changes
  useEffect(() => {
    setSelected(0)
  }, [query])

  const results = query
    ? index
        .map((e) => ({ e, s: score(e, query) }))
        .filter((r) => r.s > 0)
        .sort((a, b) => b.s - a.s)
        .slice(0, 12)
        .map((r) => r.e)
    : index.slice(0, 8)

  // Keyboard navigation in results
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelected((s) => Math.min(s + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelected((s) => Math.max(s - 1, 0))
      } else if (e.key === 'Enter' && results[selected]) {
        window.location.href = results[selected].href
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, results, selected])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, services, resources..."
            className="flex-1 outline-none bg-transparent text-lg text-primary-900 placeholder-gray-400"
          />
          <button
            onClick={() => setOpen(false)}
            className="px-2 py-1 rounded-md bg-gray-100 text-gray-500 text-xs font-semibold"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-5 py-12 text-center text-gray-500">
              <p className="font-medium mb-1">No results for &ldquo;{query}&rdquo;</p>
              <p className="text-sm">Try a different search term.</p>
            </div>
          ) : (
            <ul>
              {results.map((r, i) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setSelected(i)}
                    className={`flex items-start gap-3 px-5 py-3 border-b border-gray-50 last:border-b-0 transition-colors ${
                      selected === i ? 'bg-accent-blue/5' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        selected === i ? 'bg-accent-blue text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {r.type === 'Blog'
                        ? 'B'
                        : r.type === 'Insight'
                        ? 'I'
                        : r.type === 'Case Study'
                        ? 'C'
                        : 'P'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-primary-900 truncate">{r.title}</span>
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {r.category} · {r.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <div className="flex gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-gray-100 font-mono">↑↓</kbd> navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-gray-100 font-mono">↵</kbd> select
            </span>
          </div>
          <span>
            Open anywhere with <kbd className="px-1.5 py-0.5 rounded bg-gray-100 font-mono">⌘K</kbd>
          </span>
        </div>
      </div>
    </div>
  )
}
