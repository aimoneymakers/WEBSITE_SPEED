'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Gauge, Menu, X } from 'lucide-react'
import { site } from '@/site.config'

const links = [
  { href: '/', label: 'Speed Test' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#0b0f1a]/85 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" style={{ fontFamily: 'var(--font-syne)' }}>
          <Gauge size={20} className="text-[#00d4ff]" />
          {site.name}
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm !py-2 !px-5">Get a Quote</Link>
        </div>
        <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0f1a] px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80">{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  )
}
