import type {DocumentActionsResolver} from 'sanity'

const protectedDocumentTypes = new Set(['siteSettings', 'category', 'service'])
const protectedActions = new Set(['delete', 'duplicate', 'unpublish'])

export const documentActions: DocumentActionsResolver = (previousActions, context) => {
  if (!protectedDocumentTypes.has(context.schemaType)) return previousActions

  return previousActions.filter((action) => !action.action || !protectedActions.has(action.action))
}
