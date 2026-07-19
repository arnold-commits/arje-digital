import Link from 'next/link'

export const metadata = {
  title: 'Foundation Diagnosis — Forensic QuickBooks Review for Amazon Sellers',
  description:
    'A $495 read-only forensic pass over your QuickBooks file — for Amazon and e-commerce sellers whose books balance but don’t add up. Credited in full toward the cleanup.',
}

const STRIPE_CHECKOUT = 'https://buy.stripe.com/14A3coaPv6tM2Ayd681Jm00'

const finds = [
  {
    title: 'Forced reconciliations',
    body: 'The single cheapest tell for the most expensive class of damage: a reconciliation-adjustment account that should sit at zero and doesn’t.',
  },
  {
    title: 'Backdated “year-end” reconciles',
    body: 'A year closed in one January sitting, dated December 31.',
  },
  {
    title: 'Corrections that balance but don’t tie',
    body: 'Entries that foot perfectly and are still wrong against your actual settlement data.',
  },
  {
    title: 'Settlement mis-attribution',
    body: 'Amazon payouts booked against the wrong settlement or the wrong date, so every month “works” and none of it is true.',
  },
  {
    title: 'Concealment structures',
    body: 'Balances buried in clearing, suspense, or opening-balance accounts that make problems vanish instead of fixing them.',
  },
  {
    title: 'Channel mischaracterization',
    body: 'Marketplace money that lands somewhere your books don’t describe.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Grant read-only access',
    body: 'A QuickBooks accountant-user invite (reports only — we never ask for write access), or just send exports: your Amazon settlement files, bank statements, and reports. You never connect your QuickBooks to any app. No software touches your file.',
  },
  {
    n: '2',
    title: 'We run the forensic pass',
    body: 'Every finding is reviewed and signed by a PTIN-certified practitioner before you see it — nothing automated ever reports a finding or a price to you.',
  },
  {
    n: '3',
    title: 'You get the report and a real quote — in 5 business days',
    body: 'From access granted: a clear verdict (clean / neglected / poisoned foundation), every finding in plain English with the evidence, an honest list of anything we couldn’t verify, and a fixed cleanup quote priced on what’s actually there.',
  },
]

