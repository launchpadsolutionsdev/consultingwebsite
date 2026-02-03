import Link from 'next/link'

const features = [
  {
    title: 'Easy Setup',
    description: 'Get your raffle up and running in minutes with our intuitive platform.',
    icon: '⚡',
  },
  {
    title: 'Secure Payments',
    description: 'PCI-compliant payment processing for worry-free transactions.',
    icon: '🔒',
  },
  {
    title: 'Real-Time Analytics',
    description: 'Track sales, engagement, and performance with live dashboards.',
    icon: '📊',
  },
  {
    title: 'Automated Draws',
    description: 'Fair, transparent, and automated winner selection.',
    icon: '🎲',
  },
  {
    title: 'Mobile Optimized',
    description: 'Beautiful experience on any device for maximum participation.',
    icon: '📱',
  },
  {
    title: 'Compliance Tools',
    description: 'Built-in features to help you stay compliant with regulations.',
    icon: '✅',
  },
]

const benefits = [
  {
    stat: '10x',
    label: 'Faster setup than traditional methods',
  },
  {
    stat: '40%',
    label: 'Increase in ticket sales on average',
  },
  {
    stat: '99.9%',
    label: 'Platform uptime guarantee',
  },
]

export default function LightspeedPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-gray-600 mb-6">
                <span className="gradient-text font-semibold">By Launchpad Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="gradient-text">Lightspeed</span>
                <br />
                <span className="text-gray-900">Raffle Platform</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The modern raffle management platform that helps organizations
                launch, manage, and grow their fundraising campaigns with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://lightspeed.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg"
                >
                  Visit Lightspeed
                </a>
                <Link href="/contact" className="btn-secondary text-lg">
                  Request a Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">⚡</div>
                  <h3 className="text-3xl font-bold gradient-text">Lightspeed</h3>
                  <p className="text-gray-600 mt-2">Raffle Management Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {benefit.stat}
                </div>
                <div className="text-gray-400">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to maximize your fundraising success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card">
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

      {/* How It Works */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Launch in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your raffle up and running faster than ever.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Your Raffle</h3>
              <p className="text-gray-600">
                Set up your prizes, ticket options, and customize your campaign page in minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Share & Promote</h3>
              <p className="text-gray-600">
                Launch your campaign and share it across social media, email, and your website.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Draw Winners</h3>
              <p className="text-gray-600">
                Run your automated draw, notify winners, and celebrate your fundraising success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightspeed + Launchpad */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Better Together
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Lightspeed provides the platform. Launchpad Solutions provides the expertise.
                Combine both for the ultimate fundraising experience.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Use Lightspeed independently for a DIY approach</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Add Launchpad services for expert campaign management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Get the best of both worlds with our integrated solutions</span>
                </li>
              </ul>
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚡</div>
                    <div className="font-bold text-gray-900">Lightspeed</div>
                    <div className="text-sm text-gray-500">Platform</div>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-yellow-50 rounded-2xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="font-bold text-gray-900">Launchpad</div>
                    <div className="text-sm text-gray-500">Services</div>
                  </div>
                </div>
                <div className="col-span-2 aspect-video bg-gradient-subtle rounded-2xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <div className="font-bold text-gray-900">Maximum Impact</div>
                    <div className="text-sm text-gray-500">Platform + Expertise = Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Supercharge Your Raffle?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you want to use Lightspeed on your own or pair it with
            Launchpad&apos;s expert services, we&apos;re here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://lightspeed.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Try Lightspeed Free
            </a>
            <Link
              href="/contact"
              className="btn-secondary text-lg !border-gray-600 !text-white hover:!bg-gray-800"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
