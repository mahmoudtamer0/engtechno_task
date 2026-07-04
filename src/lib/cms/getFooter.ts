import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getFooter = unstable_cache(
    async () => {
        const payload = await getPayload({ config: configPromise })
        const footer = await payload.findGlobal({ slug: 'footer' })
        return footer
    },
    ['footer'],
    { tags: ['footer'] },
)