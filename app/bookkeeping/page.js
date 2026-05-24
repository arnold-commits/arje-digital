import Link from 'next/link'

export default function Bookkeeping() {
  const spotsRemaining = 10

  const tiers = [
    {
      name: 'Tier 2',
      subtitle: 'Monthly Close',
      description: 'You enter transactions, I close the month.',
      foundingPrice: '$1,475',
      effectiveMonthly: '$245.83/mo',
      standardRate: '$295/mo',
      savings: '17% off standard',
      features: [
        'Initial cleanup of your QuickBooks (up to $2,500 scope)',
        'Monthly reconciliation of bank and credit card accounts',
        'Monthly P&L and Balance Sheet delivered by the 15th',
        'Year-end books ready for tax filing',
        'Direct access to me — not a junior, not a virtual assistant',
      ],
    },
    {
      name: 'Tier 3',
      subtitle: 'Full Service',
      description: 'I do everything.',
      foundingPrice: '$2,575',
      effectiveMonthly: '$429.17/mo',
      standardRate: '$495/mo',
      savings: '13% off standard',
      features: [
        'Everything in Tier 2',
        'Transaction categorization (you don\'t touch the books)',
        'Quarterly review call (30 min)',
        'Year-end 1099 preparation for your contractors',
      ],
      featured: true,
    },
  ]

  const builtFor = [
    { title: 'Real estate agents', desc: 'Commission tracking, expense categorization, mileage records.', icon: '🏠' },
    { title: 'Restaurants', desc: 'POS reconciliation, tip reporting, food cost tracking.', icon: '🍽️' },
    { title: 'Service businesses', desc: 'Consultants, contractors, agencies. Project revenue, 1099 contractors.', icon: '💼' },
    { title: 'E-commerce sellers', desc: 'Amazon, eBay, Shopify. Inventory, fees, multi-channel reconciliation.', icon: '📦' },
    { title: 'Healthcare practitioners', desc: 'Chiropractors, therapists, trainers. Insurance reimbursements, mixed payment types.', icon: '🩺' },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0F1A2E 0%, #1B2A4A 55%, #1e3a5f 100%)' }}>
        <div className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(42,157,143,0.18) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-60px] left-[-40px] w-60 h-60 rounded-full" style={{ background: 'radial-gradient(circle, rgba(233,196,106,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-3xl mx-auto px-5 py-24 text-center relative">
          <p className="animate-fade-up stagger-1 text-gold text-xs font-bold tracking-[3px] uppercase mb-5">Founding Bookkeeping Client Offer · Henderson, NV</p>
          <h1 className="animate-fade-up stagger-2 font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6">
            10 founding spots.<br />
            <span className="gradient-text">Cleanup included.</span>
          </h1>
          <p className="animate-fade-up stagger-3 text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Small business bookkeeping built for Henderson and Vegas owners. Founding rate locked for 12 months. Prepaid 6 months up front. When the spots are gone, the offer closes.
          </p>
          <div className="animate-fade-up stagger-4 flex flex-wrap gap-4 justify-center">
            <Link href="#tiers" className="px-7 py-4 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all text-sm tracking-wide">
              See the Offer
            </Link>
            <a href="mailto:arnold@arjebookkeeping.com?subject=Founding%20Bookkeeping%20Client%20Inquiry" className="px-7 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm tracking-wide">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* SPOTS REMAINING BAR */}
      <section className="relative z-10 -mt-8 px-5">
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm animate-fade-up stagger-1">
          <p className="text-gold text-xs font-bold tracking-[3px] uppercase mb-2">Spots Remaining</p>
          <div className="font-display font-extrabold text-5xl text-navy">{spotsRemaining}<span className="text-gray-300 text-3xl"> / 10</span></div>
          <p className="text-gray-400 text-xs font-medium mt-2 tracking-wide uppercase">Updated daily · First come, first served</p>
        </div>
      </section>

      {/* WHO I AM */}
      <section className="max-w-3xl mx-auto px-5 py-20">
        <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Who I Am</p>
        <h2 className="font-display font-bold text-3xl text-navy mb-6">A practitioner, not a sales funnel</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>I'm Arnold Dizon, a PTIN-certified tax professional in Henderson with 90+ active tax clients since 2021.</p>
          <p>I'm launching a small bookkeeping practice alongside the tax work. The first 10 clients get a founding rate that won't be offered again, and they get me directly — not a junior, not a virtual assistant offshore.</p>
          <p>If you've been doing your own books in QuickBooks or piecing it together in spreadsheets, this is built for you.</p>
        </div>
      </section>

      {/* THE TIERS */}
      <section id="tiers" className="max-w-6xl mx-auto px-5 py-10 mb-10">
        <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3 text-center">Two Tiers</p>
        <h2 className="font-display font-bold text-3xl text-navy mb-2 text-center">Pick the level of service you want</h2>
        <p className="text-gray-400 mb-12 max-w-lg mx-auto text-center">Both tiers include initial cleanup. Both lock your rate for 12 months. The difference is how much of the work you keep.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map(tier => (
            <div
              key={tier.name}
              className={`bg-white rounded-xl p-8 card-hover ${
                tier.featured
                  ? 'border-2 border-teal shadow-lg relative'
                  : 'border border-gray-100'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-gold text-navy text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-2">{tier.name}</p>
              <h3 className="font-display font-bold text-2xl text-navy mb-2">{tier.subtitle}</h3>
              <p className="text-gray-500 text-sm mb-6">{tier.description}</p>

              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="font-display font-extrabold text-4xl text-navy">{tier.foundingPrice}</div>
                <div className="text-gray-500 text-sm mt-1">6 months prepaid · {tier.effectiveMonthly}</div>
                <div className="text-gray-400 text-xs mt-2">
                  <span className="line-through">{tier.standardRate}</span>
                  <span className="text-gold font-bold ml-2">{tier.savings}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-teal font-bold mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:arnold@arjebookkeeping.com?subject=Founding%20Client%20Inquiry%20%E2%80%94%20${tier.name}%20${tier.subtitle}`}
                className={`block text-center px-7 py-4 font-bold rounded-lg transition-all text-sm tracking-wide ${
                  tier.featured
                    ? 'bg-teal text-white hover:bg-teal-dark'
                    : 'border-2 border-navy text-navy hover:bg-navy hover:text-white'
                }`}
              >
                Inquire About {tier.name}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8 max-w-2xl mx-auto">
          Tier 3+ (bookkeeping + annual tax return bundled, $695/mo) is available for new clients but not part of the founding offer — annual tax pricing runs on a different cycle.
        </p>
      </section>

      {/* THE CATCH */}
      <section className="max-w-4xl mx-auto px-5 mb-20">
        <div className="rounded-2xl p-10 md:p-14" style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #243b5e 100%)' }}>
          <p className="text-gold text-xs font-bold tracking-[3px] uppercase mb-3">The Catch</p>
          <h2 className="font-display font-bold text-2xl text-white mb-8">Three things to know before you book</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-gold font-display font-bold text-2xl flex-shrink-0">1.</div>
              <div>
                <h3 className="text-white font-bold mb-1">Cleanup is capped at $2,500 of scope.</h3>
                <p className="text-white/60 text-sm leading-relaxed">Most small business cleanups (up to ~12 months of backlog, moderate volume) fit inside the cap. If your books need more work than that — typically 18+ months behind, 500+ transactions/month, or comingled — I'll quote it separately at standard pricing, outside this offer. We'll know after the discovery call.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-gold font-display font-bold text-2xl flex-shrink-0">2.</div>
              <div>
                <h3 className="text-white font-bold mb-1">6 months prepaid up front.</h3>
                <p className="text-white/60 text-sm leading-relaxed">This is how I know you're committed and how I keep the rate this low. After month 6, you continue at your founding rate for the rest of the 12-month lock period, billed monthly.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-gold font-display font-bold text-2xl flex-shrink-0">3.</div>
              <div>
                <h3 className="text-white font-bold mb-1">10 spots total, first come first served.</h3>
                <p className="text-white/60 text-sm leading-relaxed">When the last spot fills, the offer closes. Standard pricing resumes for everyone after that. There's no waitlist.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section className="max-w-6xl mx-auto px-5 mb-20">
        <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3 text-center">Built For</p>
        <h2 className="font-display font-bold text-3xl text-navy mb-10 text-center">Small business owners in Henderson and Vegas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {builtFor.map(item => (
            <div key={item.title} className="bg-white rounded-xl p-8 border border-gray-100 card-hover">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display font-bold text-lg text-navy mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm leading-relaxed">
            Not a fit if your cleanup is significantly oversized (18+ months behind with high transaction volume, or comingled personal/business books that need separation — these run $3,000+ and fall outside the $2,500 Founding cap; I still take them on at standard pricing, just not through this offer), you need audited financials (find a CPA firm), have payroll for more than 10 employees (payroll software comes first), or you're another bookkeeper or tax pro looking for templates — I sell those separately, not bookkeeping services.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-5 mb-20 text-center">
        <div className="bg-white rounded-2xl p-10 md:p-14 border border-gray-100 shadow-sm">
          <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Next Step</p>
          <h2 className="font-display font-bold text-3xl text-navy mb-4">Book a 30-minute discovery call</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">We'll look at your books together. I'll give you a straight answer on whether your cleanup fits inside the $2,500 cap. You decide if you want to move forward. No pitch, no pressure.</p>
          <a
            href="mailto:arnold@arjebookkeeping.com?subject=Founding%20Bookkeeping%20Client%20Discovery%20Call"
            className="inline-block px-10 py-4 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all text-sm tracking-wide"
          >
            Email Arnold →
          </a>
          <p className="text-gray-400 text-xs mt-6">
            Or call directly: <span className="text-navy font-bold">(702) 583-7037</span>
          </p>
          <p className="text-gray-400 text-xs mt-3">
            Not ready to book? <Link href="/get-help" className="text-teal font-bold hover:underline">Tell me about your situation →</Link> Quick form, I'll get back to you with pricing transparency before scheduling.
          </p>
        </div>
      </section>
    </>
  )
}
