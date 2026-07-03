import { TopBar } from './TopBar'
import { MainNav } from './MainNav'
import styles from './Header.module.css'

type TopBarLink = {
  label: string
  url: string
}

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
  topBarLinks: TopBarLink[]
  topBarRightLinks: TopBarLink[]
  logoUrl: string
  navLinks: any
  ctaLabel?: string | null
  ctaUrl?: string | null
}

export function Header({
  topBarLinks,
  logoUrl,
  navLinks,
  ctaLabel,
  ctaUrl,
  topBarRightLinks,
}: Props) {
  return (
    <header className={styles.header}>
      <TopBar links={topBarLinks} rightLinks={topBarRightLinks} />
      <MainNav
        logoUrl={logoUrl}
        navLinks={navLinks}
        ctaLabel={ctaLabel!}
        ctaUrl={ctaUrl!}
      />
    </header>
  )
}