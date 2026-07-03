import type { GlobalConfig } from 'payload'

export const AdmissionSteps: GlobalConfig = {
    slug: 'admission-steps',
    access: { read: () => true },
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