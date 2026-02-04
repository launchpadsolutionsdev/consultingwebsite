import Link from 'next/link'
import Image from 'next/image'

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
    <div className="pt-32">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">We Believe in the</span>
              <br />
              <span className="text-white">Power of Giving</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Launchpad Solutions, our mission is to empower nonprofit organizations by providing innovative, reliable, and user-friendly raffle management services. We believe in unlocking the full potential of every fundraising initiative; streamlining operations, maximizing impact, and helping communities thrive. Through tailored solutions and hands-on support, we help organizations raise more with less stress, so they can focus on what matters most: making a difference.
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
                Why Launchpad Exists
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Before Launchpad Solutions ever existed, I managed one of the most successful charitable lotteries in the country: the Thunder Bay 50/50. Since its inception in January 2021, I helped lead the program to generate over $180 million in total revenue, growing it into the largest hospital 50/50 in Canada.
                </p>
                <p>
                  What began as a local fundraiser quickly evolved into a nationally recognized success story; loved by hundreds of thousands of players, celebrated by provincial media organizations, and deeply valued by the healthcare system it supports. We achieved this by keeping everything in-house: strategy, marketing, analytics, compliance, customer service, and even retail operations. We built a physical ticket store from the ground up that now generates millions annually, and created a scalable model built on data, agility, and trust.
                </p>
                <p>
                  In December 2025, the Thunder Bay 50/50 broke records once again; awarding the largest Grand Prize ever for a hospital 50/50 lottery in Canada, with over $15.7 million in revenue that month alone. I created Launchpad Solutions to bring that same high-performing, detail-focused approach to nonprofits across the country.
                </p>
                <p>
                  Whether you&apos;re just getting started or ready to scale, we&apos;ll help you build a raffle program that&apos;s sustainable, compliant, and wildly successful; without having to figure it all out on your own.
                </p>
                <p className="mt-8 font-medium text-gray-800">
                  -Torin Gunnell
                  <br />
                  <span className="text-gray-600">President, Launchpad Solutions</span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-winner.jpg"
                  alt="Launchpad Solutions team presenting a grand prize winner check"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
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
