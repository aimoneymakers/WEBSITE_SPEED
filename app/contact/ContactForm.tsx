'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ContactForm() {
  const sp = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')
  const [f, setF] = useState({
    name: '', email: '', phone: '', domain: sp.get('domain') || '',
    message: sp.get('report') || (sp.get('plan') ? `I'm interested in the ${sp.get('plan')} plan.` : ''),
  })
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value })
  const cls = 'w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/30 bg-white/5 border border-white/10 focus:outline-none focus:border-[#00d4ff]/50'

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
      setStatus(r.ok ? 'ok' : 'err')
    } catch { setStatus('err') }
  }

  if (status === 'ok') return <div className="glass rounded-2xl p-8 text-center"><h3 className="text-xl font-bold mb-2">Thank you!</h3><p className="text-white/65 text-sm">We received your message and will reply soon.</p></div>

  return (
    <form onSubmit={submit} className="glass rounded-2xl p-6 space-y-4">
      <input required placeholder="Your name" value={f.name} onChange={set('name')} className={cls} />
      <input required type="email" placeholder="Your email" value={f.email} onChange={set('email')} className={cls} />
      <input placeholder="Phone / WhatsApp (optional)" value={f.phone} onChange={set('phone')} className={cls} />
      <input placeholder="Your website (e.g. example.com)" value={f.domain} onChange={set('domain')} className={cls} />
      <textarea required rows={6} placeholder="How can we help?" value={f.message} onChange={set('message')} className={cls} />
      <button disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send Message'}</button>
      {status === 'err' && <p className="text-sm text-[#ff9b9b]">Could not send. Please email us directly instead.</p>}
    </form>
  )
}
