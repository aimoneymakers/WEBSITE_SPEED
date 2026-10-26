import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import ContactForm from './ContactForm'
import { site, waLink } from '@/site.config'

export const metadata: Metadata = { title: 'Contact', description: `Contact ${site.name}` }

export default function Contact() {
  return (
    <main className="bg-[#0b0f1a] text-white pt-28 pb-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">Contact {site.name}</h1>
        <p className="text-white/60 text-center mb-12">Tell us about your website and we&apos;ll get back to you.</p>
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-5 text-sm text-white/75">
            <div className="flex gap-3"><Mail size={18} className="text-[#00d4ff]" />{site.email}</div>
            <div className="flex gap-3"><Phone size={18} className="text-[#00d4ff]" />{site.phone}</div>
            <div className="flex gap-3"><MapPin size={18} className="text-[#00d4ff]" />{site.address}</div>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white"><MessageCircle size={18} className="text-[#00ffaa]" />Chat on WhatsApp</a>
          </div>
          <Suspense fallback={null}><ContactForm /></Suspense>
        </div>
      </div>
    </main>
  )
}
