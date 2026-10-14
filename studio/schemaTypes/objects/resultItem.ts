import {defineField, defineType} from 'sanity'

export const resultItemType = defineType({
  name: 'resultItem',
  title: 'Result',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Optional heading',
      type: 'string',
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: 'description',
      title: 'Result description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(500),
    }),
  ],
  preview: {
    select: {heading: 'heading', description: 'description'},
    prepare({heading, description}) {
      return {title: heading || description, subtitle: heading ? description : undefined}
    },
  },
})
