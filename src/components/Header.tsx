'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import SearchModal from './SearchModal'

interface NavItem {
  name: string
  href: string
  children?: { name: string; href: string; description?: string }[]
}

const navigation: NavItem[] = [
  {
    name: 'Products',
    href: '/services',
    children: [
      { name: 'Raffle Management', href: '/services', description: 'Our flagship consulting practice — 50/50, Catch the Ace, prize raffles' },
      { name: 'Fund-Raise', href: '/fund-raise', description: 'Fundraising intelligence platform for RE NXT foundations' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: '50/50 Raffle Management', href: '/services/5050-management', description: 'Flagship program management' },
      { name: 'Catch the Ace', href: '/services/catch-the-ace', description: 'Progressive weekly raffles' },
      { name: 'Prize Raffles', href: '/services/prize-raffle', description: 'Vehicle, home & experience raffles' },
      { name: 'Strategic Consulting', href: '/services/consulting', description: 'Audits & assessments' },
      { name: 'Our Process', href: '/process', description: 'How we work with clients' },
    ],
  },
  {
    name: 'Insights',
    href: '/insights',
    children: [
      { name: 'Blog', href: '/blog', description: 'Practical playbooks' },
      { name: 'Research & Reports', href: '/insights', description: 'Industry analysis' },
      { name: 'Case Studies', href: '/case-studies', description: 'Real results, real charities' },
      { name: 'Resources', href: '/resources', description: 'Checklists, guides, tools' },
      { name: 'ROI Calculator', href: '/resources/roi-calculator', description: 'Interactive revenue modeling' },
      { name: 'Events & Webinars', href: '/events', description: 'Upcoming + past sessions' },
      { name: 'Glossary', href: '/glossary', description: 'Charitable gaming terms' },
    ],
  },
  {
    name: 'Company',
    href: '/team',
    children: [
      { name: 'Team', href: '/team', description: 'Meet our team' },
      { name: 'Clients', href: '/clients', description: 'Who we work with' },
      { name: 'Testimonials', href: '/testimonials', description: 'What clients say' },
      { name: 'Press & Media', href: '/press', description: 'In the news' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'FAQ', href: '/faq', description: 'Common questions' },
    ],
  },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const openSearch = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
  }

  return (
    <>
      <SearchModal />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10" ref={menuRef}>
          <div className="flex items-center justify-between py-5">
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logos/launchpad-horizontal-color.png"
                alt="Launchpad Solutions"
                className="h-10 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="relative">
                    <button
                      className="nav-link flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenMenu(openMenu === item.name ? null : item.name)
                      }}
                      onMouseEnter={() => setOpenMenu(item.name)}
                    >
                      {item.name}
                      <svg className={`w-4 h-4 transition-transform ${openMenu === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMenu === item.name && (
                      <div
                        className="absolute left-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3"
                        onMouseLeave={() => setOpenMenu(null)}
                      >
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                            onClick={() => setOpenMenu(null)}
                          >
                            <div className="font-semibold text-primary-900 text-sm">{c.name}</div>
                            {c.description && (
                              <div className="text-xs text-gray-500 mt-0.5">{c.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.name} href={item.href} className="nav-link">
                    {item.name}
                  </Link>
                ),
              )}

              <button
                type="button"
                onClick={openSearch}
                aria-label="Search"
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <kbd className="px-1.5 py-0.5 rounded bg-gray-100 font-mono text-xs">⌘K</kbd>
              </button>

              <Link
                href="/#contact"
                className="btn-primary !px-6 !py-2.5 !rounded-full"
              >
                Get Started
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={openSearch}
                aria-label="Search"
                className="p-2 text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                type="button"
                className="p-2 text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 max-h-[calc(100vh-88px)] overflow-y-auto">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block font-semibold text-primary-900 py-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-3 border-l-2 border-gray-100 pl-3 mb-2 space-y-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block text-sm text-gray-600 py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/#contact"
                  className="btn-primary text-center !px-6 !py-2.5 !rounded-full mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
