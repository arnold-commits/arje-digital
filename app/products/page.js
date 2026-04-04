'use client'
import { useState } from 'react'
import { products, categories } from '@/lib/data'
import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <p className="text-teal text-xs font-bold tracking-[3px] uppercase mb-3">Shop</p>
      <h1 className="font-display font-bold text-4xl text-navy mb-2">Digital products for your practice</h1>
      <p className="text-gray-400 mb-8 max-w-lg">Templates, automations, and systems. All Google Workspace compatible. No monthly fees.</p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${active === cat ? 'bg-navy text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">No products in this category yet. Check back soon.</p>
      )}
    </div>
  )
}
