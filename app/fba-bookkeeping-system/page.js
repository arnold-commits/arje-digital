export const metadata = {
  title: 'Amazon FBA Bookkeeping: The Complete Guide (2026)',
  description: 'How Amazon FBA sellers should do their bookkeeping in 2026 — settlements, COGS, fees, reimbursements, and taxes. By a PTIN-certified pro who reconciles FBA books to the cent.',
}

const faqs = [
  {
    q: 'What is the best bookkeeping software for Amazon FBA sellers?',
    a: 'The best bookkeeping system for FBA sellers is one that tracks COGS by SKU, categorizes FBA fees automatically, and provides real profit visibility after all Amazon-specific costs. Generic tools like QuickBooks require significant manual customization to handle FBA’s fee complexity, and settlement-connector tools like A2X handle the settlement translation but not the judgment calls. Many sellers run QuickBooks Online plus a disciplined settlement-reconciliation process; ShelfKeeper is being purpose-built for the ongoing tracking layer.',
  },
  {
    q: 'Do Amazon FBA sellers need separate bookkeeping software?',
    a: 'Yes, in the sense that FBA sellers need a bookkeeping process built around Amazon’s settlement model. FBA sellers have unique cost categories — fulfillment fees, storage fees, returns, reserves, and reimbursements — that standard bookkeeping software doesn’t handle natively. Whether that means added software or a properly structured QuickBooks Online file, the settlement has to be decomposed somewhere, or your books drift from your bank.',
  },
  {
    q: 'How do FBA sellers track cost of goods sold?',
    a: 'FBA sellers should track COGS by ASIN, including the landed cost per unit — product cost plus inbound shipping plus prep fees. This number is subtracted from your gross revenue before FBA fees to calculate your true gross margin, and it feeds directly into your Schedule C inventory computation at tax time.',
  },
  {
    q: 'What FBA fees are tax deductible?',
    a: 'All FBA fees are tax deductible as business expenses: fulfillment fees, storage fees, removal fees, returns processing fees, and advertising costs. These should be tracked separately from COGS for accurate Schedule C reporting.',
  },
  {
    q: 'How should Amazon sellers prepare for quarterly taxes?',
    a: 'Amazon sellers should set aside 25–30% of net profit for quarterly estimated tax payments. Net profit means gross revenue minus COGS, FBA fees, advertising, and other business expenses — not your settlement deposits. Accurate bookkeeping throughout the year makes quarterly estimates straightforward rather than a last-minute scramble.',
  },
  {
    q: 'How do I reconcile Amazon settlements in QuickBooks?',
    a: 'Post each settlement as a journal entry that splits the deposit into its components — gross sales, fee families, refunds, and reserve movement — through an Amazon clearing account, then match the net amount to the bank deposit. Work from the raw settlement files, not the summary reports, and confirm the reserve balance rolls forward from one settlement to the next. Done consistently, every deposit ties to the cent.',
  },
  {
    q: 'What is an FBA audit?',
    a: 'The phrase covers three different things: an account-health audit of your Seller Central metrics, a books audit that verifies your accounting records against source documents, and a reimbursement audit that hunts down inventory Amazon lost or damaged and never credited. Decide which one you need before you buy one — they are different services with different deliverables.',
  },
  {
    q: 'How much does FBA bookkeeping cost?',
    a: 'Ongoing monthly bookkeeping for an FBA seller typically runs a few hundred dollars a month, scaling with marketplaces, channels, and transaction volume. Cleanup work is different: the honest answer is that nobody can quote a cleanup accurately from a transaction count alone, because the cost driver is the condition of the books, not their size. A diagnosis-first engagement — assess the foundation, then quote the fix — protects you from both underscoped quotes and padded ones.',
  },
]

