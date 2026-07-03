import styles from './Marquee.module.css'
import Image from 'next/image'
import FirstLogo from '../../public/media/image 30 (1).png'
import SecondLogo from '../../public/media/d0a5ae3fd9f8211c45187e5b256492bb4b054acd.png'

export function Marquee() {

    const rows = [
        {
            items: Array(14).fill({ type: 'image', src: FirstLogo }),
            bgColor: '#2F67A2',
            direction: 'left',
        },
        {
            items: Array(14).fill({ type: 'image', src: SecondLogo }),
            bgColor: '#348141',
            direction: 'right',
        },
        {
            items: Array(14).fill({ type: 'text', text: 'NEW PARTNERSHIPS SOON' }),
            bgColor: '#808489',
            direction: 'left',
        },
    ]

    return (
        <div className={styles.wrapper}>
            {rows.map((row, i) => (
                <div
                    key={i}
                    className={styles.row}
                    style={{
                        backgroundColor: row.bgColor,
                        transform: `rotate(${i === 0 ? -2.5 : i === 1 ? 5 : -3}deg)`,
                    }}
                >
                    <div className={`${styles.track} ${row.direction === 'right' ? styles.trackReverse : ''}`}>
                        {row.items.map((item, j) => (
                            <span key={j} className={styles.item}>
                                {item.src
                                    ? <Image src={item.src} alt="" width={120} height={30} className={styles.logo} />
                                    : item.text
                                }
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}