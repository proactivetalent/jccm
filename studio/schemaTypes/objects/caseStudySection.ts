import {defineField, defineType} from 'sanity'

export const caseStudySectionType = defineType({
  name: 'caseStudySection',
  title: 'Case study section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(1200),
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'description'},
  },
})
