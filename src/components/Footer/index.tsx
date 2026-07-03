import { getFooter } from '@/lib/cms/getFooter'
import { Footer } from './Footer'

export async function FooterServer() {
    const data = await getFooter()
    if (!data) return null
    return <Footer data={data} />
}