import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ٌRoyal Puff - Premium E-Liquids',
  description: 'Explore a premium selection of vape devices and e-liquids',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
