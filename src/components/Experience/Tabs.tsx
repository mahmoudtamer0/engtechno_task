'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Experience.module.css'
import Button from '../MainBtn/Button'
import { Badge } from '../MainHeadings/Badge'
import Headline from '../MainHeadings/Headline'

type Tab = {
    title: string
    description?: string | null
    image?: { url?: string | null } | string | null
    statLabel?: string | null
    statValue?: string | null
}

type Props = {
    tabs: Tab[]
    headline: string | null | undefined
    subheadline: string | null | undefined
    ctaLabel: string
    ctaUrl: string
}

export function Tabs({ tabs, headline, subheadline, ctaLabel, ctaUrl }: Props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const activeTab = tabs[activeIndex]

    useEffect(() => {
        if (isHovered) return

        const timer = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % tabs.length)
        }, 2000)

        return () => clearTimeout(timer)
    }, [activeIndex, isHovered, tabs.length])

    return (
        <section>
            <div className={styles.wrapper}>

                <div className={styles.left}>
                    <div style={{ marginBottom: "20px" }}>
                        <Badge badge={subheadline} />
                    </div>

                    <div style={{ marginBottom: "30px" }}>
                        <Headline headline={headline} />
                    </div>

                    <div className={styles.tabsWrapper}>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressIndicator}
                                style={{
                                    height: `${((activeIndex + 1) / tabs.length) * 100}%`
                                }}
                            />
                        </div>

                        <ul className={styles.tabList}>
                            {tabs.map((tab, i) => (
                                <li
                                    key={i}
                                    className={`${styles.tabItem} ${i === activeIndex ? styles.active : ''}`}
                                    onClick={() => { setActiveIndex(i) }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <div>
                                        <h4 className={styles.tabTitle}>{tab.title}</h4>
                                        {i === activeIndex && (
                                            <p className={styles.tabDesc}>{tab.description}</p>
                                        )}
                                    </div>
                                </li>
                            ))}

                        </ul>

                    </div>
                    <div style={{ width: "fit-content", marginTop: "30px" }}>
                        <Button ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                        {tabs.map((tab, i) => {
                            const url = typeof tab.image === 'object' ? tab.image?.url ?? '' : ''
                            return (
                                <img
                                    key={i}
                                    src={url}
                                    alt={tab.title}
                                    className={`${styles.image} ${i === activeIndex ? styles.imageVisible : styles.imageHidden}`}
                                />
                            )
                        })}
                        <div className={styles.statBadge}>
                            <span className={styles.statLabel}>{activeTab?.statLabel}</span>
                            <span className={styles.statValue}>{activeTab?.statValue}</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}