import type {StructureBuilder, StructureResolver} from 'sanity/structure'

const apiVersion = '2026-09-01'

function projectFilterItem(
  S: StructureBuilder,
  id: string,
  title: string,
  filter: string,
) {
  return S.listItem()
    .id(id)
    .title(title)
    .schemaType('project')
    .child(
      S.documentList()
        .id(`${id}-list`)
        .title(title)
        .schemaType('project')
        .apiVersion(apiVersion)
        .filter(filter),
    )
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('JCCM Content')
    .items([
      S.listItem()
        .id('portfolio')
        .title('Portfolio')
        .child(
          S.list()
            .id('portfolio-lists')
            .title('Portfolio')
            .items([
              S.documentTypeListItem('project').id('all-projects').title('All projects'),
              S.divider(),
              projectFilterItem(
                S,
                'draft-projects',
                'Draft projects',
                '_type == "project" && _id in path("drafts.**")',
              ),
              projectFilterItem(
                S,
                'ongoing-projects',
                'Ongoing projects',
                '_type == "project" && status == "ongoing"',
              ),
              projectFilterItem(
                S,
                'completed-projects',
                'Completed projects',
                '_type == "project" && status == "completed"',
              ),
              projectFilterItem(
                S,
                'featured-projects',
                'Featured projects',
                '_type == "project" && featured == true',
              ),
              projectFilterItem(
                S,
                'hidden-projects',
                'Hidden projects',
                '_type == "project" && portfolioVisible == false',
              ),
            ]),
        ),
      S.listItem()
        .id('content-organization')
        .title('Content organization')
        .child(
          S.list()
            .id('content-organization-lists')
            .title('Content organization')
            .items([
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('service').title('Services'),
              S.documentTypeListItem('partner').title('Partners'),
              S.documentTypeListItem('testimonial').title('Testimonials'),
            ]),
        ),
      S.divider(),
      S.listItem()
        .id('portfolio-settings')
        .title('Portfolio settings')
        .schemaType('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ])
