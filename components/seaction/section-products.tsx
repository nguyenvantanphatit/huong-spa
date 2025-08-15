'use client'
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Pagination } from "../ui/Pagination"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { fetchProducts, Product, ProductListResponse, MEDIA_BASE_URL, isProductNew, Category } from "@/lib/api"

export default function ProductTabsSection() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)

  const categoryMapping = categories.reduce((acc, category) => {
    acc[category.name] = category.id
    return acc
  }, { "Tất cả": null } as Record<string, number | null>)

  const tabs = ["Tất cả", ...categories.map(cat => cat.name)]

  const currentPage = parseInt(searchParams.get('page') || '1')
  const categoryParam = searchParams.get('category')
  const currentTab = categoryParam ?
    Object.keys(categoryMapping).find(key => categoryMapping[key as keyof typeof categoryMapping] === parseInt(categoryParam)) || "Tất cả"
    : "Tất cả"

  const itemsPerPage = 2

  // Function to update URL params
  const updateURL = (page: number, categoryId: number | null) => {
    const params = new URLSearchParams()
    params.set('page', page.toString())
    if (categoryId) {
      params.set('category', categoryId.toString())
    }
    router.push(`/product?${params.toString()}`)
  }

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    const categoryId = categoryMapping[tab as keyof typeof categoryMapping]
    updateURL(1, categoryId) // Reset to page 1 when changing category
  }

  // Function to handle page change
  const handlePageChange = (page: number) => {
    const categoryId = categoryMapping[currentTab as keyof typeof categoryMapping]
    updateURL(page, categoryId)
  }

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)
        const categoryId = categoryMapping[currentTab as keyof typeof categoryMapping]

        console.log('Loading products:', { page: currentPage, limit: itemsPerPage, categoryId })

        const data: ProductListResponse = await fetchProducts(currentPage, itemsPerPage, categoryId || undefined)

        // Set categories from API response (only on first load or when categories are empty)
        if (data.categories && data.categories.data && categories.length === 0) {
          setCategories(data.categories.data)
          console.log('Categories loaded:', data.categories.data)
        }

        // Add isNew property based on creation date
        const productsWithNewFlag = data.data.data.map(product => ({
          ...product,
          isNew: isProductNew(product.createdAt)
        }))

        setProducts(productsWithNewFlag)
        setTotalProducts(data.meta.pagination.total)
        setTotalPages(data.meta.pagination.pageCount)

        console.log('Products loaded:', {
          products: productsWithNewFlag.length,
          total: data.meta.pagination.total,
          pageCount: data.meta.pagination.pageCount,
          currentPage: data.meta.pagination.page,
          categories: data.categories?.data?.length || 0
        })

      } catch (err) {
        setError("Không thể tải sản phẩm")
        console.error('Error loading products:', err)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [currentPage, currentTab, categories.length])

  // No need for client-side filtering since API handles it

  if (loading) {
    return <p className="text-center py-10">Đang tải sản phẩm...</p>
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>
  }
  console.log('Products:', products)

  console.log("Current state:", {
    products: products.length,
    currentPage,
    currentTab,
    totalPages,
    totalProducts,
    categories: categories.length,
    categoryMapping,
    tabs,
    categoryId: categoryMapping[currentTab as keyof typeof categoryMapping]
  })

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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-x-6 gap-y-6 md:gap-y-10">
        {products.map((product, index) => (
          <motion.div
            key={`${product.slug}-${index}`}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.20, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="group space-y-2"
          >
            <Link href={`/product/${product.slug}`} key={index}>
              <div className="relative group/card aspect-square overflow-hidden rounded-lg">
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-[#679132] text-white text-xs font-semibold px-2 py-1 rounded-[13.33px] rounded-tr-[6.67px] z-10">
                    New
                  </div>
                )}
                <Image
                  src={product?.image?.url ? `${MEDIA_BASE_URL}${product.image.url}` : '/service/service-01.png'}
                  alt={product?.title || 'Product image'}
                  fill
                  className="object-cover rounded-lg group-hover:rounded-lg transition-transform duration-500 ease-in-out"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('/service/service-01.png')) {
                      target.src = '/service/service-01.png';
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-end justify-center pb-[10%] opacity-0 translate-y-4 
                        group-hover/card:opacity-100 group-hover/card:translate-y-0 
                        transition-all duration-300 ease-in-out">
                  <button
                    className="group/btn relative hidden md:inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent"
                  >
                    {/* Hiệu ứng vòng tròn chỉ khi hover nút */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full 
                            group-hover/btn:-translate-y-1/2 
                            transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                    <span className="relative z-10 text-base font-semibold">Xem chi tiết</span>
                  </button>
                </div>

              </div>
              {/* <p className="text-base font-semibold text-[#15171B]">{product.name}</p> */}
              <div className="mt-2 md:mt-4 text-center md:text-start">
                <p className="text-xs md:text-base h-5 md:h-[30px] font-semibold text-[#15171B]">
                  {product.title}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}
