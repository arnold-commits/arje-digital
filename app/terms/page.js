import { siteConfig } from '@/lib/data'

export const metadata = { title: "Terms of Service" }

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="font-display font-bold text-3xl text-navy mb-6">Terms of Service</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: April 2026</p>
      <div className="prose prose-gray max-w-none text-sm text-gray-600 leading-relaxed space-y-4">
        <p>By purchasing and using products from ARJE Digital (a DBA of ARJE Bookkeeping & Tax Services), you agree to the following terms.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Products and Delivery</h2>
        <p>All products are digital downloads delivered immediately upon purchase via email or direct download link. Products include Google Sheets templates, Google Docs, automation guides, and video tutorials. All products are designed for use with free Google Workspace tools.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Refund Policy</h2>
        <p>Products purchased through ClickBank are covered by ClickBank&apos;s 60-day return policy. Products purchased through Gumroad are subject to Gumroad&apos;s refund policies. Contact the respective platform for refund requests.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Intellectual Property</h2>
        <p>All products, templates, and content are the intellectual property of ARJE Digital. You may use purchased products for your own business operations but may not resell, redistribute, or share them with third parties.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Disclaimer</h2>
        <p>Our products are educational tools and templates. They do not constitute professional tax, legal, or accounting advice. Consult a qualified professional for specific guidance regarding your situation.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Contact</h2>
        <p>Questions about these terms? Contact us at {siteConfig.email}.</p>
      </div>
    </div>
  )
}
