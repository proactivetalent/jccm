import {defineField, defineType} from 'sanity'

export const socialSharingType = defineType({
  name: 'socialSharing',
  title: 'Social sharing',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Social title',
      type: 'string',
      description: 'Falls back to the SEO title.',
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: 'description',
      title: 'Social description',
      type: 'text',
      rows: 3,
      description: 'Falls back to the meta description.',
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: 'image',
      title: 'Social image',
      type: 'image',
      description: 'Falls back to the project hero image.',
      options: {hotspot: {previews: [{title: 'Social 1.91:1', aspectRatio: 1.91}]}},
    }),
  ],
})
