import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/site.config'

export const metadata: Metadata = { title: 'About', description: `About ${site.name}` }

export default function About() {
  return (
    <main className="bg-[#0b0f1a] text-white pt-28 pb-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">About {site.name}</h1>
        <p className="text-white/70 mb-4">Hi, I&apos;m {site.ownerName}. I help businesses make their websites fast, using real Google Lighthouse and Core Web Vitals data instead of guesswork.</p>
        <p className="text-white/70 mb-4">Slow sites lose visitors, sales and Google rankings. Every fix we make is tested individually, so your site keeps working while it gets faster.</p>
        <p className="text-white/70 mb-8">Based in {site.city}. Working with clients worldwide.</p>
        <Link href="/contact" className="btn-primary">Contact Us</Link>
      </div>
    </main>
  )
}
