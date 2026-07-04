import { revalidateTag } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const eventsGlobal: GlobalConfig = {
    slug: 'eventsGlobal',
    label: 'Events Section',
    hooks: {
        afterChange: [
            () => {
                revalidateTag('events', { expire: 0 })
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
    ],
}