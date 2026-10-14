import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-01'})

const block = (key: string, text: string) => ({
  _key: key,
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: [{_key: `${key}-span`, _type: 'span', marks: [], text}],
})

const ref = (key: string, id: string) => ({_key: key, _type: 'reference', _ref: id})

const categorySeeds: ReadonlyArray<readonly [string, string, string, number]> = [
  ['category-mixed-use', 'Mixed Use', 'mixed-use', 1],
  ['category-retail-stores', 'Retail Stores', 'retail-stores', 2],
  ['category-residential', 'Residential', 'residential', 3],
  ['category-commercial', 'Commercial', 'commercial', 4],
  ['category-ground-up', 'Ground-Up', 'ground-up', 5],
]

const categories = categorySeeds.map(([id, title, slug, displayOrder]) => ({
  _id: id,
  _type: 'category',
  title,
  slug: {_type: 'slug', current: slug},
  displayOrder,
  isActive: true,
}))

const serviceSeeds: ReadonlyArray<readonly [string, string, string, number]> = [
  [
    'service-ground-up-new-construction',
    'Ground-Up & New Construction',
    'ground-up-new-construction',
    1,
  ],
  ['service-construction-management', 'Construction Management', 'construction-management', 2],
  ['service-renovations-build-outs', 'Renovations & Build-Outs', 'renovations-build-outs', 3],
  ['service-residential-portfolio', 'Residential Portfolio', 'residential-portfolio', 4],
  ['service-commercial-portfolio', 'Commercial Portfolio', 'commercial-portfolio', 5],
]

const services = serviceSeeds.map(([id, title, slug, displayOrder]) => ({
  _id: id,
  _type: 'service',
  title,
  slug: {_type: 'slug', current: slug},
  displayOrder,
  isActive: true,
}))

const partner = {
  _id: 'partner-pbs',
  _type: 'partner',
  name: 'PBS',
  slug: {_type: 'slug', current: 'pbs'},
  role: 'Expediting Partner',
  description:
    'Expediting partner supporting agency navigation and approvals for the 221 Middleton Street project.',
  publiclyVisible: true,
}

