import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service name',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
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
    select: {title: 'title', order: 'displayOrder', active: 'isActive'},
    prepare({title, order, active}) {
      return {title, subtitle: `${order ?? '—'} · ${active === false ? 'Inactive' : 'Active'}`}
    },
  },
})
