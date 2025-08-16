'use client'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Loading component
function ProductsLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Tabs skeleton */}
      <div className="flex justify-center">
        <div className="flex space-x-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 w-20 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
      
      {/* Products grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-x-6 gap-y-6 md:gap-y-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="aspect-square bg-gray-200 rounded-lg" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        ))}
      </div>
      
      {/* Pagination skeleton */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-10 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Dynamic import with no SSR to avoid useSearchParams issues
const ProductTabsSection = dynamic(
  () => import('./section-products'),
  { 
    ssr: false,
    loading: () => <ProductsLoading />
  }
)

export default function ProductTabsSectionClient() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductTabsSection />
    </Suspense>
  )
}
