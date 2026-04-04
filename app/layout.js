import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/data'

export const metadata = {
  title: { default: `${siteConfig.name} — Digital Tools for Accounting Professionals`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ['bookkeeper templates', 'tax prep automation', 'Amazon FBA bookkeeping', 'Google Sheets templates', 'bookkeeping systems', 'ARJE Digital'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
