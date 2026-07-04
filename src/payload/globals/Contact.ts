import { revalidateTag } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
    slug: 'contact-section',
    access: { read: () => true },
    hooks: {
        afterChange: [
            () => {
                revalidateTag('contact', { expire: 0 })
            },
        ],
    },
    fields: [
        { name: 'badge', type: 'text', required: true },
        { name: 'headline', type: 'text', required: true },
        { name: 'subheadline', type: 'text', required: true },
        { name: 'buttonLabel', type: 'text' },
        { name: 'phoneLabel', type: 'text' },
        { name: 'phoneValue', type: 'text' },
        { name: 'emailLabel', type: 'text' },
        { name: 'emailValue', type: 'text' },
    ],
}