import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getHero() {
  const payload = await getPayload({ config: configPromise })
  
  const hero = await payload.findGlobal({ slug: 'hero' })
  
  return hero
}