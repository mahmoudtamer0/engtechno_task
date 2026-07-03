import { PartnerCard } from './PartnersCard'
import styles from './Partners.module.css'
import { getPartners } from '@/lib/cms/getPartners'


export async function Partners() {
    const data = await getPartners()
    if (!data) return null
    const partners = data.partners ?? []

    const cards_1 = [partners[0], partners[1]]
    const cards_2 = [partners[1], partners[0]]

    return (
        <section className={styles.section}>
            <div className={styles.row}>
                {cards_1.map((partner, i) => {
                    const logoUrl = typeof partner?.logo === 'object' ? partner?.logo?.url ?? '' : ''
                    const bgUrl = typeof partner?.backgroundImage === 'object' ? partner?.backgroundImage?.url ?? '' : ''

                    return (
                        <PartnerCard
                            key={i}
                            name={partner?.name ?? ''}
                            logoUrl={logoUrl}
                            backgroundUrl={bgUrl}
                            ctaLabel={partner?.ctaLabel!}
                            ctaUrl={partner?.ctaUrl!}
                            stats={partner?.stats?.map(s => ({ value: s.value, label: s.label })) ?? []}
                            index={i}
                            isFirst={true}
                        />
                    )
                })}
            </div>

            <div className={styles.row} style={{ marginTop: "15px" }}>
                {cards_2.map((partner, i) => {
                    const logoUrl = typeof partner?.logo === 'object' ? partner?.logo?.url ?? '' : ''
                    const bgUrl = typeof partner?.backgroundImage === 'object' ? partner?.backgroundImage?.url ?? '' : ''

                    return (
                        <PartnerCard
                            key={i}
                            name={partner?.name ?? ''}
                            logoUrl={logoUrl}
                            backgroundUrl={bgUrl}
                            ctaLabel={partner?.ctaLabel!}
                            ctaUrl={partner?.ctaUrl!}
                            stats={partner?.stats?.map(s => ({ value: s.value, label: s.label })) ?? []}
                            index={i}
                            isFirst={false}
                        />
                    )
                })}
            </div>
        </section>
    )
}