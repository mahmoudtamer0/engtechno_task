import type { GlobalConfig } from 'payload'

export const GraduatesGlobal: GlobalConfig = {
    slug: 'graduatesGlobal',
    label: 'Graduates Section',
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
        },
    ],
}