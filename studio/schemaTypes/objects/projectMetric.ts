import {defineField, defineType} from 'sanity'

export const projectMetricType = defineType({
  name: 'projectMetric',
  title: 'Project metric',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'supportingText',
      title: 'Supporting text',
      type: 'string',
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    select: {title: 'value', subtitle: 'label'},
  },
})
