# Speed Checker Website (template)

Free Google Lighthouse / PageSpeed checker + full website (Home, Pricing, About, Contact).

## 1. Make it yours (only edit ONE file)
Open `site.config.ts` and replace every `YOUR ...` value: name, domain, email, phone, WhatsApp, address, prices.
The header, footer, contact page, SEO, sitemap and PDF report all update automatically.
Optional: replace `public/speed-hero.webp` with your own image.

## 2. Run on your computer
```
npm install
cp .env.example .env.local     # then add your keys
npm run dev                    # http://localhost:3000
```

## 3. Get the free Google API key (required for the checker)
1. https://console.cloud.google.com → create project
2. APIs & Services → Library → enable **PageSpeed Insights API**
3. Credentials → Create API key → paste into `GOOGLE_PAGESPEED_API_KEY`

## 4. Put the code on GitHub
1. github.com → New repository (e.g. `my-speed-site`)
2. Upload the folder (do NOT upload `node_modules` or `.env.local`)

## 5. Deploy on Vercel (free)
1. vercel.com → sign in with GitHub → Add New → Project → pick your repo
2. Environment Variables: add `GOOGLE_PAGESPEED_API_KEY` (and the optional ones below)
3. Deploy

## 6. Connect your domain
Vercel → Project → Settings → Domains → add `YOURDOMAIN.com` → copy the DNS records to your domain provider.

## 7. Contact form messages (pick any, all optional)
- **Email:** free account at resend.com → API key → set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`
- **Supabase:** create project → run `supabase/messages.sql` → set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
- Neither set: messages only appear in Vercel logs.
