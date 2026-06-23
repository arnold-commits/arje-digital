'use client'
import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/data'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Bookkeeping', href: '/bookkeeping' },
  { name: 'Products', href: '/products' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Affiliates', href: '/affiliates' },
  { name: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-navy border-b-2 border-teal">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal to-gold flex items-center justify-center text-white font-bold text-sm font-display transition-transform group-hover:scale-110">A</div>
          <div>
            <span className="text-white font-display font-bold text-base tracking-tight">{siteConfig.name}</span>
            <span className="hidden sm:inline text-white/40 text-xs ml-2 font-body">by ARJE Bookkeeping & Tax</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all">
              {link.name}
            </Link>
          ))}
          <a href="https://arjebookkeeping.gumroad.com/l/ultimate-bundle" target="_blank" rel="noopener"
            className="ml-2 px-4 py-2 rounded-md text-sm font-bold bg-teal text-white hover:bg-teal-dark transition-all">
            Get the Bundle
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-5 py-4 animate-fade-in">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} onClick={() => setOpen(false)}
              className="block px-3 py-3 text-white/80 hover:text-white text-sm font-medium border-b border-white/5">
              {link.name}
            </Link>
          ))}
          <a href="https://arjebookkeeping.gumroad.com/l/ultimate-bundle" target="_blank" rel="noopener" onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-3 rounded-md text-sm font-bold bg-teal text-white text-center">
            Get the Bundle — $197
          </a>
        </div>
      )}
    </nav>
  )
}
