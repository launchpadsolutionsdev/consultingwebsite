import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Press & Media | Launchpad Solutions',
  description:
    'News coverage and media mentions of Launchpad Solutions client programs and the broader charitable gaming industry.',
}

const articles = [
  {
    outlet: 'CTV News',
    logo: '/images/ctv-logo.jpg',
    headline: 'Timmins man wins $7.7M in Thunder Bay hospital\'s 50/50 draw',
    excerpt:
      "A Timmins man is $7.7 million richer after winning the Thunder Bay Regional Health Sciences Foundation's 50/50 draw. The life-changing prize marks another record-breaking moment for the lottery program that has become the largest hospital 50/50 in Canada.",
    image: '/images/ctv-timmins-man.jpg',
    imageAlt: 'Timmins man wins $7.7M Thunder Bay 50/50',
    url: 'https://www.ctvnews.ca/northern-ontario/article/timmins-man-wins-77m-in-thunder-bay-hospitals-5050-draw/',
    date: '2025-11-12',
  },
  {
    outlet: 'CBC News',
    logo: '/images/cbc-logo.jpg',
    headline: 'Thunder Bay hospital foundation\'s 50/50 draw breaks records, surpasses $6.4 million',
    excerpt:
      "A couple from the Greater Sudbury community of Hanmer is now $6.4 million richer, after winning the 2024 Thunder Bay Regional Health Sciences Foundation's 50/50 draw.",
    image: '/images/cbc-nat-clem.jpg',
    imageAlt: 'Natalie and Clem Bigras with their $6.4 million cheque',
    url: 'https://www.cbc.ca/news/canada/thunder-bay/thunder-bay-hospital-foundation-record-breaking-draw-1.7422793',
    date: '2024-12-19',
  },
  {
    outlet: 'TB Newswatch',
    logo: '/images/tbnewswatch-logo.jpg',
    headline: 'Nolalu Man Wins $2.3M 50/50 Grand Prize',
    excerpt:
      "A Nolalu resident is celebrating after winning the Thunder Bay Regional Health Sciences Foundation's 50/50 Grand Prize of $2.3 million.",
    image: '/images/torin-cass-story.jpg',
    imageAlt: 'Nolalu man wins $2.3M 50/50 Grand Prize',
    url: 'https://www.tbnewswatch.com/local-news/nolalu-man-wins-23m-5050-grand-prize-11816107',
    date: '2024-06-10',
  },
]

export default function PressPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-4">
              Press & Media
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
              News coverage of programs we&apos;ve built.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A record-breaking raffle makes news. We&apos;ve been privileged to work on programs
              that have generated hundreds of press mentions across national and local media.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a) => (
              <a
                key={a.url}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={a.logo}
                      alt={a.outlet}
                      width={40}
                      height={40}
                      className="rounded-md object-contain bg-gray-50 p-1"
                    />
                    <span className="text-sm font-semibold text-gray-700">{a.outlet}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 leading-snug tracking-tight mb-3 group-hover:text-accent-blue transition-colors">
                    {a.headline}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 flex-1">{a.excerpt}</p>
                  <div className="mt-4 text-xs text-accent-blue font-semibold inline-flex items-center">
                    Read at {a.outlet}
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4 tracking-tight">
            Media inquiries
          </h2>
          <p className="text-gray-600 mb-6">
            For interviews, commentary, or industry context, reach out to our team directly.
          </p>
          <Link href="/#contact" className="btn-primary !rounded-full">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  )
}
