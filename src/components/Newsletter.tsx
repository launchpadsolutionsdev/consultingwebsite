'use client'

import { useState } from 'react'

interface Props {
  variant?: 'inline' | 'footer' | 'hero'
  title?: string
  description?: string
}

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL ?? ''

export default function Newsletter({
  variant = 'inline',
  title = 'The Launchpad Briefing',
  description = 'Bi-weekly insights on charitable gaming, raffle strategy, and what the industry\u2019s biggest 50/50s are doing differently. No fluff.',
}: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    setError('')

    if (MAILCHIMP_URL) {
      // Mailchimp endpoint form submission via hidden iframe pattern.
      // The endpoint URL is configured via NEXT_PUBLIC_MAILCHIMP_URL env.
      try {
        const formData = new FormData()
        formData.append('EMAIL', email)
        await fetch(MAILCHIMP_URL.replace('/post?', '/post-json?'), {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        })
        setStatus('success')
        setEmail('')
      } catch {
        setStatus('error')
        setError('Something went wrong. Please try again.')
      }
    } else {
      // No Mailchimp URL configured yet \u2014 optimistic UX.
      setTimeout(() => {
        setStatus('success')
        setEmail('')
      }, 600)
    }
  }

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@organization.org"
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-5 py-2.5 rounded-lg bg-primary-900 text-white font-semibold text-sm hover:bg-primary-800 disabled:opacity-60 transition-colors"
        >
          {status === 'loading' ? '...' : status === 'success' ? 'Thanks!' : 'Subscribe'}
        </button>
      </form>
    )
  }

  if (variant === 'hero') {
    return (
      <div className="max-w-xl">
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@organization.org"
            className="flex-1 px-4 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 rounded-full bg-accent-cyan text-primary-900 font-semibold hover:bg-white disabled:opacity-60 transition-colors whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Welcome aboard ✓' : 'Subscribe'}
          </button>
        </form>
        {status === 'error' && <p className="text-red-300 text-sm mt-2">{error}</p>}
      </div>
    )
  }

  // inline
  return (
    <div className="not-prose rounded-3xl border-2 border-gray-100 bg-gradient-subtle p-8 md:p-10">
      <div className="flex items-center gap-2 text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Newsletter
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-xl">{description}</p>
      {status === 'success' ? (
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 text-emerald-800 font-medium text-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Thanks for subscribing — look for our next briefing soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@organization.org"
            className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary !px-6 !py-3 !rounded-full disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-red-600 text-sm mt-2">{error}</p>}
      <p className="text-xs text-gray-500 mt-4">
        We respect your inbox. Unsubscribe anytime. Read our{' '}
        <a href="/privacy" className="underline hover:text-accent-blue">
          privacy policy
        </a>
        .
      </p>
    </div>
  )
}
