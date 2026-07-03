import styles from './Graduates.module.css'
import { Coverflow } from './GraduatesFlow'
import { getGraduatesGlobal } from '@/lib/cms/getGraduatesGlobal'
import { getGraduates } from '@/lib/cms/getGraduates'
import Button from '../MainBtn/Button'

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
                <span className={styles.badge}>{badge}</span>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <Coverflow items={items} />

            <div className={styles.footer}>
                <Button ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
            </div>
        </section>
    )
}