import React from 'react'
import styles from './Headings.module.css'

const Headline = ({ headline }: { headline: any }) => {
    return (
        <h2 className={styles.title}>{headline}</h2>
    )
}

export default Headline