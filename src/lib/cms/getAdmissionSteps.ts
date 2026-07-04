import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getAdmissionSteps = unstable_cache(
    async () => {
        const payload = await getPayload({ config: configPromise })
        const result = await payload.findGlobal({ slug: 'admission-steps' })
        return result
    },
    ['admission-steps'],
    { tags: ['admission-steps'] },
)