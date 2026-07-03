import styles from './Footer.module.css'


export function FooterColumn({ title, links }: any) {
    return (
        <div className={styles.column}>
            <h4>{title}</h4>
            <ul>
                {links?.map((link: any) => (
                    <li key={link.label}>
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}