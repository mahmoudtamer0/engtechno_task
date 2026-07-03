import { HeaderServer } from '@/components/Header'
import { Hero } from '@/components/Hero/Hero'
import { Experience } from '@/components/Experience/Experience'
import { Partners } from '@/components/Partners/Partners'
import { Marquee } from '@/components/Marquee/Marquee'
import { Majors } from '@/components/Majors/Majors'
import { Events } from '@/components/Events/Events'
import { Graduates } from '@/components/Graduates/Graduates'
import { AdmissionSteps } from '@/components/AdmissonSteps/AdmissonSteps'
import { News } from '@/components/News/News'
import { Contact } from '@/components/Contact/Contact'
import { FooterServer } from '@/components/Footer'



export default async function HomePage() {
  return (
    <main>
      <HeaderServer />
      <Hero />
      <Experience />
      <Partners />
      <Marquee />
      <Majors />
      <Events />
      <Graduates />
      <AdmissionSteps />
      <News />
      <Contact />
      <FooterServer />
    </main>
  )
}