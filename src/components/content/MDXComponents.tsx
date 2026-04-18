import Link from 'next/link'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'

function Callout({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'success' | 'warning' }) {
  const styles = {
    info: 'bg-blue-50 border-blue-400 text-blue-900',
    success: 'bg-emerald-50 border-emerald-400 text-emerald-900',
    warning: 'bg-amber-50 border-amber-400 text-amber-900',
  }[type]
  return (
    <aside className={`not-prose my-8 border-l-4 rounded-r-lg p-5 ${styles}`}>
      <div className="font-medium leading-relaxed">{children}</div>
    </aside>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="not-prose inline-flex flex-col border-l-4 border-accent-blue pl-4 my-6">
      <span className="text-4xl font-bold gradient-text">{value}</span>
      <span className="text-sm text-gray-600 font-medium mt-1">{label}</span>
    </div>
  )
}

function StatGrid({ children }: { children: React.ReactNode }) {
  return <div className="not-prose my-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">{children}</div>
}

function PullQuote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <blockquote className="not-prose my-10 relative pl-8 border-l-4 border-accent-cyan">
      <p className="text-2xl md:text-3xl font-semibold text-primary-900 leading-snug tracking-tight">
        &ldquo;{children}&rdquo;
      </p>
      {cite && <footer className="mt-3 text-sm text-gray-500 font-medium">— {cite}</footer>}
    </blockquote>
  )
}

function CTABanner({
  title,
  description,
  href = '/#contact',
  label = 'Book a Consultation',
}: {
  title: string
  description?: string
  href?: string
  label?: string
}) {
  return (
    <div className="not-prose my-12 rounded-2xl bg-gradient-brand p-8 md:p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-amber rounded-full blur-3xl" />
      </div>
      <div className="relative">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        {description && <p className="text-white/80 mb-6 max-w-2xl">{description}</p>}
        <Link
          href={href}
          className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors"
        >
          {label}
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function KeyTakeaways({
  items,
  children,
}: {
  items?: string[]
  children?: React.ReactNode
}) {
  const safeItems = Array.isArray(items) ? items : []
  return (
    <div className="not-prose my-10 rounded-2xl border-2 border-gray-100 p-6 md:p-8 bg-gradient-subtle">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
        </svg>
        <h3 className="font-bold text-primary-900 tracking-tight">Key Takeaways</h3>
      </div>
      {safeItems.length > 0 ? (
        <ul className="space-y-2">
          {safeItems.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
              <span className="text-accent-blue mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-700 space-y-2 [&>ul]:space-y-2 [&_li]:flex [&_li]:gap-3 [&_li]:leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export const mdxComponents: MDXRemoteProps['components'] = {
  a: ({ href = '', children, ...rest }) => {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} {...(rest as Record<string, unknown>)}>
        {children}
      </Link>
    )
  },
  Callout,
  Stat,
  StatGrid,
  PullQuote,
  CTABanner,
  KeyTakeaways,
}
