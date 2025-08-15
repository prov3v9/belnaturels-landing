
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bel Naturels - Toujou Bel, Toujou Naturels',
  description: 'Premium health & beauty, travel services, and food distribution for the Haitian community. Always Beautiful, Always Natural.',
  keywords: 'Bel Naturels, health, beauty, travel, food distribution, Haitian community, natural products',
  metadataBase: new URL('https://belnaturels.com'),
  openGraph: {
    title: 'Bel Naturels - Toujou Bel, Toujou Naturels',
    description: 'Premium health & beauty, travel services, and food distribution for the Haitian community. Always Beautiful, Always Natural.',
    url: 'https://belnaturels.com',
    siteName: 'Bel Naturels',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bel Naturels - Toujou Bel, Toujou Naturels',
    description: 'Premium health & beauty, travel services, and food distribution for the Haitian community. Always Beautiful, Always Natural.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
