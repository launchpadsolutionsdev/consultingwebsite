import Link from 'next/link'

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

const stats = [
  { value: '$50M+', label: 'Funds Raised' },
  { value: '500+', label: 'Successful Raffles' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

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
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="gradient-text">Unleash Your</span>
              <br />
              <span className="text-gray-900">Fundraising Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Expert raffle management and charitable gaming solutions.
              From strategy to execution, we help organizations maximize their impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="btn-secondary text-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              End-to-End Raffle Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We handle every aspect of your charitable gaming campaign,
              so you can focus on what matters most—your mission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, proven process to launch your fundraising campaign.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discover</h3>
              <p className="text-gray-600">
                We learn about your organization, goals, and unique needs through a comprehensive consultation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">
                Our experts craft a customized raffle strategy, handling licensing, compliance, and campaign planning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Organizations Nationwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our clients say about working with Launchpad Solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
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
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
    </div>
  )
}
