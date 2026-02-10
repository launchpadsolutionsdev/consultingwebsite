'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

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
    <div ref={animationRef}>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="max-w-2xl lg:flex-1">
              <h1 className="text-[38px] md:text-[48px] lg:text-[60px] font-bold tracking-tight leading-[1.1] mb-6 animate-reveal">
                <span className="text-[#0A2540]">Fundraising infrastructure to </span>
                <span className="gradient-text">grow your impact.</span>
                {' '}
                <span className="text-[#425466]">
                  Experts in raffle management and charitable gaming solutions, trusted to run high-performing programs from start to finish.
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
                <Link href="/contact" className="btn-primary text-base inline-flex items-center gap-2 group">
                  Get started
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-secondary text-base inline-flex items-center gap-2">
                  Explore Services
                </Link>
              </div>

              {/* Testimonial quote */}
              <div className="max-w-xl animate-reveal" style={{ animationDelay: '0.4s' }}>
                <p className="text-[#425466] text-base leading-relaxed italic">
                  &ldquo;Launchpad Solutions doesn&rsquo;t just advise &mdash; they deliver. Their expertise has been instrumental in making our 50/50 one of the most successful hospital lotteries in Canada.&rdquo;
                </p>
                <p className="text-[#0A2540] text-sm font-semibold mt-3">
                  &mdash;Glenn Craig, President &amp; CEO, Thunder Bay Regional Health Sciences Foundation
                </p>
              </div>
            </div>

            {/* Hero image */}
            <div className="lg:flex-1 w-full max-w-md lg:max-w-none animate-reveal" style={{ animationDelay: '0.3s' }}>
              <Image
                src="/images/nat-clem-hero-placement.jpg"
                alt="Natalie & Clem Bigras holding their $6,436,355 Thunder Bay 50/50 grand prize cheque"
                width={600}
                height={750}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted-by logo bar */}
      <section className="border-t border-b py-8" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 grayscale opacity-70">
            <Image src="/images/TB5050 Logo Testemonial.png" alt="Thunder Bay 50/50" width={120} height={48} className="h-10 w-auto object-contain" />
            <Image src="/images/Rotary House Lottery Testemonial.png" alt="Fort William Rotary House Lottery" width={120} height={48} className="h-10 w-auto object-contain" />
            <Image src="/images/Thunder Bay Catch The Ace Logo Testemonial.png" alt="Thunder Bay Catch The Ace Lottery" width={120} height={48} className="h-10 w-auto object-contain" />
            <Image src="/images/CFAC Jeep Raffle Logo Tesetmonial.png" alt="Cruising For a Cure" width={120} height={48} className="h-10 w-auto object-contain" />
            <Image src="/images/J&J.png" alt="J&J Raffle" width={120} height={48} className="h-10 w-auto object-contain" />
          </div>
        </div>
      </section>

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
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--brand-start)' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fundraising?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute consultation and discover how Launchpad Solutions
            can help you reach your fundraising goals.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
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
                <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
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
