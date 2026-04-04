import { siteConfig } from '@/lib/data'

export const metadata = { title: "Thank You — Your Purchase is Confirmed" }

export default function ThankYouPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
      </div>
      <h1 className="font-display font-bold text-4xl text-navy mb-3">Thank you!</h1>
      <p className="text-gray-500 text-lg mb-10">Your purchase is confirmed. Welcome to the Bookkeeper&apos;s Automation Bundle.</p>

      <div className="bg-white rounded-xl p-8 border border-gray-100 text-left mb-8">
        <h2 className="font-display font-bold text-xl text-navy mb-4">Your access instructions</h2>
        <ol className="space-y-3">
          {[
            'Check your email for your ClickBank receipt and download links.',
            'Click the download link to access your Google Drive folder with all templates.',
            'Start with the Quick Start Guide (first file in the folder).',
            'Watch the setup videos in the Video Tutorial folder.',
            'Email arnold@arjebookkeeping.com if you need help at any point.',
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal/10 text-teal font-bold text-sm flex items-center justify-center">{i + 1}</span>
              <span className="text-gray-600 text-sm pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 text-left mb-8">
        <p className="text-amber-800 text-sm font-medium">Your purchase will appear as CLKBANK*COM on your bank or credit card statement.</p>
      </div>

      <div className="text-left text-sm text-gray-400 space-y-1">
        <p>For Product Support: {siteConfig.email}</p>
        <p>For Order Support: <a href="https://www.clkbank.com" className="text-teal underline">www.clkbank.com</a></p>
      </div>
    </div>
  )
}
