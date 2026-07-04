import { getNewsGlobal } from '@/lib/cms/getNewGlobal'
import { getNews } from '@/lib/cms/getNews'
import styles from './News.module.css'
import { NewsSlider } from './NewsSlider'
import { Badge } from '../MainHeadings/Badge'
import { title } from 'process'
import Headline from '../MainHeadings/Headline'
import { SecondeSubHeading } from '../MainHeadings/SecondeSubHeading'


export async function News() {

    const data = await getNewsGlobal()
    if (!data || !data.headline) return null

    const headline: string = data.headline ?? ''
    const subheadline: string = data.subheadline ?? ''
    const secondSubheadline: string = data.secondSubheadline ?? ''
    const ctaLabel: string = data.ctaLabel ?? ''
    const ctaUrl: string = data.ctaUrl ?? ''

    const items = await getNews()
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Badge badge={subheadline} />
                <Headline headline={headline} />
                <SecondeSubHeading subheadline={secondSubheadline} />
            </div>
            <NewsSlider items={items} ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
        </section>
    )
}