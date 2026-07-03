import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getEvents() {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
        collection: "events",
        limit: 20,
        sort: 'createdAt',
    })
    return result.docs
}