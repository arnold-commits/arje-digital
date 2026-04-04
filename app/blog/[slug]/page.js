import Link from 'next/link'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug)

  return (
    <article className="max-w-3xl mx-auto px-5 py-16">
      <Link href="/blog" className="text-teal text-sm font-medium hover:underline mb-6 inline-block">← Back to blog</Link>

      <div className="flex items-center gap-3 mb-4">
        {post.category && (
          <span className="text-xs font-semibold text-teal bg-teal/8 px-3 py-1 rounded-full">{post.category}</span>
        )}
        <span className="text-xs text-gray-400">{post.date}</span>
      </div>

      <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4 leading-tight">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-10">By {post.author}</p>

      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      {/* CTA */}
      <div className="mt-14 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border border-teal/20 text-center">
        <h3 className="font-display font-bold text-xl text-navy mb-2">Ready to automate your practice?</h3>
        <p className="text-gray-500 text-sm mb-5">Get the complete system for a one-time $197 investment.</p>
        <Link href="/automation-bundle" className="inline-block px-8 py-3 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all text-sm">
          Get the Automation Bundle →
        </Link>
      </div>
    </article>
  )
}
