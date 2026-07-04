import styles from './News.module.css'

type NewsItem = {
    title: string
    description?: string | null
    image?: { url?: string | null } | string | null
    date?: string | null
    url?: string | null
}


type Props = {
    item: NewsItem
    i: number
    imageUrl: string
    formatDate: (dateStr?: string | null) => string
}

export function NewsCard({ item, i, imageUrl, formatDate }: Props) {

    return (
        <a href={item.url ?? '#'
        } className={styles.card} >
            <img src={imageUrl} alt={item.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
                <span className={styles.cardDate}>{formatDate(item.date)}</span>
            </div>
        </a >
    )
}