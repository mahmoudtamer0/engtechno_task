import { getExperience } from '@/lib/cms/getExperience'
import styles from './Experience.module.css'
import { Tabs } from './Tabs'
import Button from '../MainBtn/Button'

export async function Experience() {
    const data = await getExperience()

    if (!data || data.headline == undefined) return null

    const ctaLabel = data.buttonLabel?.[0]?.label ?? ''
    const ctaUrl = data.buttonLabel?.[0]?.url ?? ''

    return (
        <section className={styles.section}>
            <Tabs tabs={data.tabs ?? []} headline={data.headline} subheadline={data.subheadline} ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
        </section>
    )
}