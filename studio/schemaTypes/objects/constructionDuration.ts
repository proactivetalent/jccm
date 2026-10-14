import {defineField, defineType} from 'sanity'

export const constructionDurationType = defineType({
  name: 'constructionDuration',
  title: 'Construction duration',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Duration',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'string',
      options: {
        list: [
          {title: 'Days', value: 'days'},
          {title: 'Weeks', value: 'weeks'},
          {title: 'Months', value: 'months'},
          {title: 'Years', value: 'years'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {value: 'value', unit: 'unit'},
    prepare({value, unit}) {
      return {title: value && unit ? `${value} ${unit}` : 'Construction duration'}
    },
  },
})
