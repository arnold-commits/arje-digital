import { siteConfig } from '@/lib/data'

export const metadata = { title: "Contact Us" }

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16">
      <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Get in Touch</p>
      <h1 className="font-display font-bold text-4xl text-navy mb-3">Contact us</h1>
      <p className="text-gray-400 mb-10">We respond within one business day.</p>

      <div className="bg-white rounded-xl p-8 border border-gray-100 mb-8">
        {[
          { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
          { label: 'Website', value: 'arjebookkeeping.com', href: 'https://arjebookkeeping.com' },
          { label: 'Location', value: siteConfig.location },
          { label: 'Gumroad Store', value: 'arjebookkeeping.gumroad.com', href: siteConfig.social.gumroad },
          { label: 'Etsy Shop', value: 'etsy.com/shop/ARJEDigitalTools', href: siteConfig.social.etsy },
          { label: 'Amazon Author', value: 'amazon.com/author/arnolddizon', href: siteConfig.social.amazonAuthor },
          { label: 'LinkedIn', value: 'Arnold Dizon', href: siteConfig.social.linkedin },
          { label: 'X / Twitter', value: '@arjebookkeeping', href: siteConfig.social.twitter },
          { label: 'Pinterest', value: '@arjebookkeeping', href: siteConfig.social.pinterest },
        ].map(item => (
          <div key={item.label} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0">
            <span className="text-gray-400 text-sm">{item.label}</span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-navy font-medium text-sm hover:text-teal transition-colors">{item.value}</a>
            ) : (
              <span className="text-navy font-medium text-sm">{item.value}</span>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="font-display font-semibold text-navy mb-2 text-sm">Product Support</h3>
          <p className="text-gray-500 text-sm">Questions about a product you purchased?</p>
          <a href={`mailto:${siteConfig.email}`} className="text-teal text-sm font-semibold mt-2 inline-block">{siteConfig.email}</a>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="font-display font-semibold text-navy mb-2 text-sm">Order Support (ClickBank)</h3>
          <p className="text-gray-500 text-sm">Questions about a ClickBank order?</p>
          <a href="https://www.clkbank.com" target="_blank" rel="noopener noreferrer" className="text-teal text-sm font-semibold mt-2 inline-block">www.clkbank.com</a>
        </div>
      </div>
    </div>
  )
}
