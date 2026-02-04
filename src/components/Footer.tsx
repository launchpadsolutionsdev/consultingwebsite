import Link from 'next/link'

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Lift-Off Package', href: '/services#lift-off' },
    { name: 'Mission Control', href: '/services#mission-control' },
    { name: 'Custom Support', href: '/services#custom-support' },
    { name: 'Free Consultation', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Lightspeed CTA Section */}
      <div className="bg-gradient-to-br from-[#0f0a1a] via-[#1a0f2e] to-[#0f0a1a] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Floating particles */}
        <div className="absolute top-[10%] left-[5%] w-2 h-2 rounded-full bg-purple-400/50 animate-particle" />
        <div className="absolute top-[20%] right-[10%] w-1.5 h-1.5 rounded-full bg-violet-300/40 animate-particle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[25%] left-[15%] w-2 h-2 rounded-full bg-blue-400/45 animate-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] left-[8%] w-1.5 h-1.5 rounded-full bg-purple-300/50 animate-particle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[15%] right-[20%] w-2 h-2 rounded-full bg-violet-400/40 animate-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 rounded-full bg-blue-300/45 animate-particle" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-[35%] right-[8%] w-2 h-2 rounded-full bg-purple-400/35 animate-particle" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[15%] left-[40%] w-1.5 h-1.5 rounded-full bg-violet-300/50 animate-particle" style={{ animationDelay: '3.5s' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and CTAs */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-purple-300 text-sm font-medium">AI-Powered Productivity</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to work smarter?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Lightspeed is an AI-powered productivity suite built for nonprofit teams and charitable gaming operators. Trained on thousands of real-world examples — from customer service to copywriting to data management — Lightspeed isn&apos;t a generic chatbot. It&apos;s a purpose-built toolkit that automates the repetitive so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://lightspeedutility.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 hover:shadow-xl"
                >
                  Try Lightspeed
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white border border-purple-400/30 hover:bg-purple-500/10 transition-all duration-200"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>

            {/* Right side - UI Mockup */}
            <div className="relative hidden lg:block">
              {/* Floating UI Cards */}
              <div className="relative h-[400px]">
                {/* Draft Assistant Card */}
                <div className="absolute top-0 left-0 w-64 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/10 animate-float p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm">Draft Assistant</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-purple-500/20 rounded-full w-full" />
                    <div className="h-2 bg-purple-500/20 rounded-full w-4/5" />
                    <div className="h-2 bg-purple-500/20 rounded-full w-3/5" />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-xs">Email</div>
                    <div className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-xs">Social</div>
                  </div>
                </div>

                {/* Response Assistant Card */}
                <div className="absolute top-12 right-0 w-60 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl border border-blue-500/30 shadow-2xl shadow-blue-500/10 animate-float p-4" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm">Response Assistant</span>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-2 text-xs text-gray-400">
                    &quot;How do I check my ticket?&quot;
                  </div>
                  <div className="mt-2 bg-green-500/10 rounded-lg p-2 text-xs text-green-300/80">
                    Generating response...
                  </div>
                </div>

                {/* Insights Engine Card */}
                <div className="absolute bottom-8 left-8 w-56 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl border border-green-500/30 shadow-2xl shadow-green-500/10 animate-float p-4" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm">Insights Engine</span>
                  </div>
                  <div className="flex items-end gap-1 h-12">
                    <div className="w-4 bg-green-500/40 rounded-t h-4" />
                    <div className="w-4 bg-green-500/50 rounded-t h-6" />
                    <div className="w-4 bg-green-500/60 rounded-t h-8" />
                    <div className="w-4 bg-green-500/70 rounded-t h-10" />
                    <div className="w-4 bg-green-500/80 rounded-t h-12" />
                  </div>
                </div>

                {/* List Normalizer Card */}
                <div className="absolute bottom-0 right-4 w-48 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl border border-orange-500/30 shadow-2xl shadow-orange-500/10 animate-float p-4" style={{ animationDelay: '3s' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm">List Normalizer</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-orange-500/30" />
                      <div className="h-2 bg-orange-500/20 rounded-full flex-1" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-green-500/30" />
                      <div className="h-2 bg-green-500/20 rounded-full flex-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/launchpad-logo-full.png"
                alt="Launchpad Solutions"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Expert raffle management and charitable gaming solutions. We help organizations unleash their fundraising potential.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Launchpad Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
