import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'cazcik.com',
  description: 'my humble internet home.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth bg-white text-black antialiased selection:bg-blue-600 selection:text-white dark:bg-black dark:text-white`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
