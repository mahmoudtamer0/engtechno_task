import styles from './Headings.module.css'

export function Badge({ badge }: { badge: any }) {
    return (
        <span className={styles.badge}>{badge}</span>
    )
}