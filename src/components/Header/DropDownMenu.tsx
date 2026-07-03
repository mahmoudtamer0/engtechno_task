'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import { ChevronRight } from 'lucide-react'

type MegaCard = {
    title: string
    description?: string | null
    logo?: {
        url?: string | null
    } | null
    url?: string | null
}

type MegaLink = {
    label: string
    url?: string | null
}

type NavLink = {
    label: string
    url?: string | null

    megaMenu?: {
        cards?: MegaCard[]
        links?: MegaLink[]
        heroImage?: {
            url?: string | null
        } | null
    }
}

type Props = {
    link: NavLink
}

export function DropdownMenu({ link }: Props) {
    const [open, setOpen] = useState(false)
    const [activeCard, setActiveCard] = useState(0)

    console.log(link)

    const hasMega =
        link.megaMenu &&
        (
            (link.megaMenu.cards?.length ?? 0) > 0 ||
            (link.megaMenu.links?.length ?? 0) > 0
        )

    if (!hasMega) {
        return (
            <a href={link.url ?? '#'} className={styles.navLink}>
                {link.label}
            </a>
        )
    }

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        setOpen(true)
    }

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false)
        }, 250)
    }

    return (
        <div
            className={styles.navItemWrapper}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <a href={link.url ?? '#'} className={styles.navLink}>
                {link.label}

                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                >
                    <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </a>

            {open && (
                <div className={styles.megaMenu}>
                    <div className={styles.megaWrapper}>
                        {/* LEFT */}

                        <div className={styles.leftColumn}>
                            {link.megaMenu?.cards?.map((card, index) => (
                                <a
                                    key={card.title}
                                    href={card.url ?? '#'}
                                    className={`${styles.universityCard} ${activeCard === index ? styles.activeCard : ''
                                        }`}
                                    onMouseEnter={() => setActiveCard(index)}
                                >
                                    <div className={styles.cardInfo} >
                                        {card.logo?.url && (
                                            <Image
                                                src={card.logo.url}
                                                alt={card.title}
                                                width={100}
                                                height={100}
                                                className={styles.cardLogo}
                                            />
                                        )}

                                        <div>
                                            <h4>{card.title == "..." ? "" : card.title}</h4>
                                            {card.description && (
                                                <p>{card.description}</p>
                                            )}
                                        </div>
                                    </div>

                                    <span className={styles.arrow}>
                                        <ChevronRight strokeWidth={1.25} />
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* CENTER */}

                        <div className={styles.centerColumn}>
                            {link.megaMenu?.links?.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.url ?? '#'}
                                    className={styles.menuLink}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* RIGHT */}

                        <div className={styles.rightColumn}>
                            {link.megaMenu?.heroImage?.url && (
                                <Image
                                    src={link.megaMenu.heroImage.url}
                                    alt=""
                                    width={460}
                                    height={520}
                                    className={styles.heroImage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}