import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products, siteConfig } from '@/lib/data'

// Pre-render all sprint app product pages at build time
export function generateStaticParams() {
  return products
    .filter(p => p.slug)
    .map(p => ({ slug: p.slug }))
}

// Per-page metadata for SEO
export function generateMetadata({ params }) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) return { title: "Product not found" }
  return {
    title: `${product.name} — ARJE Digital`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.subhead || product.description,
      url: `${siteConfig.url}/products/${product.slug}`,
      images: [{ url: product.coverImage, width: 1000, height: 1000, alt: product.name }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.subhead || product.description,
      images: [product.coverImage],
    },
  }
}

const tagColors = {
  amber: 'bg-amber-50 text-amber-800',
  blue: 'bg-blue-50 text-blue-800',
  green: 'bg-emerald-50 text-emerald-800',
  purple: 'bg-purple-50 text-purple-800',
}

export default function ProductPage({ params }) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) notFound()

  const related = products
    .filter(p => p.slug && p.slug !== product.slug)
    .filter(p => p.category === product.category || p.icp === product.icp)
    .slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `${siteConfig.url}${product.coverImage}`,
    "brand": { "@type": "Brand", "name": "ARJE Digital" },
    "offers": [
      product.etsyUrl && {
        "@type": "Offer",
        "url": product.etsyUrl,
        "priceCurrency": "USD",
        "price": product.priceNum,
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "Organization", "name": "ARJE Digital (Etsy)" },
      },
      product.gumroadUrl && {
        "@type": "Offer",
        "url": product.gumroadUrl,
        "priceCurrency": "USD",
        "price": product.priceNum,
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "Organization", "name": "ARJE Digital (Gumroad)" },
      },
    ].filter(Boolean),
  }
  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-teal">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-teal">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{product.name}</span>
      </nav>

      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <img
            src={product.coverImage}
            alt={product.name}
            className="w-full h-auto block"
            loading="eager"
          />
        </div>
        <div>
          {product.tag && (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${tagColors[product.tagColor] || 'bg-gray-50 text-gray-600'}`}>
              {product.tag}
            </span>
          )}
          <h1 className="font-display font-bold text-3xl md:text-4xl text-navy mb-3 leading-tight">
            {product.name}
          </h1>
          {product.subhead && (
            <p className="text-lg text-gray-600 mb-6">{product.subhead}</p>
          )}
          <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-display font-bold text-4xl text-navy">{product.price}</span>
            <span className="text-sm text-gray-400">one-time · lifetime access</span>
          </div>

          {/* Buy buttons — Etsy primary, Gumroad secondary */}
          <div className="space-y-3">
            {product.etsyUrl && (
              <a
                href={product.etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-navy hover:bg-teal text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                Buy on Etsy →
              </a>
            )}
            {product.gumroadUrl && (
              <a
                href={product.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white hover:bg-gray-50 text-navy font-semibold py-4 px-6 rounded-lg border-2 border-navy transition-colors"
              >
                Buy on Gumroad →
              </a>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Available on both platforms — pick whichever you prefer.
          </p>
        </div>
      </div>
      {/* What's Included */}
      {product.features && product.features.length > 0 && (
        <div className="bg-white rounded-xl p-8 border border-gray-100 mb-8">
          <h2 className="font-display font-bold text-2xl text-navy mb-5">What's Included</h2>
          <ul className="space-y-3">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="text-teal font-bold flex-shrink-0 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQ */}
      {product.faqs && product.faqs.length > 0 && (
        <div className="bg-white rounded-xl p-8 border border-gray-100 mb-8">
          <h2 className="font-display font-bold text-2xl text-navy mb-5">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {product.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-display font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* About the builder */}
      <div className="bg-white rounded-xl p-8 border border-gray-100 mb-8">
        <h2 className="font-display font-bold text-xl text-navy mb-3">Built by a practitioner</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-3">
          ARJE Digital is built by Arnold Dizon — a PTIN-certified tax professional running a 90+ client practice. Every tool ships with practitioner-grade precision because Arnold uses them every day on real client work.
        </p>
        <p className="text-xs text-gray-400">
          Questions? Email <a href={`mailto:${siteConfig.email}`} className="text-teal hover:underline">{siteConfig.email}</a>
        </p>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mb-8">
          <h2 className="font-display font-bold text-2xl text-navy mb-5">Related tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map(r => (
              <Link
                key={r.id}
                href={r.href}
                className="block bg-white rounded-xl p-5 border border-gray-100 hover:border-teal transition-colors"
              >
                <div className="font-display font-semibold text-navy text-sm mb-2 leading-snug">{r.name}</div>
                <div className="text-xs text-gray-400 mb-3 line-clamp-2">{r.description}</div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-navy">{r.price}</span>
                  <span className="text-teal text-xs font-semibold">View →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 italic text-center mt-8 max-w-xl mx-auto">
        Personal/business use only. Not for redistribution. Calculators are planning tools, not professional advice.
      </p>
    </div>
  )
}
