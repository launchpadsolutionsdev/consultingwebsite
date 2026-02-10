'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const articles = [
  {
    outlet: 'CTV News',
    logo: '/images/ctv-logo.jpg',
    headline: 'Timmins man wins $7.7M in Thunder Bay hospital\'s 50/50 draw',
    excerpt: 'A Timmins man is $7.7 million richer after winning the Thunder Bay Regional Health Sciences Foundation\'s 50/50 draw. The life-changing prize marks another record-breaking moment for the lottery program that has become the largest hospital 50/50 in Canada.',
    image: '/images/ctv-timmins-man.jpg',
    imageAlt: 'Timmins man wins $7.7M Thunder Bay 50/50',
    imagePosition: 'top' as const,
    url: 'https://www.ctvnews.ca/northern-ontario/article/timmins-man-wins-77m-in-thunder-bay-hospitals-5050-draw/',
  },
  {
    outlet: 'CBC News',
    logo: '/images/cbc-logo.jpg',
    headline: 'Thunder Bay hospital foundation\'s 50/50 draw breaks records, surpasses $6.4 million',
    excerpt: 'A couple from the Greater Sudbury community of Hanmer is now $6.4 million richer, after winning the 2024 Thunder Bay Regional Health Sciences Foundation\'s 50/50 draw.',
    image: '/images/cbc-nat-clem.jpg',
    imageAlt: 'Natalie and Clem Bigras with their $6.4 million cheque',
    imagePosition: 'center' as const,
    url: 'https://www.cbc.ca/news/canada/thunder-bay/thunder-bay-hospital-foundation-record-breaking-draw-1.7422793',
  },
  {
    outlet: 'TB Newswatch',
    logo: '/images/tbnewswatch-logo.jpg',
    headline: 'Nolalu Man Wins $2.3M 50/50 Grand Prize',
    excerpt: 'A Nolalu resident is celebrating after winning the Thunder Bay Regional Health Sciences Foundation\'s 50/50 Grand Prize of $2.3 million.',
    image: '/images/torin-cass-story.jpg',
    imageAlt: 'Nolalu man wins $2.3M 50/50 Grand Prize',
    imagePosition: 'top' as const,
    url: 'https://www.tbnewswatch.com/local-news/nolalu-man-wins-23m-5050-grand-prize-11816107',
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


const contactServices = [
  'Lift-Off Package',
  'Mission Control',
  'Custom Support',
  'Free Consultation',
  'Other',
]

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-20 bg-[#0A2540] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column — copy + contact info */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight text-white mb-6">
              Ready to unleash your{' '}
              <span className="gradient-text">fundraising potential?</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              Book a free 30-minute consultation and discover how Launchpad Solutions can help your organization build a high-performing raffle program&mdash;without having to figure it all out on your own.
            </p>

            {/* Contact methods */}
            <div className="space-y-6 mb-10">
              <a href="mailto:hello@launchpadsolutions.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-[#12D8FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium mb-0.5">Email Us</p>
                  <p className="text-[#12D8FA] text-sm group-hover:underline">hello@launchpadsolutions.com</p>
                </div>
              </a>

              <a href="tel:+15551234567" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-[#12D8FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium mb-0.5">Call Us</p>
                  <p className="text-[#12D8FA] text-sm group-hover:underline">(555) 123-4567</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#12D8FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium mb-0.5">Location</p>
                  <p className="text-gray-400 text-sm">Based in Canada &mdash; serving organizations nationwide</p>
                </div>
              </div>
            </div>

            {/* Trust line */}
            <p className="text-sm text-gray-500 leading-relaxed">
              We typically respond within 1 business day. Your information is never shared with third parties.
            </p>
          </div>

          {/* Right column — form */}
          <div className="animate-on-scroll animate-delay-200">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#30B130]/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#30B130]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Thank you!</h3>
                  <p className="text-[#425466] mb-8">
                    We&rsquo;ve received your message and will get back to you within 1&ndash;2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', organization: '', service: '', message: '' })
                    }}
                    className="text-[#0570DE] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-1">Send us a message</h3>
                  <p className="text-sm text-[#6B7C93] mb-6">Fill out the form and we&rsquo;ll be in touch shortly.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-[#0A2540] mb-1.5">Name *</label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-[#E3E8EE] rounded-lg text-sm text-[#0A2540] placeholder-[#6B7C93] focus:ring-2 focus:ring-[#0570DE] focus:border-transparent transition-all outline-none"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-[#0A2540] mb-1.5">Email *</label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-[#E3E8EE] rounded-lg text-sm text-[#0A2540] placeholder-[#6B7C93] focus:ring-2 focus:ring-[#0570DE] focus:border-transparent transition-all outline-none"
                          placeholder="john@organization.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-org" className="block text-sm font-medium text-[#0A2540] mb-1.5">Organization</label>
                      <input
                        type="text"
                        id="contact-org"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-[#E3E8EE] rounded-lg text-sm text-[#0A2540] placeholder-[#6B7C93] focus:ring-2 focus:ring-[#0570DE] focus:border-transparent transition-all outline-none"
                        placeholder="Your Organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-medium text-[#0A2540] mb-1.5">What are you interested in?</label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-[#E3E8EE] rounded-lg text-sm text-[#0A2540] focus:ring-2 focus:ring-[#0570DE] focus:border-transparent transition-all outline-none bg-white"
                      >
                        <option value="">Select a service</option>
                        {contactServices.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-[#0A2540] mb-1.5">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-[#E3E8EE] rounded-lg text-sm text-[#0A2540] placeholder-[#6B7C93] focus:ring-2 focus:ring-[#0570DE] focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Tell us about your organization and what you're looking to achieve..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg font-semibold text-white text-sm transition-all duration-300 hover:opacity-90"
                      style={{ background: 'var(--cta)' }}
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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

      {/* Bold Intro + Success Stories Bento Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Bold intro statement */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight text-[#0A2540] mb-16 animate-on-scroll">
            We&rsquo;re experienced raffle managers who have seen it all, run 8-figure campaigns, made every mistake possible, and now, we&rsquo;re ready to help you{' '}
            <span className="gradient-text">unleash your fundraising potential.</span>
          </h2>

          {/* Bento grid — 1 on top, 2 on bottom */}
          <div className="flex flex-col gap-6">
            {/* Featured article — full width */}
            <div className="rounded-2xl overflow-hidden bg-[#F6F9FC] border border-[#E3E8EE] animate-on-scroll">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].imageAlt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Image src={articles[0].logo} alt={articles[0].outlet} width={80} height={32} className="mb-6 opacity-70 object-contain" />
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4 leading-tight">
                    &ldquo;{articles[0].headline}&rdquo;
                  </h3>
                  <p className="text-[#425466] text-base leading-relaxed mb-8">
                    {articles[0].excerpt}
                  </p>
                  <a
                    href={articles[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0570DE] font-semibold hover:underline"
                  >
                    Read full article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Two articles side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              {articles.slice(1).map((article, index) => (
                <div key={article.headline} className={`rounded-2xl overflow-hidden bg-[#F6F9FC] border border-[#E3E8EE] animate-on-scroll animate-delay-${(index + 1) * 100}`}>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className={`object-cover ${article.imagePosition === 'top' ? 'object-top' : 'object-center'}`}
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={article.logo} alt={article.outlet} className="h-6 w-auto mb-4 opacity-70" />
                    <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-3 leading-tight">
                      &ldquo;{article.headline}&rdquo;
                    </h3>
                    <p className="text-[#425466] text-sm leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0570DE] font-semibold text-sm hover:underline"
                    >
                      Read full article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Launchpad Exists */}
      <section className="hero-gradient py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section heading — matches bold intro style */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight text-[#0A2540] mb-16 animate-on-scroll">
            Why Launchpad Exists
          </h2>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mb-16 animate-on-scroll">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-1">$180M+</div>
              <p className="text-[#6B7C93] text-sm font-medium">Total revenue generated</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-1">#1</div>
              <p className="text-[#6B7C93] text-sm font-medium">Largest hospital 50/50 in Canada</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-1">$15.7M</div>
              <p className="text-[#6B7C93] text-sm font-medium">Record monthly revenue</p>
            </div>
          </div>

          {/* Two-column layout: story + sticky image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="animate-on-scroll">
              <div className="space-y-5 text-[#425466] text-base leading-relaxed">
                <p>
                  Before Launchpad Solutions ever existed, I managed one of the most successful charitable lotteries in the country: the Thunder Bay 50/50. Since its inception in January 2021, I helped lead the program to generate over $180 million in total revenue, growing it into the largest hospital 50/50 in Canada.
                </p>
                <p>
                  What began as a local fundraiser quickly evolved into a nationally recognized success story&mdash;loved by hundreds of thousands of players, celebrated by provincial media organizations, and deeply valued by the healthcare system it supports. We achieved this by keeping everything in-house: strategy, marketing, analytics, compliance, customer service, and even retail operations. We built a physical ticket store from the ground up that now generates millions annually, and created a scalable model built on data, agility, and trust.
                </p>

                {/* Blockquote callout */}
                <blockquote className="my-8 pl-6 border-l-4 border-[#0570DE] py-2">
                  <p className="text-[#0A2540] text-lg md:text-xl font-semibold leading-snug">
                    In December 2025, the Thunder Bay 50/50 broke records once again, awarding the largest Grand Prize ever for a hospital 50/50 lottery in Canada, with over $15.7 million in revenue that month alone.
                  </p>
                </blockquote>

                <p>
                  Now, the team behind Canada&apos;s most successful hospital 50/50 is ready to do something new: help other nonprofits achieve the same results. I created Launchpad Solutions to bring that high-performing, detail-focused approach to organizations across the country&mdash;combining proven strategies with purpose-built technology designed to make lottery management simpler, smarter, and more scalable than ever before.
                </p>
                <p>
                  Whether you&apos;re just getting started or ready to grow, we&apos;re here to help you build a raffle program that&apos;s sustainable, compliant, and wildly successful&mdash;without having to figure it all out on your own.
                </p>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-[#E3E8EE]">
                  <p className="font-bold text-[#0A2540] text-base">&mdash;Torin Gunnell</p>
                  <p className="text-[#6B7C93] text-sm">President, Launchpad Solutions</p>
                </div>
              </div>
            </div>

            {/* Sticky image */}
            <div className="animate-on-scroll animate-delay-200">
              <div className="lg:sticky lg:top-32">
                <Image
                  src="/images/Torin-Glenn-Cass-SMALL.jpg"
                  alt="Torin Gunnell with Glenn Craig and team"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Intro statement */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight text-[#0A2540] mb-16 animate-on-scroll">
            We believe that every organization&mdash;no matter the size&mdash;deserves access to expert support and powerful tools to{' '}
            <span className="gradient-text">unleash their fundraising potential.</span>
            {' '}That&rsquo;s why we&rsquo;ve built a pricing model that grows with you.
          </h2>

          {/* Pricing bento grid */}
          <div className="flex flex-col gap-6">
            {/* Top row — two large cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Lift-Off Package */}
              <div className="rounded-2xl bg-white border border-[#E3E8EE] p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll animate-delay-100">
                <div className="text-3xl mb-3">&#x1F680;</div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-1">Lift-Off Package</h3>
                <p className="text-[#0570DE] font-semibold text-sm mb-4">One-time setup, then you take the reins.</p>
                <p className="text-[#425466] text-base leading-relaxed mb-6">
                  Perfect for organizations that just need a boost to get off the ground. We&rsquo;ll handle the technical setup, licensing, and provide you with a personalized roadmap to success&mdash;then step back and let you run with it.
                </p>
                <p className="text-xs font-semibold text-[#6B7C93] uppercase tracking-wider mb-3">Service Includes:</p>
                <ul className="space-y-2 text-[#425466] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0570DE] mt-0.5">&#10003;</span>Website setup and configuration</li>
                  <li className="flex items-start gap-2"><span className="text-[#0570DE] mt-0.5">&#10003;</span>Licensing guidance and support</li>
                  <li className="flex items-start gap-2"><span className="text-[#0570DE] mt-0.5">&#10003;</span>Launch checklist and best practices</li>
                  <li className="flex items-start gap-2"><span className="text-[#0570DE] mt-0.5">&#10003;</span>Marketing tips and design templates</li>
                  <li className="flex items-start gap-2"><span className="text-[#0570DE] mt-0.5">&#10003;</span>One-time flat fee</li>
                </ul>
              </div>

              {/* Mission Control */}
              <div className="gradient-mesh-card rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll animate-delay-200">
                <div className="relative z-10">
                  <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                  <div className="text-3xl mb-3">&#x1F9E0;</div>
                  <h3 className="text-2xl font-bold text-white mb-1">Mission Control</h3>
                  <p className="text-white/80 font-semibold text-sm mb-4">You hand us the keys. We run the show.</p>
                  <p className="text-white/80 text-base leading-relaxed mb-6">
                    End-to-end raffle management from a team that&rsquo;s done it all before. We manage every aspect of your draw so you can focus on your mission&mdash;and watch the numbers climb.
                  </p>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">Service Includes:</p>
                  <ul className="space-y-2 text-white/85 text-sm">
                    <li className="flex items-start gap-2"><span className="text-white mt-0.5">&#10003;</span>Full marketing campaign management</li>
                    <li className="flex items-start gap-2"><span className="text-white mt-0.5">&#10003;</span>Licensing and compliance handled</li>
                    <li className="flex items-start gap-2"><span className="text-white mt-0.5">&#10003;</span>Platform setup and optimization</li>
                    <li className="flex items-start gap-2"><span className="text-white mt-0.5">&#10003;</span>Customer service and email support</li>
                    <li className="flex items-start gap-2"><span className="text-white mt-0.5">&#10003;</span>Performance tracking and reporting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom row — two compact cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Custom Support */}
              <div className="rounded-2xl bg-white border border-[#E3E8EE] p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll animate-delay-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">&#x1F6E0;&#xFE0F;</span>
                  <h3 className="text-xl font-bold text-[#0A2540]">Custom Support</h3>
                </div>
                <p className="text-[#0570DE] font-semibold text-sm mb-3">Just need help with one part? We&rsquo;re in.</p>
                <p className="text-[#425466] text-sm leading-relaxed mb-4">
                  Already running a draw but tired of inbox chaos? Need a second brain on your ad strategy? We offer &agrave; la carte services like customer service, email writing, compliance assistance, and more.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#F6F9FC] text-[#425466] px-3 py-1 rounded-full border border-[#E3E8EE]">Inbox management</span>
                  <span className="text-xs bg-[#F6F9FC] text-[#425466] px-3 py-1 rounded-full border border-[#E3E8EE]">Email strategy</span>
                  <span className="text-xs bg-[#F6F9FC] text-[#425466] px-3 py-1 rounded-full border border-[#E3E8EE]">Analytics</span>
                  <span className="text-xs bg-[#F6F9FC] text-[#425466] px-3 py-1 rounded-full border border-[#E3E8EE]">Platform help</span>
                </div>
              </div>

              {/* Let's Talk */}
              <div className="rounded-2xl bg-white border border-[#E3E8EE] p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll animate-delay-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">&#x1F91D;</span>
                  <h3 className="text-xl font-bold text-[#0A2540]">Let&rsquo;s Talk</h3>
                </div>
                <p className="text-[#0570DE] font-semibold text-sm mb-3">Sometimes you just need to chat it out.</p>
                <p className="text-[#425466] text-sm leading-relaxed mb-5">
                  We&rsquo;ll walk through where you&rsquo;re at, what you&rsquo;re trying to achieve, and where Launchpad can fit in. Book a free 30-minute consult&mdash;no pressure, just real advice.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0570DE] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#2490FF] transition-all duration-300 group">
                  Book a free consultation
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try Lightspeed Section */}
      <section className="lightspeed-gradient py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left column — copy */}
            <div className="lg:flex-1 lg:pt-8 animate-on-scroll">
              <p className="text-sm font-medium text-[#6B7C93] mb-6">AI-powered solutions for real-world challenges</p>
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-tight text-[#0A2540] mb-6">
                Try{' '}<span className="lightspeed-text">Lightspeed</span>
              </h2>
              <p className="text-[17px] md:text-lg text-[#425466] leading-relaxed mb-8">
                Lightspeed is a full suite of purpose-built AI-powered tools, born out of necessity. Lightspeed gets smarter the more you use it. It never forgets anything, and it&rsquo;s always ready to help you tackle customer service, data normalization&mdash;anything you need to get done, fast.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://www.lightspeedutility.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:opacity-90 group"
                  style={{ background: 'linear-gradient(135deg, #4BA0F4 0%, #3B82D4 100%)' }}
                >
                  Get started
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://www.lightspeedutility.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-gray-300 text-[#0A2540] bg-white transition-all duration-300 hover:bg-gray-50"
                >
                  Sign up with Google
                </a>
              </div>
            </div>

            {/* Right column — Lightspeed UI recreation */}
            <div className="lg:flex-1 w-full animate-on-scroll animate-delay-200">
              <div className="flex flex-col gap-4">
                {/* Main dashboard card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200/60 p-6">
                  <p className="text-lg font-bold text-[#0A2540] mb-0.5">Good afternoon, Torin.</p>
                  <p className="text-sm text-[#6B7C93] mb-5">What would you like to work on?</p>

                  {/* Top row — two feature cards */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {/* Response Assistant */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-sm">
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>&#x26A1;</div>
                        <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #F97316, #EF4444)' }}>AI-Powered</span>
                      </div>
                      <p className="text-[13px] font-bold text-[#0A2540] mb-1">Response Assistant</p>
                      <p className="text-[11px] text-[#6B7C93] leading-snug mb-3">Generate professional, AI-powered responses to customer inquiries. Customize tone, length, and format. Includes knowledge base, analytics, and quick reply templates.</p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] text-[#425466] bg-[#F3F4F6] px-2.5 py-1 rounded-full border border-gray-200">Smart Replies</span>
                        <span className="text-[10px] text-[#425466] bg-[#F3F4F6] px-2.5 py-1 rounded-full border border-gray-200">Knowledge Base</span>
                        <span className="text-[10px] text-[#425466] bg-[#F3F4F6] px-2.5 py-1 rounded-full border border-gray-200">Analytics</span>
                        <span className="text-[10px] text-[#425466] bg-[#F3F4F6] px-2.5 py-1 rounded-full border border-gray-200">Templates</span>
                      </div>
                    </div>

                    {/* Draft Assistant */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-sm">
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ background: 'linear-gradient(135deg, #F97316, #EF4444)' }}>&#x270F;&#xFE0F;</div>
                        <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #F97316, #EF4444)' }}>AI-Powered</span>
                      </div>
                      <p className="text-[13px] font-bold text-[#0A2540] mb-1">Draft Assistant</p>
                      <p className="text-[11px] text-[#6B7C93] leading-snug mb-3">Create on-brand social posts, emails, media releases, and ads.</p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] text-[#425466] bg-[#F3F4F6] px-2.5 py-1 rounded-full border border-gray-200">Social</span>
                        <span className="text-[10px] text-[#425466] bg-[#F3F4F6] px-2.5 py-1 rounded-full border border-gray-200">Email</span>
                        <span className="text-[10px] text-[#425466] bg-[#F3F4F6] px-2.5 py-1 rounded-full border border-gray-200">Media</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom row — two smaller cards */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Insights Engine */}
                    <div className="bg-white rounded-xl p-3.5 border border-gray-200/80 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs" style={{ background: 'linear-gradient(135deg, #22C55E, #06B6D4)' }}>&#x1F4CA;</div>
                        <span className="text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #F97316, #EF4444)' }}>AI-Powered</span>
                      </div>
                      <p className="text-xs font-bold text-[#0A2540] mb-0.5">Insights Engine</p>
                      <p className="text-[10px] text-[#6B7C93] leading-snug mb-2">Upload data and generate visual dashboards instantly.</p>
                      <span className="text-[10px] text-[#425466] bg-[#F3F4F6] px-2.5 py-1 rounded-full border border-gray-200">Analytics</span>
                    </div>

                    {/* List Normalizer */}
                    <div className="bg-white rounded-xl p-3.5 border border-gray-200/80 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs" style={{ background: 'linear-gradient(135deg, #F97316, #FBBF24)' }}>&#x1F4CB;</div>
                        <span className="text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #F97316, #EF4444)' }}>AI-Powered</span>
                      </div>
                      <p className="text-xs font-bold text-[#0A2540] mb-0.5">List Normalizer</p>
                      <p className="text-[10px] text-[#6B7C93] leading-snug mb-2">Clean and format customer lists for Mailchimp export.</p>
                      <span className="text-[10px] text-[#425466] bg-[#F3F4F6] px-2.5 py-1 rounded-full border border-gray-200">Data Export</span>
                    </div>
                  </div>

                  {/* Green CTA button */}
                  <button className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #22C55E 0%, #06B6D4 100%)' }}>
                    Open Response Assistant &rarr;
                  </button>
                </div>

                {/* Ask Lightspeed chat bar */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200/60 p-5">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-sm">&#x2728;</span>
                    <span className="text-sm font-bold text-[#0A2540]">Ask Lightspeed</span>
                    <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #22C55E, #06B6D4)' }}>AI Assistant</span>
                    <div className="ml-auto flex gap-1.5">
                      <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #F97316, #EF4444)' }}>Professional</span>
                      <span className="text-[10px] text-[#6B7C93] px-2 py-0.5 rounded-full border border-gray-200 bg-white">Friendly</span>
                      <span className="text-[10px] text-[#6B7C93] px-2 py-0.5 rounded-full border border-gray-200 bg-white">Casual</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[11px] text-[#425466] bg-[#F3F4F6] px-3 py-1.5 rounded-full border border-gray-200">Draft a professional email to a corporate sponsor</span>
                    <span className="text-[11px] text-[#425466] bg-[#F3F4F6] px-3 py-1.5 rounded-full border border-gray-200">Suggest some calls-to-action for our website</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[11px] text-[#425466] bg-[#F3F4F6] px-3 py-1.5 rounded-full border border-gray-200">Help me brainstorm social media content ideas for this month</span>
                    <span className="text-[11px] text-[#425466] bg-[#F3F4F6] px-3 py-1.5 rounded-full border border-gray-200">Write a short blurb about where lottery funds go</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[#F9FAFB] rounded-full px-4 py-2.5 text-sm text-[#9CA3AF] border border-gray-200">Ask anything...</div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white" style={{ background: 'linear-gradient(135deg, #F97316, #EF4444)' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#9CA3AF] text-center mt-2">AI-generated responses. Always verify important information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactSection />
    </div>
  )
}