export default function FBABookkeepingSystem() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16">
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        color: 'var(--navy)',
        lineHeight: 1.2,
        marginBottom: '1rem',
      }}>
        Amazon FBA Bookkeeping: The Complete Guide
      </h1>

      <div className="blog-content">
        <p><strong>Amazon FBA bookkeeping is different from every other kind of small-business bookkeeping because Amazon pays you in settlements, not sales.</strong> Every two weeks (roughly), Amazon deposits a net number that bundles your sales, fees, refunds, and reserve movements into a single line on your bank statement. Getting FBA books right means decomposing every one of those deposits back into its parts — and most sellers, and frankly most bookkeepers, never do.</p>

        <p><em>Written by Arnold Dizon, PTIN-certified tax professional and QuickBooks Online ProAdvisor.</em></p>

        <h2>Why is Amazon FBA bookkeeping different from normal bookkeeping?</h2>

        <p>A service business invoices a client, the client pays, and the deposit matches the invoice. A traditional retailer rings a sale and the card processor deposits the batch. In both cases, revenue and cash line up closely enough that ordinary bookkeeping works.</p>

        <p>Amazon breaks that model. You never receive your sales — you receive a <strong>settlement</strong>: your gross sales for the period, minus referral fees, minus fulfillment fees, minus storage, minus refunds, minus a reserve Amazon holds back, plus reimbursements and reserve releases from prior periods. The deposit that lands in your bank account has no one-to-one relationship with anything in Seller Central’s sales dashboard. Sell on more than one marketplace — Amazon.ca, Amazon.com.mx, or internationally — and you add currency conversion and separate settlement streams on top.</p>

        <p>Bookkeeping that records the deposit as “Amazon income” and moves on is wrong on day one: it understates your revenue, hides your fees, and makes your books useless for margins and dangerous at tax time. Everything else in FBA bookkeeping follows from solving the settlement problem.</p>

        <h2>What is a settlement, and why do FBA books break there?</h2>

        <p>A settlement is Amazon’s periodic statement of account. One settlement contains, at minimum:</p>

        <ul>
          <li><strong>Gross product sales</strong> — what customers actually paid for your products</li>
          <li><strong>Fee families</strong> — referral fees, FBA fulfillment fees, storage, and a long tail of adjustment types</li>
          <li><strong>Refunds</strong> — customer refunds netted against the period’s sales</li>
          <li><strong>Reserve held / released</strong> — the amount Amazon holds back this period, and prior holds it releases</li>
          <li><strong>The net deposit</strong> — what actually reaches your bank</li>
        </ul>

        <p>Walk one settlement by hand and the shape becomes obvious. Say a two-week settlement shows $10,000 in gross product sales. Referral fees take roughly $1,500, FBA fulfillment fees another $1,300, and storage $100. Two customers returned product: $250 in refunds, plus Amazon’s refund administration fee. Amazon holds a $700 reserve against future returns and releases $500 it held on the prior settlement. Net deposit: about $6,650. Your bank statement shows one line — $6,650 — and nothing else.</p>

        <p>Book that line as “$6,650 Amazon income” and your books now understate revenue by a third, show zero selling costs, and carry no record of the reserve Amazon is holding on your behalf. Multiply by 26 settlements a year and the file is unusable. The correct posting decomposes every settlement back into those components — which is the entire discipline of FBA bookkeeping.</p>

        <p>This is also where the source data will trip you. When I rebuild a seller’s books, I reconstruct the settlement spine month-by-month from the raw settlement files on deposit-date truth — the summary reports Amazon offers are mis-dated by one settlement and will throw every month off. The raw files are the record; the dashboards are a paraphrase.</p>

        <h2>What should FBA sellers track?</h2>

        <ul>
          <li><strong>Cost of Goods Sold (COGS) by SKU.</strong> Your landed cost per unit — product cost plus inbound freight plus prep. This is the single number that turns “revenue” into “margin,” and it feeds your Schedule C inventory calculation directly. Track it per SKU from the day you place a purchase order.</li>
          <li><strong>FBA fulfillment fees.</strong> The per-unit fees Amazon charges to pick, pack, and ship. They change with size tiers and rate cards, so last year’s per-unit assumption quietly goes stale — pull them from the settlements, don’t estimate them.</li>
          <li><strong>Storage fees.</strong> Monthly storage plus long-term storage surcharges, by ASIN. Long-term storage is where slow movers destroy a margin that looked healthy at the unit level.</li>
          <li><strong>Returns and refunds.</strong> Customer refunds reduce your revenue, and Amazon’s refund administration fees hit you on top. Refund-heavy products can be unprofitable while showing strong gross sales.</li>
          <li><strong>Amazon reimbursements.</strong> Credits Amazon issues for inventory it lost or damaged. These are income-adjacent recoveries, not sales, and they belong in their own bucket — both for clean margins and because unclaimed reimbursements are recoverable cash (more below).</li>
          <li><strong>Advertising (PPC).</strong> Ad spend is often the second-largest cost after COGS. Track it against the products it promotes, or your “profitable” hero SKU may be a break-even SKU with a big ad budget.</li>
        </ul>

        <h2>What is an FBA audit?</h2>

        <p>Sellers search this phrase meaning three different things, and it pays to know which one you need:</p>

        <p><strong>An account-health audit</strong> reviews your Seller Central performance metrics — defect rates, shipping performance, policy compliance — to protect your selling privileges. That’s an operations service, not an accounting one.</p>

        <p><strong>A books audit</strong> verifies your accounting records against source documents: do the settlements in your books match the raw settlement files, and do the deposits tie to your bank statement? If your books have never been reconciled settlement-by-settlement, this is the audit you need — it’s where <a href="/get-help/">a professional cleanup</a> starts.</p>

        <p><strong>A reimbursement audit</strong> hunts down inventory Amazon lost, damaged, or destroyed without crediting you. It runs on a 60-day filing window under Amazon's current rules — losses expire fast — and produces recoverable cash — the <a href="/products/fba-reimbursement-calculator/">FBA Reimbursement Calculator</a> below walks that process.</p>

        <h2>How do you reconcile Amazon settlements in QuickBooks Online?</h2>

        <p>The QBO-native method, at overview level:</p>

        <p><strong>1. Run an Amazon clearing account.</strong> Every settlement posts as a journal entry into a clearing account — gross sales credited to income, fee families debited to their expense accounts, refunds netted, reserve movement recorded — with the entry’s net equal to the settlement’s net deposit.</p>

        <p><strong>2. Post one journal entry per settlement, dated on the deposit.</strong> The raw settlement file’s deposit date is the anchor. One settlement, one entry, one date — that discipline is what makes the next step possible.</p>

        <p><strong>3. Tie every entry to the bank.</strong> Each settlement’s net matches a specific bank deposit. When the month closes, the bank reconciliation confirms the settlement spine is complete: every deposit explained, every entry deposited.</p>

        <p><strong>4. Roll the reserve forward.</strong> The reserve Amazon holds this settlement should reappear as the prior balance on the next one. If the chain breaks, a settlement is missing or misattributed — the reserve roll-forward is a built-in completeness check most bookkeepers never use.</p>

        <p>Recent engagement, to make it concrete: a multi-marketplace FBA seller (US/CA/MX plus eBay) whose books needed full reconstruction — a full calendar year rebuilt, every settlement reconciled to the cent against the bank statement, and a six-figure discrepancy found hiding in a clearing account, quarantined and documented rather than plugged. That last part matters: books that merely <em>balance</em> can still be wrong, and forcing them to balance buries the problem where the next preparer — or the IRS — finds it.</p>

        <h2>Should you use A2X, Link My Books, or do it manually?</h2>

        <p><strong>A2X and Link My Books</strong> are settlement connectors: they read Amazon’s settlement data and post summarized entries into QuickBooks or Xero. For a seller with clean books and a standard setup, they remove most of the manual translation work, and they’re worth their subscription. Their limits: they automate the posting, not the judgment — account mapping, COGS, reserve anomalies, and anything historical still needs a human — and they can’t fix books that were wrong before the connector arrived.</p>

        <p><strong>Manual settlement journal entries</strong> in QuickBooks Online cost time instead of subscription fees and force you to understand your own numbers. For low settlement volume, or for any historical cleanup, manual is the only honest option — connectors don’t reach backward.</p>

        <p>My own position is tool-independent: I’m familiar with A2X-style settlement logic and don’t depend on any single connector — which is how I fix books that were never set up on one. Pick the tool that fits your volume; the method underneath is the same either way.</p>

        <h2>Claim your FBA reimbursements first</h2>

        <p>Before you invest in a full bookkeeping setup, check the money Amazon may already owe you. Most FBA sellers are leaving cash on the table from inventory Amazon has lost or damaged. The <a href="/products/fba-reimbursement-calculator/">FBA Reimbursement Calculator</a> ($19.99) walks you through Amazon's 60-day claim window, classifies losses by type, and produces a claim-ready summary you can submit through Seller Central.</p>

        <p>Most sellers find $1,000–$3,000 they didn’t know Amazon owed them on the first pass. That’s working capital that funds the rest of your bookkeeping setup.</p>

        <h2>When should you hire a professional?</h2>

        <p>Three tells, in plain language:</p>

        <p><strong>Your reconciliations “balance” but something feels wrong.</strong> Forced reconciliations — plugged adjustments that make the numbers tie — are the most expensive kind of broken books, because they hide the damage. If your file has reconciliation-discrepancy entries or year-end “correcting entries” nobody can explain, the foundation needs a diagnosis before anything built on it can be trusted.</p>

        <p><strong>Your books are a year or more behind.</strong> A backlog of unreconciled settlements compounds: reserves roll across periods, refunds cross month boundaries, and the reconstruction has to be done in sequence. This is rebuild territory, and it’s faster in expert hands.</p>

        <p><strong>You’ve been told your books “aren’t fit to file.”</strong> If a tax preparer bounced your file, the fix isn’t a better spreadsheet — it’s a reconstruction against source documents.</p>

        <p>If any of those describes your file, <a href="/get-help/">get help with your books here</a>. The engagement is diagnosis-first: assess the condition of the foundation on a fixed fee, then quote the cleanup from evidence instead of guesswork — so you’re never buying an open-ended cleanup on an estimate somebody made from a transaction count.</p>

        <h2>Ongoing bookkeeping: ShelfKeeper</h2>

        <p>For ongoing month-to-month tracking, ShelfKeeper is being built specifically for Amazon FBA sellers: COGS by SKU, automatic FBA fee categorization, and a real profit dashboard that accounts for every Amazon-specific cost category. ShelfKeeper is currently in private beta — <a href="https://arjebookkeeping.gumroad.com/l/zwuld">join the free waitlist</a> for early access when it launches.</p>

        <div style={{ background: 'var(--cream)', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem 1.75rem 1.5rem', margin: '2.75rem 0' }}>
          <h3 style={{ marginTop: 0 }}>Think your books have this problem?</h3>
          <p style={{ marginBottom: 0 }}>The <a href="/foundation-diagnosis/">Foundation Diagnosis</a> is the fixed-fee first step — $495, credited toward the cleanup. A read-only forensic pass that tells you exactly what’s wrong before anyone quotes the fix. <a href="/foundation-diagnosis/">Start the diagnosis →</a></p>
        </div>

        <h2>Frequently Asked Questions</h2>

        {faqs.map(f => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <p style={{fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '2.5rem', borderTop: '1px solid #ddd', paddingTop: '1.25rem'}}>Arnold Dizon is a PTIN-certified tax professional, QuickBooks Online ProAdvisor, and founder of ARJE Bookkeeping &amp; Tax Services in Henderson, Nevada. For quarterly tax planning as a seller, see <a href="/quarterly-estimated-taxes/">How Much Should I Pay in Quarterly Estimated Taxes?</a> This article is general information only and not tax or accounting advice for your specific situation.</p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      })}} />
    </main>
  )
}
