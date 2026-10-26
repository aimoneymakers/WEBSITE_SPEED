import Image from 'next/image'
import Link from 'next/link'
import SpeedTool from '@/components/SpeedTool'
import { site } from '@/site.config'
import { Gauge, CheckCircle2, Zap, ImageIcon, Layers, Server, Cpu, FileSearch, ShieldCheck, ArrowRight } from 'lucide-react'

const features = [
  { icon: ImageIcon, title: 'Image Optimization', desc: 'Modern formats and correct sizes so nothing shifts while loading.' },
  { icon: Layers, title: 'Lazy Loading', desc: 'Only what is visible loads first; the rest loads as people scroll.' },
  { icon: Zap, title: 'Render-Blocking Fixes', desc: 'Unused JS and CSS removed so the page paints faster.' },
  { icon: Server, title: 'Smart Caching', desc: 'Proper cache rules so return visits are instant.' },
  { icon: Cpu, title: 'Less JavaScript', desc: 'Lower main-thread work for a snappier feel.' },
  { icon: FileSearch, title: 'Font & Preload Tuning', desc: 'Critical assets load first so text appears sooner.' },
]
const steps = [
  { t: 'Audit', d: 'We run Lighthouse and PageSpeed Insights and find exactly what slows your site.' },
  { t: 'Fix', d: 'Each fix is made one at a time, never randomly.' },
  { t: 'Test', d: 'Every change is verified on the live site before the next.' },
  { t: 'Deliver', d: 'You get a before/after report with real scores.' },
]
const faqs = [
  ['Is the speed test really free?', 'Yes. It uses the real Google Lighthouse and PageSpeed Insights data, with no sign-up and no email. You can copy the report or download it as a PDF.'],
  ['Which websites can you speed up?', 'Any platform: WordPress, Shopify, Wix, Squarespace, Webflow, React, Next.js, or a fully custom site.'],
  ['Will optimizing break my site?', 'No. Changes are made one at a time, tested, and always have a rollback plan.'],
  ['What score can I expect?', 'A 90+ score on mobile and desktop is a common outcome once the real bottlenecks are fixed. Results depend on your platform.'],
]

export default function Home() {
  return (
    <main className="bg-[#0b0f1a] text-white">
      <section className="pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/[0.06] text-sm text-[#00d4ff] font-semibold mb-5">
              <Gauge size={16} /> Free Lighthouse &amp; Core Web Vitals Checker
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Is your <span className="text-gradient">website slow</span>?<br />Test it free, then fix it.
            </h1>
            <p className="text-lg text-white/70">{site.name} helps you reach a 90+ Lighthouse score on mobile and desktop without breaking anything.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
            <SpeedTool />
            <div className="rounded-2xl p-4 sm:p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2 mb-3 px-1">
                <Gauge size={15} className="text-[#00d4ff]" />
                <span className="text-xs font-semibold text-white/70">Example result after optimization</span>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                <Image src="/speed-hero.webp" alt="Performance gauge showing an improved page speed score" fill priority sizes="(max-width:1024px) 90vw, 45vw" className="object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-3">
                {[['LCP', '1.4s'], ['INP', '25ms'], ['CLS', '0.03'], ['Score', '94']].map(([l, v]) => (
                  <div key={l} className="rounded-lg py-2 text-center" style={{ background: 'rgba(0,255,170,0.06)', border: '1px solid rgba(0,255,170,0.15)' }}>
                    <div className="text-sm font-extrabold text-[#00ffaa]">{v}</div>
                    <div className="text-[10px] text-white/50">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Get a Free Quote <ArrowRight size={18} /></Link>
            <Link href="/pricing" className="px-8 py-3 rounded-lg border border-white/15 text-white/80 hover:border-[#00d4ff]/40 transition-all text-sm font-semibold">See Pricing</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">What&apos;s Included</h2>
          <p className="text-white/60 text-center mb-12">Every fix that actually moves your score.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: 'rgba(0,212,255,0.12)' }}><Icon size={20} className="text-[#00d4ff]" /></div>
                <h3 className="font-semibold text-sm mb-1.5">{title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.t} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-[#00d4ff]/30 flex items-center justify-center font-bold text-[#00d4ff]">{i + 1}</div>
                <h3 className="font-semibold mb-2">{s.t}</h3>
                <p className="text-white/55 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-7 text-center max-w-3xl mx-auto mt-14">
            <ShieldCheck size={30} className="text-[#00d4ff] mx-auto mb-3" />
            <p className="text-white/70 text-sm">A rollback plan is confirmed before any edit, so your live site stays fully working throughout.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map(([q, a]) => (
              <div key={q} className="border-b border-white/10 pb-6">
                <h3 className="font-semibold mb-2 flex gap-2"><CheckCircle2 size={18} className="text-[#00d4ff] shrink-0 mt-0.5" />{q}</h3>
                <p className="text-white/65 text-sm pl-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4" style={{ background: 'linear-gradient(90deg,#00d4ff,#7a5cff)' }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h2 className="text-2xl font-bold">Ready for a faster website?</h2>
            <p className="text-white/85 text-sm">Get a free initial speed check from {site.name}.</p>
          </div>
          <Link href="/contact" className="bg-white text-[#0b0f1a] font-bold text-sm px-7 py-3 rounded-xl inline-flex items-center gap-2">Get Started <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  )
}
