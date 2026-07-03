import type { GlobalConfig } from 'payload'


const Experience: GlobalConfig = {
  slug: 'experience',
  label: 'Experience Section',
  access: { read: () => true },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subheadline',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonLabel',
      type: 'array',
      label: 'Button Label',
      required: true,
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
        }
      ]
    },

    {
      name: "tabs",
      type: "array",
      label: "Tabs",
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'statLabel', type: 'text' },
        { name: 'statValue', type: 'text' },
      ]
    }
  ],
}

export default Experience