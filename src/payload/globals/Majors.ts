import { revalidateTag } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const MajorsGlobal: GlobalConfig = {
    slug: 'majorsGlobal',
    label: 'Majors Section',
    access: { read: () => true },
    hooks: {
        afterChange: [
            () => {
                revalidateTag('majors', { expire: 0 })
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