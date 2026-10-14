import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'portfolioHeading',
      title: 'Portfolio heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'portfolioIntroduction',
      title: 'Portfolio introduction',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured projects',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'project'}]})],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'projectsPerPage',
      title: 'Projects per page',
      type: 'number',
      initialValue: 12,
      validation: (Rule) => Rule.required().integer().min(1).max(48),
    }),
    defineField({name: 'defaultSeo', title: 'Default SEO', type: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Portfolio settings'}
    },
  },
})
