import Link from 'next/link'
import { getBlogPosts, BLOG_URL } from '@/lib/ghost'
import TrackedLink from '@/components/TrackedLink'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Blog — FBA Bookkeeping & Tax Operations',
  description:
    'Bookkeeping and tax operations for Amazon sellers and accounting pros: settlement reconciliation, QuickBooks red flags, reimbursements, quarterly taxes.',
  alternates: { canonical: '/blog/' },
}

export default async function BlogIndex() {
  const posts = await getBlogPosts(10)

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Blog</p>
      <h1 className="font-display font-bold text-4xl text-navy mb-3">ARJE Blog</h1>
      <p className="text-gray-500 mb-10 max-w-lg">
        Practical bookkeeping and tax operations for Amazon sellers and the professionals who serve them. Written by a working practitioner, not a content team.
      </p>

      {posts.length > 0 ? (
        <div className="space-y-5">
          {posts.map(p => (
            <article key={p.url} className="bg-white rounded-xl p-6 border border-gray-100 card-hover">
              <p className="text-gray-500 text-xs mb-2">
                {p.isoDate ? <time dateTime={p.isoDate}>{p.date}</time> : null}
              </p>
              <h2 className="font-display font-bold text-xl text-navy mb-2 leading-snug">
                <a href={p.url} className="hover:text-teal transition-colors">{p.title}</a>
              </h2>
              {p.excerpt ? <p className="text-gray-500 text-sm leading-relaxed">{p.excerpt}</p> : null}
              <a href={p.url} className="inline-block mt-3 text-teal text-sm font-semibold hover:underline">Read on the blog →</a>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <p className="text-gray-600">The latest posts are on <a href={BLOG_URL} className="text-teal font-semibold hover:underline">blog.arjebookkeeping.com</a>.</p>
        </div>
      )}

      <div className="text-center mt-10">
        <a href={BLOG_URL} className="inline-block px-8 py-4 border-2 border-navy text-navy font-bold rounded-lg hover:bg-navy hover:text-white transition-all text-sm">
          All posts on blog.arjebookkeeping.com →
        </a>
      </div>

      {/* Diagnosis-first route for readers whose books are the problem */}
      <div className="mt-14 rounded-2xl border border-teal/30 bg-teal/5 p-6">
        <p className="font-display font-bold text-navy mb-1">Reading because your own books don&rsquo;t add up?</p>
        <p className="text-gray-500 text-sm leading-relaxed">
          Start with the Foundation Diagnosis — a $495 fixed-fee, read-only forensic pass over your QuickBooks, credited 100% toward the cleanup if you engage within 30 days of your report.{' '}
          <TrackedLink href="/foundation-diagnosis" event="diagnosis_cta_click" data={{ placement: 'blog_index' }} className="text-teal font-bold hover:underline whitespace-nowrap">
            Start the Foundation Diagnosis →
          </TrackedLink>
        </p>
        <p className="text-gray-500 text-xs mt-3">
          Guides on this site: <Link href="/fba-bookkeeping-system" className="text-teal hover:underline">Amazon FBA Bookkeeping</Link> · <Link href="/quarterly-estimated-taxes" className="text-teal hover:underline">Quarterly Estimated Taxes</Link>
        </p>
      </div>
    </div>
  )
}
