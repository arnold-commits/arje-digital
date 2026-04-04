import { siteConfig } from '@/lib/data'

export const metadata = { title: "Earnings Disclaimer" }

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="font-display font-bold text-3xl text-navy mb-6">Earnings Disclaimer</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: April 2026</p>
      <div className="prose prose-gray max-w-none text-sm text-gray-600 leading-relaxed space-y-4">
        <p>ARJE Digital (a DBA of ARJE Bookkeeping & Tax Services) provides digital templates, automation tools, and educational resources for bookkeepers, tax preparers, and Amazon sellers. The following disclaimer applies to all products and content.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">No Guarantee of Results</h2>
        <p>The products and templates provided by ARJE Digital are tools designed to help organize and automate business processes. Individual results vary based on effort, experience, market conditions, and other factors. We make no guarantees regarding specific outcomes, time savings, or income levels.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Not Professional Advice</h2>
        <p>Our products are educational tools and templates, not professional tax, legal, or accounting advice. The use of our templates does not establish a client-professional relationship. Consult qualified professionals for advice specific to your situation.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Testimonials and Examples</h2>
        <p>Any testimonials, case studies, or examples referenced on this website represent individual experiences and are not typical results. They are presented for illustrative purposes only and should not be interpreted as guarantees of similar outcomes.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Affiliate Relationships</h2>
        <p>Some products on this site are sold through ClickBank, a third-party retailer. ClickBank&apos;s role as a retailer does not constitute an endorsement, approval, or review of these products or any claim, statement, or opinion used in the promotion of these products.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Contact</h2>
        <p>If you have questions about this disclaimer, contact us at {siteConfig.email}.</p>
      </div>
    </div>
  )
}
