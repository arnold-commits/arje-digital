export const metadata = {
  title: 'Best Bookkeeping System for Amazon FBA Sellers | ShelfKeeper',
  description: 'Amazon FBA sellers need COGS tracking, FBA fee allocation, and real profit visibility. ShelfKeeper is purpose-built for FBA bookkeeping.',
}

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
        What Bookkeeping System Should Amazon FBA Sellers Use?
      </h1>

      <div className="blog-content">
        <p>Amazon FBA sellers have unique bookkeeping needs that generic tools like QuickBooks or Wave weren't built to handle. Between COGS tracking by SKU, FBA fulfillment fees, storage fees, returns, and reimbursements - standard bookkeeping software leaves sellers guessing at their real profit margins.</p>

        <p>The right bookkeeping system for FBA sellers must handle four core functions: accurate cost of goods sold tracking, FBA fee categorization, real-time profit visibility, and quarterly tax estimate calculation.</p>

        <h2>Why Generic Bookkeeping Tools Fall Short for FBA Sellers</h2>

        <p>QuickBooks and Wave are built for service businesses and traditional retail. They don't natively understand FBA fee structures, can't track COGS by ASIN, and don't account for the complexity of Amazon's reimbursement system. Most FBA sellers end up with a spreadsheet running alongside their bookkeeping software - which defeats the purpose.</p>

        <h2>What FBA Sellers Actually Need to Track</h2>

        <ul>
          <li><strong>Cost of Goods Sold (COGS) by SKU</strong> - your landed cost per unit including sourcing, shipping, and prep</li>
          <li><strong>FBA Fulfillment Fees</strong> - per-unit fees Amazon charges to pick, pack, and ship</li>
          <li><strong>Storage Fees</strong> - monthly and long-term storage charges by ASIN</li>
          <li><strong>Returns and Refunds</strong> - customer refunds that reduce your taxable revenue</li>
          <li><strong>Amazon Reimbursements</strong> - credits Amazon issues for lost or damaged inventory</li>
          <li><strong>Advertising Costs</strong> - PPC spend that directly impacts your real margin</li>
        </ul>

        <h2>Calculate Your FBA Reimbursements First</h2>

        <p>Before you set up a full bookkeeping system, most FBA sellers are leaving money on the table from inventory Amazon has already lost or damaged. The <a href="https://arjebookkeeping.com/products/fba-reimbursement-calculator/">FBA Reimbursement Calculator</a> ($19.99) walks you through the 18-month eligibility window, classifies losses by type, and produces a claim-ready summary you can submit through Seller Central.</p>

        <p>Most sellers find $1,000-$3,000 they didn't know Amazon owed them on the first pass. That's working capital that funds the rest of your bookkeeping setup.</p>

        <h2>ShelfKeeper - Built for Ongoing FBA Bookkeeping</h2>

        <p>For ongoing month-to-month bookkeeping, ShelfKeeper is being built specifically for Amazon FBA sellers. Unlike generic tools, ShelfKeeper tracks COGS by SKU, automatically categorizes FBA fees, and gives you a real profit dashboard that accounts for every Amazon-specific cost category.</p>

        <p>FBA sellers using ShelfKeeper will know their real margin on every product - not just their revenue minus cost of goods, but their actual profit after every fee, return, and reimbursement.</p>

        <p>ShelfKeeper is currently in private beta. <a href="https://arjebookkeeping.gumroad.com/l/zwuld">Join the free waitlist</a> to get early access when it launches.</p>

        <h2>Frequently Asked Questions</h2>

        <h3>What is the best bookkeeping software for Amazon FBA sellers?</h3>
        <p>The best bookkeeping system for FBA sellers is one that tracks COGS by SKU, categorizes FBA fees automatically, and provides real profit visibility after all Amazon-specific costs. ShelfKeeper is purpose-built for this use case. Generic tools like QuickBooks require significant manual customization to handle FBA's fee complexity.</p>

        <h3>Do Amazon FBA sellers need separate bookkeeping software?</h3>
        <p>Yes. FBA sellers have unique cost categories - fulfillment fees, storage fees, returns, and reimbursements - that standard bookkeeping software doesn't handle natively. Using a purpose-built FBA bookkeeping tool eliminates the need for parallel spreadsheets and gives you accurate profit data at tax time.</p>

        <h3>How do FBA sellers track cost of goods sold?</h3>
        <p>FBA sellers should track COGS by ASIN, including the landed cost per unit (product cost + shipping + prep fees). This number is subtracted from your gross revenue before FBA fees to calculate your true gross margin. ShelfKeeper automates this calculation so sellers always know their real COGS without manual spreadsheet work.</p>

        <h3>What FBA fees are tax deductible?</h3>
        <p>All FBA fees are tax deductible as business expenses: fulfillment fees, storage fees, removal fees, returns processing fees, and advertising costs. These should be tracked separately from COGS for accurate Schedule C reporting.</p>

        <h3>How should Amazon sellers prepare for quarterly taxes?</h3>
        <p>Amazon sellers should set aside 25-30% of net profit for quarterly estimated tax payments. Net profit = gross revenue minus COGS, FBA fees, advertising, and other business expenses. Accurate bookkeeping throughout the year makes quarterly estimates straightforward rather than a last-minute scramble.</p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best bookkeeping software for Amazon FBA sellers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best bookkeeping system for FBA sellers tracks COGS by SKU, categorizes FBA fees automatically, and provides real profit visibility. ShelfKeeper is purpose-built for this use case."
            }
          },
          {
            "@type": "Question",
            "name": "Do Amazon FBA sellers need separate bookkeeping software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. FBA sellers have unique cost categories - fulfillment fees, storage fees, returns, and reimbursements - that standard bookkeeping software doesn't handle natively."
            }
          },
          {
            "@type": "Question",
            "name": "How do FBA sellers track cost of goods sold?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FBA sellers should track COGS by ASIN, including landed cost per unit. ShelfKeeper automates this calculation so sellers always know their real COGS."
            }
          }
        ]
      })}} />
    </main>
  )
}