const project = {
  _id: 'drafts.project-221-middleton-street',
  _type: 'project',
  title: '221 Middleton Street',
  internalProjectNumber: '221 Middleton Street',
  slug: {_type: 'slug', current: '221-middleton-street'},
  status: 'completed',
  primaryCategory: {_type: 'reference', _ref: 'category-mixed-use'},
  projectType: 'Mixed-Use Residential',
  tags: ['Inclusionary Housing', 'Regulatory Recovery', 'Remediation'],
  featured: false,
  portfolioVisible: true,
  showClientOnWebsite: false,
  location: {
    _type: 'location',
    displayLocation: 'Broadway Triangle, Brooklyn, NY',
    showStreetAddress: false,
    neighborhood: 'Broadway Triangle',
    borough: 'Brooklyn',
    city: 'New York',
    state: 'NY',
  },
  projectSize: 21000,
  sizeUnit: 'sq-ft',
  numberOfUnits: 23,
  completionDate: '2021-03-01',
  services: [
    ref('service-ground-up', 'service-ground-up-new-construction'),
    ref('service-construction-management', 'service-construction-management'),
  ],
  shortExcerpt:
    'JCCM revived a three-year-stalled mixed-use residential development in Brooklyn and established a clear path to completion.',
  challengeSummary:
    'Resurrect a completely stalled, three-year dormant project mired in regulatory complexities.',
  solutionSummary:
    'JCCM provided integrated development management and construction expertise to navigate agency approvals and recommence work with a clear path to completion.',
  resultSummary:
    'The project was successfully reopened and remediated, avoiding further financial losses and delivering a new source of quality housing for Brooklyn.',
  overviewHeading: 'Project Overview',
  overview: [
    block(
      'overview-1',
      '221 Middleton Street is a significant 21,000-square-foot new construction project in the dynamic Broadway Triangle neighborhood of Brooklyn. Designed to include 23 modern apartments with provisions for inclusionary housing, the project aims to contribute to the neighborhood’s growth and diversity.',
    ),
    block(
      'overview-2',
      'After initial work began, the project encountered regulatory hurdles that led to a complete work stoppage lasting three years, threatening its viability and creating significant carrying costs for the ownership group.',
    ),
  ],
  challengeHeading: 'The Challenge: A Project in Perpetual Pause',
  challengeIntroduction: [
    block(
      'challenge-1',
      'The primary challenge was not one of construction, but of resolution and reactivation. The project was effectively frozen by a regulatory impasse, financial stagnation, loss of institutional knowledge, and remedial complexity.',
    ),
    block(
      'challenge-2',
      'The owner needed a partner with the ability to untangle bureaucratic obstacles, accurately assess the site’s current condition, and execute the build-out with precision and accountability.',
    ),
  ],
  challengePoints: [
    'Regulatory impasse',
    'Financial stagnation',
    'Loss of institutional knowledge',
    'Remedial complexity',
  ],
  solutionHeading: 'The JCCM Solution: Integrated Expertise for a Turnaround',
  solutionIntroduction: [
    block(
      'solution-1',
      'JCCM was brought on with a dual mandate: to serve as both the Development Manager and the Self-Performing General Contractor. This integrated approach was the key to unlocking the project’s potential.',
    ),
  ],
  phases: [
    {
      _key: 'phase-1',
      _type: 'projectPhase',
      label: 'Phase 1',
      title: 'Agency Navigation with PBS',
      summary:
        'JCCM and PBS worked together to break the regulatory logjam and establish a path to compliance.',
      body: [
        block(
          'phase-1-body-1',
          'JCCM partnered with PBS, an expediting firm, to review existing permits, stop-work orders, and departmental correspondence. The team used its knowledge of NYC building codes and agency protocols to identify a path to compliance and coordinate communication with city agencies.',
        ),
        block(
          'phase-1-body-2',
          'Within three months, JCCM and PBS secured the approvals needed to officially reopen the job after it had remained stalled for three years.',
        ),
      ],
      keyPoints: [
        'Reviewed permits, stop-work orders, and agency correspondence',
        'Coordinated with DOB, DOT, FDNY, and other city agencies',
        'Secured approvals to reopen the project within three months',
      ],
    },
    {
      _key: 'phase-2',
      _type: 'projectPhase',
      label: 'Phase 2',
      title: 'Strategic Remobilization & Remediation',
      summary:
        'JCCM used its self-performing capabilities to assess the dormant site and begin critical remedial work.',
      body: [
        block(
          'phase-2-body-1',
          'JCCM’s in-house crews conducted a detailed structural and site assessment to document conditions after years of dormancy. Necessary remedial work began immediately to address weather-related wear and damage to the existing structure.',
        ),
        block(
          'phase-2-body-2',
          'Self-performing the initial remedial phases maintained quality control, managed costs, and avoided delays associated with mobilizing multiple outside subcontractors for complex foundational work.',
        ),
      ],
      keyPoints: [
        'Detailed structural and site assessment',
        'Immediate remediation of weather-related wear and damage',
        'Direct quality, schedule, and cost control',
      ],
    },
    {
      _key: 'phase-3',
      _type: 'projectPhase',
      label: 'Phase 3',
      title: 'In-House Construction',
      summary:
        'Acting as general contractor, JCCM maintained direct control over scheduling, budgeting, and execution.',
      body: [
        block(
          'phase-3-body-1',
          'JCCM provided single-point accountability for scheduling, budgeting, and construction execution. Self-performing key scopes allowed the team to control labor and material costs directly while responding quickly to site conditions and sequencing requirements.',
        ),
      ],
      keyPoints: [
        'Single-point accountability',
        'Greater cost certainty',
        'Efficient and flexible construction sequencing',
      ],
    },
  ],
  resultsHeading: 'Results & Value Delivered',
  resultsIntroduction: [
    block(
      'results-intro-1',
      'JCCM’s intervention transformed a stagnant liability into a productive residential asset for the ownership group and the Brooklyn community.',
    ),
  ],
  results: [
    {
      _key: 'result-1',
      _type: 'resultItem',
      heading: 'Three years stalled to three months mobilized',
      description: 'JCCM navigated city agencies and reopened the job within three months.',
    },
    {
      _key: 'result-2',
      _type: 'resultItem',
      heading: 'Financial recovery',
      description:
        'The project moved out of financial limbo and toward becoming a revenue-generating property.',
    },
    {
      _key: 'result-3',
      _type: 'resultItem',
      heading: 'March 2021 delivery',
      description:
        'The project was delivered on schedule in March 2021 despite the significant initial delay.',
    },
    {
      _key: 'result-4',
      _type: 'resultItem',
      heading: 'Hands-on quality control',
      description:
        'The self-perform approach supported quality control during the critical remedial phase.',
    },
    {
      _key: 'result-5',
      _type: 'resultItem',
      heading: 'New housing delivered',
      description:
        'The completed project delivered 23 new homes, including inclusionary housing units, to Brooklyn.',
    },
  ],
  metrics: [
    {
      _key: 'metric-stalled',
      _type: 'projectMetric',
      value: '3 Years',
      label: 'Project Stalled',
      supportingText: 'Before JCCM’s intervention',
    },
    {
      _key: 'metric-remobilized',
      _type: 'projectMetric',
      value: '3 Months',
      label: 'Time to Remobilization',
    },
    {
      _key: 'metric-homes',
      _type: 'projectMetric',
      value: '23',
      label: 'Homes Delivered',
      supportingText: 'Including inclusionary housing units',
    },
  ],
  partners: [ref('partner-pbs', 'partner-pbs')],
  seo: {
    _type: 'seo',
    title: '221 Middleton Street Mixed-Use Project | JCCM',
    description:
      'See how JCCM revived a stalled 21,000-square-foot mixed-use residential project in Brooklyn and delivered 23 inclusionary housing apartments.',
    primaryTargetPhrase: 'mixed-use construction Brooklyn',
    secondaryTargetPhrases: [
      'Brooklyn general contractor',
      'inclusionary housing construction',
      'construction management NYC',
    ],
    noIndex: false,
  },
}

const testimonial = {
  _id: 'drafts.testimonial-221-middleton-owner',
  _type: 'testimonial',
  quote:
    'JCCM took a project that was left for dead and brought it to life. Their ability to handle both the city and the construction site saved us time, money, and immense frustration. They weren’t just contractors; they were problem-solvers and true partners.',
  attributionLabel: 'Project Owner',
  showCompany: false,
  relatedProject: {
    _type: 'reference',
    _ref: 'project-221-middleton-street',
    _weak: true,
  },
  featuredOnHomepage: false,
  publicationApproved: false,
}

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  portfolioHeading: 'Portfolio',
  projectsPerPage: 12,
}

type SeedDocument = Record<string, unknown> & {_id: string; _type: string}

const documents: SeedDocument[] = [
  ...categories,
  ...services,
  partner,
  project,
  testimonial,
  siteSettings,
]

async function seed() {
  for (const document of documents) {
    const result = await client.createIfNotExists(document)
    console.log(`${result._type}: ${result._id}`)
  }
}

seed().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
