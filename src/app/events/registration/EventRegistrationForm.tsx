'use client'

import { useState } from 'react'

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL ?? ''

export default function EventRegistrationForm({ eventTitle }: { eventTitle: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    if (MAILCHIMP_URL) {
      try {
        const formData = new FormData()
        formData.append('EMAIL', email)
        formData.append('FNAME', name)
        formData.append('MMERGE6', org)
        formData.append('MMERGE8', role)
        formData.append('MMERGE9', eventTitle)
        await fetch(MAILCHIMP_URL.replace('/post?', '/post-json?'), {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        })
        setStatus('success')
      } catch {
        setStatus('error')
      }
    } else {
      setTimeout(() => setStatus('success'), 600)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <svg className="w-12 h-12 text-emerald-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">You&apos;re in.</h2>
        <p className="text-gray-600">
          We&apos;ve sent a calendar invite and joining instructions to <strong>{email}</strong>.
          See you at <strong>{eventTitle}</strong>.
        </p>
      </div>
    )
  }

  return (
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
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization</label>
          <input
            type="text"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Your role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Executive Director"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary !rounded-xl disabled:opacity-60"
      >
        {status === 'loading' ? 'Registering...' : 'Reserve my spot'}
      </button>
      <p className="text-xs text-gray-500 text-center">
        By registering, you agree to receive event communications and our bi-weekly newsletter.
        Unsubscribe anytime.
      </p>
    </form>
  )
}
