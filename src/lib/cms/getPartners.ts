import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getPartners = unstable_cache(
    async () => {
        const payload = await getPayload({ config: configPromise })
        const partners = await payload.findGlobal({ slug: 'partners' })
        return partners
    },
    ['partners'],
    { tags: ['partners'] },
)