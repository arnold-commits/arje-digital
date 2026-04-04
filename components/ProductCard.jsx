import Link from 'next/link'

const tagColors = {
  amber: 'bg-amber-50 text-amber-800',
  blue: 'bg-blue-50 text-blue-800',
  green: 'bg-emerald-50 text-emerald-800',
  purple: 'bg-purple-50 text-purple-800',
}

export default function ProductCard({ product }) {
  const isInternal = product.href?.startsWith('/')
  const Wrapper = isInternal ? Link : 'a'
  const wrapperProps = isInternal 
    ? { href: product.href } 
    : { href: product.href, target: '_blank', rel: 'noopener noreferrer' }

  return (
    <Wrapper {...wrapperProps} className="block">
      <div className="bg-white rounded-xl p-7 border border-gray-100 card-hover cursor-pointer relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        
        {product.tag && (
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${tagColors[product.tagColor] || 'bg-gray-50 text-gray-600'}`}>
            {product.tag}
          </span>
        )}

        <h3 className="font-display font-bold text-lg text-navy mb-2 leading-snug">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <span className="font-display font-bold text-2xl text-navy">{product.price}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-1 bg-gray-50 rounded text-gray-400 font-medium">via {product.platform}</span>
            <span className="text-teal text-sm font-semibold group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
