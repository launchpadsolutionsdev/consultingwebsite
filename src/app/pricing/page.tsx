import Link from 'next/link'

const pricingTiers = [
  {
    name: 'Lift-Off Package',
    emoji: '🚀',
    description: 'Perfect for getting started with expert guidance.',
    price: 'Custom',
    priceNote: 'One-time fee',
    features: [
      'Website setup and configuration',
      'Licensing guidance and support',
      'Launch checklist and best practices',
      'Marketing tips and design templates',
      '30-day email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Mission Control',
    emoji: '🪐',
    description: 'Full-service management for maximum results.',
    price: 'Custom',
    priceNote: 'Based on campaign scope',
    features: [
      'Everything in Lift-Off, plus:',
      'Full marketing campaign management',
      'Complete compliance handling',
      'Dedicated account manager',
      'Customer service management',
      'Performance tracking and reporting',
      'Priority support',
    ],
    cta: 'Contact Us',
    popular: true,
  },
  {
    name: 'Custom Support',
    emoji: '🛠️',
    description: 'À la carte services for specific needs.',
    price: 'Flexible',
    priceNote: 'Hourly or project-based',
    features: [
      'Customer service management',
      'Email and messaging strategy',
      'Analytics and reporting',
      'Platform troubleshooting',
      'Ad reviews and creative feedback',
      'Compliance consulting',
    ],
    cta: 'Get Quote',
    popular: false,
  },
]

const faqs = [
  {
    question: 'How is pricing determined?',
    answer: 'Pricing is customized based on your campaign\'s scope, duration, prize value, and the level of support you need. We\'ll provide a detailed quote after our initial consultation.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees. We provide transparent pricing upfront. Any additional services or scope changes are discussed and approved before implementation.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment options for larger campaigns. We can discuss payment schedules that work for your organization\'s budget.',
  },
  {
    question: 'What\'s included in the free consultation?',
    answer: 'Our 30-minute consultation covers your goals, current challenges, and how we can help. There\'s no obligation—just honest advice about whether we\'re the right fit.',
  },
  {
    question: 'Can I switch plans mid-campaign?',
    answer: 'Absolutely. If you start with Lift-Off and realize you need more support, we can seamlessly transition to Mission Control. We\'re flexible and focused on your success.',
  },
  {
    question: 'Do you work with organizations of all sizes?',
    answer: 'Yes! We work with small community groups, large foundations, and everything in between. Our services scale to fit your needs and budget.',
  },
]

export default function PricingPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Transparent Pricing</span>
              <br />
              <span className="text-white">For Every Budget</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Flexible solutions designed to maximize your fundraising ROI.
              No hidden fees, just honest value.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 relative ${
                  tier.popular
                    ? 'bg-gray-900 text-white ring-4 ring-pink-500'
                    : 'bg-white border-2 border-gray-100'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-brand text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <span className="text-4xl">{tier.emoji}</span>
                  <h2 className={`text-2xl font-bold mt-4 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h2>
                  <p className={`mt-2 ${tier.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                </div>
                <div className="text-center mb-8">
                  <span className={`text-4xl font-bold ${tier.popular ? 'text-white' : 'gradient-text'}`}>
                    {tier.price}
                  </span>
                  <p className={`text-sm mt-1 ${tier.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {tier.priceNote}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                          tier.popular ? 'text-pink-400' : 'text-green-500'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={tier.popular ? 'text-gray-300' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'btn-primary'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Invest in Professional Management?
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <span className="font-semibold text-gray-900">We get paid when you do.</span> Our pricing model is built around your success—there&apos;s no risk on your end. If your program doesn&apos;t perform, neither do we. That&apos;s how confident we are in what we deliver.
              </p>

              <p>
                We&apos;re not consultants who read a textbook. We&apos;re <span className="font-semibold text-gray-900">proven operators</span> who&apos;ve built and managed some of the most successful charitable gaming programs in Canada—including the largest hospital 50/50 in the country. We know what works because we&apos;ve done it ourselves, at scale, for years.
              </p>

              <p>
                We&apos;ve already made the mistakes so you don&apos;t have to. The compliance headaches, the marketing misfires, the operational hiccups—we&apos;ve seen it all and built systems to avoid them. When you work with us, you&apos;re getting <span className="font-semibold text-gray-900">years of hard-won experience</span> from day one.
              </p>

              <p>
                Bottom line: we handle the complexity so you can focus on your mission. No learning curve, no guesswork, no stress—just results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We have answers.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get a Custom Quote?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Every organization is unique. Let&apos;s discuss your specific needs
            and create a pricing package that works for you.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
