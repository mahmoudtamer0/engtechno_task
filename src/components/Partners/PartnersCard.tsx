import styles from './Partners.module.css'
import Button from '../MainBtn/Button'

type Props = {
    name: string
    logoUrl: string
    backgroundUrl: string
    ctaLabel: string
    ctaUrl: string
    stats: { value?: string | null; label?: string | null }[]
    isActive?: boolean
    index: number
    isFirst?: boolean
}


export function PartnerCard({ name, logoUrl, backgroundUrl, ctaLabel, ctaUrl, stats, index, isFirst }: Props) {

    return (
        <div
            className={styles.cardWrapper}
            style={{ rotate: isFirst ? index == 0 ? "5deg" : "-5deg" : index == 0 ? "-5deg" : "5deg" }}
        >
            <img src={backgroundUrl} alt={name} className={styles.cardBg} />
            <div className={styles.cardOverlay} />
            <div className={styles.cardLogoWrapper} style={{ left: index == 0 ? "-300px" : "28px" }}>
                <img src={logoUrl} alt={name} className={styles.cardLogo} />
            </div>
            <div className={styles.cardContent} style={{ minWidth: "100%" }}>
                <div style={{ minWidth: "100%" }}>
                    <div className={styles.cardStats} style={{ left: index == 0 ? "-50%" : "0" }}>
                        <div style={{ width: "153px" }}>

                            <Button ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
                        </div>
                        {stats.map((stat, i) => (
                            <div key={i} className={styles.stat}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}