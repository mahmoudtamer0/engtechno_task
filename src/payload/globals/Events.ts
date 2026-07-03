import type { GlobalConfig } from 'payload'

export const eventsGlobal: GlobalConfig = {
    slug: 'eventsGlobal',
    label: 'Events Section',
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
    ],
}