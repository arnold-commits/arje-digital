import Link from 'next/link'
import { products, stats, siteConfig } from '@/lib/data'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0F1A2E 0%, #1B2A4A 55%, #1e3a5f 100%)' }}>
        <div className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(42,157,143,0.18) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-60px] left-[-40px] w-60 h-60 rounded-full" style={{ background: 'radial-gradient(circle, rgba(233,196,106,0.12) 0%, transparent 70%)' }} />
        
        <div className="max-w-3xl mx-auto px-5 py-24 text-center relative">
          <p className="animate-fade-up stagger-1 text-gold text-xs font-bold tracking-[3px] uppercase mb-5">PTIN-Certified Tax Professional · Henderson, NV</p>
          <h1 className="animate-fade-up stagger-2 font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6">
            Stop drowning in<br />paperwork.{' '}
            <span className="gradient-text">Start scaling.</span>
          </h1>
          <p className="animate-fade-up stagger-3 text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Digital templates, automations, and SaaS tools for bookkeepers, tax preparers, and Amazon FBA sellers. 100% Google Workspace. Zero monthly software fees.
          </p>
          <div className="animate-fade-up stagger-4 flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="px-7 py-4 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all text-sm tracking-wide">
              Browse Products
            </Link>
            <a href="https://arjebookkeeping.gumroad.com/l/ultimate-bundle" target="_blank" rel="noopener" className="px-7 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm tracking-wide">
              Get the Bundle — $197
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative z-10 -mt-8 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`animate-fade-up stagger-${i+1} bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm`}>
              <div className="font-display font-extrabold text-3xl text-teal">{s.value}</div>
              <div className="text-gray-400 text-xs font-medium mt-1 tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Featured Products</p>
        <h2 className="font-display font-bold text-3xl text-navy mb-2">Built by a practitioner, for practitioners</h2>
        <p className="text-gray-400 mb-10 max-w-lg">Every template and automation tested on real clients in a real 90+ client practice.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products" className="inline-block px-8 py-4 border-2 border-navy text-navy font-bold rounded-lg hover:bg-navy hover:text-white transition-all text-sm">
            View All Products →
          </Link>
        </div>
      </section>

      {/* GOOGLE WORKSPACE BANNER */}
      <section className="max-w-6xl mx-auto px-5 mb-20">
        <div className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8" style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #243b5e 100%)' }}>
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">100% Google Workspace. Zero software fees.</h3>
            <p className="text-white/50 text-sm">No Microsoft Office required. Your clients pay nothing extra for tools.</p>
          </div>
          <div className="flex gap-3">
            {['Sheets', 'Docs', 'Drive', 'Forms'].map(g => (
              <div key={g} className="bg-white/10 rounded-lg px-4 py-3 text-white/80 text-sm font-medium">{g}</div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="max-w-6xl mx-auto px-5 mb-20">
        <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3 text-center">Who We Help</p>
        <h2 className="font-display font-bold text-3xl text-navy mb-10 text-center">Three audiences, one mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Bookkeepers & CPAs', desc: 'Automate client onboarding, standardize workflows, and scale to 50+ clients without hiring staff.', icon: '📊' },
            { title: 'Tax Preparers', desc: 'Streamline intake, track documents, and eliminate the manual chase every tax season.', icon: '📋' },
            { title: 'Amazon FBA Sellers', desc: 'Track profitability, manage inventory costs, and estimate quarterly taxes with purpose-built templates.', icon: '📦' },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-xl p-8 border border-gray-100 text-center card-hover">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display font-bold text-lg text-navy mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-5 mb-20 text-center">
        <div className="bg-white rounded-2xl p-10 md:p-14 border border-gray-100 shadow-sm">
          <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Ready to Automate?</p>
          <h2 className="font-display font-bold text-3xl text-navy mb-4">Get the complete system for $197</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">One-time payment. No subscriptions. 60-day money-back guarantee. Start onboarding clients on autopilot this weekend.</p>
          <a href="https://arjebookkeeping.gumroad.com/l/ultimate-bundle" target="_blank" rel="noopener" className="inline-block px-10 py-4 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all text-sm tracking-wide">
            Get the Automation Bundle →
          </a>
        </div>
      </section>
    </>
  )
}
