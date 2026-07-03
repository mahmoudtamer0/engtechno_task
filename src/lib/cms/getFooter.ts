import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getFooter() {
    const payload = await getPayload({ config: configPromise })

    const footer = await payload.findGlobal({ slug: "footer" })

    return footer
}