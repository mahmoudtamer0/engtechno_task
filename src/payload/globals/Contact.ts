import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
    slug: 'contact-section',
    access: { read: () => true },
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