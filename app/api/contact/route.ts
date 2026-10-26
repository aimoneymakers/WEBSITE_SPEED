import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

// Sends the message to your email (Resend) and/or saves it in Supabase.
// Both are optional — set the env vars you want. If neither is set,
// the message is only logged in the Vercel function logs.
export async function POST(req: NextRequest) {
  const b = await req.json().catch(() => null)
  if (!b?.name || !b?.email || !b?.message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  const clean = (v: unknown, n = 4000) => String(v ?? '').slice(0, n)
  const m = { name: clean(b.name, 200), email: clean(b.email, 200), phone: clean(b.phone, 50), domain: clean(b.domain, 200), message: clean(b.message) }

  let delivered = false

  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Website <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: m.email,
        subject: `New message from ${m.name}`,
        text: `Name: ${m.name}\nEmail: ${m.email}\nPhone: ${m.phone}\nWebsite: ${m.domain}\n\n${m.message}`,
      }),
    })
    delivered = delivered || r.ok
  }

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const r = await fetch(`${process.env.SUPABASE_URL}/rest/v1/messages`, {
      method: 'POST',
      headers: { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify(m),
    })
    delivered = delivered || r.ok
  }

  if (!delivered) console.log('CONTACT MESSAGE (no email/db configured):', m)
  return NextResponse.json({ ok: true })
}
