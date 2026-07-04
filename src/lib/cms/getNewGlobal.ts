import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getNewsGlobal = unstable_cache(
    async () => {
        const payload = await getPayload({ config: configPromise })
        const result = await payload.findGlobal({ slug: 'newsGlobal' })
        return result
    },
    ['newsGlobal'],
    { tags: ['newsGlobal'] },
)