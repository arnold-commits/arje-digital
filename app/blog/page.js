import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = { title: "Blog — Automation Tips for Accounting Professionals" }

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Blog</p>
      <h1 className="font-display font-bold text-4xl text-navy mb-3">Insights & strategies</h1>
      <p className="text-gray-400 mb-10 max-w-lg">Automation tips, tax prep strategies, and business systems advice for accounting professionals.</p>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400">Blog posts coming soon. Check back shortly.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-white rounded-xl p-7 border border-gray-100 card-hover h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  {post.category && (
                    <span className="text-xs font-semibold text-teal bg-teal/8 px-3 py-1 rounded-full">{post.category}</span>
                  )}
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h2 className="font-display font-bold text-lg text-navy mb-3 group-hover:text-teal transition-colors leading-snug">{post.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">By {post.author}</span>
                  <span className="text-teal text-sm font-semibold group-hover:translate-x-1 transition-transform">Read →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
