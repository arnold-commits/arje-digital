import BooksHealthCheck from '@/components/BooksHealthCheck'
import { siteConfig } from '@/lib/data'

const PAGE_URL = `${siteConfig.url}/books-health-check/`
const TITLE = 'Free Books Health Check for Amazon and eBay Sellers'
const DESCRIPTION =
  'A free self-check for sellers on QuickBooks Online. No login and no email. Answer with your books open and see which signs of forced corrections show up.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/books-health-check/' },
  openGraph: { type: 'website', url: PAGE_URL, title: TITLE, description: DESCRIPTION, images: ['/og/default.png'] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og/default.png'] },
}

export default function BooksHealthCheckPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0F1A2E 0%, #1B2A4A 55%, #1e3a5f 100%)' }}>
        <div className="max-w-3xl mx-auto px-5 py-16 sm:py-20 text-center relative">
          <p className="text-gold text-xs font-bold tracking-[3px] uppercase mb-5">Free · Amazon &amp; eBay Sellers on QuickBooks Online</p>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl leading-[1.1] mb-6">
            Books Health Check
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            Your books can balance and still be wrong. Answer these questions with QuickBooks open and see which warning signs show up.
          </p>
          <p className="text-white/60 text-xs mt-6">No login · no email · your answers stay in your browser</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-5 py-12 sm:py-16">
        <BooksHealthCheck />
        <p className="text-xs text-gray-600 leading-relaxed mt-6">
          Your individual answers never leave your browser. Our analytics records anonymous page visits, which kind of result was shown, and which result link was clicked. A self-check can miss problems, especially ones that only show up against your settlement files and statements.
        </p>
      </section>
    </>
  )
}
