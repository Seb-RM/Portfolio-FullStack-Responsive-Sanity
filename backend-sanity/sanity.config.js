import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Backend Sanity',

  projectId: 'gv9ubk5p',
  dataset: 'data-base',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
