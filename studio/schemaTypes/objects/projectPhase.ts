import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectPhaseType = defineType({
  name: 'projectPhase',
  title: 'Project phase',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Phase label',
      type: 'string',
      description: 'For example: Phase 1',
    }),
    defineField({
      name: 'title',
      title: 'Phase title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'summary',
      title: 'Short summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(320),
    }),
    defineField({
      name: 'body',
      title: 'Phase description',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key points',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({name: 'image', title: 'Associated image', type: 'projectImage'}),
  ],
  preview: {
    select: {label: 'label', title: 'title', media: 'image.image'},
    prepare({label, title, media}) {
      return {title, subtitle: label, media}
    },
  },
})
