import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Launchpad Solutions | Experts en gestion de loteries et tirages caritatifs',
  description:
    'Libérez le potentiel de collecte de fonds de votre organisme. Launchpad Solutions est experte en gestion de loteries 50/50, de tirages progressifs et de jeux caritatifs — avec plus de 180 M$ de revenus de billets récoltés à ce jour.',
}

const stats = [
  { value: '180 M$+', label: 'Revenus totaux gérés' },
  { value: '15,7 M$', label: 'Record de loterie 50/50 d\u2019h\u00f4pital' },
  { value: '100+', label: 'Organismes partenaires' },
]

const services = [
  {
    title: 'Loterie 50/50',
    href: '/services/5050-management',
    description:
      'Gestion complète de vos loteries 50/50 électroniques — licences, plateforme, marketing, support à la clientèle et exploitation.',
  },
  {
    title: 'Catch the Ace',
    href: '/services/catch-the-ace',
    description:
      'Lancement et exploitation de tirages progressifs Catch the Ace, avec toute la rigueur réglementaire que ce format exige.',
  },
  {
    title: 'Tirages de prix',
    href: '/services/prize-raffle',
    description:
      'Tirages de véhicules, maisons et expériences de grande valeur — conçus comme canal d\u2019acquisition de nouveaux donateurs.',
  },
  {
    title: 'Consultation stratégique',
    href: '/services/consulting',
    description:
      'Audits de programme, études de faisabilité et évaluations stratégiques pour conseils d\u2019administration.',
  },
]

export default function FrenchHome() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Bienvenue
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              Infrastructure de collecte de fonds pour{' '}
              <span className="gradient-text">amplifier votre impact.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Experts en gestion de loteries et de tirages caritatifs. Nous aidons les organismes de
              bienfaisance à bâtir des programmes de loteries électroniques performants — de la
              conception au tirage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="btn-primary !rounded-full inline-flex items-center"
              >
                Réservez une consultation gratuite
              </Link>
              <Link
                href="/fr/services"
                className="btn-secondary !rounded-full inline-flex items-center"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-amber-50 border-t border-amber-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <svg className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>Note :</strong> notre site est principalement en anglais. Les pages marketing
            principales sont disponibles en français ; notre blog, nos rapports de recherche et nos
            études de cas sont pour le moment en anglais uniquement. Une traduction complète est en
            cours. Notre équipe offre un service en français complet — n&apos;hésitez pas à{' '}
            <Link href="/#contact" className="underline font-semibold">
              nous contacter
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-900 mb-4">
              Des chiffres, pas des promesses.
            </h2>
            <p className="text-lg text-gray-600">
              L\u2019équipe de Launchpad a bâti et exploité certains des plus grands programmes de
              tirages électroniques en Amérique du Nord.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-3xl p-8 border border-gray-100">
                <div className="text-5xl font-bold gradient-text mb-2">{s.value}</div>
                <div className="text-sm text-gray-600 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              Nos services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-900 mb-4">
              Gestion complète de bout en bout.
            </h2>
            <p className="text-lg text-gray-600">
              Nous nous occupons des licences, de la plateforme, du marketing, du tirage et du
              support à la clientèle — pour que votre équipe puisse se concentrer sur la mission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-accent-blue/40 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-3 tracking-tight group-hover:text-accent-blue transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{s.description}</p>
                <span className="text-sm font-semibold text-accent-blue inline-flex items-center">
                  En savoir plus (anglais)
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Prêt à libérer le potentiel de votre collecte de fonds?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Réservez une consultation gratuite de 30 minutes. Nous discuterons de votre
                organisme, de vos objectifs, et nous vous dirons honnêtement si nous sommes le bon
                partenaire.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:hello@launchpadsolutions.ca"
                  className="flex items-center gap-3 text-white/90 hover:text-accent-cyan transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  hello@launchpadsolutions.ca
                </a>
                <a
                  href="tel:+18076304698"
                  className="flex items-center gap-3 text-white/90 hover:text-accent-cyan transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  1-807-630-4698
                </a>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/Torin-Glenn-Cass-SMALL.jpg"
                alt="Torin Gunnell"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
