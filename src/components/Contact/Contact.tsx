import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ContactForm } from './ContactForm'

export async function Contact() {
    const payload = await getPayload({ config: configPromise })
    const data = await payload.findGlobal({ slug: 'contact-section' })

    if (!data || !data.headline) return null

    return (
        <ContactForm
            badge={data?.badge}
            title={data?.headline}
            subtitle={data?.subheadline}
            buttonLabel={data?.buttonLabel}
            phoneLabel={data?.phoneLabel}
            phoneValue={data?.phoneValue}
            emailLabel={data?.emailLabel}
            emailValue={data?.emailValue}
        />
    )
}