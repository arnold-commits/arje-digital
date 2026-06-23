// app/sitemap.js
//
// Dynamic sitemap generator for arjebookkeeping.com
//
// Auto-includes:
//   - Static marketing/AEO pages (hardcoded list below)
//   - All products from lib/data.js with slug field (i.e. mini apps)
//
// Excludes:
//   - /thank-you/ (post-conversion page, no SEO value)
//
// Called automatically by Next.js at build time. Output served at /sitemap.xml.

import { products } from '@/lib/data'

const SITE_URL = 'https://arjebookkeeping.com'

export default function sitemap() {
  const now = new Date()

  const staticRoutes = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/products/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/quarterly-estimated-taxes/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/fba-bookkeeping-system/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/bookkeeper-hourly-rate-calculator/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/affiliates/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const productRoutes = products
    .filter(p => p.slug)
    .map(p => ({
      url: `${SITE_URL}/products/${p.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    }))

  return [...staticRoutes, ...productRoutes]
}