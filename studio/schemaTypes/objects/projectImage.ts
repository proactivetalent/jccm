import {defineField, defineType} from 'sanity'

export const projectImageType = defineType({
  name: 'projectImage',
  title: 'Project image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: {
          previews: [
            {title: 'Landscape 16:9', aspectRatio: 16 / 9},
            {title: 'Portfolio 4:3', aspectRatio: 4 / 3},
            {title: 'Square 1:1', aspectRatio: 1},
            {title: 'Portrait 4:5', aspectRatio: 4 / 5},
          ],
        },
        metadata: ['lqip', 'blurhash', 'palette'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description:
        'Describe what is visible for screen readers and search engines. Do not start with “Image of”.',
      validation: (Rule) => Rule.required().max(180),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.max(220),
    }),
    defineField({name: 'photographerCredit', title: 'Photographer credit', type: 'string'}),
    defineField({name: 'copyright', title: 'Copyright information', type: 'string'}),
    defineField({
      name: 'stage',
      title: 'Construction stage',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Before construction', value: 'before'},
          {title: 'During construction', value: 'during'},
          {title: 'Completed project', value: 'after'},
          {title: 'Not applicable', value: 'general'},
        ],
      },
      initialValue: 'general',
    }),
  ],
  preview: {
    select: {title: 'alt', subtitle: 'stage', media: 'image'},
  },
})
