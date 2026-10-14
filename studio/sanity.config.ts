import {buildTheme} from '@sanity/themer'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {JccmIcon} from './components/JccmIcon'
import {documentActions} from './document/actions'
import {
  featuredProjectBadge,
  hiddenProjectBadge,
  projectStatusBadge,
} from './document/badges'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

const jccmTheme = buildTheme({
  accent: '#2B7F73',
  text: '#172F2B',
  background: {light: '#F5F8F7', dark: '#10211E'},
  contrast: 90,
})

export default defineConfig({
  name: 'default',
  title: 'JCCM Content Studio',
  icon: JccmIcon,
  theme: jccmTheme,

  projectId: '5kvrtqgg',
  dataset: 'production',

  plugins: [structureTool({structure})],

  schema: {
    types: schemaTypes,
    templates: (previousTemplates) =>
      previousTemplates
        .filter((template) => template.schemaType !== 'siteSettings')
        .map((template) =>
          template.schemaType === 'project'
            ? {...template, title: 'Portfolio project'}
            : template,
        ),
  },

  document: {
    actions: documentActions,
    badges: (previousBadges, context) =>
      context.schemaType === 'project'
        ? [projectStatusBadge, featuredProjectBadge, hiddenProjectBadge, ...previousBadges]
        : previousBadges,
  },
})
