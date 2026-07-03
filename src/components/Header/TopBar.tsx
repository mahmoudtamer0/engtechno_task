import { Search } from 'lucide-react'
import styles from './Header.module.css'

type TopBarLink = {
  label: string
  url: string
}

type Props = {
  links: TopBarLink[]
  rightLinks: TopBarLink[]
}


export function TopBar({ links, rightLinks }: Props) {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLeft}>
        {links.map((link) => (
          <a key={link.url} href={link.url}>
            {link.label}
          </a>
        ))}
      </div>
      <div className={styles.topBarRight}>
        {rightLinks.map((link) => (

          <a key={link.url} href={link.url}>
            {link.label == "Search" ? <Search size={14} /> : null}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}