import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getMajors() {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
        collection: "majors",
        limit: 20,
        sort: 'createdAt',
    })
    return result.docs
}