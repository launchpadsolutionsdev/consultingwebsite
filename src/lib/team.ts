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
      'Founded Launchpad after building and operating the record-breaking Thunder Bay 50/50 — Canada\u2019s largest hospital 50/50.',
    bio: "Torin founded Launchpad Solutions after building and operating the Thunder Bay Regional Health Sciences Foundation 50/50 — the largest hospital 50/50 raffle program in Canada. Over his career he has helped charitable programs raise more than $180M in ticket revenue.\n\nHe leads Launchpad's strategy and operational standards, staying close to every client engagement. His writing focuses on operational discipline, supporter psychology, and what it actually takes to build raffle programs that compound year over year.\n\nTorin believes the difference between great raffle programs and mediocre ones is rarely the platform — it's the rigor of the team running it. That thesis shapes how Launchpad operates every client engagement.",
    expertise: [
      'Program design',
      '50/50 + Catch the Ace operations',
      'Regulatory compliance',
      'Team leadership',
      'Hospital foundation strategy',
    ],
    focusAreas: ['Strategy', 'Client engagements', 'Operational standards', 'Writing'],
    image: '/images/torin-gunnell.webp',
    linkedin: '#',
    email: 'torin@launchpadsolutions.ca',
  },
  {
    slug: 'cassandra-carangi',
    name: 'Cassandra Carangi',
    role: 'Raffle Manager',
    roleType: 'team',
    shortBio:
      'Day-to-day operations lead across client raffle programs. Weekly cadence, draw operations, cross-client playbook consistency.',
    bio: "Cassandra leads the day-to-day operations of our client raffle programs. She owns the weekly operating rhythm that every Launchpad engagement runs on — marketing cadence, draw-day procedures, customer support escalation paths, and the quality control that keeps cycles performing predictably.\n\nShe's the person clients talk to most often, and the person our internal team looks to when a cycle is in its critical final week. Her judgment about when to push, when to hold, and when to escalate is the difference between cycles that close well and cycles that don't.\n\nCassandra\u2019s focus is consistency: making sure that the standards that built the Thunder Bay 50/50 are what every client program runs on, every single week.",
    expertise: [
      'Raffle operations',
      'Weekly cadence management',
      'Draw-day procedures',
      'Customer support leadership',
      'Client success',
    ],
    focusAreas: ['Daily operations', 'Client success', 'Quality control'],
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
      'Former CEO of the Thunder Bay Regional Health Sciences Foundation. Advises Launchpad on strategy, hospital foundation dynamics, and governance.',
    bio: "Glenn is the former CEO of the Thunder Bay Regional Health Sciences Foundation, where he led the foundation through the era that produced the largest hospital 50/50 raffle program in Canada. Under his leadership, the foundation built the operational culture and community relationships that the record-breaking program was built on.\n\nNow retired from his CEO role, Glenn serves as a Strategic Advisor to Launchpad Solutions. He advises on program strategy, hospital foundation dynamics, governance, and the specific challenges of building long-term donor relationships in regional communities.\n\nHe doesn't run day-to-day client work. He brings perspective, context, and hard-earned judgment to the strategic decisions that matter most — for us and for our clients.",
    expertise: [
      'Hospital foundation leadership',
      'Charitable gaming strategy',
      'Board and governance',
      'Long-term donor strategy',
      'Community relationships',
    ],
    focusAreas: ['Strategic guidance', 'Hospital foundation mentorship', 'Governance'],
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
