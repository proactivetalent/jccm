import {defineArrayMember, defineField, defineType} from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO title',
      type: 'string',
      description: 'The search-result title. Aim for a concise, descriptive title.',
      validation: (Rule) => [
        Rule.required().error('An SEO title is required.'),
        Rule.max(65).warning('Long titles may be shortened in search results.'),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'A compelling summary for search results.',
      validation: (Rule) => [
        Rule.required().error('A meta description is required.'),
        Rule.max(170).warning('Long descriptions may be shortened in search results.'),
      ],
    }),
    defineField({
      name: 'primaryTargetPhrase',
      title: 'Primary target phrase',
      type: 'string',
      description: 'Internal writing guidance only; this is not output as a meta-keywords tag.',
    }),
    defineField({
      name: 'secondaryTargetPhrases',
      title: 'Secondary target phrases',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({name: 'social', title: 'Social sharing overrides', type: 'socialSharing'}),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL override',
      type: 'url',
      description: 'Leave empty unless the canonical page lives at a different URL.',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'previousUrls',
      title: 'Previous URL paths',
      type: 'array',
      description: 'Paths that should redirect to this page, such as /old-project-name.',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'noIndex',
      title: 'Exclude from search engines',
      type: 'boolean',
      description: 'Use only when this page should intentionally not appear in search results.',
      initialValue: false,
    }),
    defineField({name: 'notes', title: 'Internal SEO notes', type: 'text', rows: 3}),
  ],
})
