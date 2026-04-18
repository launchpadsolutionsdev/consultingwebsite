'use client'

import { useEffect, useState } from 'react'

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL ?? ''

interface Props {
  resourceTitle: string
  resourceSlug: string
  children: React.ReactNode
}

const UNLOCK_KEY = 'launchpad-resources-unlocked'

export default function ResourceGate({ resourceTitle, resourceSlug, children }: Props) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  useEffect(() => {
    // Check localStorage for previously unlocked resources
    try {
      const stored = localStorage.getItem(UNLOCK_KEY)
      if (stored === 'true') {
        setUnlocked(true)
        return
      }
    } catch {
      // localStorage unavailable (SSR or disabled)
    }
    setUnlocked(false)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    if (MAILCHIMP_URL) {
      try {
        const formData = new FormData()
        formData.append('EMAIL', email)
        formData.append('FNAME', name)
        formData.append('MMERGE6', org)
        formData.append('MMERGE7', resourceTitle)
        await fetch(MAILCHIMP_URL.replace('/post?', '/post-json?'), {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        })
      } catch {
        setStatus('error')
        return
      }
    }

    try {
      localStorage.setItem(UNLOCK_KEY, 'true')
    } catch {
      // ignore
    }
    setUnlocked(true)
    setStatus('idle')
    // Smoothly scroll down to content after a beat
    setTimeout(() => {
      window.scrollBy({ top: 200, behavior: 'smooth' })
    }, 100)
  }

  if (unlocked === null) {
    // Server/client mismatch prevention — brief loading state
    return (
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center text-gray-400">
          Loading...
        </div>
      </section>
    )
  }

  if (!unlocked) {
    return (
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Free · Email required
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3 tracking-tight">
              Get instant access to <em className="not-italic gradient-text">{resourceTitle}</em>
            </h2>
            <p className="text-gray-600 mb-7">
              Enter your email to unlock the full resource. You&apos;ll also be added to our
              bi-weekly newsletter — unsubscribe anytime.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization (optional)</label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary !rounded-xl disabled:opacity-60"
                data-resource={resourceSlug}
              >
                {status === 'loading' ? 'Unlocking...' : 'Unlock the resource →'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive occasional emails from Launchpad Solutions.
              </p>
            </form>
          </div>
        </div>
      </section>
    )
  }

  return <>{children}</>
}
