import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getContact() {
    const payload = await getPayload({ config: configPromise })

    const result = payload.findGlobal({ slug: 'contact-section' })

    return result
}