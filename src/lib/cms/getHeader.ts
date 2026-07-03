import config from '@payload-config'
import { getPayload } from 'payload'

export async function getHeader() {
  const payload = await getPayload({ config })

  const header = await payload.findGlobal({
    slug: 'header',
    depth: 3,
  })

  return header
}