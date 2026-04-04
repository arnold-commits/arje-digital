import { siteConfig } from '@/lib/data'

export const metadata = { title: "About ARJE Digital" }

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">About</p>
      <h1 className="font-display font-bold text-4xl text-navy mb-3">Arnold + Jean = ARJE</h1>
      <p className="text-gray-400 mb-10 max-w-lg">A husband-and-wife team building digital tools that help accounting professionals work smarter.</p>

      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-gold flex items-center justify-center text-white font-display font-bold text-xl">AD</div>
            <div>
              <h2 className="font-display font-bold text-xl text-navy">Arnold Dizon</h2>
              <p className="text-teal text-sm font-medium">Founder & PTIN-Certified Tax Professional</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-3">
            Arnold manages over 90 active clients from Henderson, Nevada, specializing in Amazon FBA seller bookkeeping — one of the most complex niches in the accounting industry. Every template and automation in the ARJE Digital product catalog was built and tested in his own practice over three years.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            Beyond client work, Arnold is the author of 12+ published books on Amazon KDP including &ldquo;The Scrolls and the Algorithm,&rdquo; and builds SaaS tools for the accounting industry.
          </p>
          <p className="text-gray-600 leading-relaxed">
            His philosophy is simple: if a process can be automated with free Google tools, it should be. No accountant should pay $200 per month for software when Google Sheets can do the job.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-teal flex items-center justify-center text-white font-display font-bold text-xl">JD</div>
            <div>
              <h2 className="font-display font-bold text-xl text-navy">Jean Dizon</h2>
              <p className="text-gold text-sm font-medium">Co-Founder & Operations</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Jean brings institutional-grade financial operations knowledge from her experience at Citibank, Chase, Wells Fargo, and HSBC. Her banking background ensures that every ARJE product meets the standard that financial professionals expect.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <h2 className="font-display font-bold text-xl text-navy mb-4">What ARJE Digital stands for</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              ARJE Digital is the digital products division of ARJE Bookkeeping & Tax Services. We build templates, automations, and SaaS tools for three audiences: bookkeepers and CPAs, tax preparers, and Amazon FBA sellers.
            </p>
            <p>
              Our products are sold across multiple platforms including Gumroad, Etsy, ClickBank, and ClaudeSkills.ai. Everything we build runs on Google Workspace — no Microsoft Office required, no expensive monthly subscriptions.
            </p>
            <p>
              Based in Henderson, Nevada. Family-owned. Bootstrapped. Built by practitioners, for practitioners.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
