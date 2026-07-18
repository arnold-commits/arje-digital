import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/data'
import { Analytics } from '@vercel/analytics/next';
export const metadata = {
  title: { default: `${siteConfig.name} — Amazon FBA Bookkeeping & Tools for Accounting Pros`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ['Amazon FBA bookkeeping', 'FBA accounting', 'Amazon seller bookkeeping', 'bookkeeper templates', 'tax prep automation', 'ARJE Digital'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
