'use client'

import { useRef } from 'react'
import styles from './News.module.css'
import { NewsCard } from './NewsCard'
import Button from '../MainBtn/Button'
import { MoveLeft, MoveRight } from 'lucide-react'


type NewsItem = {
    title: string
    description?: string | null
    image?: { url?: string | null } | string | null
    date?: string | null
    url?: string | null
}

type Props = {
    items: NewsItem[]
    ctaLabel: string
    ctaUrl: string
}

export function NewsSlider({ items, ctaLabel, ctaUrl }: Props) {
    const trackRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (!trackRef.current) return
        const cardWidth = 340
        trackRef.current.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth',
        })
    }

    const formatDate = (dateStr?: string | null) => {
        if (!dateStr) return ''
        const date = new Date(dateStr)
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    }

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.track} ref={trackRef}>
                {items.map((item, i) => {
                    const imageUrl = typeof item.image === 'object' ? item.image?.url ?? '' : ''
                    return (
                        <NewsCard key={i} item={item} i={i} imageUrl={imageUrl} formatDate={formatDate} />
                    )
                })}
            </div>

            <div className={styles.footer}>
                <div className={styles.controls}>
                    <button className={styles.arrowBtn} onClick={() => scroll('left')} aria-label="Previous"><MoveLeft strokeWidth={0.75} /></button>
                    <button className={`${styles.arrowBtn} ${styles.arrowBtnActive}`} onClick={() => scroll('right')} aria-label="Next"><MoveRight strokeWidth={0.75} /></button>
                </div>
                <Button ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
            </div>
        </div>
    )
}