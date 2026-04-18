import Link from 'next/link'
import { formatDate } from '@/lib/format'

interface ArticleCardProps {
  href: string
  title: string
  description: string
  category: string
  date: string
  readingTime: string
  author?: string
  image?: string
  featured?: boolean
  variant?: 'default' | 'compact' | 'hero'
}

export default function ArticleCard({
  href,
  title,
  description,
  category,
  date,
  readingTime,
  author,
  image,
  featured,
  variant = 'default',
}: ArticleCardProps) {
  if (variant === 'hero') {
    return (
      <Link
        href={href}
        className="group relative block rounded-3xl overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-blue text-white aspect-[16/10] md:aspect-[21/9]"
      >
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-orange rounded-full blur-3xl" />
        </div>
        <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
          <div className="flex items-center gap-3 mb-5">
            {featured && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-sm border border-white/20">
                Featured
              </span>
            )}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan/90 text-primary-900">
              {category}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4 max-w-3xl group-hover:text-accent-cyan transition-colors">
            {title}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mb-6">{description}</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            {author && <span className="font-medium">{author}</span>}
            {author && <span className="text-white/40">·</span>}
            <span>{formatDate(date)}</span>
            <span className="text-white/40">·</span>
            <span>{readingTime}</span>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className="group flex gap-5 py-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 -mx-4 px-4 rounded-lg transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs mb-2">
            <span className="font-semibold text-accent-blue uppercase tracking-wide">{category}</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-500">{readingTime}</span>
          </div>
          <h3 className="font-semibold text-gray-900 group-hover:text-accent-blue transition-colors leading-snug">
            {title}
          </h3>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="group card card-3d block !p-0 overflow-hidden bg-white"
    >
      <div
        className="h-44 relative overflow-hidden"
        style={{
          background: image
            ? `url(${image}) center/cover`
            : 'linear-gradient(135deg, #1B2A4A 0%, #FF6B2B 50%, #F5A623 100%)',
        }}
      >
        {!image && (
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-amber rounded-full blur-3xl" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-primary-900 backdrop-blur-sm shadow-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 leading-snug tracking-tight mb-3 group-hover:text-accent-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          {author && <span className="font-medium text-gray-700">{author}</span>}
          {author && <span className="text-gray-300">·</span>}
          <span>{formatDate(date)}</span>
          <span className="text-gray-300">·</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </Link>
  )
}
