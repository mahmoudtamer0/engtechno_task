import { HeroVideo } from './HeroVideo'
import { HeroContent } from './HeroContent'
import { getHero } from '@/lib/cms/getHero'
import styles from './Hero.module.css'


export async function Hero() {

  const data = await getHero()

  const headline: string = data.headline ?? ''
  const subtext: string = data.subheadline ?? ''
  const videoUrl: any = data.backgroundVideo ?? ''
  const primaryCta: string = data?.buttonLabel_1 ?? ''
  const secondaryCta: string = data.buttonLabel_2 ?? ''


  return (
    <section className={styles.section}>
      <HeroVideo videoUrl={videoUrl} />
      <HeroContent
        headline={headline}
        subtext={subtext}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />
    </section>
  )
}