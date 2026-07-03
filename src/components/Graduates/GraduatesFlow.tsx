'use client'

import { useState } from 'react'
import styles from './Graduates.module.css'

type Testimonial = {
    name: string
    role?: string | null
    quote?: string | null
    avatar?: { url?: string | null } | string | null
    photo?: { url?: string | null } | string | null
    partnerLogo?: { url?: string | null } | string | null
    gradYear?: string | null
}

type Props = {
    items: Testimonial[]
}

export function Coverflow({ items }: Props) {
    const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2))

    const next = () => setActiveIndex((prev) => Math.min(prev + 1, items.length - 1))
    const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0))

    return (
        <div className={styles.coverflowWrapper}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous">←</button>

            <div className={styles.stage}>
                {items.map((item, i) => {
                    const distance = i - activeIndex
                    const absDistance = Math.abs(distance)

                    if (absDistance > 3) return null

                    const translateX = distance * 160
                    const rotate = distance * 12
                    const scale = 1 - absDistance * 0.15
                    const zIndex = 10 - absDistance
                    const opacity = absDistance > 2 ? 0 : 1

                    const photoUrl = typeof item.photo === 'object' ? item.photo?.url ?? '' : ''
                    const avatarUrl = typeof item.avatar === 'object' ? item.avatar?.url ?? '' : ''
                    const logoUrl = typeof item.partnerLogo === 'object' ? item.partnerLogo?.url ?? '' : ''

                    return (
                        <div
                            key={i}
                            className={`${styles.card} ${distance === 0 ? styles.cardActive : ""}`}
                            style={{
                                transform: `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
                                zIndex,
                                opacity,
                            }}
                            onClick={() => setActiveIndex(i)}
                        >

                            <div className={styles.imageWrapper}>
                                <img
                                    src={photoUrl}
                                    alt={item.name}
                                    className={styles.cardPhoto}
                                />

                                <div className={styles.gradBadge}>
                                    <div className={styles.gradShape}>
                                        <span>{item.gradYear}</span>
                                        <small>Grad</small>
                                    </div>
                                </div>

                                {logoUrl && (
                                    <img
                                        src={logoUrl}
                                        alt=""
                                        className={styles.partnerLogo}
                                    />
                                )}
                            </div>

                            {distance === 0 && (
                                <div className={styles.cardInfo}>

                                    <div className={styles.personRow}>
                                        {avatarUrl && (
                                            <img
                                                src={avatarUrl}
                                                alt={item.name}
                                                className={styles.avatar}
                                            />
                                        )}

                                        <div>
                                            <p className={styles.name}>{item.name}</p>
                                            <p className={styles.role}>{item.role}</p>
                                            <p className={styles.quote}>{item.quote}</p>
                                        </div>

                                    </div>



                                </div>
                            )}

                        </div>
                    )
                })}
            </div>

            <button className={styles.navBtn} onClick={next} aria-label="Next">→</button>
        </div>
    )
}