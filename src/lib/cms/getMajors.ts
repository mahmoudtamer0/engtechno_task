import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getMajors = unstable_cache(
    async () => {
        const payload = await getPayload({ config: configPromise })
        const result = await payload.find({
            collection: 'majors',
            limit: 20,
            sort: 'createdAt',
        })
        return result.docs
    },
    ['majors'],
    { tags: ['majors'] },
)

