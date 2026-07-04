import Image from 'next/image'
import { FooterColumn } from './FooterColumn'
import styles from './Footer.module.css'
import { AtSign, Mail, MapPin, Phone } from 'lucide-react'
import Button from '../MainBtn/Button'

export function Footer({ data }: any) {
    const logoUrl = typeof data.logo === 'object' ? data.logo?.url ?? '' : ''


    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.left}>
                    {logoUrl && <Image src={logoUrl} alt="logo" width={270} height={100} />}
                    <p>{data.description}</p>
                </div>

                <div className={styles.contact}>
                    <h3>{data.contactTitle}</h3>
                    <ul>
                        <li><span className={styles.badge}><Phone strokeWidth={1.25} /></span>{data.phone}</li>
                        <li><MapPin strokeWidth={1.25} size={30} />{data.address}</li>
                        <li><Mail strokeWidth={1.25} />{data.email}</li>
                    </ul>
                    <div style={{ width: 'fit-content' }}>

                        <Button ctaLabel={data.applyButtonLabel} ctaUrl={data.applyButtonUrl} />
                    </div>
                </div>

                <div className={styles.search}>
                    <h3>{data.searchTitle}</h3>
                    <div className={styles.searchBox}>
                        <input placeholder={data.searchPlaceholder} />
                        <button>{data.searchButtonLabel}</button>
                    </div>
                    <div className={styles.socials}>
                        {data.socialLinks?.map((link: any) => (
                            <a key={link.url} href={link.url ?? '#'} target="_blank" rel="noopener noreferrer">
                                <AtSign strokeWidth={1.25} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.links}>
                {data.columns?.map((col: any) => (
                    <FooterColumn key={col.title} title={col.title ?? ''} links={col.links ?? []} />
                ))}
            </div>

            <div className={styles.bottom}>
                <span>{data.copyright}</span>
                <div>
                    {data.bottomLinks?.map((link: any) => (
                        <a key={link.label} href={link.url ?? '#'}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}