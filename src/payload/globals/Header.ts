import type { GlobalConfig } from 'payload'
import { revalidateTag } from 'next/cache'

export const Header: GlobalConfig = {
  slug: 'header',

  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      () => {
        revalidateTag('header', { expire: 0 })
      },
    ],
  },

  fields: [
    {
      name: 'topBarLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'topBarRightLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'navLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
        },

        {
          name: 'megaMenu',
          type: 'group',
          fields: [
            {
              name: 'cards',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                },
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'url',
                  type: 'text',
                },
              ],
            },

            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                },
                {
                  name: 'url',
                  type: 'text',
                },
              ],
            },

            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },

    {
      name: 'ctaLabel',
      type: 'text',
    },

    {
      name: 'ctaUrl',
      type: 'text',
    },
  ],
}