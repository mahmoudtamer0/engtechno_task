import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'description',
      type: 'text',
    },

    {
      name: 'contactTitle',
      type: 'text',
      defaultValue: 'Contact Us',
    },

    {
      name: 'phone',
      type: 'text',
    },

    {
      name: 'address',
      type: 'text',
    },

    {
      name: 'email',
      type: 'text',
    },

    {
      name: 'applyButtonLabel',
      type: 'text',
    },

    {
      name: 'applyButtonUrl',
      type: 'text',
    },

    {
      name: 'searchTitle',
      type: 'text',
      defaultValue: "Can't find what you're looking for?",
    },

    {
      name: 'searchPlaceholder',
      type: 'text',
    },

    {
      name: 'searchButtonLabel',
      type: 'text',
    },

    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            {
              label: 'Facebook',
              value: 'facebook',
            },
            {
              label: 'Instagram',
              value: 'instagram',
            },
            {
              label: 'LinkedIn',
              value: 'linkedin',
            },
          ],
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },

    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
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
      ],
    },

    {
      name: 'bottomLinks',
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
      name: 'copyright',
      type: 'text',
    },
  ],
}