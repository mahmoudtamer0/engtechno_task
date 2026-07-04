import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { revalidateTag } from 'next/cache'

// import { anyone } from '../access/anyone'
// import { authenticated } from '../access/authenticated'

const filename = fileURLToPath(import.meta.url)


export const Media: CollectionConfig = {
  slug: 'media',

  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },

  admin: {
    useAsTitle: 'url',
  },
  hooks: {
    afterChange: [
      () => {
        revalidateTag('media', { expire: 0 })
      },
    ],
    afterDelete: [
      () => {
        revalidateTag('media', { expire: 0 })
      },
    ],
  },

  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'caption',
      type: 'textarea',
    },
  ],
}
