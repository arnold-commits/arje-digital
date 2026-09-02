// app/robots.js — served at /robots.txt by Next at build time (static export).
// Stance: allow every crawler, including AI answer engines — the site's AEO layer
// (llms.txt, FAQPage schema) exists to be read by them. Post-conversion pages are
// kept out of the index; they carry no value in search.

const SITE_URL = 'https://arjebookkeeping.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you/', '/thanks-help/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
