import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(320),
    }),
    defineField({name: 'portfolioHeading', title: 'Portfolio page heading', type: 'string'}),
    defineField({
      name: 'portfolioIntroduction',
      title: 'Portfolio page introduction',
      type: 'text',
      rows: 4,
    }),
    defineField({name: 'coverImage', title: 'Cover image', type: 'projectImage'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
    defineField({
      name: 'displayOrder',
      title: 'Display order',
      type: 'number',
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({name: 'isActive', title: 'Active', type: 'boolean', initialValue: true}),
  ],
  orderings: [
    {title: 'Display order', name: 'displayOrder', by: [{field: 'displayOrder', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', order: 'displayOrder', active: 'isActive', media: 'coverImage.image'},
    prepare({title, order, active, media}) {
      return {
        title,
        subtitle: `${order ?? '—'} · ${active === false ? 'Inactive' : 'Active'}`,
        media,
      }
    },
  },
})
