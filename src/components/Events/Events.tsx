import { getEvents } from '@/lib/cms/getEvents'
import styles from './Events.module.css'
import { EventsSlider } from './EventsSlider'
import { getEventsGlobal } from '@/lib/cms/getEventsGlobal'

export async function Events() {
    const data = await getEventsGlobal()
    const events = await getEvents()


    if (!data || data.headline == undefined) return null

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.badge}>{data.subheadline}</span>
                <h2 className={styles.title}>{data.headline}</h2>
            </div>
            <EventsSlider events={events} />
        </section>
    )
}