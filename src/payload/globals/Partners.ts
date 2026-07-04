import { revalidateTag } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const Partners: GlobalConfig = {
    slug: 'partners',
    access: { read: () => true },
    hooks: {
        afterChange: [
            () => {
                revalidateTag('partners', { expire: 0 })
            },
        ],
    },
    fields: [
        {
            name: 'partners',
            type: 'array',
            fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'logo', type: 'upload', relationTo: 'media' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                { name: 'ctaLabel', type: 'text' },
                { name: 'ctaUrl', type: 'text' },
                {
                    name: 'stats',
                    type: 'array',
                    fields: [
                        { name: 'value', type: 'text' },
                        { name: 'label', type: 'text' },
                    ],
                },
            ],
        },
    ],
}