import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-01'})

const projectId = 'project-crumbl-cookies-nyc-retail-build-out'

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
  title: 'Crumbl Cookies NYC Retail Build-Out',
  slug: {_type: 'slug', current: 'crumbl-cookies-nyc-retail-build-out'},
  status: 'completed',
  primaryCategory: {_type: 'reference', _ref: 'category-commercial'},
  additionalCategories: [reference('category-retail', 'category-retail-stores')],
  projectType: 'Retail Build-Out / Commercial Renovation',
  tags: ['Retail Construction', 'Restaurant & Food Service', 'Renovations & Build-Outs'],
  featured: false,
  portfolioVisible: true,
  showClientOnWebsite: true,
  publicClientName: 'Crumbl Cookies',
  location: {
    _type: 'location',
    displayLocation: 'Upper East Side, Manhattan, New York, NY',
    streetAddress: '301 Columbus Ave, New York, NY',
    showStreetAddress: false,
    neighborhood: 'Upper East Side',
    borough: 'Manhattan',
    city: 'New York',
    state: 'NY',
  },
  projectSize: 1000,
  sizeUnit: 'sq-ft',
  constructionDuration: {_type: 'constructionDuration', value: 5, unit: 'weeks'},
  services: [
    reference('service-renovations', 'service-renovations-build-outs'),
    reference('service-commercial', 'service-commercial-portfolio'),
  ],
  shortExcerpt:
    'A 1,000-square-foot NYC retail build-out delivered in five weeks while meeting Crumbl Cookies’ detailed brand standards.',
  challengeSummary:
    'Converting a former federal safe into a branded food-service space required careful evaluation of existing conditions, daily coordination, and a five-week construction schedule.',
  solutionSummary:
    'JCCM evaluated the space early, coordinated daily with the franchise team, and sequenced the retail build-out to meet the accelerated schedule and brand requirements.',
  resultSummary:
    'The first NYC location was delivered in five weeks, received strong feedback from Crumbl Cookies corporate, and led to four additional New York-area locations being awarded.',
  overviewHeading: 'Project Overview',
  overview: blocks('overview', [
    'Crumbl Cookies selected JCCM to build out its first New York City location on the Upper East Side at 301 Columbus Ave. The 1,000-square-foot retail space, formerly a federal safe, presented unique existing-building challenges.',
    'JCCM managed the build-out with daily coordination with the Crumbl Cookies team, ensuring the project met strict brand standards while maintaining an accelerated schedule. The location was completed in just five weeks and was recognized by Crumbl Cookies corporate as one of the best build-outs they had seen across their 600+ U.S. locations.',
    'Following the successful delivery, JCCM was awarded four additional Crumbl Cookies locations in the New York area.',
  ]),
  challengeHeading: 'The Challenge',
  challengeIntroduction: blocks('challenge-intro', [
    'Transforming an existing 1,000-square-foot retail space into a branded food-service location required JCCM to work within both physical and operational constraints.',
  ]),
  challengeSections: [
    section(
      'challenge-conditions',
      'Existing Building Conditions',
      'The property had previously been used as a federal safe, creating existing-building conditions that required careful evaluation and practical construction solutions.',
    ),
    section(
      'challenge-schedule',
      'Accelerated Schedule',
      'The complete build-out had to be delivered within a five-week timeframe, leaving limited room for delays or inefficient coordination.',
    ),
    section(
      'challenge-brand',
      'Strict Brand Standards',
      'Crumbl Cookies operates with highly precise construction and design standards. The finished space needed to meet expectations established by the franchise and corporate team.',
    ),
    section(
      'challenge-coordination',
      'Daily Coordination',
      'Because of the tight schedule and detailed requirements, project decisions and construction progress required frequent communication with the franchise team.',
    ),
    section(
      'challenge-quality',
      'Quality Requirements',
      'The project needed to balance speed with the level of finish and attention to detail expected from a national retail brand.',
    ),
  ],
  solutionHeading: 'The JCCM Solution',
  solutionIntroduction: blocks('solution-intro', [
    'JCCM combined early assessment of existing conditions, close stakeholder coordination, and fast-paced construction delivery to meet the five-week target.',
  ]),
  solutionSections: [
    section(
      'solution-assessment',
      'Existing Condition Assessment',
      'Evaluated the retail space and building conditions to identify challenges early and prevent construction delays.',
    ),
    section(
      'solution-coordination',
      'Close Stakeholder Coordination',
      'Maintained daily communication with the Crumbl Cookies franchise team to quickly address site conditions, decisions, and brand requirements.',
    ),
    section(
      'solution-delivery',
      'Fast-Paced Construction Delivery',
      'Applied construction expertise and value engineering to coordinate the build-out and achieve the five-week completion target.',
    ),
  ],
  phases: [
    {
      _key: 'phase-evaluation',
      _type: 'projectPhase',
      label: 'Phase 1',
      title: 'Existing Space Evaluation & Pre-Construction',
      summary:
        'JCCM evaluated the existing 1,000 SF retail space, identified challenges associated with its previous use as a federal safe and developed the construction approach needed to meet the accelerated schedule.',
      body: blocks('phase-evaluation', [
        'The project began with an assessment of the existing conditions. Understanding the limitations of the space was particularly important because the property had previously served as a federal safe. JCCM used its construction experience to evaluate the conditions and determine practical approaches for the planned retail conversion.',
      ]),
      keyPoints: [
        'Existing-condition evaluation',
        'Identification of building challenges',
        'Construction planning',
        'Schedule coordination',
        'Preparation for an accelerated five-week build-out',
      ],
    },
    {
      _key: 'phase-build-out',
      _type: 'projectPhase',
      label: 'Phase 2',
      title: 'Retail Build-Out',
      summary:
        'JCCM carried out the renovation and build-out of the existing retail space, coordinating construction activities while working toward the five-week completion target.',
      body: blocks('phase-build-out', [
        'Construction focused on converting the existing space into a finished Crumbl Cookies retail location. JCCM coordinated the work required to transform the property while managing the challenges associated with an existing building.',
        'The accelerated schedule required efficient sequencing and active project management throughout construction.',
      ]),
      keyPoints: [
        'Existing-space renovation',
        'Retail build-out',
        'Construction coordination',
        'Schedule management',
        'Quality control',
      ],
    },
    {
      _key: 'phase-brand',
      _type: 'projectPhase',
      label: 'Phase 3',
      title: 'Brand Coordination & Quality Control',
      summary:
        'JCCM maintained daily communication with the Crumbl Cookies franchise team to coordinate project requirements and ensure the build-out met the brand’s precise construction standards.',
      body: blocks('phase-brand', [
        'Crumbl Cookies’ locations are built to specific brand standards, making communication and quality control critical throughout the project. JCCM worked with the franchise team on a daily basis to address requirements, coordinate decisions and maintain alignment between construction progress and the expected finished product.',
      ]),
      keyPoints: [
        'Daily franchise coordination',
        'Brand-standard compliance',
        'Quality control',
        'Construction decision-making',
        'Stakeholder communication',
      ],
    },
    {
      _key: 'phase-handover',
      _type: 'projectPhase',
      label: 'Phase 4',
      title: 'Completion & Handover',
      summary:
        'JCCM completed the Crumbl Cookies build-out in five weeks, delivering the first New York City location with the finish quality expected by the brand and franchise team.',
      body: blocks('phase-handover', [
        'The project reached completion within the targeted five-week timeframe. The finished store was reviewed by the Crumbl Cookies team and received strong feedback from corporate representatives.',
        'The successful delivery established a strong working relationship and contributed to JCCM being awarded four additional Crumbl Cookies locations in the New York area.',
      ]),
      keyPoints: [
        'Five-week completion',
        'Final quality review',
        'Brand compliance',
        'Store delivery',
        'Subsequent project awards',
      ],
    },
  ],
  resultsHeading: 'Results & Value Delivered',
  results: [
    {
      _key: 'result-five-weeks',
      _type: 'resultItem',
      heading: 'Five-Week Delivery',
      description:
        'The complete retail build-out was delivered in just five weeks despite the challenges presented by the existing space.',
    },
    {
      _key: 'result-brand',
      _type: 'resultItem',
      heading: 'Brand Standards',
      description:
        'JCCM worked closely with the Crumbl Cookies franchise team to deliver a location aligned with the brand’s precise construction requirements.',
    },
    {
      _key: 'result-recognition',
      _type: 'resultItem',
      heading: 'Corporate Recognition',
      description:
        'Crumbl Cookies corporate described the completed location as one of the best build-outs it had seen across its 600+ U.S. stores at the time.',
    },
    {
      _key: 'result-partnership',
      _type: 'resultItem',
      heading: 'Continued Partnership',
      description:
        'Following the successful completion of the first NYC location, JCCM was awarded four additional Crumbl Cookies locations in the New York area.',
    },
  ],
  closingStatement: blocks('closing', [
    'The project demonstrated JCCM’s ability to manage demanding retail build-outs in existing NYC spaces while balancing schedule, quality, coordination and brand requirements.',
  ]),
  metrics: [
    {
      _key: 'metric-size',
      _type: 'projectMetric',
      value: '1,000 SF',
      label: 'Retail Build-Out Size',
      supportingText:
        'Approximately 1,000 square feet of existing retail space was renovated for the Crumbl Cookies location.',
    },
    {
      _key: 'metric-duration',
      _type: 'projectMetric',
      value: '5 Weeks',
      label: 'Construction Duration',
      supportingText: 'The complete build-out was delivered within a five-week construction schedule.',
    },
    {
      _key: 'metric-locations',
      _type: 'projectMetric',
      value: '5 Locations',
      label: 'Crumbl Cookies Locations Awarded',
      supportingText:
        'JCCM was initially awarded the first NYC location and subsequently received four additional locations in the New York area.',
    },
    {
      _key: 'metric-brand',
      _type: 'projectMetric',
      value: '600+ Stores',
      label: 'Brand Footprint at Time of Recognition',
      supportingText:
        'Crumbl Cookies corporate referenced its network of more than 600 U.S. stores when recognizing the quality of the build-out.',
    },
  ],
  seo: {
    _type: 'seo',
    title: 'Crumbl Cookies NYC Retail Build-Out | JCCM',
    description:
      'Explore how JCCM delivered a 1,000-square-foot Crumbl Cookies retail build-out in New York City in five weeks while meeting detailed brand standards.',
    primaryTargetPhrase: 'NYC retail build-out',
    secondaryTargetPhrases: ['retail construction NYC', 'food-service build-out', 'commercial renovation NYC'],
    noIndex: false,
    notes:
      'Draft review: confirm the neighborhood against 301 Columbus Ave; verify the former-federal-safe description, corporate recognition wording, and 600+ store count. Add approved card and hero images before publication.',
  },
}

async function createDraft() {
  const existing = await Promise.all([
    client.getDocument(projectId),
    client.getDocument(`drafts.${projectId}`),
  ])

  if (existing.some(Boolean)) {
    throw new Error(`A Crumbl Cookies project already exists: ${projectId}`)
  }

  const created = await client.create(project)
  console.log(`Created draft: ${created._id}`)
}

createDraft().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
