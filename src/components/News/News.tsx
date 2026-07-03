import { getNewsGlobal } from '@/lib/cms/getNewGlobal'
import { getNews } from '@/lib/cms/getNews'
import styles from './News.module.css'
import { NewsSlider } from './NewsSlider'


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
                <span className={styles.badge}>{subheadline}</span>
                <h2 className={styles.title}>{headline}</h2>
                <p className={styles.subtitle}>{secondSubheadline}</p>
            </div>
            <NewsSlider items={items} ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
        </section>
    )
}