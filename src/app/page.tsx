'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const features = [
  {
    icon: '🎯',
    title: 'Strategic Planning',
    description: 'We analyze your goals and create a customized roadmap for fundraising success.',
  },
  {
    icon: '📋',
    title: 'Compliance & Licensing',
    description: 'Navigate complex regulations with confidence. We handle the paperwork so you can focus on your mission.',
  },
  {
    icon: '🚀',
    title: 'Campaign Execution',
    description: 'From ticket sales to winner selection, we manage every detail of your raffle campaign.',
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    description: 'Real-time insights and comprehensive reports to track your fundraising performance.',
  },
]

// Animation hook for scroll reveal
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = ref.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

// Count-up animation component
function CountUpNumber({ start = 1000000, end = 2623980, duration = 2500 }: { start?: number; end?: number; duration?: number }) {
  const [count, setCount] = useState(start)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const startTime = performance.now()
            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              // Easing function for smooth deceleration
              const easeOut = 1 - Math.pow(1 - progress, 3)
              const currentValue = Math.floor(start + (end - start) * easeOut)
              setCount(currentValue)
              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [start, end, duration, hasAnimated])

  return (
    <div ref={ref} className="inline-block">
      ${count.toLocaleString()}+
    </div>
  )
}

const testimonials = [
  {
    quote: "Launchpad Solutions has been instrumental in the success of our Thunder Bay 50/50 and Catch the Ace lotteries. Their deep expertise and hands-on approach have helped us scale responsibly while maintaining trust, transparency, and exceptional performance.",
    author: "Glenn Craig",
    role: "President, Thunder Bay Regional Health Sciences Foundation",
  },
  {
    quote: "Launchpad Solutions gave our House Lottery the structure and confidence we needed to succeed. Their team guided us every step of the way with professionalism and a deep understanding of charitable gaming.",
    author: "Cindy Levanto",
    role: "Fort William Rotary Club of Thunder Bay",
  },
  {
    quote: "Launching the Cruising For a Cure Pink Jeep Raffle with Launchpad Solutions was seamless. Their strategic insight and execution made this partnership both successful and impactful for our community.",
    author: "Michael Comuzzi",
    role: "President, Lakehead Motors Limited",
  },
]

