import { siteConfig } from '@/lib/data'

export const metadata = {
  title: "Thanks — We Got Your Request",
  description: "Your bookkeeping help request was received. Here's what happens next.",
  robots: { index: false, follow: false },
}

export default function ThanksHelpPage() {
  const steps = [
    'Within 24 business hours, Arnold reviews your submission.',
    "You'll receive one of three responses: a custom quote, a tier recommendation, or a calendar link to discuss further.",
    'If anything\u2019s urgent, reply to the autoresponder email or call/text (702) 583-7037.',
  ]

  return (
    <div className="max-w-2xl mx-auto px-5 py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
      </div>
      <h1 className="font-display font-bold text-4xl text-navy mb-3">Thanks &mdash; we got your request</h1>
      <p className="text-gray-500 text-lg mb-10">Here&apos;s what happens next.</p>
      <div className="bg-white rounded-xl p-8 border border-gray-100 text-left mb-8">
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal/10 text-teal font-bold text-sm flex items-center justify-center">{i + 1}</span>
              <span className="text-gray-600 text-sm pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="text-left text-sm text-gray-400 space-y-1">
        <p>Questions in the meantime? Email {siteConfig.email}</p>
      </div>
    </div>
  )
}
