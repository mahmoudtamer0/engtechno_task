import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
    slug: 'events',
    admin: {
        useAsTitle: 'title',
    },
    access: { read: () => true },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'day', type: 'text' },
        { name: 'month', type: 'text' },
        { name: 'url', type: 'text' },
    ],
}