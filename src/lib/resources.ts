export interface Resource {
  slug: string
  type: 'Checklist' | 'Guide' | 'Tool' | 'Template' | 'Report' | 'Worksheet'
  category: string
  title: string
  description: string
  length: string
  /** If this is an external tool (e.g. interactive ROI calculator), the target path. */
  toolHref?: string
}

export const RESOURCES: Resource[] = [
  {
    slug: 'raffle-launch-checklist',
    type: 'Checklist',
    category: 'Checklists',
    title: 'The Raffle Launch Checklist',
    description:
      'A 60-point checklist covering everything from licensing to launch-day operations. Used internally on every new client engagement.',
    length: '60 checkpoints across 6 phases',
  },
  {
    slug: 'agco-license-walkthrough',
    type: 'Guide',
    category: 'Guides',
    title: 'AGCO License Application Walkthrough',
    description:
      'A plain-English, section-by-section guide to preparing an AGCO raffle license application \u2014 written by someone who\u2019s submitted dozens.',
    length: '9 sections · ~22 minute read',
  },
  {
    slug: 'roi-calculator',
    type: 'Tool',
    category: 'Tools',
    title: 'Raffle Program ROI Calculator',
    description:
      'An interactive tool that models expected revenue, costs, and net proceeds for a raffle program. Inputs tuned to realistic industry data.',
    length: 'Interactive · ~5 minutes',
    toolHref: '/resources/roi-calculator',
  },
  {
    slug: 'marketing-calendar-template',
    type: 'Template',
    category: 'Templates',
    title: 'Raffle Marketing Calendar Template',
    description:
      'A full 12-week marketing calendar template: email sequences, social posts, paid media flighting, and press milestone planning. Drop-in ready.',
    length: '12-week plan, 4 channels',
  },
  {
    slug: 'state-of-charitable-gaming-2026',
    type: 'Report',
    category: 'Reports',
    title: 'State of Charitable Gaming 2026',
    description:
      'Our flagship industry research report. Covers market size, growth drivers, regulatory trends, and strategic implications.',
    length: 'Full report · ~18 minute read',
    toolHref: '/insights/state-of-charitable-gaming-2026',
  },
  {
    slug: 'prize-architecture-worksheet',
    type: 'Worksheet',
    category: 'Checklists',
    title: 'Prize Architecture Worksheet',
    description:
      'A structured worksheet for designing and optimizing your prize tier structure \u2014 grand prize, early-bird thresholds, secondary and bonus draws.',
    length: '8 sections · ~25 minute exercise',
  },
]

export function getResourceBySlug(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug)
}
