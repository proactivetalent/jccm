import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-01'})

const projectId = 'project-san-matteo-pizza-espresso-bar-nyc'

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
  title: 'San Matteo (Pizza Espresso Bar) Restaurant Construction',
  slug: {_type: 'slug', current: 'san-matteo-pizza-espresso-bar-nyc'},
  status: 'completed',
  primaryCategory: {_type: 'reference', _ref: 'category-commercial'},
  projectType: 'Restaurant Construction',
  tags: ['Restaurant Construction', 'Upper East Side', 'DOB Approvals', 'DOH Approvals'],
  featured: false,
  portfolioVisible: true,
  showClientOnWebsite: true,
  publicClientName: 'San Matteo (Pizza Espresso Bar)',
  location: {
    _type: 'location',
    displayLocation: 'Upper East Side, New York, NY',
    streetAddress: '1716 2nd Ave, New York, NY',
    showStreetAddress: true,
    neighborhood: 'Upper East Side',
    borough: 'Manhattan',
    city: 'New York',
    state: 'NY',
  },
  services: [
    reference('service-management', 'service-construction-management'),
    reference('service-renovations', 'service-renovations-build-outs'),
    reference('service-commercial', 'service-commercial-portfolio'),
  ],
  shortExcerpt:
    'JCCM took over the remaining restaurant construction for San Matteo’s Upper East Side location and managed construction, permitting and approvals through completion.',
  challengeSummary:
    'JCCM inherited an unfinished restaurant project and needed to coordinate the remaining construction while obtaining DOB and DOH approvals, permits, inspections and sign-offs.',
  solutionSummary:
    'JCCM stepped in as development, construction and expediting manager, coordinating the remaining work and required approval process as one integrated effort.',
  resultSummary:
    'JCCM completed the restaurant construction for San Matteo’s Upper East Side location and obtained the required DOB and DOH approvals, inspections and sign-offs.',
  overviewHeading: 'Project Overview',
  overview: blocks('overview', [
    "JCCM took over the previous contractor's scope to successfully complete the restaurant construction for San Matteo's new Upper East Side location at 1716 2nd Ave, New York.",
    'The project required JCCM to step into the development, construction and expediting management roles and take responsibility for completing the remaining work.',
    'A key part of JCCM’s involvement was managing the approval and compliance process required to move the project toward completion. The team obtained the necessary Department of Buildings (DOB) and Department of Health (DOH) approvals, permits, inspections and sign-offs.',
    'By taking over the project and managing both the remaining construction and required approvals, JCCM successfully completed the restaurant construction for San Matteo’s Upper East Side location.',
  ]),
  challengeHeading: 'The Challenge',
  challengeIntroduction: blocks('challenge-intro', [
    'JCCM took over the project from a previous contractor and was responsible for successfully completing the remaining restaurant construction.',
  ]),
  challengeSections: [
    section(
      'challenge-transition',
      'Contractor Transition',
      'JCCM stepped into an existing project after the previous contractor, taking responsibility for completing the remaining construction work.',
    ),
    section(
      'challenge-management',
      'Development & Construction Management',
      'The project required JCCM to step in as the development and construction manager and coordinate the remaining work through completion.',
    ),
    section(
      'challenge-permits',
      'Approvals & Permits',
      'The project required the necessary DOB and DOH approvals and permits before completion.',
    ),
    section(
      'challenge-inspections',
      'Inspections & Sign-Offs',
      'JCCM was also responsible for obtaining the required inspections and sign-offs as part of the project completion process.',
    ),
  ],
  solutionHeading: 'The JCCM Solution',
  solutionIntroduction: blocks('solution-intro', [
    'JCCM aligned management, construction coordination and the approval process to bring the inherited restaurant project through completion.',
  ]),
  solutionSections: [
    section(
      'solution-management',
      'Development, Construction & Expediting Management',
      'JCCM took an active management role across the remaining stages of the project, stepping in as the development, construction and expediting manager.',
    ),
    section(
      'solution-approvals',
      'Construction Coordination & Approvals',
      'The team coordinated the remaining restaurant construction while managing the required approval and permitting process. JCCM obtained the necessary DOB and DOH approvals, permits, inspections and sign-offs required for the project.',
    ),
    section(
      'solution-completion',
      'Integrated Delivery to Completion',
      'This integrated approach allowed JCCM to manage both the construction and expediting requirements needed to successfully complete the San Matteo location.',
    ),
  ],
  phases: [
    {
      _key: 'phase-takeover',
      _type: 'projectPhase',
      label: 'Phase 1',
      title: 'Project Takeover',
      summary:
        'JCCM took over the remaining restaurant construction from the previous contractor and stepped in to manage the project through completion.',
      body: blocks('phase-takeover', [
        'JCCM assumed responsibility for completing the remaining construction work for San Matteo’s new Upper East Side location and stepped into the development and construction management role.',
      ]),
      keyPoints: [
        'Previous contractor transition',
        'Project takeover',
        'Development management',
        'Construction management',
      ],
    },
    {
      _key: 'phase-construction',
      _type: 'projectPhase',
      label: 'Phase 2',
      title: 'Construction Management',
      summary:
        'JCCM managed the remaining restaurant construction and coordinated the work required to successfully complete the new Upper East Side location.',
      body: blocks('phase-construction', [
        'Following the project takeover, JCCM managed the remaining restaurant construction as the development and construction manager, coordinating the work through completion.',
      ]),
      keyPoints: [
        'Restaurant construction',
        'Construction management',
        'Project coordination',
        'Completion management',
      ],
    },
    {
      _key: 'phase-approvals',
      _type: 'projectPhase',
      label: 'Phase 3',
      title: 'Approvals, Permits & Inspections',
      summary:
        'JCCM managed the expediting process and obtained the necessary DOB and DOH approvals, permits, inspections and sign-offs.',
      body: blocks('phase-approvals', [
        'As part of its role as expediting manager, JCCM handled the required approval and compliance process, including DOB and DOH approvals, permits, inspections and sign-offs.',
      ]),
      keyPoints: [
        'DOB approvals',
        'DOH approvals',
        'Permits',
        'Inspections',
        'Sign-offs',
        'Expediting management',
      ],
    },
    {
      _key: 'phase-completion',
      _type: 'projectPhase',
      label: 'Phase 4',
      title: 'Project Completion',
      summary:
        'JCCM successfully completed the remaining restaurant construction and delivered the new San Matteo Upper East Side location.',
      body: blocks('phase-completion', [
        'JCCM brought together its development, construction and expediting responsibilities to successfully complete the remaining restaurant construction and required approval process.',
      ]),
      keyPoints: ['Construction completion', 'Required approvals', 'Inspections', 'Final sign-offs'],
    },
  ],
  resultsHeading: 'Results & Value Delivered',
  resultsIntroduction: blocks('results-intro', [
    'JCCM successfully took over the remaining construction for San Matteo’s new Upper East Side location and managed the project through completion.',
    'The team provided development, construction and expediting management while obtaining the necessary DOB and DOH approvals, permits, inspections and sign-offs required for the project.',
  ]),
  results: [
    {
      _key: 'result-takeover',
      _type: 'resultItem',
      heading: 'Successful Project Takeover',
      description:
        'JCCM took over the remaining restaurant construction from the previous contractor and assumed responsibility for completing the project.',
    },
    {
      _key: 'result-management',
      _type: 'resultItem',
      heading: 'Integrated Project Management',
      description:
        'JCCM provided development, construction and expediting management for the remaining project scope.',
    },
    {
      _key: 'result-approvals',
      _type: 'resultItem',
      heading: 'Required Approvals & Sign-Offs',
      description:
        'JCCM obtained the necessary DOB and DOH approvals, permits, inspections and sign-offs.',
    },
  ],
  closingStatement: blocks('closing', [
    'JCCM successfully completed the remaining restaurant construction for San Matteo’s new Upper East Side location while managing the required construction and expediting responsibilities.',
  ]),
  seo: {
    _type: 'seo',
    title: 'San Matteo Restaurant Construction NYC | JCCM',
    description:
      'See how JCCM took over San Matteo’s Upper East Side restaurant construction and managed the remaining work, DOB and DOH approvals, inspections and sign-offs.',
    primaryTargetPhrase: 'restaurant construction Upper East Side',
    secondaryTargetPhrases: [
      'NYC restaurant construction management',
      'restaurant build-out NYC',
      'DOB DOH expediting NYC',
    ],
    noIndex: false,
    notes:
      'Draft review: add an approved portfolio card image and three hero images before publication. No quantitative metrics or completion date were provided in the source. Restaurant Construction is a project type and tag because there is no matching category document yet.',
  },
}

async function createDraft() {
  const existing = await Promise.all([
    client.getDocument(projectId),
    client.getDocument(`drafts.${projectId}`),
  ])

  if (existing.some(Boolean)) {
    throw new Error(`A San Matteo project already exists: ${projectId}`)
  }

  const created = await client.create(project)
  console.log(`Created draft: ${created._id}`)
}

createDraft().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