const faqs = [
  {
    q: 'Will you change anything in my books?',
    a: 'No. The diagnosis is read-only by design — we never post, edit, reverse, or reconcile anything during it, even if we find something obvious. Nothing in your file changes until you’ve seen the full report and a fixed quote and chosen to proceed. That’s your protection: no one “fixes” things you haven’t seen priced.',
  },
  {
    q: 'What if my books are actually fine?',
    a: 'Then the report says clean, and the cleanup quote reflects it. The diagnosis is a fixed fee for the search, not a sales script — we’re paid the same whether the verdict is clean or poisoned, which is exactly why you can trust the verdict.',
  },
  {
    q: 'Do I have to connect my QuickBooks to an app?',
    a: 'No. You either add us as a read-only accountant user in QuickBooks (reports only — we don’t ask for write access), or you send exports: Amazon settlement files, bank statements, and reports. No software connects to your file at any point.',
  },
  {
    q: 'What exactly do I get for $495?',
    a: 'A written Foundation Diagnosis Report: a verdict (clean, neglected, or poisoned foundation), every finding in plain English with the evidence behind it, a map of how complex the fix actually is, an honest list of anything we couldn’t verify from the access granted, and a fixed-price cleanup quote scoped to what’s really there. The full $495 credits toward the cleanup if you engage within 30 days.',
  },
  {
    q: 'Why not just quote the cleanup directly?',
    a: 'Because the most expensive problems are invisible at quote time. A forced reconciliation looks like a clean checkmark; a bad correction balances perfectly. Quotes priced blind off a transaction count either overcharge clean books or blow up on poisoned ones. The diagnosis makes the quote honest — for both of us.',
  },
  {
    q: 'Who reviews the findings?',
    a: 'Every finding is reviewed and signed by Arnold Dizon, a PTIN-certified tax practitioner and QuickBooks Online ProAdvisor, before it reaches you. Nothing automated communicates a finding or a price to a client — that human gate is part of the product.',
  },
  {
    q: 'How long does it take?',
    a: 'Five business days from the point we have access and complete data. If anything material is missing (a statement, a settlement file), it’s disclosed in the report as unverified rather than guessed at.',
  },
]

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Foundation Diagnosis',
  serviceType: 'Forensic bookkeeping diagnosis',
  description:
    'A fixed-fee, read-only forensic diagnosis of a QuickBooks file for Amazon and e-commerce sellers. Identifies forced reconciliations, settlement mis-attribution, and corrections that balance but don’t tie, then delivers a written verdict and a fixed cleanup quote.',
  provider: {
    '@type': 'Organization',
    name: 'ARJE Bookkeeping & Tax Services',
    url: 'https://arjebookkeeping.com',
  },
  areaServed: 'US',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: 495,
    url: STRIPE_CHECKOUT,
    availability: 'https://schema.org/InStock',
  },
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FoundationDiagnosis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0F1A2E 0%, #1B2A4A 55%, #1e3a5f 100%)' }}>
        <div className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(42,157,143,0.18) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-60px] left-[-40px] w-60 h-60 rounded-full" style={{ background: 'radial-gradient(circle, rgba(233,196,106,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-3xl mx-auto px-5 py-24 text-center relative">
          <p className="text-gold text-xs font-bold tracking-[3px] uppercase mb-5">Foundation Diagnosis · Amazon &amp; E-commerce Sellers</p>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6">
            Your books balance.{' '}
            <span className="gradient-text">Are they right?</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            A fixed-fee forensic diagnosis of your QuickBooks file — for Amazon and e-commerce sellers whose numbers tie but don&rsquo;t add up.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={STRIPE_CHECKOUT} target="_blank" rel="noopener" className="px-8 py-4 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all text-sm tracking-wide">
              Start the diagnosis — $495
            </a>
            <Link href="/get-help" className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm tracking-wide">
              Not sure yet? Start at /get-help
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-6">$495, fixed · read-only · credited 100% toward your cleanup if you engage within 30 days</p>
        </div>
      </section>

      {/* SECTION 1 — THE PAIN */}
      <section className="max-w-3xl mx-auto px-5 py-20">
        <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">The problem</p>
        <h2 className="font-display font-bold text-3xl text-navy mb-6 leading-tight">The expensive books aren&rsquo;t the neglected ones. They&rsquo;re the ones somebody already tried to fix.</h2>
        <div className="space-y-5 text-[#444] leading-[1.8]">
          <p>A forced reconciliation shows up as a clean checkmark. A bad &ldquo;correction&rdquo; balances perfectly — debits equal credits, so nothing flags it. Amazon settlements get tied to the wrong deposits and every month still foots. None of it throws an error. You find out when your CPA says the file isn&rsquo;t fit to file, or when the numbers you&rsquo;re making decisions on turn out to be someone&rsquo;s plug.</p>
          <p>Fixing that kind of mess costs three times: finding the damage (nothing points to it), unwinding it safely, and re-verifying everything downstream — because once one prior correction is wrong, you can&rsquo;t trust any of them.</p>
          <p>That&rsquo;s why cleanups priced off a transaction count go wrong. <strong className="text-navy">You can&rsquo;t count what nobody has found yet.</strong></p>
        </div>
      </section>

      {/* SECTION 2 — WHAT THE DIAGNOSIS FINDS */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-5 py-20">
          <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">What the diagnosis finds</p>
          <h2 className="font-display font-bold text-3xl text-navy mb-3">A forensic pass built from real casework, run against your file — read-only.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {finds.map(f => (
              <div key={f.title} className="bg-cream rounded-xl p-6 border border-gray-100">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="max-w-4xl mx-auto px-5 py-20">
        <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">How it works</p>
        <h2 className="font-display font-bold text-3xl text-navy mb-10">Three steps, no software on your file</h2>
        <div className="space-y-6">
          {steps.map(s => (
            <div key={s.n} className="flex gap-5 bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-teal to-gold flex items-center justify-center text-white font-display font-extrabold text-lg">{s.n}</div>
              <div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — PROOF */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-20">
          <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Proof</p>
          <h2 className="font-display font-bold text-3xl text-navy mb-6">The standard the diagnosis is built from</h2>
          <div className="space-y-5 text-[#444] leading-[1.8]">
            <p>Recent engagement, anonymized: a five-marketplace Amazon seller (US, Canada, Mexico, Brazil, plus eBay) whose books needed full reconstruction. We rebuilt the entire settlement spine from the raw Amazon settlement files, closed a full calendar year of bank reconciliations to the penny, found a six-figure discrepancy hidden in a clearing account — and instead of plugging it to make it disappear, quarantined and documented it so the rebuilt books stayed clean and auditable.</p>
            <p>That&rsquo;s the standard the diagnosis is built from.</p>
          </div>
          <div className="mt-8 rounded-xl bg-cream border border-gray-100 p-6">
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong className="text-navy">Credentials:</strong> Arnold Dizon — PTIN-certified tax practitioner · QuickBooks Online ProAdvisor. QBO-native and tool-independent: we reconstruct settlements directly in QuickBooks, so we can fix books that were never set up on a connector.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PRICE + CTA */}
      <section className="max-w-3xl mx-auto px-5 py-20 text-center">
        <div className="rounded-2xl p-10 md:p-14 text-white" style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #243b5e 100%)' }}>
          <p className="text-gold text-xs font-bold tracking-[3px] uppercase mb-3">The price</p>
          <div className="font-display font-extrabold text-5xl mb-2">$495<span className="text-2xl font-bold text-white/60">, fixed</span></div>
          <p className="text-white/60 mb-6">No hourly meter, no scope creep.</p>
          <p className="text-white/80 leading-relaxed max-w-xl mx-auto mb-4">
            <strong className="text-white">Credited 100% toward your cleanup</strong> if you engage within 30 days — so if the books need work and you hire us to do it, the diagnosis costs you nothing extra.
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-8">
            And if your books turn out to be fine? The report says so, and the quote reflects it. We&rsquo;re paid for the search either way — which is exactly why the answer is honest.
          </p>
          <a href={STRIPE_CHECKOUT} target="_blank" rel="noopener" className="inline-block px-10 py-4 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all text-sm tracking-wide">
            Start the diagnosis — $495
          </a>
          <p className="text-white/50 text-sm mt-6">
            Not sure yet? <Link href="/get-help" className="text-gold hover:underline">Start at /get-help</Link> — tell us where your books stand and we&rsquo;ll point you to the right first step.
          </p>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="max-w-3xl mx-auto px-5 pb-24">
        <h2 className="font-display font-bold text-3xl text-navy mb-8">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map(f => (
            <div key={f.q}>
              <h3 className="font-display font-semibold text-navy text-lg mb-2">{f.q}</h3>
              <p className="text-gray-500 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
