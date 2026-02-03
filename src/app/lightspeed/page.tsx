import Link from 'next/link'

const features = [
  {
    title: 'Customer Service AI',
    description: 'Handle support inquiries instantly with AI trained on real nonprofit and gaming scenarios.',
    icon: '💬',
  },
  {
    title: 'Smart Copywriting',
    description: 'Generate compelling marketing copy, emails, and social posts tailored to your audience.',
    icon: '✍️',
  },
  {
    title: 'Data Management',
    description: 'Organize, analyze, and report on your data without the spreadsheet headaches.',
    icon: '📊',
  },
  {
    title: 'Email Automation',
    description: 'Draft and manage email campaigns that engage your supporters and drive results.',
    icon: '📧',
  },
  {
    title: 'Compliance Assistance',
    description: 'Get guidance on regulatory requirements with AI that understands charitable gaming.',
    icon: '✅',
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks so your team can focus on mission-critical work.',
    icon: '⚡',
  },
]

const useCases = [
  {
    title: 'Nonprofit Teams',
    description: 'Stretch your limited resources further by automating administrative tasks and communications.',
    icon: '🏛️',
  },
  {
    title: 'Charitable Gaming Operators',
    description: 'Streamline player support, compliance documentation, and campaign management.',
    icon: '🎯',
  },
  {
    title: 'Foundation Staff',
    description: 'Handle donor communications, reporting, and data management more efficiently.',
    icon: '📋',
  },
]

export default function LightspeedPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 mb-6 border border-white/20">
                <span className="gradient-text font-semibold">By Launchpad Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="gradient-text">Lightspeed</span>
                <br />
                <span className="text-white">AI Productivity Suite</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                An AI-powered productivity suite built for nonprofit teams and charitable gaming operators. Trained on thousands of real-world examples—from customer service to copywriting to data management—Lightspeed isn&apos;t a generic chatbot. It&apos;s a purpose-built toolkit that automates the repetitive so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://lightspeedutility.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg"
                >
                  Visit Lightspeed
                </a>
                <Link href="/contact" className="btn-secondary text-lg !bg-white/10 !border-white/30 !text-white hover:!bg-white/20">
                  Request a Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🤖</div>
                  <h3 className="text-3xl font-bold gradient-text">Lightspeed</h3>
                  <p className="text-gray-300 mt-2">AI-Powered Productivity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Not Just Another AI Tool
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Generic AI tools don&apos;t understand the nuances of nonprofit work or charitable gaming. Lightspeed is trained on thousands of real-world examples from our industry—customer support tickets, marketing campaigns, compliance scenarios, and more. It speaks your language because it learned from your world.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Purpose-Built Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature is designed for the unique challenges of nonprofit teams and gaming operators.
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

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built For Your Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re running a small nonprofit or managing large-scale charitable gaming operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card text-center">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightspeed + Launchpad */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Better Together
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Lightspeed provides the AI tools. Launchpad Solutions provides the expertise.
                Combine both for maximum productivity and impact.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Use Lightspeed independently to boost your team&apos;s productivity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Add Launchpad services for expert raffle and gaming management</span>
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
                    <div className="text-4xl mb-2">🤖</div>
                    <div className="font-bold text-gray-900">Lightspeed</div>
                    <div className="text-sm text-gray-500">AI Tools</div>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-yellow-50 rounded-2xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="font-bold text-gray-900">Launchpad</div>
                    <div className="text-sm text-gray-500">Services</div>
                  </div>
                </div>
                <div className="col-span-2 aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <div className="font-bold text-gray-900">Maximum Impact</div>
                    <div className="text-sm text-gray-500">AI + Expertise = Success</div>
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
            Ready to Work Smarter?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you want to use Lightspeed on your own or pair it with
            Launchpad&apos;s expert services, we&apos;re here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://lightspeedutility.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Try Lightspeed
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
