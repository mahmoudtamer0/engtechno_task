import type { GlobalConfig } from 'payload'

export const MajorsGlobal: GlobalConfig = {
    slug: 'majorsGlobal',
    label: 'Majors Section',
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
    ],
}