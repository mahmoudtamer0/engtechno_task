import type { CollectionConfig } from 'payload'

export const Graduates: CollectionConfig = {
    slug: 'graduates',
    admin: { useAsTitle: 'name' },
    access: { read: () => true },
    fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'quote', type: 'textarea' },
        { name: 'avatar', type: 'upload', relationTo: 'media' },
        { name: 'photo', type: 'upload', relationTo: 'media', required: true },
        { name: 'partnerLogo', type: 'upload', relationTo: 'media' },
        { name: 'gradYear', type: 'text' },
    ],
}