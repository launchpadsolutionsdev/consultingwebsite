import Link from 'next/link'

const values = [
  {
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty in every interaction.',
    icon: '🛡️',
  },
  {
    title: 'Excellence',
    description: 'We deliver exceptional results through meticulous attention to detail.',
    icon: '⭐',
  },
  {
    title: 'Partnership',
    description: 'We work alongside you as true partners invested in your success.',
    icon: '🤝',
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve our methods to stay ahead of industry trends.',
    icon: '💡',
  },
]

const team = [
  {
    name: 'Leadership Team',
    description: 'Our experienced leaders bring decades of combined experience in charitable gaming, nonprofit management, and technology.',
  },
  {
    name: 'Compliance Experts',
    description: 'Dedicated specialists who stay current on regulations across all jurisdictions to keep your campaigns compliant.',
  },
  {
    name: 'Client Success',
    description: 'Your dedicated support team ensuring every campaign exceeds expectations from start to finish.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">We Believe in the</span>
              <br />
              <span className="text-gray-900">Power of Giving</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Launchpad Solutions was founded with a simple mission: to help organizations
              maximize their fundraising potential through expert raffle management and
              charitable gaming solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  We started Launchpad Solutions after witnessing firsthand the challenges
                  nonprofits face when running fundraising raffles. The regulatory complexity,
                  technical hurdles, and operational demands often overwhelmed organizations
                  trying to do good in their communities.
                </p>
                <p>
                  Today, we&apos;re proud to be the trusted partner for hundreds of organizations
                  across the country. From small community groups to large healthcare foundations,
                  we&apos;ve helped our clients raise over $50 million for causes that matter.
                </p>
                <p>
                  Our approach is simple: we handle the complexity so you can focus on your
                  mission. Whether you need full-service campaign management or targeted support
                  for specific challenges, we&apos;re here to help you succeed.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-subtle rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold gradient-text">Launching Dreams</h3>
                  <p className="text-gray-600 mt-2">Since 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experts dedicated to your fundraising success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((group) => (
              <div key={group.name} className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {group.name}
                </h3>
                <p className="text-gray-600">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to learn more about how Launchpad Solutions can help your organization?
            We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Contact Us
            </Link>
            <Link href="/services" className="btn-secondary text-lg !border-gray-600 !text-white hover:!bg-gray-800">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
