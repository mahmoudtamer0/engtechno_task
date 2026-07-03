import styles from './Events.module.css'
import { memo } from 'react'

type Props = {
    event: {
        title: string
        description?: string | null
        image?: { url?: string | null } | string | null
        day?: string | null
        month?: string | null
        url?: string | null
    }
    imageUrl: string
}

export const EventsCard = memo(({ event, imageUrl }: Props) => {

    return (
        <a href={event.url ?? '#'} className={styles.card}>
            <img src={imageUrl} alt={event.title} className={styles.cardImage} />
            <div className={styles.cardOverlay} />

            <div className={styles.dateBadge}>
                <span className={styles.day}>{event.day}</span>
                <span className={styles.month}>{event.month}</span>
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardDesc}>{event.description}</p>
            </div>
        </a>
    )
})