import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required().max(900),
    }),
    defineField({
      name: 'attributionLabel',
      title: 'Public attribution',
      type: 'string',
      description:
        'For example: Project Owner. Enter only information approved for public display.',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({name: 'jobTitle', title: 'Public job title', type: 'string'}),
    defineField({name: 'company', title: 'Public company', type: 'string'}),
    defineField({
      name: 'showCompany',
      title: 'Show company on website',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'relatedProject',
      title: 'Related project',
      type: 'reference',
      to: [{type: 'project'}],
      weak: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredOnHomepage',
      title: 'Featured on homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display order',
      type: 'number',
      hidden: ({parent}) => !parent?.featuredOnHomepage,
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: 'publicationApproved',
      title: 'Approved for publication',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {quote: 'quote', attribution: 'attributionLabel', approved: 'publicationApproved'},
    prepare({quote, attribution, approved}) {
      return {title: attribution, subtitle: `${approved ? 'Approved' : 'Not approved'} · ${quote}`}
    },
  },
})
