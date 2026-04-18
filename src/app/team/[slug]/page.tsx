import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ArticleCard from '@/components/content/ArticleCard'
import Breadcrumbs from '@/components/content/Breadcrumbs'
import { TEAM, getTeamMemberBySlug, type TeamMember } from '@/lib/team'
import { getAllItems } from '@/lib/content'

interface Params {
  params: { slug: string }
}

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const m = getTeamMemberBySlug(params.slug)
  if (!m) return { title: 'Not Found' }
  return {
    title: `${m.name} — ${m.role} | Launchpad Solutions`,
    description: m.shortBio,
  }
}

function initialsOf(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function BigAvatar({ member }: { member: TeamMember }) {
  if (member.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
    )
  }
  const gradients: Record<string, string> = {
    'torin-gunnell': 'from-primary-900 via-primary-700 to-accent-blue',
    'cassandra-carangi': 'from-accent-blue via-blue-500 to-accent-cyan',
    'stephanie-francis': 'from-purple-700 via-purple-500 to-pink-500',
    'glenn-craig': 'from-emerald-600 via-emerald-500 to-teal-500',
  }
  const g = gradients[member.slug] ?? 'from-primary-900 via-primary-700 to-accent-blue'
  return (
    <div className={`w-full h-full bg-gradient-to-br ${g} relative`}>
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-orange/50 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl md:text-9xl font-bold text-white/40 tracking-tight">
          {initialsOf(member.name)}
        </div>
      </div>
    </div>
  )
}

export default function TeamMemberPage({ params }: Params) {
  const member = getTeamMemberBySlug(params.slug)
  if (!member) notFound()

  const articles = [...getAllItems('blog'), ...getAllItems('insights')]
    .filter((i) => i.author.toLowerCase() === member.name.toLowerCase())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    worksFor: { '@type': 'Organization', name: 'Launchpad Solutions' },
    description: member.shortBio,
    url: `/team/${member.slug}`,
    sameAs: member.linkedin && member.linkedin !== '#' ? [member.linkedin] : undefined,
  }

  const isAdvisor = member.roleType === 'advisor'
  const paragraphs = member.bio.split('\n\n')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <Breadcrumbs
              crumbs={[
                { name: 'Home', href: '/' },
                { name: 'Team', href: '/team' },
                { name: member.name },
              ]}
            />
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl shadow-sm">
                <BigAvatar member={member} />
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                    isAdvisor
                      ? 'bg-accent-cyan/20 text-primary-900 border border-accent-cyan/30'
                      : 'bg-accent-blue/10 text-accent-blue'
                  }`}
                >
                  {isAdvisor ? 'Strategic Advisor' : 'Team'}
                </span>
                <span className="text-sm text-gray-500 font-medium">{member.role}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 leading-tight mb-5">
                {member.name}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">{member.shortBio}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                {member.linkedin && member.linkedin !== '#' && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:underline"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:underline"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {member.email}
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {member.expertise.map((e) => (
                  <span
                    key={e}
                    className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {member.focusAreas && member.focusAreas.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-3">
              Focus areas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-8">
              Where {member.name.split(' ')[0]} spends {isAdvisor ? 'time advising' : 'most days'}.
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {member.focusAreas.map((area) => (
                <div key={area} className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="text-primary-900 font-semibold">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {articles.length > 0 && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-8">
              Articles by {member.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((item) => (
                <ArticleCard
                  key={`${item.type}-${item.slug}`}
                  href={`/${item.type === 'case-studies' ? 'case-studies' : item.type}/${item.slug}`}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  date={item.date}
                  readingTime={item.readingTime}
                  author={item.author}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-primary-900 gradient-mesh-card relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {isAdvisor
                  ? `Looking for strategic guidance?`
                  : `Want to work with ${member.name.split(' ')[0]} and the team?`}
              </h2>
              <p className="text-lg text-white/80">
                Book a free 30-minute consultation. We&apos;ll discuss your program and goals, and tell
                you honestly whether we&apos;re the right partner.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
