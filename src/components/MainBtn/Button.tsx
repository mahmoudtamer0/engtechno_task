import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import styles from './Button.module.css'

type Props = {
    ctaLabel: string
    ctaUrl: string
  }
  

const Button = ({ ctaLabel, ctaUrl }: Props) => {
  return (
    <a href={ctaUrl} className={styles.ctaBtn}>
        {ctaLabel}
        <span><ArrowUpRight /></span>
        </a>
  )
}

export default Button