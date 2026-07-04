import { getAdmissionSteps } from '@/lib/cms/getAdmissionSteps'
import styles from './AdmissionSteps.module.css'
import Button from '../MainBtn/Button'
import Step from './step'
import { Badge } from '../MainHeadings/Badge'
import Headline from '../MainHeadings/Headline'
import { SecondeSubHeading } from '../MainHeadings/SecondeSubHeading'


export async function AdmissionSteps() {

    const data = await getAdmissionSteps()

    if (!data || !data.headline) return null

    const steps = data.steps ?? []

    const badge = data.subheadline ?? ''
    const title = data.headline ?? ''
    const subtitle = data.secondSubheadline ?? ''
    const ctaLabel = data.ctaLabel ?? ''
    const ctaUrl = data.ctaUrl ?? ''

    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <div style={{ marginBottom: '20px' }}>

                    <Badge badge={badge} />
                </div>
                <div style={{ marginBottom: '20px' }}>

                    <Headline headline={title} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <SecondeSubHeading subheadline={subtitle} />
                </div>
                <div style={{ width: 'fit-content' }}>
                    <Button ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
                </div>
            </div>

            <div className={styles.right}>
                {steps.map((step, i) => (
                    <Step key={i} step={step} i={i} />
                ))}
            </div>
        </section>
    )
}