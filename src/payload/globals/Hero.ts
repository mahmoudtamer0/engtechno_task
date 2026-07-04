import { revalidateTag } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section',
  access: { read: () => true },
  hooks: {
    afterChange: [
      () => {
        revalidateTag('hero', { expire: 0 })
      },
    ],
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subheadline',
      type: 'text',
    },
    {
      name: 'backgroundVideo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'buttonLabel_1',
      type: 'text',
    },
    {
      name: 'buttonLabel_2',
      type: 'text',
    }
  ],
}