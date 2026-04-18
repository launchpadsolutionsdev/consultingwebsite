export interface TeamMember {
  slug: string
  name: string
  role: string
  roleType: 'team' | 'advisor'
  shortBio: string
  bio: string
  expertise: string[]
  focusAreas?: string[]
  image?: string
  linkedin?: string
  email?: string
}

export const TEAM: TeamMember[] = [
  {
    slug: 'torin-gunnell',
    name: 'Torin Gunnell',
    role: 'Founder & CEO',
    roleType: 'team',
    shortBio:
      'Founder of Launchpad. Helped architect the strategy that grew the Thunder Bay 50/50 from $17M to $60.2M in annual revenue — Canada\u2019s #1 hospital 50/50.',
    bio: "Torin founded Launchpad Solutions on a simple conviction: charitable gaming is one of the most underestimated revenue engines in the nonprofit sector, and the organizations running it deserve partners who understand it at the level of a practitioner, not a consultant.\n\nOver the past five years at the Thunder Bay Regional Health Sciences Foundation, Torin helped architect the strategy that grew the Thunder Bay 50/50 from $17M to $60.2M in annual revenue, establishing it as the #1 hospital 50/50 in Canada and delivering the largest single-draw grand prize in Canadian hospital 50/50 history ($7.7M, December 2025). Under his leadership, the Foundation's gaming portfolio expanded from a single 50/50 draw into four distinct product lines — including Thunder Bay Catch the Ace, the Cruising For a Cure vehicle raffle, and a B2B partnership to digitize and operate the Fort William Rotary House Lottery — while the physical retail division grew 23% year-over-year to $2.6M, supported by a flagship storefront at Intercity Shopping Centre.\n\nTorin's approach treats charitable gaming as a full-stack discipline. He has built predictive sales models with 95% accuracy, scaled a $3M+ annual digital and traditional media budget across Meta, TikTok, Spotify, Bell Media, Crave, and programmatic channels, and led regulatory advocacy with the Alcohol and Gaming Commission of Ontario (AGCO) that secured policy amendments authorizing the subscription model and the proprietary Rewards+ loyalty program. His work on Meta has earned induction into the Marketing Pro and Medium Business Leadership programs — distinctions reserved for top-percentile advertisers globally, and rare for any Canadian nonprofit.\n\nBeyond strategy, Torin is a builder. He has developed custom software platforms that power modern lottery operations from end to end, integrating AI to automate customer experience, creative workflows, and recurring administrative tasks — reducing operational overhead while freeing teams to focus on the high-value, high-creativity work that actually drives growth.\n\nTorin holds an MBA in Social Enterprise Leadership from the University of Fredericton and an Honours Bachelor of Commerce from Lakehead University. He also operates a boutique cinematography studio that has delivered commercial, broadcast, and wedding work for clients across Ontario, Manitoba, and Quebec — a creative practice that directly informs the production quality Launchpad brings to every client engagement.",
    expertise: [
      'Charitable gaming strategy',
      '50/50 + Catch the Ace operations',
      'Predictive sales modeling',
      'Paid media at scale',
      'AGCO regulatory advocacy',
      'Lottery software & AI',
    ],
    focusAreas: ['Strategy', 'Client engagements', 'Product & software', 'Creative direction'],
    image: '/images/torin-gunnell.webp',
    linkedin: '#',
    email: 'torin@launchpadsolutions.ca',
  },
  {
    slug: 'cassandra-carangi',
    name: 'Cassandra Carangi',
    role: 'Director of Marketing & Operations',
    roleType: 'team',
    shortBio:
      'Creative and operational force behind the campaigns, content, and day-to-day execution that keep large-scale charitable gaming programs performing at their peak.',
    bio: "Cassandra is the creative and operational force behind the campaigns, content, and day-to-day execution that keep large-scale charitable gaming programs performing at their peak.\n\nAt the Thunder Bay Regional Health Sciences Foundation, she has helped support one of the largest hospital lottery portfolios in Canada — the Thunder Bay 50/50, Thunder Bay Catch the Ace, and a growing stable of gaming initiatives that collectively generate tens of millions of dollars annually for healthcare across Northwestern Ontario. Her work spans the full lifecycle of lottery operations: draw execution, regulatory compliance, prize fulfillment, campaign strategy, paid media, creative production, and the front-line player communications that build the trust and retention behind every successful program.\n\nOn the creative side, Cassandra produces the video, social, and email content that carries each campaign — aligning creative direction with campaign strategy so that what audiences see is never disconnected from what the numbers say is working. She develops and rolls out monthly campaign strategies, translating seasonal themes and audience insights into high-performing initiatives, and manages paid media optimization across Meta to drive consistent program growth and efficient customer acquisition at scale.\n\nOn the operations side, Cassandra oversees end-to-end prize fulfillment — coordinating winner communications, cheque processing, and distribution while adhering to the internal controls and regulatory standards that charitable gaming demands. She manages front-line participant communications and issue resolution, a role that plays directly into long-term player retention and the trust that compounds over years of program growth. She also analyzes sales trends, campaign performance, and competitor activity to generate the actionable insights that inform what comes next, and she supports the rollout of new lottery features and product enhancements designed to increase engagement and diversify revenue.\n\nWhat sets Cassandra apart is the combination. It is rare to find someone who can sit in a creative review in the morning, manage a high-stakes prize handover in the afternoon, and close out the day analyzing a competitor's ad strategy — and who genuinely enjoys all three. That range is exactly what modern charitable gaming programs need, and it is what clients get when they work with her.\n\nCassandra is particularly passionate about the intersection of storytelling and community impact, and about the belief that when creative and data work in lockstep, charitable programs do not just grow — they connect.",
    expertise: [
      'Campaign strategy',
      'Creative production (video, social, email)',
      'Paid media optimization',
      'Prize fulfillment & compliance',
      'Player communications & retention',
      'Sales & competitor analysis',
    ],
    focusAreas: ['Marketing', 'Operations', 'Creative direction', 'Client success'],
    linkedin: '#',
    email: 'cassandra@launchpadsolutions.ca',
  },
  {
    slug: 'stephanie-francis',
    name: 'Stephanie Francis',
    role: 'Administrative Assistant',
    roleType: 'team',
    shortBio:
      'Keeps licensing, compliance reporting, and internal operations moving. The person who makes sure nothing falls through the cracks.',
    bio: "Stephanie is the connective tissue of Launchpad's internal operations. She owns licensing application tracking, ongoing compliance reporting across jurisdictions, supporter communications logistics, and the hundreds of small things that keep a client program clean.\n\nIn a business where a single missed reporting deadline can jeopardize a license, and a single inaccurate record can create compliance exposure, her role is quietly foundational. She keeps Torin and Cassandra free to focus on strategy and client outcomes by making sure the administrative and regulatory groundwork is always in order.\n\nIf your program is in good standing with every regulator on the right day, with the right records, that's Stephanie's work.",
    expertise: [
      'Licensing coordination',
      'Compliance reporting',
      'Internal operations',
      'Record keeping',
      'Client communications',
    ],
    focusAreas: ['Administration', 'Compliance', 'Internal operations'],
    email: 'stephanie@launchpadsolutions.ca',
  },
  {
    slug: 'glenn-craig',
    name: 'Glenn Craig',
    role: 'Strategic Advisor',
    roleType: 'advisor',
    shortBio:
      'President & CEO of the Thunder Bay Regional Health Sciences Foundation since 2008, and the founding visionary behind the Thunder Bay 50/50.',
    bio: "Glenn brings more than three decades of senior leadership in Canadian healthcare philanthropy to the Launchpad team, and a r\u00e9sum\u00e9 of accomplishments that few in the sector can match.\n\nAs President & CEO of the Thunder Bay Regional Health Sciences Foundation since 2008, Glenn has built one of the top-performing hospital foundations in the country — $60M+ in annual revenue, more than 40,000 active donors, over 200,000 charitable gaming supporters, and more than $81M granted to advance regional healthcare since the merger he architected that year. That merger, which united the Northern Cancer Research Foundation\u2013Northwestern Ontario Region with the former Thunder Bay Regional Health Sciences Foundation, created a unified philanthropic force that has reshaped what is possible for healthcare in Northwestern Ontario.\n\nGlenn is the founding visionary behind the Thunder Bay 50/50. Launched in 2021 under his leadership, the program has grown into the #1 hospital 50/50 in Canada, with more than $200M in cumulative revenue and a record $7.7M single-draw grand prize — the largest in Canadian hospital 50/50 history. He has championed the diversification of the charitable gaming portfolio into four distinct product lines and has been a consistent advocate for sector modernization, including the regulatory work that introduced the subscription model and the proprietary Rewards+ loyalty program to Ontario's charitable gaming landscape.\n\nHis track record in traditional fundraising is equally formidable. Glenn has led transformational multi-year capital campaigns, including Our Hearts at Home ($23.5M) and Exceptional Cancer Care ($7.2M), and has built an integrated development program encompassing annual giving, major gifts, capital campaigns, planned giving, corporate partnerships, special events, and grants — all grounded in the authentic donor relationships that have defined his career.\n\nGlenn is a sought-after speaker on 50/50 lotteries, major gifts, governance, mergers, and branding, having presented at the Western Canada Fundraising Conference, the Association of Healthcare Philanthropy Canada Conference, the AFP Greater Toronto Congress, the New England Association of Healthcare Philanthropy, and the Ontario Hospital Association's Governance Centre of Excellence, among others. He has been recognized with multiple industry honours, including a Golden Quill finalist nomination (IABC), Platinum and Gold T-CAAN awards, the Thunder Bay Chamber of Commerce Business Excellence Award, and the Association of Healthcare Philanthropy Showcase Award for Best Website.\n\nA Certified Fundraising Executive (CFRE) since 1996, Glenn holds a Leadership Certificate from Queen's University Executive Development Centre, a Bachelor of Arts in Economics & History from the University of Western Ontario, and a Bachelor of Education from Lakehead University. He is a proud Rotarian and Past President of the Fort William Rotary Club (2024\u201325), and has served on the boards of organizations ranging from the Thunder Bay Historical Museum Society to the Ontario Hospital Association's Governance Centre of Excellence Steering Committee.\n\nAt Launchpad, Glenn advises on strategy, governance, and the long-term trajectory of the charitable gaming sector — bringing the perspective of a leader who has spent his career not just operating in the sector, but shaping it.",
    expertise: [
      'Hospital foundation leadership',
      'Capital campaigns & major gifts',
      '50/50 lottery strategy',
      'Governance & board leadership',
      'Mergers & brand strategy',
      'Sector advocacy',
    ],
    focusAreas: ['Strategic guidance', 'Governance', 'Sector advocacy', 'Speaking'],
    image: '/images/glenn-craig.jpeg',
  },
]

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return TEAM.find((m) => m.slug === slug)
}

export function getTeamMemberByName(name: string): TeamMember | undefined {
  return TEAM.find((m) => m.name.toLowerCase() === name.toLowerCase())
}

export function teamSlugFromName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const STAFF_MEMBERS = TEAM.filter((m) => m.roleType === 'team')
export const ADVISORS = TEAM.filter((m) => m.roleType === 'advisor')
