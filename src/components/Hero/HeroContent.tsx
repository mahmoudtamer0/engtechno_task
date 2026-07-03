import { ArrowUpRight } from 'lucide-react'
import styles from './Hero.module.css'

type Props = {
    headline: string
    subtext: string
    primaryCta: string
    secondaryCta: string
  } 
  
  export function HeroContent({ headline, subtext, primaryCta, secondaryCta }: Props) {
    return (
      <div className={styles.content}>
        <h1 className={styles.headline}>{headline}</h1>

        <div className={styles.rightContent}>
        <p className={styles.subtext}>{subtext}</p>

        <div className={styles.buttons}>
          <a href={primaryCta} className={styles.primaryBtn}>
            <span className={styles.ctaLabel}>{primaryCta}</span>
            <span className={styles.ctaArrow}><ArrowUpRight /></span>
          </a>
          <a href={secondaryCta} className={styles.secondaryBtn}>
            {secondaryCta}
          </a>
        </div>
        </div>
      </div>
    )
  }