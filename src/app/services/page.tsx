import Link from 'next/link'

const services = [
  {
    id: 'lift-off',
    emoji: '🚀',
    name: 'Lift-Off Package',
    tagline: 'One-time setup, then you take the reins.',
    description: 'Perfect for organizations that just need a boost to get off the ground. We\'ll handle the technical setup, licensing, and provide you with a personalized roadmap to success; then step back and let you run with it.',
    includes: [
      'Website setup and configuration',
      'Licensing guidance and support',
      'Launch checklist and best practices',
      'Marketing tips and design templates',
      'One-time flat fee',
    ],
    color: 'from-pink-100 to-pink-50',
  },
  {
    id: 'mission-control',
    emoji: '🪐',
    name: 'Mission Control',
    tagline: 'You hand us the keys. We run the show.',
    description: 'End-to-end raffle management from a team that\'s done it all before. We manage every aspect of your draw so you can focus on your mission; and watch the numbers climb.',
    includes: [
      'Full marketing campaign management',
      'Licensing and compliance handled',
      'Platform setup and optimization',
      'Customer service and email support',
      'Performance tracking and reporting',
    ],
    color: 'from-green-100 to-green-50',
  },
  {
    id: 'custom-support',
    emoji: '🛠️',
    name: 'Custom Support',
    tagline: 'Just need help with one part? We\'re in.',
    description: 'Already running a draw but tired of inbox chaos? Need a second brain on your ad strategy? We offer à la carte services like customer service, email writing, compliance assistance, and more.',
    includes: [
      'Customer service inbox management',
      'Email and messaging strategy',
      'Analytics and reporting support',
      'Platform troubleshooting',
      'Ad reviews and creative feedback',
    ],
    color: 'from-yellow-100 to-yellow-50',
  },
  {
    id: 'consultation',
    emoji: '🤝',
    name: 'Let\'s Talk',
    tagline: 'Sometimes you just need to chat it out.',
    description: 'We\'ll walk through where you\'re at, what you\'re trying to achieve, and where Launchpad can fit in. Book a free 30-minute consult; no pressure, just real advice.',
    includes: [
      'What licensing and compliance might look like in your province',
      'How to structure your prizing and ticket options',
      'Where to start with marketing (and what to avoid)',
      'Whether you should run the draw yourself or hire help',
      'How to scale without burning out your team',
    ],
    color: 'from-purple-100 to-purple-50',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Services Designed</span>
              <br />
              <span className="text-gray-900">For Your Success</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you need a helping hand or a full team behind you,
              we have flexible solutions to match your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={`rounded-3xl p-8 lg:p-10 bg-gradient-to-br ${service.color} scroll-mt-24`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-4xl">{service.emoji}</span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-4">
                      {service.name}
                    </h2>
                    <p className="text-lg font-medium text-gray-700 mt-1">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {service.id === 'consultation' ? 'Discussions could include:' : 'Service Includes:'}
                  </h3>
                  <ul className="space-y-2">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={service.id === 'consultation' ? '/contact' : '/pricing'}
                  className="inline-flex items-center font-semibold text-gray-900 hover:text-pink-600 transition-colors"
                >
                  {service.id === 'consultation' ? 'Book a Free Consultation' : 'View Pricing'}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to get your campaign up and running.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discovery Call</h3>
              <p className="text-gray-600 text-sm">
                We learn about your organization and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Proposal</h3>
              <p className="text-gray-600 text-sm">
                We create a tailored plan and pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Campaign Launch</h3>
              <p className="text-gray-600 text-sm">
                We execute your campaign with precision.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Results & Review</h3>
              <p className="text-gray-600 text-sm">
                We analyze outcomes and plan next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Service Is Right?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a free consultation and we&apos;ll help you determine the best
            approach for your organization&apos;s unique needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
