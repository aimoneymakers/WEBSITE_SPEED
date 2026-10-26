import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { site, waLink } from '@/site.config'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b14] mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <h3 className="font-bold text-lg mb-2">{site.name}</h3>
          <p className="text-sm text-white/55">{site.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Pages</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/">Speed Test</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex gap-2"><Mail size={15} className="mt-0.5 text-[#00d4ff]" />{site.email}</li>
            <li className="flex gap-2"><Phone size={15} className="mt-0.5 text-[#00d4ff]" />{site.phone}</li>
            <li className="flex gap-2"><MapPin size={15} className="mt-0.5 text-[#00d4ff]" />{site.address}</li>
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-white"><MessageCircle size={15} className="mt-0.5 text-[#00ffaa]" />WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} {site.name} · {site.domain} · All rights reserved
      </div>
    </footer>
  )
}
