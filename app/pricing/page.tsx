import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { site } from '@/site.config'

export const metadata: Metadata = { title: 'Pricing', description: `Website speed optimization packages from ${site.name}.` }

export default function Pricing() {
  return (
    <main className="bg-[#0b0f1a] text-white pt-28 pb-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">Packages &amp; Pricing</h1>
        <p className="text-white/60 text-center mb-12">One-time price. Works on any platform.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {site.plans.map((p) => {
            const off = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
            return (
              <div key={p.name} className={`relative rounded-2xl p-6 flex flex-col border ${p.highlighted ? 'border-[#00d4ff]/40 bg-[#00d4ff]/[0.06]' : 'glass border-white/10'}`}>
                {p.highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-[#00d4ff] text-[#0b0f1a]">Most Popular</span>}
                <h2 className="text-lg font-bold mb-2">{p.name}</h2>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold">{site.currency}{p.price}</span>
                  <span className="text-white/40 line-through">{site.currency}{p.oldPrice}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#00d4ff]/15 text-[#00d4ff]">{off}% OFF</span>
                </div>
                <p className="text-white/55 text-xs mb-5">{p.delivery} delivery</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-[#00d4ff] shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Link href={`/contact?plan=${p.name}`} className={p.highlighted ? 'btn-primary text-center' : 'text-center text-sm font-semibold px-6 py-2.5 rounded-lg border border-white/15 hover:border-[#00d4ff]/40'}>Choose {p.name}</Link>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
