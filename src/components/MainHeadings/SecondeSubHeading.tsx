import styles from './Headings.module.css'

export function SecondeSubHeading({ subheadline }: { subheadline: any }) {
    return (
        <p className={styles.subtitle}>{subheadline}</p>
    )
}