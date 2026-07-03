'use client'

import { useRef } from 'react'
import styles from './Majors.module.css'
import { MoveLeft, MoveRight } from 'lucide-react'

type Program = {
    title: string
    programsCount?: string | null
    image?: { url?: string | null } | string | null
    url?: string | null
}

type Props = {
    programs: Program[]
}

export function ProgramsSlider({ programs }: Props) {


    const trackRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (!trackRef.current) return
        const cardWidth = 340
        trackRef.current.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <div className={styles.sliderWrapper}>
                <div className={styles.track} ref={trackRef}>
                    {programs.map((program, i) => {
                        const imageUrl = typeof program.image === 'object' ? program.image?.url ?? '' : ''
                        return (
                            <a
                                key={i}
                                href={program.url ?? '#'}
                                className={styles.card}
                            >
                                <img src={imageUrl} alt={program.title} className={styles.cardImage} />
                                <div className={styles.cardOverlay} />
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{program.title}</h3>
                                    <p className={styles.cardCount}>{program.programsCount} Programs</p>
                                </div>
                            </a>
                        )
                    })}
                </div>

                <div className={styles.controls}>
                    <button
                        className={styles.arrowBtn}
                        onClick={() => scroll('left')}
                        aria-label="Previous"
                    >
                        <MoveLeft strokeWidth={0.75} />
                    </button>
                    <button
                        className={`${styles.arrowBtn} ${styles.arrowBtnActive}`}
                        onClick={() => scroll('right')}
                        aria-label="Next"
                    >
                        <MoveRight strokeWidth={0.75} />
                    </button>
                </div>
            </div >
        </>

    )
}