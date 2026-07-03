import type { CollectionConfig } from 'payload'

export const Majors: CollectionConfig = {
    slug: 'majors',
    admin: {
        useAsTitle: 'title',
    },
    access: { read: () => true },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'programsCount', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'url', type: 'text' },
    ],
}