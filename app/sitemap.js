// app/sitemap.js
//
// Dynamic sitemap generator for arjebookkeeping.com. Served at /sitemap.xml at build time.
//
// Auto-includes:
//   - Static marketing/AEO pages (list below)
//   - All products from lib/data.js with a slug field (the mini apps)
//
// Excludes:
//   - /thank-you/ and /thanks-help/ (post-conversion, no SEO value) and the legal pages.
//
// lastModified is a real per-route date, NOT the build time. Stamping every URL with "now" on
// every deploy tells Google everything changed every time, which devalues the signal.
// BUMP THE DATE WHEN YOU MATERIALLY CHANGE THE PAGE. Products share the lib/data.js date.

import { products } from '@/lib/data'

const SITE_URL = 'https://arjebookkeeping.com'
const PRODUCTS_DATA_UPDATED = '2026-07-27' // last material change to lib/data.js

const staticRoutes = [
  { path: '/', lastModified: '2026-09-01', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/products/', lastModified: '2026-09-02', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/get-help/', lastModified: '2026-09-01', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/foundation-diagnosis/', lastModified: '2026-09-01', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/bookkeeping/', lastModified: '2026-09-01', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solo-cpa-client-capacity-calculator/', lastModified: '2026-05-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/quarterly-estimated-taxes/', lastModified: '2026-09-01', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/fba-bookkeeping-system/', lastModified: '2026-07-27', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/bookkeeper-hourly-rate-calculator/', lastModified: '2026-04-24', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog/', lastModified: '2026-09-02', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/about/', lastModified: '2026-04-04', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact/', lastModified: '2026-04-25', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/affiliates/', lastModified: '2026-04-04', changeFrequency: 'monthly', priority: 0.5 },
]

export default function sitemap() {
  const routes = staticRoutes.map(r => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const productRoutes = products
    .filter(p => p.slug)
    .map(p => ({
      url: `${SITE_URL}/products/${p.slug}/`,
      lastModified: new Date(PRODUCTS_DATA_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.9,
    }))

  return [...routes, ...productRoutes]
}
