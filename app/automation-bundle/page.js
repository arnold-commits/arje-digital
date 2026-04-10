import Link from 'next/link'
import { siteConfig } from '@/lib/data'

export const metadata = {
  title: "Bookkeeper's Automation Bundle — Complete Practice System",
  description: "Automate client onboarding, eliminate manual follow-up, and run your practice on free Google tools. One-time $197 payment with 60-day guarantee.",
}

const components = [
  { title: 'Tax Prep Client Onboarding System', value: '$97 value', items: 'JotForm intake templates, 4 Zapier automations, email sequences, client tracking sheet, WISP template, setup guide' },
  { title: 'Amazon Seller Bookkeeping Templates', value: '$47 value', items: 'P&L tracker, inventory management, Amazon fee calculator, quarterly tax estimator' },
  { title: 'Client Outreach Templates', value: '$27 value', items: 'New client acquisition emails, follow-up sequences, referral request templates' },
  { title: 'Video Tutorial Library', value: 'Included', items: 'Step-by-step setup videos, troubleshooting guides, best practices from 90+ clients' },
]

const faqs = [
  { q: 'Do I need Microsoft Office?', a: 'No. Everything runs on free Google Workspace tools — Sheets, Docs, Drive, Forms. This is one of the key advantages of this system.' },
  { q: 'How long does setup take?', a: 'Most users have the core system running within 2-3 hours. The video tutorials walk you through every step.' },
  { q: 'Is this for solo practitioners or firms?', a: 'Both. The system scales whether you have 5 clients or 100+.' },
  { q: 'What appears on my bank statement?', a: 'Your purchase will appear as CLKBANK*COM on your bank or credit card statement.' },
  { q: 'What if it does not work for me?', a: 'You have a full 60-day money-back guarantee. Contact us for a complete refund, no questions asked.' },
]

export default function AutomationBundlePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0F1A2E 0%, #1B2A4A 55%, #1e3a5f 100%)' }}>
        <div className="max-w-3xl mx-auto px-5 py-20 text-center relative">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span>Sold via ClickBank</span>
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            <span>60-Day Guarantee</span>
          </div>

          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl leading-[1.1] mb-5">
            The bookkeeper&apos;s<br />automation bundle
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Onboard clients in 10 minutes. Automate 80% of follow-up. Run your entire practice on free Google tools.
          </p>

          {/* VSL Placeholder */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-lg mx-auto">
            <div className="bg-white/8 rounded-xl aspect-video flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-teal/30 flex items-center justify-center">
                <div className="w-0 h-0 ml-1" style={{ borderLeft: '22px solid white', borderTop: '14px solid transparent', borderBottom: '14px solid transparent' }} />
              </div>
            </div>
            <p className="text-white/30 text-xs mt-3">Watch the 10-minute walkthrough</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="max-w-3xl mx-auto px-5 py-16">
        <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3 text-center">What You Get</p>
        <h2 className="font-display font-bold text-3xl text-navy mb-10 text-center">Four systems, one bundle</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {components.map(c => (
            <div key={c.title} className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-display font-bold text-base text-navy mb-1">{c.title}</h3>
              <p className="text-teal text-sm font-semibold mb-3">{c.value}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{c.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="max-w-3xl mx-auto px-5 mb-16">
        <h2 className="font-display font-bold text-2xl text-navy mb-6">Who this is for</h2>
        <div className="space-y-3">
          {[
            'Bookkeepers who want to stop recreating the same spreadsheets for every client',
            'Tax preparers who lose leads because their onboarding process is too slow',
            'Accounting professionals who want to grow without hiring staff',
            'Anyone building a financial services business who needs systems, not chaos',
            'Amazon FBA seller bookkeepers who need specialized templates',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
              <span className="text-teal font-bold text-lg mt-[-2px]">+</span>
              <span className="text-gray-600 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING BOX */}
      <section className="max-w-lg mx-auto px-5 mb-16">
        <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-10 border-2 border-teal">
          <p className="text-gray-500 text-sm mb-1">Total value: $171+</p>
          <div className="font-display font-extrabold text-5xl text-navy mb-1">$197</div>
          <p className="text-gray-400 text-sm mb-7">One-time payment · No subscriptions · 60-day guarantee</p>
          
          {/* ClickBank order button placeholder */}
          <a href="https://arjebookkeeping.gumroad.com/l/automation-bundle" target="_blank" rel="noopener" className="inline-block w-full max-w-xs px-10 py-4 bg-teal text-white font-bold rounded-xl hover:bg-teal-dark transition-all text-lg shadow-lg shadow-teal/20">
            Get Instant Access
          </a>
          <p className="text-gray-400 text-xs mt-4">Processed securely via ClickBank · Appears as CLKBANK*COM on your statement</p>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="max-w-3xl mx-auto px-5 mb-16">
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <h2 className="font-display font-bold text-2xl text-navy mb-4">About the creator</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Arnold Dizon is a PTIN-certified tax professional and founder of ARJE Bookkeeping & Tax Services in Henderson, Nevada. He manages over 90 active clients and specializes in Amazon FBA seller bookkeeping.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every template and automation in this bundle was built and tested in his own practice over three years of real-world use. This is not theory — it is what works.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-5 mb-16">
        <h2 className="font-display font-bold text-2xl text-navy mb-8 text-center">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-display font-semibold text-navy mb-2">{faq.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-lg mx-auto px-5 mb-16 text-center">
        <a href="https://arjebookkeeping.gumroad.com/l/automation-bundle" target="_blank" rel="noopener" className="inline-block px-10 py-4 bg-teal text-white font-bold rounded-xl hover:bg-teal-dark transition-all text-lg shadow-lg shadow-teal/20">
          Get Instant Access — $197
        </a>
        <p className="text-gray-400 text-xs mt-4">60-Day Money-Back Guarantee · Secure Checkout via ClickBank</p>
      </section>

      {/* FOOTER COMPLIANCE (REQUIRED BY CLICKBANK) */}
      <section className="max-w-3xl mx-auto px-5 mb-10 text-center">
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-400 text-xs mb-1">For Product Support, please contact the seller at {siteConfig.email}</p>
          <p className="text-gray-400 text-xs mb-3">For Order Support, please contact ClickBank at <a href="https://www.clkbank.com" className="text-teal underline">www.clkbank.com</a></p>
          <p className="text-gray-300 text-[10px] leading-relaxed max-w-xl mx-auto">
            EARNINGS DISCLAIMER: Results vary based on individual effort, experience, and market conditions. The income examples shown are not guarantees of earnings. This product provides templates and tools to help organize and automate bookkeeping and tax preparation practices.
          </p>
        </div>
      </section>
    </>
  )
}
