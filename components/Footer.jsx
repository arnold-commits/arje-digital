import Link from 'next/link'
import { siteConfig, platforms } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-navy mt-20">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal to-gold flex items-center justify-center text-white font-bold text-sm">A</div>
              <span className="text-white font-display font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-4">
              Digital templates, automations, and SaaS tools for bookkeepers, tax preparers, and Amazon FBA sellers. Built by practitioners, for practitioners.
            </p>
            <p className="text-white/30 text-xs">{siteConfig.location} | {siteConfig.email}</p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4">Pages</h4>
            {[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Automation Bundle', href: 'https://arjebookkeeping.gumroad.com/l/ultimate-bundle', external: true },
              { label: 'Blog', href: '/blog' },
              { label: 'About', href: '/about' },
              { label: 'Affiliates', href: '/affiliates' },
              { label: 'Contact', href: '/contact' },
            ].map(pg => pg.external ? (
              <a key={pg.label} href={pg.href} target="_blank" rel="noopener"
                className="block text-white/50 text-sm hover:text-white/80 transition-colors mb-2">
                {pg.label}
              </a>
            ) : (
              <Link key={pg.label} href={pg.href}
                className="block text-white/50 text-sm hover:text-white/80 transition-colors mb-2">
                {pg.label}
              </Link>
            ))}
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4">Shop On</h4>
            {platforms.map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                className="block text-white/50 text-sm hover:text-white/80 transition-colors mb-2">
                {p.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">&copy; 2026 {siteConfig.name}. A DBA of ARJE Bookkeeping & Tax Services. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-white/25 text-xs hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/25 text-xs hover:text-white/50 transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="text-white/25 text-xs hover:text-white/50 transition-colors">Earnings Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
