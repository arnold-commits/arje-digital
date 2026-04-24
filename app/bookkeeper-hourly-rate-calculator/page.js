export const metadata = {
  title: 'What Should I Charge as a Bookkeeper? Hourly Rate Calculator | ARJE Bookkeeping',
  description: 'Solo bookkeeper wondering what to charge? Learn how to price hourly vs. value vs. fixed-fee, benchmark 2026 rates by region and client type, and stop undercharging — from a PTIN-certified pro managing 90+ clients solo.',
}

export default function BookkeeperHourlyRateCalculator() {
  return (
    <main style={{maxWidth: '800px', margin: '0 auto', padding: '40px 20px'}}>
      <header>
        <h1 style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--navy)', margin: '1rem 0 1.5rem', lineHeight: 1.2}}>
          What Should I Charge as a Bookkeeper? A 2026 Rate Guide for Solo Pros
        </h1>
      </header>
      <div className="blog-content">
        <p><strong>TL;DR:</strong> Solo bookkeepers in the US should charge $60–$150/hr depending on experience, certifications, and client complexity — but hourly pricing is almost always the wrong model. Fixed monthly fees ($300–$800/client for small service businesses; $600–$2,000 for e-commerce or multi-entity) scale better, protect your margin, and let you hit six figures without working 60-hour weeks. The fastest way to figure out your number: calculate your real hourly capacity first, then reverse-engineer the monthly fee. Anchor to value delivered, not hours spent.</p>
        <p><em>Written by Arnold Dizon, PTIN-certified tax professional. ARJE Bookkeeping &amp; Tax Services manages 90+ active clients solo with Claude-based automation.</em></p>
        <h2>Why Hourly Pricing Fails Solo Bookkeepers</h2>
        <p>Hourly pricing sounds fair. Bill for what you work. Simple.</p>
        <p>It's also the reason most solo bookkeepers cap out around 12–15 clients, burn out, and can't scale past $80K/year. Here's why:</p>
        <ul>
          <li><strong>You get punished for being efficient.</strong> Automate a close from 6 hours to 2? You just cut your own revenue by 67% on that client.</li>
          <li><strong>Clients hate hourly invoices.</strong> Every hour you bill is a negotiation. "Why did the bank rec take 90 minutes this month?" becomes a monthly conversation.</li>
          <li><strong>You can't forecast revenue.</strong> Hours vary every month. Cashflow is unpredictable.</li>
          <li><strong>It caps your income at your calendar.</strong> There are only so many billable hours in a week. Hourly = linear income.</li>
        </ul>
        <p>Fixed monthly fees fix every one of these problems. More on that below.</p>
        <h2>What Solo Bookkeepers Actually Charge in 2026</h2>
        <p>Based on rate surveys from the American Institute of Professional Bookkeepers (AIPB), Intuit's QuickBooks ProAdvisor community, and my own conversations with 40+ solo bookkeepers in 2026:</p>
        <h3>Hourly Rates (when charged)</h3>
        <ul>
          <li><strong>Entry-level / bookkeeping-only:</strong> $40–$60/hr</li>
          <li><strong>Experienced bookkeeper (3+ years):</strong> $60–$90/hr</li>
          <li><strong>Certified (QBO ProAdvisor, Xero Advisor, or Master Bookkeeper):</strong> $75–$125/hr</li>
          <li><strong>Specialist (e-commerce, Amazon FBA, construction, restaurant):</strong> $90–$150/hr</li>
          <li><strong>Advisory / CAS-level work:</strong> $125–$200/hr</li>
        </ul>
        <h3>Fixed Monthly Fees (what you should actually be charging)</h3>
        <ul>
          <li><strong>Micro client (under 50 transactions/month, 1 bank account):</strong> $200–$400/mo</li>
          <li><strong>Small service business (50–200 txns, 1–2 accounts):</strong> $350–$700/mo</li>
          <li><strong>Growing service business (200–500 txns, 2–4 accounts, payroll):</strong> $600–$1,200/mo</li>
          <li><strong>E-commerce / Amazon FBA (multi-channel, inventory, sales tax):</strong> $700–$1,800/mo</li>
          <li><strong>Multi-entity, construction, or restaurant:</strong> $1,000–$2,500/mo</li>
          <li><strong>CFO-level advisory (weekly calls, forecasting, KPI reporting):</strong> $1,500–$4,000/mo</li>
        </ul>
        <p>Regional adjustments: add 15–25% for high-cost markets (SF Bay, NYC, Seattle, Boston). Subtract 10–15% for lower-cost markets (rural Midwest, Deep South, Appalachia). Remote work compresses this spread, but not entirely — clients still pay more when they think they're hiring a "local."</p>
        <h2>How to Actually Price a New Engagement</h2>
        <p>Forget what the internet says. Here's the three-step process that works in practice:</p>
        <h3>Step 1 — Calculate Your Real Hourly Capacity</h3>
        <p>Not "how many hours are in a workweek." How many <em>billable</em> hours do you actually deliver per week, after admin, sales, continuing ed, and client communication? For most solo bookkeepers, it's 22–28 hours out of a 40-hour week. That's your capacity.</p>
        <p>Multiply by 48 working weeks per year (4 weeks off for vacation, sick, holidays). A solo bookkeeper with 25 real billable hours × 48 weeks = 1,200 billable hours per year.</p>
        <h3>Step 2 — Back Into Your Target Income</h3>
        <p>Want to make $120,000/year in gross revenue? Divide: $120,000 ÷ 1,200 hours = $100/hr effective rate. That's your <em>minimum</em> hourly target. Everything you price against this.</p>
        <h3>Step 3 — Convert to a Fixed Fee Per Client</h3>
        <p>Estimate how many hours a new client will eat per month (close + cleanup + questions + reports). Multiply by your effective rate. Add 15–20% buffer for scope creep. Round up to a clean number.</p>
        <p>Example: E-commerce client, you estimate 8 hours/month of real work. 8 × $100 = $800. Add 20% buffer = $960. Round to $950/mo. That's your fixed fee.</p>
        <h2>The Biggest Mistakes Solo Bookkeepers Make</h2>
        <ul>
          <li><strong>Charging "what the market charges" instead of what <em>they</em> need.</strong> The market doesn't pay your mortgage. Your number is driven by your income goals and your capacity, not a rate chart.</li>
          <li><strong>Under-estimating time per client.</strong> Most bookkeepers guess a new client will take 4 hours/month. Actual average after month 3 is closer to 7.</li>
          <li><strong>Not raising rates annually.</strong> Your costs go up. Your software subs go up. Your rates should too. 5–8% per year is standard and clients expect it.</li>
          <li><strong>Charging the same rate for cleanup work.</strong> Historical cleanup projects should be billed at 1.5× your normal rate, flat or hourly. It's skilled diagnostic work, not ongoing monthly maintenance.</li>
          <li><strong>Not having a minimum engagement fee.</strong> Below $300/mo, you're losing money on admin overhead alone. Set a floor.</li>
        </ul>
        <h2>Hourly vs. Value-Based vs. Fixed-Fee — Which Model Wins?</h2>
        <p>Short answer: <strong>fixed-fee wins for 90% of solo bookkeeping work.</strong> Value-based pricing works for advisory, CAS, and CFO-tier engagements. Hourly only works for one-off cleanup projects or legal work requiring detailed time tracking.</p>
        <p>Why fixed-fee wins:</p>
        <ul>
          <li>Predictable revenue for you, predictable cost for the client</li>
          <li>Incentivizes you to work faster (efficiency = higher effective rate)</li>
          <li>Eliminates monthly invoice negotiations</li>
          <li>Scales — you can take on more clients without billing-admin drag</li>
        </ul>
        <h2>When to Raise Your Rates (And How)</h2>
        <p>Raise rates when any of these are true:</p>
        <ul>
          <li>You're at or near capacity (22+ real billable hours/week consistently)</li>
          <li>You've added a meaningful certification or skill (e.g., QBO ProAdvisor Elite, Xero Advisor Certified)</li>
          <li>It's been 12+ months since your last increase</li>
          <li>Your costs (software, insurance, continuing ed) have measurably increased</li>
        </ul>
        <p>How to raise them: 60-day notice, email all clients the same week, anchor the increase to something concrete ("expanded compliance work," "new reporting included," "annual CPI adjustment"). Expect 5–10% attrition. The clients who leave are almost always your lowest-margin ones.</p>
        <h2>Free Tool: Bookkeeper Capacity Calculator</h2>
        <p>The fastest way to stop undercharging is to know your real capacity. I built a free calculator that takes 60 seconds: enter your current client count and hours per client, and it tells you exactly when you're overcommitted and what your effective rate is today.</p>
        <p>Try it here: <a href="https://arjebookkeeping.gumroad.com/l/bookkeeper-capacity-calculator">Bookkeeper Capacity Calculator</a> ($19.99)</p>
        <p>For the full pricing + capacity + close system — templates, email flows, engagement letters — the <a href="https://arjebookkeeping.gumroad.com/l/ultimate-bundle">Bookkeeper's Ultimate Bundle</a> ($197) packages 9 products together.</p>
        <p style={{fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '2.5rem', borderTop: '1px solid #ddd', paddingTop: '1.25rem'}}>
          Arnold Dizon is a PTIN-certified tax professional and the founder of ARJE Bookkeeping &amp; Tax Services in Henderson, NV. He manages 90+ active bookkeeping and tax clients solo with the help of Claude AI automation. More articles at <a href="https://blog.arjebookkeeping.com">blog.arjebookkeeping.com</a>. This article is general information only and not pricing, legal, or tax advice. Consult your own advisors before making rate-setting decisions for your practice.
        </p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What should a solo bookkeeper charge per hour in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Solo bookkeepers in the US typically charge $60–$150 per hour in 2026, depending on experience, certifications, and client complexity. Entry-level bookkeeping runs $40–$60/hr, experienced bookkeepers $60–$90/hr, certified ProAdvisors $75–$125/hr, and specialists in e-commerce, construction, or restaurant accounting $90–$150/hr. Advisory and CAS-level work runs $125–$200/hr."
            }
          },
          {
            "@type": "Question",
            "name": "Is hourly or fixed-fee pricing better for bookkeepers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fixed monthly fees are better for ongoing bookkeeping work in almost all cases. Hourly pricing punishes efficiency, creates unpredictable revenue, and caps your income at the hours you can work. Fixed fees scale better, let you automate without losing revenue, and make cashflow predictable. Hourly pricing is only ideal for one-off cleanup projects or forensic/legal work requiring detailed time tracking."
            }
          },
          {
            "@type": "Question",
            "name": "How much should I charge for monthly bookkeeping?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fixed monthly fees for solo bookkeepers in 2026 range from $200–$400/mo for micro clients (under 50 transactions), $350–$700/mo for small service businesses, $600–$1,200/mo for growing service businesses with payroll, $700–$1,800/mo for e-commerce or Amazon FBA clients, and $1,000–$2,500/mo for multi-entity, construction, or restaurant clients. CFO-level advisory runs $1,500–$4,000/mo."
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate my bookkeeping rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Three-step process: (1) Calculate your real billable capacity — for most solo bookkeepers, 22–28 hours per week out of a 40-hour week, which equals roughly 1,100–1,350 billable hours per year. (2) Back into your target income — divide your target gross revenue by your annual billable hours to get your effective hourly rate. (3) Convert to a fixed monthly fee per client — estimate hours per client per month, multiply by your effective rate, add a 15–20% buffer for scope creep, and round to a clean number."
            }
          },
          {
            "@type": "Question",
            "name": "When should I raise my bookkeeping rates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Raise your rates when you're at or near capacity (22+ real billable hours per week consistently), you've added a meaningful certification, it's been 12+ months since your last increase, or your costs for software, insurance, or continuing education have measurably increased. Give clients 60 days' notice, email everyone the same week, and anchor the increase to something concrete like expanded compliance work or an annual CPI adjustment. Expect 5–10% attrition — the clients who leave are almost always your lowest-margin ones."
            }
          }
        ]
      })}} />
    </main>
  )
}