export default function Home() {
  const animationRef = useScrollAnimation()

  return (
    <div className="pt-24" ref={animationRef}>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-reveal">
              <span className="gradient-text animate-shimmer">Unleash Your</span>
              <br />
              <span className="text-white text-glow">Fundraising Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-reveal" style={{ animationDelay: '0.2s' }}>
              Experts in raffle management and charitable gaming solutions, trusted by nonprofits to run high-performing, transparent programs from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-reveal" style={{ animationDelay: '0.4s' }}>
              <Link href="/contact" className="btn-primary text-lg animate-pulse-glow">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="btn-secondary text-lg !bg-white/10 !border-white/30 !text-white hover:!bg-white/20">
                Explore Services
              </Link>
            </div>

            {/* Trusted By Logos - text removed, now part of strip below */}
          </div>
        </div>
        {/* Floating particles */}
        <div className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-pink-400/70 animate-particle" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-pink-400/60 animate-particle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-orange-400/60 animate-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-yellow-400/50 animate-particle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-pink-300/70 animate-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-orange-300/60 animate-particle" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[20%] right-[20%] w-1.5 h-1.5 rounded-full bg-yellow-300/70 animate-particle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[45%] left-[10%] w-2 h-2 rounded-full bg-pink-500/50 animate-particle" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-[20%] right-[15%] w-2.5 h-2.5 rounded-full bg-orange-400/55 animate-particle" style={{ animationDelay: '3.5s' }} />
        <div className="absolute top-[60%] right-[10%] w-1.5 h-1.5 rounded-full bg-yellow-400/60 animate-particle" style={{ animationDelay: '4.5s' }} />
        <div className="absolute bottom-[35%] left-[20%] w-2 h-2 rounded-full bg-pink-300/65 animate-particle" style={{ animationDelay: '5s' }} />
        <div className="absolute top-[35%] left-[40%] w-1.5 h-1.5 rounded-full bg-orange-300/50 animate-particle" style={{ animationDelay: '5.5s' }} />
        <div className="absolute bottom-[45%] right-[25%] w-2 h-2 rounded-full bg-yellow-300/55 animate-particle" style={{ animationDelay: '6s' }} />
        <div className="absolute top-[55%] right-[35%] w-1.5 h-1.5 rounded-full bg-pink-400/45 animate-particle" style={{ animationDelay: '6.5s' }} />
      </section>

      {/* Trusted By Logo Strip */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Left line */}
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-300" />

            <p className="text-gray-400 text-sm font-medium tracking-wide uppercase whitespace-nowrap">Trusted by</p>

            {/* Center line */}
            <div className="hidden md:block w-16 h-px bg-gray-300" />

            {/* Logos */}
            <div className="flex items-center gap-8 md:gap-12">
              <div className="relative h-10 w-32 md:h-12 md:w-36 opacity-80 hover:opacity-100 transition-opacity">
                <Image src="/images/TB5050 Logo Testemonial.png" alt="Thunder Bay 50/50" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-32 md:h-12 md:w-36 opacity-80 hover:opacity-100 transition-opacity">
                <Image src="/images/Thunder Bay Catch The Ace Logo Testemonial.png" alt="Thunder Bay Catch The Ace" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-32 md:h-12 md:w-36 opacity-80 hover:opacity-100 transition-opacity hidden sm:block">
                <Image src="/images/Rotary House Lottery Testemonial.png" alt="Rotary House Lottery" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-32 md:h-12 md:w-36 opacity-80 hover:opacity-100 transition-opacity hidden lg:block">
                <Image src="/images/CFAC Jeep Raffle Logo Tesetmonial.png" alt="CFAC Jeep Raffle" fill className="object-contain" />
              </div>
            </div>

            {/* Right line */}
            <div className="hidden md:block flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-300" />
          </div>
        </div>
      </section>

      {/* Stats Section - Dramatic Count-Up */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-violet-900/50 via-transparent to-amber-600/30" />
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-orange-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-500/20 rounded-full blur-3xl" />
        </div>

        {/* Floating particles */}
        <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-pink-300/60 animate-particle" />
        <div className="absolute top-[25%] right-[15%] w-3 h-3 rounded-full bg-orange-300/50 animate-particle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[20%] left-[20%] w-2 h-2 rounded-full bg-yellow-300/55 animate-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] right-[10%] w-2.5 h-2.5 rounded-full bg-pink-400/50 animate-particle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[30%] right-[25%] w-2 h-2 rounded-full bg-orange-400/45 animate-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-yellow-400/60 animate-particle" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-[15%] right-[35%] w-2 h-2 rounded-full bg-pink-300/55 animate-particle" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[60%] left-[15%] w-1.5 h-1.5 rounded-full bg-orange-300/50 animate-particle" style={{ animationDelay: '3.5s' }} />
        <div className="absolute bottom-[40%] left-[35%] w-2 h-2 rounded-full bg-yellow-300/45 animate-particle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[35%] right-[30%] w-1.5 h-1.5 rounded-full bg-pink-400/55 animate-particle" style={{ animationDelay: '4.5s' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* The big number */}
            <div className="mb-6 animate-on-scroll">
              <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none text-white [text-shadow:_0_4px_20px_rgba(0,0,0,0.2),_0_8px_40px_rgba(0,0,0,0.15)]">
                <CountUpNumber />
              </div>
            </div>

            {/* Subtitle */}
            <div className="animate-on-scroll animate-delay-200">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 tracking-wide">
                raised for our partners
              </p>
            </div>

            {/* Decorative accent */}
            <div className="mt-8 flex justify-center animate-on-scroll animate-delay-300">
              <div className="w-24 h-1.5 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Features Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              End-to-End Raffle Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We can handle every aspect of your charitable gaming campaign,
              so you can focus on what matters most—your mission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className={`card card-3d text-center animate-on-scroll animate-delay-${(index + 1) * 100}`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, proven process to launch your fundraising campaign.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-on-scroll animate-delay-100">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 animate-pulse-glow">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discover</h3>
              <p className="text-gray-600">
                We learn about your organization, goals, and unique needs through a comprehensive consultation.
              </p>
            </div>
            <div className="text-center animate-on-scroll animate-delay-200">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">
                Our experts craft a customized raffle strategy, handling licensing, compliance, and campaign planning.
              </p>
            </div>
            <div className="text-center animate-on-scroll animate-delay-300">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 animate-pulse-glow" style={{ animationDelay: '2s' }}>
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deliver</h3>
              <p className="text-gray-600">
                We execute your campaign flawlessly, providing support every step of the way until the final draw.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fundraising?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute consultation and discover how Launchpad Solutions
            can help you reach your fundraising goals.
          </p>
          <Link href="/contact" className="btn-primary text-lg animate-pulse-glow">
            Get Your Free Consultation
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Organizations Nationwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our clients say about working with Launchpad Solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`card card-3d animate-on-scroll animate-delay-${(index + 1) * 100}`}>
                <svg className="w-8 h-8 text-pink-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
