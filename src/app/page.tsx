'use client'

import Link from 'next/link'
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
      ${count.toLocaleString()}
    </div>
  )
}

const testimonials = [
  {
    quote: "Launchpad Solutions transformed our annual fundraiser. We raised 3x more than previous years.",
    author: "Sarah Johnson",
    role: "Executive Director, Community Foundation",
  },
  {
    quote: "Their expertise in charitable gaming compliance gave us peace of mind throughout the entire process.",
    author: "Michael Chen",
    role: "Development Manager, Healthcare Nonprofit",
  },
  {
    quote: "The team's attention to detail and proactive communication made all the difference.",
    author: "Emily Rodriguez",
    role: "Fundraising Coordinator, Education Alliance",
  },
]

export default function Home() {
  const animationRef = useScrollAnimation()

  return (
    <div className="pt-32" ref={animationRef}>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-reveal">
              <span className="gradient-text">Unleash Your</span>
              <br />
              <span className="text-white">Fundraising Potential</span>
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
          </div>
        </div>
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-xl animate-float" />
        <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500/10 to-pink-500/10 blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Stats Section - Dramatic Count-Up */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-200/30 via-orange-200/30 to-yellow-200/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* The big number */}
            <div className="mb-6 animate-on-scroll">
              <div className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold tracking-tight leading-none">
                <span className="gradient-text animate-gradient">
                  <CountUpNumber />
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <div className="animate-on-scroll animate-delay-200">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 tracking-wide">
                raised for our partners
              </p>
            </div>

            {/* Decorative accent */}
            <div className="mt-8 flex justify-center animate-on-scroll animate-delay-300">
              <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500" />
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
              We handle every aspect of your charitable gaming campaign,
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
    </div>
  )
}
