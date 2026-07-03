'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { DropdownMenu } from './DropDownMenu'
import Button from '../MainBtn/Button'
import styles from './Header.module.css'

type MenuItem = {
    title: string
    description?: string | null
    image?: { url?: string | null } | string | null
    links?: { label?: string | null; url?: string | null }[]
}

type NavLink = {
    label: string
    url?: string | null
    menuItems?: MenuItem[]
}

type TopBarLink = {
    label: string
    url: string
}

type Props = {
    logoUrl: string
    navLinks: NavLink[]
    ctaLabel?: string
    ctaUrl?: string
    topBarLinks?: TopBarLink[]
}

export function MainNav({ logoUrl, navLinks, ctaLabel, ctaUrl, topBarLinks }: Props) {
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    return (
        <nav className={styles.mainNav}>
            <a href="/" className={styles.logo}>
                <Image src={logoUrl} alt="Logo" width={220} height={36} priority />
            </a>

            <ul className={styles.navLinks}>
                {navLinks.map((link) => (
                    <li key={link.label} className={styles.navLinkLi}>
                        <DropdownMenu link={link} />
                    </li>
                ))}
            </ul>

            <div className={styles.navButton}>
                <Button ctaLabel={ctaLabel ?? ''} ctaUrl={ctaUrl ?? '#'} />
            </div>

            <span
                className={styles.hamburgerBtnEE}
                onClick={() => isMobileOpen ? setIsMobileOpen(false) : setIsMobileOpen(true)}
                aria-label="Open menu"
            >
                <Menu strokeWidth={1.25} />
            </span>


            <ul className={styles.navLinksMobileEE + (isMobileOpen ? ' ' + styles.active : '')}>
                {navLinks.map((link) => (
                    <li key={link.label} className={styles.navLinkLi}>
                        <a href={link.url ?? '#'} className={styles.mobileLink}>
                            <span>{link.label}</span>

                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}