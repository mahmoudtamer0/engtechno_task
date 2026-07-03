import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getMajorsGlobal() {
    const payload = await getPayload({ config: configPromise })

    const majorsGlobal = await payload.findGlobal({ slug: "majorsGlobal" })

    return majorsGlobal
}