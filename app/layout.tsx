import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { site } from '@/site.config'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0b0f1a' }

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `Free Website Speed Test & Lighthouse Checker | ${site.name}`, template: `%s | ${site.name}` },
  description: `Free Google Lighthouse & PageSpeed Insights test with Core Web Vitals and a downloadable PDF report. Professional speed optimization by ${site.name}.`,
  openGraph: { title: `Free Website Speed Test | ${site.name}`, url: site.url, siteName: site.name, type: 'website', images: ['/speed-hero.webp'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
