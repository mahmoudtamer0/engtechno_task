import { revalidateTag } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Majors: CollectionConfig = {
    slug: 'majors',
    admin: {
        useAsTitle: 'title',
    },
    access: { read: () => true },
    hooks: {
        afterChange: [
            () => {
                revalidateTag('majors', { expire: 0 })
            },
        ],
        afterDelete: [
            () => {
                revalidateTag('majors', { expire: 0 })
            },
        ],
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'programsCount', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'url', type: 'text' },
    ],
}