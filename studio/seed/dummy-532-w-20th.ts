import {createReadStream} from 'node:fs'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-01'})

const documentId = 'drafts.project-532-w-20th-street-new-york-ny'
const imagePath = '/tmp/532-w-20th-street-new-york-ny.jpg'

const block = (key: string, text: string) => ({
  _key: key,
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: [{_key: `${key}-span`, _type: 'span', marks: [], text}],
})

const ref = (key: string, id: string) => ({_key: key, _type: 'reference', _ref: id})

async function createDummyProject() {
  const existing = await client.getDocument(documentId)

  if (existing) {
    throw new Error(`Document already exists: ${documentId}`)
  }

  const asset = await client.assets.upload('image', createReadStream(imagePath), {
    filename: '532-w-20th-street-new-york-ny-rooftop.jpg',
    contentType: 'image/jpeg',
    label: '532 W 20th Street rooftop terrace',
    title: '532 W 20th Street rooftop terrace',
  })

  const projectImage = {
    _type: 'projectImage',
    image: {
      _type: 'image',
      asset: {_type: 'reference', _ref: asset._id},
    },
    alt: 'Landscaped rooftop terrace with lounge seating and a fire table surrounded by New York buildings at dusk.',
    caption: 'Rooftop amenity terrace at 532 W 20th Street.',
    stage: 'after',
  }

  const project = {
    _id: documentId,
    _type: 'project',
    title: '532 W 20TH STREET NEW YORK NY',
    internalProjectNumber: '532 W 20th Street',
    slug: {_type: 'slug', current: '532-w-20th-street-new-york-ny'},
    status: 'ongoing',
    primaryCategory: {_type: 'reference', _ref: 'category-residential'},
    projectType: 'Residential Rooftop Amenity',
    tags: ['Dummy Project', 'Residential', 'Rooftop Amenity'],
    featured: false,
    portfolioVisible: true,
    showClientOnWebsite: false,
    location: {
      _type: 'location',
      displayLocation: 'New York, NY',
      showStreetAddress: false,
      city: 'New York',
      state: 'NY',
    },
    sizeUnit: 'sq-ft',
    services: [
      ref('service-construction-management', 'service-construction-management'),
      ref('service-renovations-build-outs', 'service-renovations-build-outs'),
      ref('service-residential-portfolio', 'service-residential-portfolio'),
    ],
    shortExcerpt:
      'A demonstration portfolio entry highlighting a landscaped residential rooftop amenity in New York City.',
    challengeSummary:
      'Placeholder summary: coordinate the design and construction of a refined outdoor amenity within a dense urban setting.',
    solutionSummary:
      'Placeholder summary: JCCM managed the work through coordinated planning, careful sequencing, and detailed execution.',
    resultSummary:
      'Placeholder summary: a comfortable rooftop environment that supports gathering, relaxation, and year-round visual appeal.',
    overviewHeading: 'Project Overview',
    overview: [
      block(
        'overview-1',
        'This demonstration project entry shows how a complete JCCM residential case study will appear in the portfolio. The supplied image presents a landscaped rooftop terrace with lounge seating, a fire feature, and surrounding New York architecture.',
      ),
      block(
        'overview-2',
        'Project facts, dimensions, dates, and verified scope information should replace this placeholder copy before the project is published as a real case study.',
      ),
    ],
    challengeHeading: 'The Challenge',
    challengeIntroduction: [
      block(
        'challenge-1',
        'Placeholder challenge copy: urban rooftop work requires close coordination among design, construction, building operations, access, logistics, and finish-quality expectations.',
      ),
    ],
    challengePoints: [
      'Urban access and logistics',
      'Detailed trade coordination',
      'High-quality exterior finishes',
    ],
    solutionHeading: 'The JCCM Solution',
    solutionIntroduction: [
      block(
        'solution-1',
        'Placeholder solution copy: JCCM organized the work into clear planning, execution, and closeout phases so that decisions, quality control, and schedule priorities remained aligned.',
      ),
    ],
    phases: [
      {
        _key: 'phase-1',
        _type: 'projectPhase',
        label: 'Phase 1',
        title: 'Planning & Coordination',
        summary: 'Placeholder phase describing early planning and coordination.',
        body: [
          block(
            'phase-1-body-1',
            'The team reviewed the intended rooftop experience, access considerations, trade interfaces, material selections, and sequencing requirements before construction activities began.',
          ),
        ],
        keyPoints: ['Scope coordination', 'Material planning', 'Logistics review'],
      },
      {
        _key: 'phase-2',
        _type: 'projectPhase',
        label: 'Phase 2',
        title: 'Construction & Installation',
        summary: 'Placeholder phase describing coordinated field execution.',
        body: [
          block(
            'phase-2-body-1',
            'Construction activities were sequenced to coordinate exterior finishes, landscape elements, lighting, furniture, and the central fire feature while maintaining consistent quality control.',
          ),
        ],
        keyPoints: ['Trade sequencing', 'Finish quality', 'Field coordination'],
      },
      {
        _key: 'phase-3',
        _type: 'projectPhase',
        label: 'Phase 3',
        title: 'Closeout & Delivery',
        summary: 'Placeholder phase describing final review and delivery.',
        body: [
          block(
            'phase-3-body-1',
            'The completed amenity was reviewed for quality, operational readiness, and presentation before handoff.',
          ),
        ],
        keyPoints: ['Quality review', 'Final coordination', 'Project handoff'],
      },
    ],
    resultsHeading: 'Results & Value Delivered',
    resultsIntroduction: [
      block(
        'results-intro-1',
        'Placeholder result copy: the rooftop was developed as a polished residential amenity with distinct areas for gathering and relaxation.',
      ),
    ],
    results: [
      {
        _key: 'result-1',
        _type: 'resultItem',
        heading: 'A refined rooftop destination',
        description:
          'The completed concept combines planting, lighting, comfortable seating, and a fire feature in a cohesive outdoor environment.',
      },
    ],
    cardImage: projectImage,
    heroImage: projectImage,
    seo: {
      _type: 'seo',
      title: '532 W 20th Street Residential Project | JCCM',
      description:
        'Draft demonstration case study for a residential rooftop amenity project at 532 W 20th Street in New York City.',
      primaryTargetPhrase: 'residential rooftop construction NYC',
      secondaryTargetPhrases: ['rooftop amenity contractor', 'residential renovation New York'],
      noIndex: true,
      notes: 'Dummy project. Replace all placeholder copy and verify facts before public launch.',
    },
  }

  const result = await client.create(project)

  console.log(
    JSON.stringify(
      {
        documentId: result._id,
        assetId: asset._id,
        title: result.title,
        slug: result.slug,
      },
      null,
      2,
    ),
  )
}

createDummyProject().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
