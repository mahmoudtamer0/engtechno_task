import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getExperience = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })
    const experience = await payload.findGlobal({ slug: 'experience' })
    return experience
  },
  ['experience'],
  { tags: ['experience'] },
)