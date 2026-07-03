'use client'

import { useRef } from 'react'
import styles from './Events.module.css'
import { EventsCard } from './EventsCard'
import { MoveLeft, MoveRight } from 'lucide-react'
import Button from '../MainBtn/Button'

type Event = {
    title: string
    description?: string | null
    image?: { url?: string | null } | string | null
    day?: string | null
    month?: string | null
    url?: string | null
}

type Props = {
    events: Event[]
}

export function EventsSlider({ events }: Props) {

    const scrollDevRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        const cardWidth = 540;
        scrollDevRef.current?.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth',
        });
    }



    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.track} ref={scrollDevRef}>
                {events.map((event, i) => {
                    const imageUrl = typeof event.image === 'object' ? event.image?.url ?? '' : ''
                    return (
                        <EventsCard key={i} event={event} imageUrl={imageUrl} />
                    )
                })}
            </div>

            <div className={styles.footer}>
                <div className={styles.controls}>
                    <button className={styles.arrowBtn} onClick={() => scroll('left')}><MoveLeft strokeWidth={0.75} /></button>
                    <button className={`${styles.arrowBtn} ${styles.arrowBtnActive}`} onClick={() => scroll('right')}><MoveRight strokeWidth={0.75} /></button>
                </div>
                <div style={{ width: "fit-content" }}>

                    <Button ctaLabel='Explore Our All Events' ctaUrl='#' />
                </div>
            </div>
        </div>
    )
}