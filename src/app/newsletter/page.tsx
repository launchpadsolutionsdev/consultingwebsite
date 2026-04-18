import type { Metadata } from 'next'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
  title: 'Subscribe | The Launchpad Briefing',
  description:
    'Bi-weekly charitable gaming insights, regulatory updates, and strategic analysis delivered to your inbox.',
}

export default function NewsletterPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
            The Launchpad Briefing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-6">
            The smartest take on charitable gaming, in your inbox.
          </h1>
          <p className="text-lg text-gray-600">
            Bi-weekly research, regulatory updates, and practical playbooks from the team behind
            some of the largest raffle programs in North America. Read by charity executives,
            board members, and platform operators.
          </p>
        </div>

        <Newsletter />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Industry research',
              body: 'Original analysis and benchmarks — not the recycled content you find everywhere else.',
            },
            {
              title: 'Regulatory updates',
              body: 'New state and provincial legislation, AGCO changes, cross-border implications.',
            },
            {
              title: 'Practical playbooks',
              body: 'Specific tactics from our work running charitable gaming programs at scale.',
            },
          ].map((c) => (
            <div key={c.title} className="p-6 bg-white rounded-2xl border border-gray-100">
              <h3 className="font-bold text-primary-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
