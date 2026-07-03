import { getMajorsGlobal } from '@/lib/cms/getMajorsGlobal'
import styles from './Majors.module.css'
import { ProgramsSlider } from './MajorsSlider'
import { getMajors } from '@/lib/cms/getMajors'


export async function Majors() {
    const data = await getMajorsGlobal()
    const majors = await getMajors()

    if (!data || data.headline == undefined) return null

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.badge}>{data.subheadline}</span>
                <h2 className={styles.title}>{data.headline}</h2>
            </div>
            <ProgramsSlider programs={majors} />
        </section>
    )
}