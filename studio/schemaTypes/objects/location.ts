import {defineField, defineType} from 'sanity'

export const locationType = defineType({
  name: 'location',
  title: 'Location',
  type: 'object',
  fields: [
    defineField({
      name: 'displayLocation',
      title: 'Public location',
      type: 'string',
      description:
        'The location shown on cards and project pages, such as Broadway Triangle, Brooklyn, NY.',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'showStreetAddress',
      title: 'Show street address on the website',
      type: 'boolean',
      description: 'Off by default. When off, the website uses only the public location above.',
      initialValue: false,
    }),
    defineField({
      name: 'streetAddress',
      title: 'Public street address',
      type: 'string',
      description: 'Only enter an address that is approved for public display.',
      hidden: ({parent}) => !parent?.showStreetAddress,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {showStreetAddress?: boolean} | undefined
          return !parent?.showStreetAddress || value ? true : 'Enter the approved public address.'
        }),
    }),
    defineField({name: 'neighborhood', title: 'Neighborhood', type: 'string'}),
    defineField({name: 'borough', title: 'Borough', type: 'string'}),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      initialValue: 'New York',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      initialValue: 'NY',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'postalCode', title: 'Postal code', type: 'string'}),
  ],
  preview: {
    select: {title: 'displayLocation', subtitle: 'streetAddress'},
  },
})
