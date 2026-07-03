import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getNewsGlobal() {
    const payload = await getPayload({ config: configPromise })

    const result = payload.findGlobal({ slug: 'newsGlobal' })

    return result
}