// ─────────────────────────────────────────────────────────────
//  EDIT ONLY THIS FILE to make the website yours.
//  Everything on every page (header, footer, contact, pricing,
//  SEO, PDF report) reads from here.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'YOUR NAME',                 // brand / business name
  tagline: 'YOUR TAGLINE',           // e.g. "Fast websites, better rankings"
  domain: 'YOURDOMAIN.com',          // no https://, no www
  url: 'https://YOURDOMAIN.com',     // full URL (used for SEO + sitemap)
  email: 'YOUR EMAIL',
  phone: 'YOUR NUMBER',              // shown on the site
  whatsapp: 'YOUR NUMBER',           // digits only for the link, e.g. 923001234567
  address: 'YOUR ADDRESS',
  city: 'YOUR CITY, YOUR COUNTRY',
  ownerName: 'YOUR NAME',            // shown on About page
  social: {
    facebook: '',                    // leave '' to hide
    instagram: '',
    linkedin: '',
    twitter: '',
  },
  currency: '$',
  plans: [
    { name: 'Basic',    price: 70,  oldPrice: 299,  delivery: '3–5 days',
      features: ['Speed optimization', 'Browser caching', 'Image compression', 'CSS/JS minification'] },
    { name: 'Standard', price: 150, oldPrice: 699,  delivery: '5–7 days', highlighted: true,
      features: ['Everything in Basic', 'Lazy loading setup', 'Advanced caching', 'Priority support'] },
    { name: 'Premium',  price: 300, oldPrice: 1299, delivery: '7–10 days',
      features: ['Everything in Standard', 'E-commerce sites', '30-day monitoring', 'Monthly report'] },
  ],
}
export const waLink = () => `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`
