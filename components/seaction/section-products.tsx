'use client'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState, useCallback, useMemo, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Pagination } from "../ui/Pagination"
import { cn } from "@/lib/utils"
import { fetchProducts, Product, ProductListResponse, isProductNew, Category, fetchProductAll } from "@/lib/api"
import ProductCard from "@/components/product-card"

export default function ProductTabsSection() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState(1)
  const [, startTransition] = useTransition()

  const categoryMapping = useMemo(() =>
    categories.reduce((acc, category) => {
      acc[category.name] = category.id
      return acc
    }, { "Tất cả": null } as Record<string, number | null>)
    , [categories])

  const tabs = useMemo(() =>
    ["Tất cả", ...categories.map(cat => cat.name)]
    , [categories])

  const currentPage = useMemo(() =>
    parseInt(searchParams.get('page') || '1')
    , [searchParams])

  const categoryParam = searchParams.get('category')
  const currentTab = useMemo(() =>
    categoryParam ?
      Object.keys(categoryMapping).find(key =>
        categoryMapping[key as keyof typeof categoryMapping] === parseInt(categoryParam)
      ) || "Tất cả"
      : "Tất cả"
    , [categoryParam, categoryMapping])

  const itemsPerPage = 8

  const updateURL = useCallback((page: number, categoryId: number | null) => {
    startTransition(() => {
      const params = new URLSearchParams()
      params.set('page', page.toString())
      if (categoryId) {
        params.set('category', categoryId.toString())
      }
      router.push(`/product?${params.toString()}`, { scroll: false })
    })
  }, [router, startTransition])

  const handleTabChange = useCallback((tab: string) => {
    const categoryId = categoryMapping[tab as keyof typeof categoryMapping]
    updateURL(1, categoryId)
  }, [categoryMapping, updateURL])

  const handlePageChange = useCallback((page: number) => {
    const categoryId = categoryMapping[currentTab as keyof typeof categoryMapping]
    updateURL(page, categoryId)
  }, [categoryMapping, currentTab, updateURL])

  // const loadProducts = useCallback(async () => {
  //   try {
  //     setLoading(true)
  //     setError(null)

  //     const categoryId = categoryMapping[currentTab as keyof typeof categoryMapping]

  //     const data: ProductListResponse = await fetchProducts(currentPage, itemsPerPage, categoryId || undefined)

  //     if (data.categories && data.categories.data && categories.length === 0) {
  //       setCategories(data.categories.data)
  //     }

  //     const productsWithNewFlag = data.data.data.map(product => ({
  //       ...product,
  //       isNew: isProductNew(product.createdAt)
  //     }))

  //     setProducts(productsWithNewFlag)
  //     setTotalPages(data.meta.pagination.pageCount)

  //   } catch (err) {
  //     setError("Không thể tải sản phẩm")
  //     console.error('Error loading products:', err)
  //   } finally {
  //     setLoading(false)
  //   }
  // }, [currentPage, currentTab, categoryMapping, categories.length, itemsPerPage])

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      let data: ProductListResponse

      const categoryId = categoryMapping[currentTab as keyof typeof categoryMapping] ?? null

      if (currentTab === "Tất cả" || categoryId === null) {
        // Nếu tab "Tất cả", gọi API lấy toàn bộ
        data = await fetchProductAll()
      } else {
        // Các tab khác: filter theo category
        data = await fetchProducts(currentPage, itemsPerPage, categoryId)
      }

      // Load categories nếu chưa có
      if (data.categories?.data && categories.length === 0) {
        setCategories(data.categories.data)
      }

      const productsWithNewFlag = data.data.data.map(product => ({
        ...product,
        isNew: isProductNew(product.createdAt)
      }))

      setProducts(productsWithNewFlag)
      setTotalPages(data.meta.pagination.pageCount)

    } catch (err) {
      setError("Không thể tải sản phẩm")
      console.error('Error loading products:', err)
    } finally {
      setLoading(false)
    }
  }, [currentPage, currentTab, categoryMapping, categories.length, itemsPerPage])



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadProducts()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [loadProducts])

  const LoadingComponent = useMemo(() => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-10"
    >
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#CC424E] mx-auto mb-4"></div>
      <p className="text-gray-600">Đang tải sản phẩm...</p>
    </motion.div>
  ), [])

  const ErrorComponent = useMemo(() => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center py-10"
    >
      <p className="text-red-500">{error}</p>
      <button
        onClick={loadProducts}
        className="mt-4 px-4 py-2 bg-[#CC424E] text-white rounded-lg hover:bg-[#CC424E]/90 transition-colors"
      >
        Thử lại
      </button>
    </motion.div>
  ), [error, loadProducts])

  if (loading && products.length === 0) {
    return LoadingComponent
  }

  if (error && products.length === 0) {
    return ErrorComponent
  }



  return (
    <>
      <section className="mt-16 mb-9">
        <h1 className="text-xl md:text-[40px] font-normal text-[#CC424E] text-center">SẢN PHẨM RUBY HƯƠNG</h1>
      </section>
      <div className="hidden md:flex justify-center gap-[15px] md:gap-6 mb-10">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={cn(
              "group relative inline-flex items-center justify-center px-4 py-3 rounded-full text-base whitespace-nowrap overflow-hidden transition-colors",
              currentTab === tab
                ? "text-[#2E333D] hover:text-white font-bold"
                : "text-[#2E333D] hover:text-white hover:font-bold",
            )}
          >
            {tab}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-[#2E333D]" />
          </button>
        ))}
      </div>

      <div className="relative">
        <AnimatePresence>
          {(loading && products.length > 0) && (
            <motion.div
              key="loading-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white z-10 flex items-center justify-center rounded-lg"
            >
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#CC424E]"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-x-6 gap-y-6 md:gap-y-10">
          <AnimatePresence>
            {products.map((product, index) => (
              <ProductCard
                key={`${product.documentId}-${currentPage}-${currentTab}`}
                product={product}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}
