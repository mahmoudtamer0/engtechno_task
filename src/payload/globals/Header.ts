import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',

  access: {
    read: () => true,
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