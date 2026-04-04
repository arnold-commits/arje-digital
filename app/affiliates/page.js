import { siteConfig } from '@/lib/data'

export const metadata = { title: "Affiliate Program — Earn 65% Commission" }

const resources = [
  '5 pre-written email swipes (customize and send to your list)',
  'Banner ads in 4 sizes (728x90, 300x250, 160x600, 468x60)',
  'Target audience demographic data and pain points',
  'Product screenshots and mockup images',
  'FAQ sheet to share with your audience',
  'Product comparison data vs. practice management software',
]

export default function AffiliatesPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Affiliate Program</p>
      <h1 className="font-display font-bold text-4xl text-navy mb-3">Earn 65% commission per sale</h1>
      <p className="text-gray-400 mb-10 max-w-lg">Promote the Bookkeeper&apos;s Automation Bundle through ClickBank and earn $128+ per sale. Performance-based — you only earn when we earn.</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
        {[
          { num: '65%', label: 'Commission rate', sub: 'Highest in our category' },
          { num: '$128+', label: 'Per sale payout', sub: 'On a $197 product' },
          { num: '60 day', label: 'Cookie duration', sub: 'ClickBank standard' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl p-7 text-center border border-gray-100 card-hover">
            <div className="font-display font-extrabold text-4xl text-teal">{s.num}</div>
            <div className="font-display font-semibold text-navy mt-1">{s.label}</div>
            <div className="text-gray-400 text-xs mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <h2 className="font-display font-bold text-2xl text-navy mb-6">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
        {[
          { step: '01', title: 'Sign up on ClickBank', desc: 'Create a free ClickBank affiliate account. Search for our product in the marketplace.' },
          { step: '02', title: 'Get your HopLink', desc: 'Generate your unique affiliate tracking link. Use our email swipes and banners to promote.' },
          { step: '03', title: 'Earn commissions', desc: 'When someone buys through your link, you earn 65%. ClickBank pays you weekly.' },
        ].map(s => (
          <div key={s.step} className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="font-display font-extrabold text-3xl text-teal/20 mb-2">{s.step}</div>
            <h3 className="font-display font-bold text-navy mb-2">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Who buys */}
      <h2 className="font-display font-bold text-2xl text-navy mb-6">Who buys this product</h2>
      <div className="bg-white rounded-xl p-8 border border-gray-100 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-display font-semibold text-navy mb-3">Target audience</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Bookkeepers starting or scaling a practice</li>
              <li>• Tax preparers (solo and small firms)</li>
              <li>• Accountants adding bookkeeping services</li>
              <li>• Amazon FBA seller bookkeeping specialists</li>
              <li>• Financial services professionals</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-navy mb-3">Pain points they have</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Manual client onboarding taking 45+ minutes each</li>
              <li>• No standardized systems or processes</li>
              <li>• Paying $50-200/mo for practice management software</li>
              <li>• Losing clients due to slow onboarding</li>
              <li>• Tax season chaos from disorganized files</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources */}
      <h2 className="font-display font-bold text-2xl text-navy mb-6">Promotional resources</h2>
      <div className="bg-white rounded-xl p-8 border border-gray-100 mb-10">
        <div className="space-y-3 mb-8">
          {resources.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-teal font-bold text-lg mt-[-2px]">+</span>
              <span className="text-gray-600 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <a href="https://www.clickbank.com" target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all text-sm">
          Join on ClickBank →
        </a>
      </div>

      {/* Contact */}
      <div className="bg-navy/5 rounded-xl p-6 text-center">
        <p className="text-gray-600 text-sm mb-1">Questions about our affiliate program?</p>
        <a href={`mailto:${siteConfig.email}`} className="text-teal font-semibold text-sm">{siteConfig.email}</a>
      </div>
    </div>
  )
}
