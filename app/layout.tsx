import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Royal Puff - Premium E-Liquids | Best Vaping Experience',
  description: 'Discover Royal Puff premium e-liquids crafted by Fady Emad and Marcileno Reda. High-quality vaping products with exceptional flavors and unmatched satisfaction.',
  keywords: 'vape, e-liquid, premium vaping, Royal Puff, vaping products, e-juice, tobacco flavors, fruit flavors',
  authors: [{ name: 'Royal Puff Team' }],
  robots: 'index, follow',
  metadataBase: new URL('https://royalpuff.com'),
  openGraph: {
    title: 'Royal Puff - Premium E-Liquids',
    description: 'Premium e-liquids with exceptional quality and innovative flavors',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
