import type { Metadata } from 'next'
import EventRegistrationForm from './EventRegistrationForm'

export const metadata: Metadata = {
  title: 'Event Registration | Launchpad Solutions',
  description: 'Register for an upcoming Launchpad Solutions webinar or event.',
}

const EVENT_TITLES: Record<string, string> = {
  '2026-playbook': 'The 2026 Charitable Gaming Playbook',
  'catch-the-ace-scale': 'Catch the Ace: From Pilot to Scale',
  'roundtable-q2': 'Raffle Roundtable — Q2 2026',
}

export default function EventRegistrationPage({
  searchParams,
}: {
  searchParams: { event?: string }
}) {
  const key = searchParams.event ?? ''
  const eventTitle = EVENT_TITLES[key] ?? 'Upcoming Event'

  return (
    <section className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-gray-100">
          <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
            Register
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-4">
            {eventTitle}
          </h1>
          <p className="text-gray-600 mb-8">
            Reserve your spot. You&apos;ll receive a calendar invite and joining details immediately.
            We&apos;ll also send a reminder 24 hours before the session.
          </p>
          <EventRegistrationForm eventTitle={eventTitle} />
        </div>
      </div>
    </section>
  )
}
