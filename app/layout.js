import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/data'
import { Analytics } from '@vercel/analytics/next';

const DEFAULT_TITLE = `${siteConfig.name} — Amazon FBA Bookkeeping & Tools for Accounting Pros`

export const metadata = {
  // Absolute base for every relative URL in metadata (canonical, OG images).
  metadataBase: new URL(siteConfig.url),
  title: { default: DEFAULT_TITLE, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ['Amazon FBA bookkeeping', 'FBA accounting', 'Amazon seller bookkeeping', 'bookkeeper templates', 'tax prep automation', 'ARJE Digital'],
  // "./" resolves to the current route, so every page gets a self-referencing canonical
  // without per-page boilerplate. Pages can still override it.
  alternates: { canonical: './' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: DEFAULT_TITLE,
    description: siteConfig.description,
    locale: 'en_US',
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: 'ARJE Digital — forensic Amazon FBA bookkeeping, cleanup, and tax help for sellers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: siteConfig.description,
    images: ['/og/default.png'],
  },
}

// Site-wide entity graph. The @id anchors let page-level schema (e.g. the Foundation
// Diagnosis Service) reference the same Organization and Person instead of redeclaring them.
const ORG_ID = `${siteConfig.url}/#organization`
const PERSON_ID = `${siteConfig.url}/#arnold-dizon`

const siteLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: 'ARJE Bookkeeping & Tax Services',
      alternateName: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      logo: `${siteConfig.url}/og/default.png`,
      image: `${siteConfig.url}/og/default.png`,
      description: siteConfig.description,
      address: { '@type': 'PostalAddress', addressLocality: 'Henderson', addressRegion: 'NV', addressCountry: 'US' },
      areaServed: 'US',
      founder: { '@id': PERSON_ID },
      sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter, siteConfig.social.pinterest, siteConfig.social.gumroad, siteConfig.social.etsy, siteConfig.social.amazonAuthor],
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Arnold Dizon',
      jobTitle: 'PTIN-certified tax professional · QuickBooks Online ProAdvisor',
      worksFor: { '@id': ORG_ID },
      url: `${siteConfig.url}/about/`,
      sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter, siteConfig.social.amazonAuthor],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
