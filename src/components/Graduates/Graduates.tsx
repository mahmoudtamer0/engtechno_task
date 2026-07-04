import styles from './Graduates.module.css'
import { Coverflow } from './GraduatesFlow'
import { getGraduatesGlobal } from '@/lib/cms/getGraduatesGlobal'
import { getGraduates } from '@/lib/cms/getGraduates'
import Button from '../MainBtn/Button'
import Headline from '../MainHeadings/Headline'
import { Badge } from '../MainHeadings/Badge'
import { SecondeSubHeading } from '../MainHeadings/SecondeSubHeading'

export async function Graduates() {
    const graduatesSection = await getGraduatesGlobal()

    if (!graduatesSection || !graduatesSection.headline) return null

    const badge = graduatesSection.subheadline ?? ''
    const title = graduatesSection.headline ?? ''
    const subtitle = graduatesSection.secondSubheadline ?? ''
    const ctaLabel = graduatesSection.ctaLabel ?? ''
    const ctaUrl = graduatesSection.ctaUrl ?? ''


    const items = await getGraduates();

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Badge badge={badge} />
                <Headline headline={title} />
                <SecondeSubHeading subheadline={subtitle} />
            </div>

            <Coverflow items={items} />

            <div className={styles.footer}>
                <Button ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
            </div>
        </section>
    )
}