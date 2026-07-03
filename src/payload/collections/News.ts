import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
    slug: 'news',
    admin: { useAsTitle: 'title' },
    access: { read: () => true },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'date', type: 'date' },
        { name: 'url', type: 'text' },
    ],
}