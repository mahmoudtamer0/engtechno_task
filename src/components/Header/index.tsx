import { getHeader } from '@/lib/cms/getHeader'
import { Header } from './Header'

export async function HeaderServer() {
  const data = await getHeader()

  if (!data) return null

  const logoUrl =
    typeof data.logo === 'object'
      ? data.logo?.url ?? ''
      : ''

  return (
    <Header
      topBarLinks={data.topBarLinks ?? []}
      topBarRightLinks={data.topBarRightLinks ?? []}
      logoUrl={logoUrl}
      navLinks={data.navLinks}
      ctaLabel={data.ctaLabel}
      ctaUrl={data.ctaUrl}
    />
  )
}