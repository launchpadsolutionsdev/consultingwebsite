export default function Testimonial() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: '#0B1224' }}
    >
      <div className="absolute inset-0 opacity-60 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-40 left-1/3 w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(25,96,249,0.25) 0%, transparent 65%)' }}
        />
        <div
          className="absolute -bottom-40 right-1/4 w-[32rem] h-[32rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(18,222,255,0.15) 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <svg
          aria-hidden
          className="mb-6"
          width="48"
          height="40"
          viewBox="0 0 48 40"
          fill="none"
        >
          <path
            d="M0 40V24C0 10.7 8.3 2 20 0L22 6C14.7 8 10 12.7 10 20h10v20H0zm26 0V24C26 10.7 34.3 2 46 0l2 6c-7.3 2-12 6.7-12 14h10v20H26z"
            fill="url(#fr-quote-grad)"
          />
          <defs>
            <linearGradient
              id="fr-quote-grad"
              x1="0"
              y1="0"
              x2="48"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#12DEFF" />
              <stop offset="1" stopColor="#1960F9" />
            </linearGradient>
          </defs>
        </svg>

        <blockquote className="text-2xl md:text-3xl lg:text-[32px] font-medium leading-[1.35] text-white tracking-tight mb-10">
          For the first time, our team can look up any donor, see their full history, and
          know exactly what to ask — without waiting on a report from someone else.{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #12DEFF, #1960F9)' }}
          >
            Fund-Raise gave us control of our data.
          </span>
        </blockquote>

        <div className="flex items-center gap-4">
          <span
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ring-2"
            style={{
              background: 'linear-gradient(135deg, #1960F9, #3434D6)',
              ['--tw-ring-color' as string]: '#0B1224',
            }}
          >
            SG
          </span>
          <div>
            <div className="font-semibold text-white">Shelley Graham</div>
            <div className="text-sm text-white/60">
              Senior Director of Philanthropy · Thunder Bay Regional Health Sciences Foundation
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
