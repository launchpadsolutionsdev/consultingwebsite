'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] text-[#0A2540] mb-8">
                Why Launchpad Exists
              </h2>
              <div className="space-y-5 text-[#425466] text-base leading-relaxed">
                <p>
                  Before Launchpad Solutions ever existed, I managed one of the most successful charitable lotteries in the country: the Thunder Bay 50/50. Since its inception in January 2021, I helped lead the program to generate over $180 million in total revenue, growing it into the largest hospital 50/50 in Canada.
                </p>
                <p>
                  What began as a local fundraiser quickly evolved into a nationally recognized success story&mdash;loved by hundreds of thousands of players, celebrated by provincial media organizations, and deeply valued by the healthcare system it supports. We achieved this by keeping everything in-house: strategy, marketing, analytics, compliance, customer service, and even retail operations. We built a physical ticket store from the ground up that now generates millions annually, and created a scalable model built on data, agility, and trust.
                </p>
                <p>
                  In December 2025, the Thunder Bay 50/50 broke records once again, awarding the largest Grand Prize ever for a hospital 50/50 lottery in Canada, with over $15.7 million in revenue that month alone.
                </p>
                <p>
                  Now, the team behind Canada&apos;s most successful hospital 50/50 is ready to do something new: help other nonprofits achieve the same results. I created Launchpad Solutions to bring that high-performing, detail-focused approach to organizations across the country&mdash;combining proven strategies with purpose-built technology designed to make lottery management simpler, smarter, and more scalable than ever before.
                </p>
                <p>
                  Whether you&apos;re just getting started or ready to grow, we&apos;re here to help you build a raffle program that&apos;s sustainable, compliant, and wildly successful&mdash;without having to figure it all out on your own.
                </p>
                <p className="mt-4 font-semibold text-[#0A2540]">
                  &mdash;Torin Gunnell
                  <br />
                  <span className="font-medium text-[#425466]">President, Launchpad Solutions</span>
                </p>
              </div>
            </div>
            <div className="animate-on-scroll animate-delay-200">
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
              <div className="hero-gradient rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll animate-delay-200 relative overflow-hidden">
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
                  <span className="text-xs bg-[#F6F9FC] text-[#425466] px-3 py-1 rounded-full border border-[#E3E8EE]">Ad reviews</span>
                </div>
              </div>

              {/* Let's Talk */}
              <div className="rounded-2xl bg-[#0A2540] p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll animate-delay-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">&#x1F91D;</span>
                  <h3 className="text-xl font-bold text-white">Let&rsquo;s Talk</h3>
                </div>
                <p className="text-[#12D8FA] font-semibold text-sm mb-3">Sometimes you just need to chat it out.</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
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
