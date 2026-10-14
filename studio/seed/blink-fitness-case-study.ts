import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-01'})

const projectId = 'project-blink-fitness-bronx-renovation'

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
  title: 'Blink Fitness Facility & Restaurant Renovation',
  slug: {_type: 'slug', current: 'blink-fitness-bronx-renovation'},
  status: 'completed',
  primaryCategory: {_type: 'reference', _ref: 'category-commercial'},
  projectType: 'Commercial Building Renovation',
  tags: [
    'Blink Fitness',
    'Bronx',
    'Longwood',
    'Southern Boulevard',
    'Commercial Renovation',
    'Building Renovation',
    'Fitness Facility',
    'Restaurant Renovation',
    'Façade Renovation',
    'Renovations & Build-Outs',
  ],
  featured: false,
  portfolioVisible: false,
  showClientOnWebsite: true,
  publicClientName: 'Blink Fitness',
  location: {
    _type: 'location',
    displayLocation: 'Longwood, Bronx, New York, NY',
    streetAddress: '932 Southern Blvd, Bronx, NY',
    showStreetAddress: true,
    neighborhood: 'Longwood',
    borough: 'Bronx',
    city: 'New York',
    state: 'NY',
  },
  projectSize: 25000,
  sizeUnit: 'sq-ft',
  buildingUse: 'Blink Fitness facility and restaurant',
  services: [
    reference('service-renovations', 'service-renovations-build-outs'),
    reference('service-commercial', 'service-commercial-portfolio'),
  ],
  shortExcerpt:
    'A major renovation of a 25,000-square-foot Bronx commercial building, including a full-glass façade transformation for Blink Fitness and a restaurant.',
  challengeSummary:
    'JCCM needed to modernize an existing 25,000-square-foot building serving both a Blink Fitness facility and restaurant, including replacing its brick façade with a full-glass front.',
  solutionSummary:
    'As general contractor, JCCM completed the major building alteration, coordinated the existing commercial uses and delivered a full-glass façade that modernized the Southern Boulevard property.',
  resultSummary:
    'The completed renovation transformed the exterior of the 25,000-square-foot property while retaining its fitness-facility and restaurant uses.',
  overviewHeading: 'Project Overview',
  overview: blocks('overview', [
    'JC Construction Management completed a major alteration of a 25,000-square-foot building at 932 Southern Blvd in the Longwood neighborhood of the Bronx.',
    'The building is used as a Blink Fitness facility and restaurant. As part of the renovation, the existing brick façade was replaced with a full-glass front, creating a significantly more modern exterior for the Southern Boulevard property.',
    'The project focused on the renovation and modernization of the existing building while maintaining its use as a fitness facility and restaurant.',
    'JC Construction Management served as the General Contractor for the project.',
  ]),
  challengeHeading: 'The Challenge',
  challengeIntroduction: blocks('challenge-intro', [
    'The project involved a major alteration to an existing 25,000-square-foot building serving as a Blink Fitness facility and restaurant.',
  ]),
  challengeSections: [
    section(
      'challenge-existing-building',
      'Existing Building',
      'The project required the renovation of an existing building rather than new construction.',
    ),
    section(
      'challenge-facade',
      'Façade Alteration',
      'A major component of the work involved replacing the existing brick façade with a full-glass front.',
    ),
    section(
      'challenge-mixed-use',
      'Mixed Use',
      "The building accommodates both a Blink Fitness facility and a restaurant, requiring the renovation to address the existing building's uses.",
    ),
  ],
  solutionHeading: 'The JCCM Solution',
  solutionIntroduction: blocks('solution-intro', [
    'JC Construction Management carried out the major alteration and renovation of the 25,000-square-foot property.',
  ]),
  solutionSections: [
    section(
      'solution-renovation',
      'Major Building Renovation',
      'JCCM managed the alteration and renovation of the existing commercial building while supporting its fitness-facility and restaurant uses.',
    ),
    section(
      'solution-facade',
      'Full-Glass Façade Transformation',
      'The existing brick façade was replaced with a full-glass front, transforming and modernizing the exterior of the Southern Boulevard property.',
    ),
    section(
      'solution-general-contractor',
      'General Contractor Delivery',
      'JC Construction Management served as the General Contractor and coordinated the project through completion.',
    ),
  ],
  phases: [
    {
      _key: 'phase-existing-building',
      _type: 'projectPhase',
      label: 'Phase 1',
      title: 'Existing Building Renovation',
      summary:
        'JC Construction Management undertook the major alteration of the existing 25,000-square-foot building in Longwood, Bronx.',
      body: blocks('phase-existing-building', [
        'The project involved the renovation of an existing building used as a Blink Fitness facility and restaurant.',
      ]),
      keyPoints: [
        'Existing building renovation',
        '25,000-square-foot property',
        'Blink Fitness facility',
        'Restaurant',
      ],
    },
    {
      _key: 'phase-facade',
      _type: 'projectPhase',
      label: 'Phase 2',
      title: 'Façade Renovation',
      summary:
        "The existing brick façade was replaced with a full-glass front as part of the building's major alteration.",
      body: blocks('phase-facade', [
        'One of the defining elements of the project was the replacement of the existing brick façade with a full-glass front, modernizing the exterior of the Southern Boulevard property.',
      ]),
      keyPoints: [
        'Brick façade replacement',
        'Full-glass front',
        'Exterior modernization',
        'Major alteration',
      ],
    },
    {
      _key: 'phase-completion',
      _type: 'projectPhase',
      label: 'Phase 3',
      title: 'Project Completion',
      summary:
        'The completed renovation modernized the Southern Boulevard property while retaining its use as a Blink Fitness facility and restaurant.',
      body: blocks('phase-completion', [
        'JC Construction Management completed the major alteration of the 25,000-square-foot building, including the new full-glass façade.',
      ]),
      keyPoints: [
        'Major building alteration',
        'Façade modernization',
        '25,000 SF building',
        'Blink Fitness facility and restaurant',
      ],
    },
  ],
  resultsHeading: 'Results & Value Delivered',
  resultsIntroduction: blocks('results-intro', [
    'The major alteration modernized the 25,000-square-foot Southern Boulevard property in Longwood, Bronx.',
    'The existing brick façade was replaced with a full-glass front, creating a modernized exterior for the building used as a Blink Fitness facility and restaurant.',
  ]),
  results: [
    {
      _key: 'result-renovation',
      _type: 'resultItem',
      heading: '25,000 SF Renovation',
      description:
        'JC Construction Management completed a major alteration of the 25,000-square-foot building.',
    },
    {
      _key: 'result-facade',
      _type: 'resultItem',
      heading: 'Façade Modernization',
      description: 'The existing brick façade was replaced with a full-glass front.',
    },
    {
      _key: 'result-commercial',
      _type: 'resultItem',
      heading: 'Commercial Building Renovation',
      description:
        'The project modernized an existing property used as a Blink Fitness facility and restaurant.',
    },
  ],
  closingStatement: blocks('closing', [
    "The project transformed the exterior of the Southern Boulevard property through a major façade renovation while maintaining the building's existing commercial uses.",
  ]),
  metrics: [
    {
      _key: 'metric-size',
      _type: 'projectMetric',
      value: '25,000 SF',
      label: 'Building Size',
      supportingText:
        'Major alteration of a 25,000-square-foot building in Longwood, Bronx.',
    },
    {
      _key: 'metric-facade',
      _type: 'projectMetric',
      value: '1',
      label: 'Major Façade Transformation',
      supportingText: 'The existing brick façade was replaced with a full-glass front.',
    },
  ],
  seo: {
    _type: 'seo',
    title: 'Blink Fitness Bronx Commercial Renovation | JCCM',
    description:
      'See how JCCM renovated a 25,000-square-foot Blink Fitness and restaurant property in the Bronx, including a full-glass façade transformation.',
    primaryTargetPhrase: 'commercial building renovation Bronx',
    secondaryTargetPhrases: [
      'Blink Fitness renovation',
      'Bronx commercial renovation',
      'fitness facility renovation',
      'façade renovation NYC',
    ],
    noIndex: false,
    notes:
      'Draft review: add the required portfolio card image, main hero image and two side hero images before publication. The supplied Phase 1 image is at https://drive.google.com/file/d/11zKmA-W5GcRYrpnIseWO3nLLct62wxar/view?usp=drive_link. Source alt text: JC Construction Management carried out the major alteration and renovation of the 25,000-square-foot property, Blink Fitness facility and restaurant. No completion date or construction duration was supplied. “Renovations & Build-Outs” is stored as a service and tag because there is no matching category document in the current taxonomy.',
  },
}

async function createDraft() {
  const existing = await Promise.all([
    client.getDocument(projectId),
    client.getDocument(`drafts.${projectId}`),
  ])

  if (existing.some(Boolean)) {
    throw new Error(`A Blink Fitness project already exists: ${projectId}`)
  }

  const created = await client.create(project)
  console.log(`Created draft: ${created._id}`)
}

createDraft().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
