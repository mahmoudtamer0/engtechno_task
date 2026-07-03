import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jost.variable}>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'University Landing Page',
}