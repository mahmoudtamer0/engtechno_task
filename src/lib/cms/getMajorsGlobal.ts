import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getMajorsGlobal = unstable_cache(
    async () => {
        const payload = await getPayload({ config: configPromise })
        const result = await payload.findGlobal({ slug: 'majorsGlobal' })
        return result
    },
    ['majorsGlobal'],
    { tags: ['majorsGlobal'] },
)