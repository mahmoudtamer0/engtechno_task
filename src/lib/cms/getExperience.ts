import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getExperience() {
  const payload = await getPayload({ config: configPromise })
  
  const experience = await payload.findGlobal({ slug: "experience" })
  
  return experience
}