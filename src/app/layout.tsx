import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Launchpad Solutions | Raffle Management & Charitable Gaming Experts',
  description: 'Unleash your fundraising potential with Launchpad Solutions. Expert raffle management and charitable gaming solutions for organizations of all sizes.',
  keywords: 'raffle management, charitable gaming, fundraising, lottery management, nonprofit fundraising',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
