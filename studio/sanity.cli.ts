import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5kvrtqgg',
    dataset: 'production',
  },
  schemaExtraction: {
    enabled: true,
    path: './schema.json',
    enforceRequiredFields: true,
  },
  typegen: {
    enabled: true,
    path: '../sanity/**/*.{ts,tsx}',
    schema: './schema.json',
    generates: '../sanity/types.ts',
    overloadClientMethods: true,
  },
  deployment: {
    appId: 'uqaqtxmh78xs9znidymxu9zk',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
