import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Launchpad Solutions',
  description: 'Gestion complète de loteries et de tirages caritatifs — de bout en bout.',
}

const services = [
  {
    title: 'Gestion de loteries 50/50',
    tagline: 'Notre programme phare.',
    href: '/services/5050-management',
    description:
      'Gestion de bout en bout des programmes de loteries 50/50 électroniques — conçue selon les standards de la plus grande 50/50 d\u2019hôpital au Canada.',
    highlights: [
      'Licences AGCO et multi-juridictionnelles',
      'Architecture de prix optimisée pour la conversion',
      'Cadence marketing hebdomadaire (courriel, SMS, publicité, RP)',
      'Opérations de tirage et rapports de qualité audit',
      'Support à la clientèle durant les périodes de pointe',
    ],
  },
  {
    title: 'Catch the Ace',
    tagline: 'Le rituel hebdomadaire.',
    href: '/services/catch-the-ace',
    description:
      'Tirages progressifs qui gardent vos donateurs engagés chaque semaine, toute l\u2019année — avec la rigueur opérationnelle et la conformité réglementaire que le format exige.',
    highlights: [
      'Licences de tirages progressifs AGCO',
      'Opérations de tirage en direct chaque semaine',
      'Contrôles de carton de cartes et d\u2019enveloppes scellées',
      'Marketing continu et engagement des donateurs',
      'Stratégie virale pour les dernières semaines',
    ],
  },
  {
    title: 'Tirages de prix',
    tagline: 'Nouveaux donateurs. Nouveaux revenus.',
    href: '/services/prize-raffle',
    description:
      'Tirages de prix physiques de grande valeur conçus comme canaux d\u2019acquisition — pour attirer de nouveaux donateurs et étendre la capacité totale de collecte de fonds.',
    highlights: [
      'Sélection de prix et relations fournisseurs',
      'Assurance de prix et contrôles financiers',
      'Narration créative (le prix comme protagoniste)',
      'Ciblage marketing régional',
      'Conversion de donateurs vers la 50/50 / dons récurrents',
    ],
  },
  {
    title: 'Consultation stratégique',
    tagline: 'Pour conseils et leadership.',
    href: '/services/consulting',
    description:
      'Audits de programme, études de faisabilité et évaluations stratégiques pour conseils d\u2019administration envisageant un nouveau programme — ou évaluant un programme existant qui a plafonné.',
    highlights: [
      'Évaluation de faisabilité et préparation',
      'Audit et évaluation comparative de programme existant',
      'Sélection et négociation de plateforme',
      'Planification transfrontalière et multi-juridictionnelle',
      'Préparation de dossier d\u2019investissement pour conseil',
    ],
  },
]

export default function FrenchServices() {
  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/fr" className="hover:text-accent-blue transition-colors font-medium">
              Accueil
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-700">Services</span>
          </nav>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              Gestion complète. <span className="gradient-text">De bout en bout.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous nous occupons des licences, de la plateforme, du marketing, du tirage et du
              support à la clientèle — pour que votre équipe puisse se concentrer sur la mission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.href}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-xs font-semibold text-accent-blue uppercase tracking-wider mb-3">
                  {s.tagline}
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-accent-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="text-sm font-semibold text-accent-blue hover:text-primary-900 transition-colors inline-flex items-center"
                >
                  Détails complets (anglais)
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Discutons de votre programme.
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Une consultation de 30 minutes est généralement suffisante pour savoir si nous sommes le
            bon partenaire.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Réserver une consultation
          </Link>
        </div>
      </section>
    </>
  )
}
