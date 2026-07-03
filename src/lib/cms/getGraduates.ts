import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getGraduates() {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: "graduates",
        limit: 20,
        sort: 'createdAt',
    })
    return result.docs
}