import type { Metadata } from 'next'
import ResourceRequestForm from './ResourceRequestForm'

export const metadata: Metadata = {
  title: 'Request Resource | Launchpad Solutions',
  description: 'Enter your email to receive the resource.',
}

export default function ResourceRequestPage({
  searchParams,
}: {
  searchParams: { title?: string }
}) {
  const title = searchParams.title ?? 'Launchpad Resource'

  return (
    <section className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-gray-100">
          <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
            Request your download
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-gray-600 mb-8">
            Enter your email below and we&apos;ll send the resource to your inbox. You&apos;ll also
            receive our bi-weekly newsletter — you can unsubscribe anytime.
          </p>
          <ResourceRequestForm resourceTitle={title} />
        </div>
      </div>
    </section>
  )
}
