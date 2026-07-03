import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getGraduatesGlobal() {
    const payload = await getPayload({ config: configPromise })

    const result = payload.findGlobal({ slug: 'graduatesGlobal' })

    return result
}