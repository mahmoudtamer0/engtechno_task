import { revalidateTag } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const newsGlobal: GlobalConfig = {
    slug: 'newsGlobal',
    label: 'News Section',
    access: { read: () => true },
    hooks: {
        afterChange: [
            () => {
                revalidateTag('newsGlobal', { expire: 0 })
            },
        ],
    },
    fields: [
        {
            name: 'headline',
            type: 'text',
            required: true,
        },
        {
            name: 'subheadline',
            type: 'text',
        },
        {
            name: 'secondSubheadline',
            type: 'text',
        },
        {
            name: 'ctaLabel',
            type: 'text',
        },
        {
            name: 'ctaUrl',
            type: 'text',
            required: true,
        },
    ],
}