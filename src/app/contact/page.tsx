'use client'

import { useState } from 'react'

const contactMethods = [
  {
    icon: '📧',
    title: 'Email Us',
    description: 'Get in touch via email',
    value: 'hello@launchpadsolutions.com',
    href: 'mailto:hello@launchpadsolutions.com',
  },
  {
    icon: '📞',
    title: 'Call Us',
    description: 'Speak with our team',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: '📍',
    title: 'Location',
    description: 'Based in Canada',
    value: 'Serving organizations nationwide',
    href: null,
  },
]

const services = [
  'Lift-Off Package',
  'Mission Control',
  'Custom Support',
  'Free Consultation',
  'Other',
]

export default function ContactPage() {
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
    // In production, this would send to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Let&apos;s Start</span>
              <br />
              <span className="text-white">A Conversation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to unleash your fundraising potential? Get in touch and
              let&apos;s discuss how we can help your organization succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div key={method.title} className="card text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{method.description}</p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-pink-600 hover:text-pink-700 font-medium transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="text-gray-600">{method.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 section-gradient">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="card !p-8 lg:!p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-600 mb-8">
                  We&apos;ve received your message and will get back to you within
                  1-2 business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '',
                      email: '',
                      organization: '',
                      service: '',
                      message: '',
                    })
                  }}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you shortly.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="john@organization.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="Your Organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your organization and what you're looking to achieve..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-lg">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our pricing page for frequently asked questions,
            or book a free consultation to speak with our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing#faqs" className="btn-secondary">
              View FAQs
            </a>
            <a href="/services#consultation" className="btn-primary">
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
