import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const getEventsGlobal = unstable_cache(
    async () => {
        const payload = await getPayload({ config: configPromise })
        const eventsGlobal = await payload.findGlobal({ slug: 'eventsGlobal' })
        return eventsGlobal
    },
    ['eventsGlobal'],
    { tags: ['eventsGlobal'] },
)