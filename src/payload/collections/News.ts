import { revalidateTag } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
    slug: 'news',
    admin: { useAsTitle: 'title' },
    access: { read: () => true },
    hooks: {
        afterChange: [
            () => {
                revalidateTag('news', { expire: 0 })
            },
        ],
        afterDelete: [
            () => {
                revalidateTag('news', { expire: 0 })
            },
        ],
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'date', type: 'date' },
        { name: 'url', type: 'text' },
    ],
}