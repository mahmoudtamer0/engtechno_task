import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getEventsGlobal() {
    const payload = await getPayload({ config: configPromise })

    const eventsGlobal = await payload.findGlobal({ slug: "eventsGlobal" })

    return eventsGlobal
}