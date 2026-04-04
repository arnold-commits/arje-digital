import { siteConfig } from '@/lib/data'

export const metadata = { title: "Privacy Policy" }

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="font-display font-bold text-3xl text-navy mb-6">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: April 2026</p>
      <div className="prose prose-gray max-w-none text-sm text-gray-600 leading-relaxed space-y-4">
        <p>ARJE Digital (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a DBA of ARJE Bookkeeping & Tax Services, operates the website arjebookkeeping.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our site or purchase our products.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Information We Collect</h2>
        <p>When you purchase a product through ClickBank, Gumroad, or other platforms, those platforms collect your payment and contact information. We receive your name and email address for product delivery and support purposes.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">How We Use Your Information</h2>
        <p>We use your information to deliver purchased products, provide customer support, send product updates, and improve our offerings. We do not sell or rent your personal information to third parties.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Third-Party Services</h2>
        <p>Our products are sold through third-party platforms (ClickBank, Gumroad, Etsy) that have their own privacy policies. We encourage you to review those policies. Purchases through ClickBank will appear as CLKBANK*COM on your statement.</p>
        <h2 className="font-display font-bold text-lg text-navy pt-4">Contact</h2>
        <p>If you have questions about this privacy policy, contact us at {siteConfig.email}.</p>
      </div>
    </div>
  )
}
