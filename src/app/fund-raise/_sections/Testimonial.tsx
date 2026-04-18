export default function Testimonial() {
  return (
    <section
      className="py-20 relative overflow-hidden border-t"
      style={{ background: '#FFFFFF', borderColor: '#E5E7EB' }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-20 left-1/3 w-[32rem] h-[32rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(25,96,249,0.07) 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <svg
          aria-hidden
          className="mb-6"
          width="44"
          height="36"
          viewBox="0 0 48 40"
          fill="none"
        >
          <path
            d="M0 40V24C0 10.7 8.3 2 20 0L22 6C14.7 8 10 12.7 10 20h10v20H0zm26 0V24C26 10.7 34.3 2 46 0l2 6c-7.3 2-12 6.7-12 14h10v20H26z"
            fill="url(#fr-quote-grad-light)"
          />
          <defs>
            <linearGradient
              id="fr-quote-grad-light"
              x1="0"
              y1="0"
              x2="48"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1960F9" />
              <stop offset="1" stopColor="#3434D6" />
            </linearGradient>
          </defs>
        </svg>

        <blockquote
          className="text-xl md:text-2xl lg:text-[26px] font-medium leading-[1.45] tracking-tight mb-10"
          style={{ color: '#1A223D' }}
        >
          We&apos;ve spent years layering tools on top of Raiser&apos;s Edge to try to get
          the insights we needed — separate reporting platforms, segmentation tools, AI
          writing assistants. Fund-Raise is the first product that pulls all of that
          together in a way that actually works for a fundraising team. Our staff can
          analyze data in seconds through the dashboards or conversational AI, spot
          anomalies before they become problems, and draft communications in a fraction of
          the time. It&apos;s quietly replaced several line items in our software budget,
          and honestly,{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #1960F9, #3434D6)' }}
          >
            it&apos;s become the tool our team reaches for first.
          </span>
        </blockquote>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-4">
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #1960F9, #3434D6)' }}
            >
              SG
            </span>
            <div>
              <div className="font-semibold" style={{ color: '#1A223D' }}>
                Shelley Graham
              </div>
              <div className="text-sm" style={{ color: '#6E7180' }}>
                Senior Director of Philanthropy
              </div>
            </div>
          </div>

          <div
            className="hidden sm:block h-10 w-px"
            style={{ background: '#E5E7EB' }}
            aria-hidden
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logos/tbrhsf-logo.png"
            alt="Thunder Bay Regional Health Sciences Foundation"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </section>
  )
}
