import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cazcik.com'),
  title: 'cazcik.com',
  description: 'my humble internet home',
  openGraph: {
    title: 'cazcik.com',
    description: 'my humble internet home',
    url: 'https://cazcik.com',
    siteName: 'cazcik',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'cazcik.com',
    description: 'my humble internet home',
    creator: '@cazcik',
  },
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
