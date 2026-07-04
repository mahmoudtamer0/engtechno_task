import { revalidateTag } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const AdmissionSteps: GlobalConfig = {
    slug: 'admission-steps',
    access: { read: () => true },
    hooks: {
        afterChange: [
            () => {
                revalidateTag('addmission-steps', { expire: 0 })
            },
        ],
    },
    fields: [
        { name: 'subheadline', type: 'text' },
        { name: 'headline', type: 'text', required: true },
        { name: 'secondSubheadline', type: 'text' },
        { name: 'ctaLabel', type: 'text' },
        { name: 'ctaUrl', type: 'text' },
        {
            name: 'steps',
            type: 'array',
            fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'text' },
            ],
        },
    ],
}