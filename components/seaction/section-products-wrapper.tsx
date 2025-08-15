'use client'
import { Suspense } from 'react'
import ProductTabsSection from './section-products'

// Loading component for Suspense fallback
function ProductsLoading() {
  return (
    <div className="space-y-8 container mx-auto px-4 py-40">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-x-6 gap-y-6 md:gap-y-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProductTabsSectionWrapper() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductTabsSection />
    </Suspense>
  )
}
