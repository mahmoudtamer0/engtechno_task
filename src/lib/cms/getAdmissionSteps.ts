import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getAdmissionSteps() {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.findGlobal({ slug: "admission-steps" })
    return result
}