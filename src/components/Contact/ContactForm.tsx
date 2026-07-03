'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

type Props = {
    badge?: string | null
    title?: string | null
    subtitle?: string | null
    buttonLabel?: string | null
    phoneLabel?: string | null
    phoneValue?: string | null
    emailLabel?: string | null
    emailValue?: string | null
}

export function ContactForm({
    badge,
    title,
    subtitle,
    buttonLabel,
    phoneLabel,
    phoneValue,
    emailLabel,
    emailValue,
}: Props) {
    const [formData, setFormData] = useState({ phone: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors: { [key: string]: string } = {}

        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
        if (formData.phone.trim().length < 11) newErrors.phone = 'Phone number must be 11 numbers'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        if (!formData.message.trim()) newErrors.message = 'Message is required'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setSubmitted(true)
        setTimeout(() => {
            setFormData({ phone: '', email: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    return (
        <section className={styles.section} >
            <div className={styles.left}>
                <span className={styles.badge}> {badge} </span>
                < h2 className={styles.title} > {title} </h2>
                < p className={styles.subtitle} > {subtitle} </p>
                < div className={styles.contactInfo} >
                    <div className={styles.infoRow}>
                        <span>{phoneLabel} </span>
                        < a href={`tel:${phoneValue}`
                        }> {phoneValue} </a>
                    </div>
                    < div className={styles.infoRow} >
                        <span>{emailLabel} </span>
                        < a href={`mailto:${emailValue}`}> {emailValue} </a>
                    </div>
                </div>
            </div>

            < form className={styles.form} onSubmit={handleSubmit} >
                <div className={styles.formGroup}>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    />
                    {errors.phone && <span className={styles.error}> {errors.phone} </span>}
                </div>

                < div className={styles.formGroup} >
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && <span className={styles.error}> {errors.email} </span>}
                </div>

                < div className={styles.formGroup} >
                    <textarea
                        name="message"
                        placeholder="Your Message *"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    />
                    {errors.message && <span className={styles.error}> {errors.message} </span>}
                </div>

                < button type="submit" className={styles.submitBtn} >
                    {buttonLabel} ↗
                </button>

                {submitted && <p className={styles.success}> Message sent successfully! </p>}
            </form>
        </section>
    )
}