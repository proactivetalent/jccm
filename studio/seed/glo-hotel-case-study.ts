import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-01'})

const projectId = 'project-glo-hotel-brooklyn-nyc'

function blocks(prefix: string, paragraphs: string[]) {
  return paragraphs.map((text, index) => ({
    _key: `${prefix}-${index + 1}`,
    _type: 'block',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _key: `${prefix}-${index + 1}-text`,
        _type: 'span',
        marks: [],
        text,
      },
    ],
  }))
}

function reference(key: string, id: string) {
  return {_key: key, _type: 'reference', _ref: id}
}

function section(key: string, heading: string, description: string) {
  return {_key: key, _type: 'caseStudySection', heading, description}
}

const project = {
  _id: `drafts.${projectId}`,
  _type: 'project',
  title: 'GLō Hotel New York',
  slug: {_type: 'slug', current: 'glo-hotel-brooklyn-nyc'},
  status: 'completed',
  primaryCategory: {_type: 'reference', _ref: 'category-commercial'},
  additionalCategories: [reference('category-ground-up', 'category-ground-up')],
  projectType: 'Hotel Development & Construction',
  tags: [
    'GLō Hotel',
    'GLo Hotel',
    'Brooklyn',
    'Sunset Park',
    'Hotel Construction',
    'Hospitality Construction',
    'Commercial Construction',
    'Ground-Up & New Construction',
    'New York City',
    'Hotel Development',
  ],
  featured: false,
  portfolioVisible: false,
  showClientOnWebsite: true,
  publicClientName: 'REDA Group',
  location: {
    _type: 'location',
    displayLocation: 'Sunset Park, Brooklyn, New York, NY',
    streetAddress: '850 4th Ave, Brooklyn, NY',
    showStreetAddress: true,
    neighborhood: 'Sunset Park',
    borough: 'Brooklyn',
    city: 'New York',
    state: 'NY',
  },
  projectSize: 30000,
  sizeUnit: 'sq-ft',
  numberOfUnits: 88,
  buildingUse: 'Hotel / Hospitality',
  services: [
    reference('service-construction-management', 'service-construction-management'),
    reference('service-ground-up', 'service-ground-up-new-construction'),
    reference('service-commercial', 'service-commercial-portfolio'),
  ],
  shortExcerpt:
    'Development and construction management for New York’s first GLō Hotel, a 30,000-square-foot, 88-room hospitality project in Sunset Park, Brooklyn.',
  challengeSummary:
    'The project required coordinated development and construction management for a new 30,000-square-foot, 88-room hotel with an $8.6 million construction cost.',
  solutionSummary:
    'JCCM served as construction and development manager, coordinating with REDA Group and Ellipses Design across the development and construction of the hotel.',
  resultSummary:
    'The project delivered the first GLō Hotel in New York: a 30,000-square-foot, 88-room hospitality development in Sunset Park, Brooklyn.',
  overviewHeading: 'Project Overview',
  overview: blocks('overview', [
    'REDA Group engaged JCCM as the construction and development manager for a 30,000-square-foot, 88-room hotel located at 850 4th Ave in Sunset Park, Brooklyn.',
    'The project involved the development and construction of the first GLō Hotel in New York. JCCM served in both development and construction management roles throughout the project.',
    "Ellipses Design served as the project's architect and engineer.",
    'With a construction cost of $8.6 million, the project represents a significant hospitality development in Brooklyn.',
  ]),
  challengeHeading: 'The Challenge',
  challengeIntroduction: blocks('challenge-intro', [
    'The project involved the development and construction of a 30,000-square-foot hotel containing 88 rooms in Sunset Park, Brooklyn.',
  ]),
  challengeSections: [
    section(
      'challenge-hotel-development',
      'Hotel Development',
      'The project required the development and construction of a new 88-room GLō Hotel.',
    ),
    section(
      'challenge-project-scale',
      'Project Scale',
      'The development covered approximately 30,000 square feet with a construction cost of $8.6 million.',
    ),
    section(
      'challenge-management',
      'Development & Construction Management',
      'JCCM was responsible for both development and construction management for the project.',
    ),
  ],
  solutionHeading: 'The JCCM Solution',
  solutionIntroduction: blocks('solution-intro', [
    'JCCM served as the construction and development manager for the project, overseeing the development and construction of the GLō Hotel.',
  ]),
  solutionSections: [
    section(
      'solution-development',
      'Development Management',
      'JCCM managed its development responsibilities for the 30,000-square-foot, 88-room hotel on behalf of REDA Group.',
    ),
    section(
      'solution-construction',
      'Construction Management',
      'JCCM managed the construction component of the hotel development, with a stated construction cost of $8.6 million.',
    ),
    section(
      'solution-coordination',
      'Project Team Coordination',
      'Working with REDA Group and Ellipses Design, JCCM coordinated its responsibilities across the development and construction of the hotel.',
    ),
  ],
  phases: [
    {
      _key: 'phase-development-management',
      _type: 'projectPhase',
      label: 'Phase 1',
      title: 'Development Management',
      summary:
        'JCCM served as development manager for the 30,000-square-foot, 88-room GLō Hotel project in Sunset Park, Brooklyn.',
      body: blocks('phase-development-management', [
        'JCCM managed the development of the hotel project for REDA Group, supporting the development of the first GLō Hotel in New York.',
      ]),
      keyPoints: [
        'Development management',
        'REDA Group',
        '30,000-square-foot hotel',
        '88 rooms',
        'Sunset Park, Brooklyn',
      ],
    },
    {
      _key: 'phase-construction-management',
      _type: 'projectPhase',
      label: 'Phase 2',
      title: 'Construction Management',
      summary:
        'JCCM served as construction manager for the development and construction of the 30,000-square-foot GLō Hotel.',
      body: blocks('phase-construction-management', [
        'JCCM managed the construction component of the hotel development, with a stated construction cost of $8.6 million.',
      ]),
      keyPoints: [
        'Construction management',
        '30,000 SF',
        '88-room hotel',
        '$8.6 million construction cost',
      ],
    },
    {
      _key: 'phase-project-completion',
      _type: 'projectPhase',
      label: 'Phase 3',
      title: 'Project Completion',
      summary:
        'The project delivered the first GLō Hotel in New York at 850 4th Ave in Sunset Park, Brooklyn.',
      body: blocks('phase-project-completion', [
        'JCCM completed its development and construction management role for the 30,000-square-foot, 88-room hotel project.',
      ]),
      keyPoints: ['First GLō Hotel in New York', '88 rooms', '30,000 SF', 'Sunset Park, Brooklyn'],
    },
  ],
  resultsHeading: 'Results & Value Delivered',
  resultsIntroduction: blocks('results-intro', [
    'JCCM served as the construction and development manager for the development of the first GLō Hotel in New York.',
    'The completed project is a 30,000-square-foot, 88-room hotel located in Sunset Park, Brooklyn, with a construction cost of $8.6 million.',
  ]),
  results: [
    {
      _key: 'result-first-glo-hotel',
      _type: 'resultItem',
      heading: 'First GLō Hotel in New York',
      description: 'The project developed the first GLō Hotel in New York.',
    },
    {
      _key: 'result-hospitality-development',
      _type: 'resultItem',
      heading: '30,000 SF Hospitality Development',
      description:
        'The project delivered a 30,000-square-foot hotel development in Sunset Park, Brooklyn.',
    },
    {
      _key: 'result-hotel-rooms',
      _type: 'resultItem',
      heading: '88-Room Hotel',
      description: 'The completed development includes 88 hotel rooms.',
    },
  ],
  closingStatement: blocks('closing', [
    'JCCM provided development and construction management for the GLō Hotel project, supporting the delivery of the first GLō Hotel in New York.',
  ]),
  metrics: [
    {
      _key: 'metric-size',
      _type: 'projectMetric',
      value: '30,000 SF',
      label: 'Project Size',
      supportingText: 'The hotel development covers approximately 30,000 square feet.',
    },
    {
      _key: 'metric-rooms',
      _type: 'projectMetric',
      value: '88 Rooms',
      label: 'Hotel Rooms',
      supportingText: 'The completed hotel includes 88 rooms.',
    },
    {
      _key: 'metric-cost',
      _type: 'projectMetric',
      value: '$8.6M',
      label: 'Construction Cost',
      supportingText: 'The stated construction cost for the project was $8.6 million.',
    },
    {
      _key: 'metric-first-new-york',
      _type: 'projectMetric',
      value: '1st in New York',
      label: 'GLō Hotel Development',
      supportingText: 'The project developed the first GLō Hotel in New York.',
    },
  ],
  seo: {
    _type: 'seo',
    title: 'GLō Hotel Brooklyn Construction & Development | JCCM',
    description:
      'See how JCCM managed development and construction of New York’s first GLō Hotel, a 30,000 SF, 88-room hospitality project in Sunset Park.',
    primaryTargetPhrase: 'hotel construction and development Brooklyn',
    secondaryTargetPhrases: [
      'hospitality construction NYC',
      'hotel construction management Brooklyn',
      'commercial construction Sunset Park',
      'GLō Hotel New York',
    ],
    noIndex: false,
    notes:
      'Draft review: add the required portfolio card image, main hero image and two side hero images before publication. Supplied image references: Phase 1 — https://drive.google.com/file/d/1rrmfDKgnRaYhIpo-ejL_4hjrAL6vmV1h/view?usp=drive_link; Phase 3 — https://drive.google.com/file/d/1LFu6uTstBNA8ckbyjgYOW60bESurXrAP/view?usp=drive_link and https://drive.google.com/file/d/1cg2ruP79NClHSp4tdemCk3g0nSu1BhrH/view?usp=drive_link. No completion date or construction duration was supplied. Construction cost, architect/engineer and JCCM role are preserved in the case-study content and metrics because the current project schema has no dedicated fields for them. REDA Group and Ellipses Design were not created as partner records because public-identification approval was not explicitly provided.',
  },
}

async function createDraft() {
  const existing = await Promise.all([
    client.getDocument(projectId),
    client.getDocument(`drafts.${projectId}`),
  ])

  if (existing.some(Boolean)) {
    throw new Error(`A GLō Hotel project already exists: ${projectId}`)
  }

  const created = await client.create(project)
  console.log(`Created draft: ${created._id}`)
}

createDraft().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
