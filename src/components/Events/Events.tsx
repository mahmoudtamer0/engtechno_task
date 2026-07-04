import { getEvents } from '@/lib/cms/getEvents'
import styles from './Events.module.css'
import { EventsSlider } from './EventsSlider'
import { getEventsGlobal } from '@/lib/cms/getEventsGlobal'
import { Badge } from '../MainHeadings/Badge'
import Headline from '../MainHeadings/Headline'

export async function Events() {
    const data = await getEventsGlobal()
    const events = await getEvents()


    if (!data || data.headline == undefined) return null

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Badge badge={data.subheadline} />
                <Headline headline={data.headline} />
            </div>
            <EventsSlider events={events} />
        </section>
    )
}