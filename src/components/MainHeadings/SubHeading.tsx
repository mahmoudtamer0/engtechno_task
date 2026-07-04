import React from 'react'
import styles from './Headings.module.css'

const SubHeading = ({ subheadline }: { subheadline: string }) => {
    return (
        <span className={styles.subheadline}>{subheadline}</span>
    )
}