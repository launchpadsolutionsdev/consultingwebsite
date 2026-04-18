import Link from 'next/link'
import Newsletter from './Newsletter'

const footerLinks = {
  services: [
    { name: '50/50 Management', href: '/services/5050-management' },
    { name: 'Catch the Ace', href: '/services/catch-the-ace' },
    { name: 'Prize Raffles', href: '/services/prize-raffle' },
    { name: 'Consulting', href: '/services/consulting' },
    { name: 'Lightspeed AI', href: '/lightspeed' },
  ],
  insights: [
    { name: 'Blog', href: '/blog' },
    { name: 'Research & Reports', href: '/insights' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
    { name: 'Glossary', href: '/glossary' },
  ],
  company: [
    { name: 'About / Team', href: '/team' },
    { name: 'Clients', href: '/clients' },
    { name: 'Press & Media', href: '/press' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'RSS Feed', href: '/feed.xml' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/launchpad-logo-full.png"
                alt="Launchpad Solutions"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Expert raffle management and charitable gaming solutions. We help organizations
              unleash their fundraising potential.
            </p>
            <div className="max-w-sm">
              <div className="text-sm font-semibold text-primary-900 mb-2">
                Get The Launchpad Briefing
              </div>
              <p className="text-xs text-gray-500 mb-3">
                Bi-weekly charitable gaming insights. No fluff.
              </p>
              <Newsletter variant="footer" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Insights</h4>
            <ul className="space-y-3">
              {footerLinks.insights.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Launchpad Solutions. All rights reserved.
            </p>
            <div className="flex gap-5">
              {footerLinks.legal.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
