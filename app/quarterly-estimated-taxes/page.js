export const metadata = {
  title: 'How Much Should I Pay in Quarterly Estimated Taxes? | ARJE Bookkeeping',
  description: 'Self-employed? Learn how to calculate quarterly estimated tax payments, use the safe harbor rule to avoid penalties, and hit every 2026 IRS deadline — from a PTIN-certified tax pro running 90+ client returns a year.',
}

export default function QuarterlyEstimatedTaxes() {
  return (
    <main style={{maxWidth: '800px', margin: '0 auto', padding: '40px 20px'}}>
      <header>
        <h1 style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--navy)', margin: '1rem 0 1.5rem', lineHeight: 1.2}}>
          How Much Should I Pay in Quarterly Estimated Taxes?
        </h1>
      </header>

      <div className="blog-content">
        <p><strong>TL;DR:</strong> Most self-employed workers should pay at least 25% of their net earnings each quarter to the IRS — split between federal income tax (around 12-22% depending on bracket) and self-employment tax (15.3% on net earnings up to the Social Security wage base, which is $184,500 for 2026). If you paid federal taxes last year, the safe harbor rule lets you avoid penalties by paying either 100% of last year's tax liability (110% if your AGI was over $150,000) or 90% of this year's expected liability, whichever is smaller. Use last year's Form 1040 Line 24 as your anchor number.</p>

        <p><em>Written by Arnold Dizon, PTIN-certified tax professional. ARJE Bookkeeping &amp; Tax Services runs 90+ client returns annually.</em></p>

        <h2>What Are Quarterly Estimated Taxes?</h2>

        <p>Quarterly estimated taxes are the payments self-employed workers, freelancers, 1099 contractors, and small business owners send to the IRS four times a year to cover income tax and self-employment tax on earnings where no employer is withholding on their behalf.</p>

        <p>The IRS operates on a pay-as-you-go system. W-2 employees have taxes withheld every paycheck. If you run your own business, the responsibility shifts to you — and the penalty for getting it wrong is real.</p>

        <p><strong>Quarterly due dates for 2026:</strong></p>

        <ul>
          <li><strong>Q1 (Jan 1 – Mar 31):</strong> April 15, 2026</li>
          <li><strong>Q2 (Apr 1 – May 31):</strong> June 15, 2026</li>
          <li><strong>Q3 (Jun 1 – Aug 31):</strong> September 15, 2026</li>
          <li><strong>Q4 (Sep 1 – Dec 31):</strong> January 15, 2027</li>
        </ul>

        <p>Miss a payment and the IRS charges underpayment penalties calculated as interest on the shortfall, compounded daily. The rate is tied to the federal short-term rate plus 3 percentage points and currently sits at <strong>7% annualized</strong> for 2026 (it resets quarterly, so verify the current rate on irs.gov if you are calculating exact penalty exposure).</p>

        <h2>How should Amazon sellers calculate quarterly estimated taxes?</h2>

        <p>If you sell on Amazon, your estimated-tax base is your <strong>net profit</strong> — gross sales minus cost of goods sold, FBA and referral fees, advertising, and your other business expenses. It is not your settlement deposits, and it is not the revenue number on your Seller Central dashboard. Amazon’s deposits arrive net of fees, refunds, and reserve holds, so a seller who pays quarterly taxes off deposits is using a number that is wrong in both directions at once.</p>

        <p>Getting the net-profit number right is a bookkeeping problem before it is a tax problem: each settlement has to be decomposed into sales, fees, and refunds so the year-to-date profit you annualize in Step 1 below is real. If your Amazon books aren’t there yet, start with the <a href="/fba-bookkeeping-system/">Amazon FBA Bookkeeping guide</a> — then come back and run the five steps.</p>

        <h2>How to Calculate What You Actually Owe Each Quarter</h2>

        <p>Here is the method I use with clients at ARJE Bookkeeping, broken down into five concrete steps.</p>

        <h3>Step 1: Estimate your annual net earnings</h3>

        <p>Take your year-to-date gross revenue and subtract your year-to-date business expenses. Annualize it if you are partway through the year.</p>

        <p><em>Example:</em> a freelance consultant bills $15,000 in Q1 and has $3,000 in business expenses. Net Q1 earnings = $12,000. Annualized = $48,000 projected net for the year.</p>

        <h3>Step 2: Calculate self-employment tax</h3>

        <p>Self-employment tax is 15.3% on 92.35% of your net earnings, up to the Social Security wage base ($184,500 for 2026). Earnings above $184,500 are subject only to the 2.9% Medicare portion, plus an additional 0.9% Medicare surtax on earnings above $200,000 (single) or $250,000 (joint).</p>

        <p>Using the example above: $48,000 × 0.9235 = $44,328. Then $44,328 × 0.153 = <strong>$6,782 annual SE tax</strong>.</p>

        <p>Quarterly SE tax = $6,782 / 4 = <strong>$1,696 per quarter</strong>.</p>

        <h3>Step 3: Calculate federal income tax</h3>

        <p>First, halve your self-employment tax — that half is deductible before calculating income tax.</p>

        <p>$6,782 / 2 = $3,391 deduction.</p>

        <p>Adjusted income for tax purposes: $48,000 - $3,391 = $44,609.</p>

        <p>Subtract the standard deduction ($14,600 for single filers in 2026): $44,609 - $14,600 = $30,009 taxable income.</p>

        <p>Apply the 2026 tax brackets for single filers:</p>

        <ul>
          <li>10% on first $11,600 = $1,160</li>
          <li>12% on the next $18,409 = $2,209</li>
        </ul>

        <p>Total federal income tax = <strong>$3,369 annual</strong>.</p>

        <p>Quarterly federal income tax = $3,369 / 4 = <strong>$842 per quarter</strong>.</p>

        <h3>Step 4: Add it up</h3>

        <p>Per-quarter federal payment: $1,696 + $842 = <strong>$2,538 per quarter</strong>.</p>

        <p>Annual: about $10,151 — or roughly 21% of the $48,000 net income.</p>

        <h3>Step 5: Add state tax if applicable</h3>

        <p>Nevada, Texas, Florida, Washington, Wyoming, South Dakota, and a few others have no state income tax. Most other states require separate quarterly estimated payments, typically 3-10% of taxable income. Check your state Department of Revenue website for exact rates and payment portals.</p>

        <h2>The Safe Harbor Rule — Your Penalty Insurance</h2>

        <p>The safe harbor rule is the most important concept self-employed filers miss. Meet one of these thresholds and the IRS will not charge underpayment penalties even if you owe more at tax time:</p>

        <p><strong>Safe Harbor A:</strong> Pay 100% of your prior-year tax liability through estimated payments (110% if your AGI exceeded $150,000 last year).</p>

        <p><strong>Safe Harbor B:</strong> Pay 90% of your current-year tax liability through estimated payments.</p>

        <p>Whichever is smaller is what you actually need to hit.</p>

        <p>In practice, most of my clients use Safe Harbor A because it requires only one number: last year's Form 1040 Line 24 (total tax). Divide that by four and pay that amount each quarter. You are safe regardless of what you actually owe this year.</p>

        <p>This matters because business income is unpredictable. A consultant who earned $40,000 last year and $80,000 this year can still use the $40,000 figure for quarterly payments and avoid penalties. The catch-up happens at filing time, but no penalty accrues in between.</p>

        <h2>Common Mistakes That Cost Real Money</h2>

        <p>After 90+ returns a year, I see the same quarterly tax mistakes repeatedly.</p>

        <p><strong>Forgetting self-employment tax entirely.</strong> Many first-year freelancers calculate federal income tax but forget that 15.3% SE tax on top. They underpay by thousands and get a nasty surprise at filing time, plus penalties.</p>

        <p><strong>Paying annually instead of quarterly.</strong> If you paid $8,000 in April but owed $10,000 spread across four quarters, the IRS calculates penalty on the quarterly shortfall even though you eventually paid in full. You owe penalties even if your total payment matches your total tax.</p>

        <p><strong>Not adjusting when income spikes.</strong> A Q3 project that triples your expected annual revenue means you should revise Q4 payments upward. Most people do not, and they end up owing big at filing time (still fine for penalty purposes if safe harbor is met, but expensive for cash flow).</p>

        <p><strong>Using last year's safe harbor number without verifying AGI.</strong> The 100% vs 110% trigger at $150,000 AGI catches high earners who think they are safe but actually owe the higher threshold.</p>

        <p><strong>Double-paying state and federal through the same portal.</strong> IRS Direct Pay only handles federal. State payments go through your state's separate system. I've had clients think they paid both when they only paid federal.</p>

        <h2>Frequently Asked Questions</h2>

        <h3>Do I really need to pay quarterly if my side gig is small?</h3>
        <p>If you expect to owe $1,000 or more in tax for the year after subtracting withholding and refundable credits, yes. Below $1,000, the IRS does not require estimated payments and no penalty applies. Most freelance income above $5,000-$6,000 net will clear that threshold.</p>

        <h3>What if my income is irregular — some quarters big, some quarters zero?</h3>
        <p>The IRS offers the "annualized income installment method" (Form 2210, Schedule AI) which lets you calculate payments based on actual quarter-by-quarter earnings rather than assuming steady income. It requires more math and documentation, but it protects you from penalties during low-earnings quarters. Worth it if your income varies by 40% or more between quarters.</p>

        <h3>Can I skip Q1 or Q2 if I just started my business?</h3>
        <p>If you had no tax liability in the prior year (you were a W-2 employee, or did not file, or owed nothing), safe harbor A gives you a free pass for the full first year. You still owe the tax at filing, but no quarterly penalties. After year one, you must start paying quarterly based on your actual year-one numbers.</p>

        <h3>How do I actually pay the IRS?</h3>
        <p>IRS Direct Pay (irs.gov/payments) is free and takes bank transfers. EFTPS (eftps.gov) is more robust for business accounts but requires enrollment. Paying by card costs a 2-3% processing fee which almost always outweighs any rewards. I advise clients to stick with Direct Pay or EFTPS.</p>

        <h3>What happens if I just do not pay quarterly?</h3>
        <p>The IRS charges underpayment penalty as interest on the shortfall from each quarter's due date until you pay, compounded daily. At 7% annualized for 2026, a $2,500 missed Q1 payment costs about $175 in penalties by tax day. Over a full year of skipped quarters, penalties on a $10,000 tax liability can exceed $700. Not catastrophic, but it compounds every year you skip and the rate resets quarterly, so it can get worse.</p>

        <h3>Do Amazon sellers pay quarterly estimated taxes on gross sales or net profit?</h3>
        <p>Net profit. Your estimated-tax base is gross sales minus COGS, FBA and referral fees, advertising, and other business expenses — never your settlement deposits, which arrive net of fees, refunds, and reserve holds. Decompose each settlement in your bookkeeping first so the profit number you annualize is real.</p>

        <h2>Stop Guessing. Calculate Your Actual Quarterly Number.</h2>

        <p>Walking through the math above takes most people 45 minutes to an hour, longer if it is your first time. I built the <a href="https://arjebookkeeping.gumroad.com/l/quarterly-estimated-tax-calculator">Quarterly Estimated Tax Calculator</a> to run the full calculation in about three minutes — including federal income tax, self-employment tax, safe harbor comparison, and state tax lookup for your jurisdiction.</p>

        <p>It is the same tool I use internally at ARJE Bookkeeping when onboarding new self-employed clients. $24.99, one-time purchase, no subscription.</p>

        <p>If you want to verify your Q2 payment before the June 15 deadline, that is what it is built for.</p>

        <p>And if the problem is upstream — books that can’t produce a trustworthy net-profit number in the first place — <a href="/get-help/">get help with your books here</a>. Diagnosis-first, fixed-fee assessment before any cleanup is quoted.</p>

        <p style={{fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '2.5rem', borderTop: '1px solid #ddd', paddingTop: '1.25rem'}}>Arnold Dizon is a PTIN-certified tax professional and the founder of ARJE Bookkeeping &amp; Tax Services in Henderson, Nevada. He runs 90+ client returns annually and writes about practical tax operations at <a href="https://blog.arjebookkeeping.com">blog.arjebookkeeping.com</a>. This article is general information only and not tax advice for your specific situation — consult a qualified tax professional for decisions involving your finances.</p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much should I pay in quarterly estimated taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most self-employed workers should pay at least 25% of their net earnings each quarter, split between federal income tax (12-22% depending on bracket) and self-employment tax (15.3% on net earnings up to the Social Security wage base, which is $184,500 for 2026). The safe harbor rule lets you avoid penalties by paying 100% of last year's tax liability (110% if prior-year AGI exceeded $150,000) or 90% of this year's expected liability, whichever is smaller."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to pay quarterly estimated taxes if my side gig is small?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you expect to owe $1,000 or more in tax for the year after subtracting withholding and refundable credits, yes. Below $1,000, the IRS does not require estimated payments and no penalty applies."
            }
          },
          {
            "@type": "Question",
            "name": "What is the safe harbor rule for estimated taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The safe harbor rule protects you from underpayment penalties if you pay either 100% of your prior-year tax liability (110% if AGI exceeded $150,000) or 90% of your current-year tax liability through estimated payments. Use the smaller amount."
            }
          },
          {
            "@type": "Question",
            "name": "When are quarterly estimated tax payments due in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Q1 is due April 15, 2026. Q2 is due June 15, 2026. Q3 is due September 15, 2026. Q4 is due January 15, 2027."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I do not pay quarterly estimated taxes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The IRS charges an underpayment penalty calculated as interest on the shortfall from each quarter's due date, compounded daily. At 7% annualized for 2026, a $2,500 missed Q1 payment costs about $175 in penalties by tax day. The rate resets quarterly."
            }
          },
          {
            "@type": "Question",
            "name": "Do Amazon sellers pay quarterly estimated taxes on gross sales or net profit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Net profit. Your estimated-tax base is gross sales minus COGS, FBA and referral fees, advertising, and other business expenses — never your settlement deposits, which arrive net of fees, refunds, and reserve holds."
            }
          }
        ]
      })}} />
    </main>
  )
}
