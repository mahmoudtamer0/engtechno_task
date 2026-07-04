import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getHero = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })
    const hero = await payload.findGlobal({ slug: 'hero' })
    return hero
  },
  ['hero'],
  { tags: ['hero'] },
)