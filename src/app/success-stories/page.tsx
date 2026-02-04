import Link from 'next/link'

const stats = [
  { label: 'Total Revenue Generated', value: '$180M+' },
  { label: 'Largest Hospital 50/50 in Canada', value: '#1' },
  { label: 'Record Monthly Revenue', value: '$15.7M' },
  { label: 'Grand Prizes Awarded', value: '50+' },
]

const articles = [
  {
    outlet: 'CTV News',
    logo: '/images/ctv-logo.jpg',
    headline: 'Timmins man wins $7.7M in Thunder Bay hospital\'s 50/50 draw',
    excerpt: 'A Timmins man is $7.7 million richer after winning the Thunder Bay Regional Health Sciences Foundation\'s 50/50 draw. The life-changing prize marks another record-breaking moment for the lottery program that has become the largest hospital 50/50 in Canada.',
    image: '/images/ctv-timmins-man.jpg',
    url: 'https://www.ctvnews.ca/northern-ontario/article/timmins-man-wins-77m-in-thunder-bay-hospitals-5050-draw/',
    imageAlt: 'Timmins man wins $7.7M Thunder Bay 50/50',
  },
  {
    outlet: 'CBC News',
    logo: '/images/cbc-logo.jpg',
    headline: 'Thunder Bay hospital foundation\'s 50/50 draw breaks records, surpasses $6.4 million',
    excerpt: 'A couple from the Greater Sudbury community of Hanmer is now $6.4 million richer, after winning the 2024 Thunder Bay Regional Health Sciences Foundation\'s 50/50 draw. Natalie Bigras and her husband Clem received the life-changing phone call on Jan. 3, telling them their ticket was drawn for the grand prize.',
    image: '/images/cbc-nat-clem.jpg',
    url: 'https://www.cbc.ca/news/canada/thunder-bay/thunder-bay-hospital-foundation-record-breaking-draw-1.7422793',
    imageAlt: 'Natalie and Clem Bigras with their $6.4 million cheque',
  },
  {
    outlet: 'TB Newswatch',
    logo: '/images/tbnewswatch-logo.jpg',
    headline: 'Nolalu Man Wins $2.3M 50/50 Grand Prize',
    excerpt: 'A Nolalu resident is celebrating after winning the Thunder Bay Regional Health Sciences Foundation\'s 50/50 Grand Prize of $2.3 million. The win continues the remarkable success of the Thunder Bay 50/50 program, which has raised millions for healthcare in Northwestern Ontario.',
    image: '/images/torin-cass-story.jpg',
    url: 'https://www.tbnewswatch.com/local-news/nolalu-man-wins-23m-5050-grand-prize-11816107',
    imageAlt: 'Nolalu man wins $2.3M 50/50 Grand Prize',
  },
]

export default function SuccessStoriesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover how the Thunder Bay 50/50 became the largest hospital 50/50 lottery in Canada,
              raising over $180 million for healthcare.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-8 bg-gray-50">
        {articles.map((article, index) => (
          <div
            key={article.headline}
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Media Logo */}
                  <div className="mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.logo}
                      alt={article.outlet}
                      className="h-8 w-auto opacity-70"
                    />
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    &ldquo;{article.headline}&rdquo;
                    <span className="text-pink-500"> — {article.outlet}</span>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    Full Article Here
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-auto object-cover"
                    />
                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let us help you build a raffle program that generates headlines and transforms your fundraising.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}
