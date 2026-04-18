import type { Metadata } from 'next'
import Image from 'next/image'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Coming soon | Launchpad Solutions',
  description: 'Launchpad Solutions — website coming soon.',
  robots: { index: false, follow: false },
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-primary-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <Image
          src="/brand/logos/launchpad-horizontal-color@4x.png"
          alt="Launchpad Solutions"
          width={320}
          height={80}
          priority
          className="h-12 w-auto mb-10"
        />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Website coming soon.
        </h1>
        <p className="text-white/70 text-lg mb-10">
          We&apos;re putting the finishing touches on things. Check back shortly.
        </p>
        <LoginForm />
      </div>
    </div>
  )
}
