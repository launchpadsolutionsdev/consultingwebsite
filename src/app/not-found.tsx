import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 min-h-[70vh] flex items-center bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div className="text-8xl font-bold gradient-text mb-6 leading-none">404</div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight mb-4">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
          The page you&apos;re looking for might have moved, or the link you followed may be
          broken. Here&apos;s where to find what you might have been looking for.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary !rounded-full">
            Home
          </Link>
          <Link href="/blog" className="btn-secondary !rounded-full">
            Blog
          </Link>
          <Link href="/insights" className="btn-secondary !rounded-full">
            Insights
          </Link>
          <Link href="/#contact" className="btn-secondary !rounded-full">
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
