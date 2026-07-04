import { getMajorsGlobal } from '@/lib/cms/getMajorsGlobal'
import styles from './Majors.module.css'
import { ProgramsSlider } from './MajorsSlider'
import { getMajors } from '@/lib/cms/getMajors'
import Headline from '../MainHeadings/Headline'
import { Badge } from '../MainHeadings/Badge'


export async function Majors() {
    const data = await getMajorsGlobal()
    const majors = await getMajors()

    if (!data || data.headline == undefined) return null

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Badge badge={data.subheadline} />
                <Headline headline={data.headline} />
            </div>
            <ProgramsSlider programs={majors} />
        </section>
    )
}