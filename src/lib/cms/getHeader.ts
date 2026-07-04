import config from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

export const getHeader = unstable_cache(
  async () => {
    const payload = await getPayload({ config })

    const header = await payload.findGlobal({
      slug: 'header',
      depth: 3,
    })

    return header
  },
  ['header'],
  { tags: ['header'] },
)