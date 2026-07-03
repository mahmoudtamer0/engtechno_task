import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getPartners() {
    const payload = await getPayload({ config: configPromise })

    const partners = await payload.findGlobal({ slug: "partners" })

    return partners
}