'use client'
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import AnimateOnScroll from "../animations/AnimateOnScroll"
import { useEffect, useState } from "react"
import { Pagination } from "../ui/Pagination"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { fetchProducts, Product, ProductListResponse } from "@/lib/api"




interface ProductSection {
  name: string;
  title: string;
  image: string;
  slug: string;
  isNew: boolean

}

const productData: ProductSection[] = [
  {
    name: "Kem dưỡng đêm kiwi",
    title: "làm đẹp",
    image: "/products/item-1.png",
    slug: "kem-duong-dem-kiwi",
    isNew: true,
  },
  {
    name: "Thạch anh treo phòng",
    title: "thực dưỡng",
    image: "/products/item-2.png",
    slug: "thach-anh-treo-phong",
    isNew: false,

  },
  {
    name: "Sữa rửa mặt Collagen",
    title: "làm đẹp",
    image: "/products/item-3.png",
    slug: "sua-rua-mat-collagen",
    isNew: false,
  },
  {
    name: "Mặt nạ chanh tươi",
    title: "làm đẹp",
    image: "/products/item-4.png",
    slug: "mat-nam-chanh-tu",
    isNew: false,
  },
  {
    name: "Kem dưỡng đêm kiwi",
    title: "làm đẹp",
    image: "/products/item-1.png",
    slug: "kem-duong-dem-kiwi",
    isNew: true,
  },
  {
    name: "Thạch anh treo phòng",
    title: "thực dưỡng",
    image: "/products/item-2.png",
    slug: "thach-anh-treo-phong",
    isNew: false,

  },
  {
    name: "Sữa rửa mặt Collagen",
    title: "làm đẹp",
    image: "/products/item-3.png",
    slug: "sua-rua-mat-collagen",
    isNew: false,
  },
  {
    name: "Mặt nạ chanh tươi",
    title: "làm đẹp",
    image: "/products/item-4.png",
    slug: "mat-nam-chanh-tu",
    isNew: false,
  }, {
    name: "Kem dưỡng đêm kiwi",
    title: "làm đẹp",
    image: "/products/item-1.png",
    slug: "kem-duong-dem-kiwi",
    isNew: true,
  },
  {
    name: "Thạch anh treo phòng",
    title: "thực dưỡng",
    image: "/products/item-2.png",
    slug: "thach-anh-treo-phong",
    isNew: false,

  },
  {
    name: "Sữa rửa mặt Collagen",
    title: "làm đẹp",
    image: "/products/item-3.png",
    slug: "sua-rua-mat-collagen",
    isNew: false,
  },
  {
    name: "Mặt nạ chanh tươi",
    title: "làm đẹp",
    image: "/products/item-4.png",
    slug: "mat-nam-chanh-tu",
    isNew: false,
  }, {
    name: "Kem dưỡng đêm kiwi",
    title: "làm đẹp",
    image: "/products/item-1.png",
    slug: "kem-duong-dem-kiwi",
    isNew: true,
  },
  {
    name: "Thạch anh treo phòng",
    title: "thực dưỡng",
    image: "/products/item-2.png",
    slug: "thach-anh-treo-phong",
    isNew: false,

  },
  {
    name: "Sữa rửa mặt Collagen",
    title: "làm đẹp",
    image: "/products/item-3.png",
    slug: "sua-rua-mat-collagen",
    isNew: false,
  },
  {
    name: "Mặt nạ chanh tươi",
    title: "làm đẹp",
    image: "/products/item-4.png",
    slug: "mat-nam-chanh-tu",
    isNew: false,
  },
]

const tabs = ["Tất cả", "Thực dưỡng", "Làm đẹp"]

export default function ProductTabsSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [currentTab, setCurrentTab] = useState("Tất cả")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)
        const data: ProductListResponse = await fetchProducts()
        setProducts(data.data.data)
      } catch (err) {
        setError("Không thể tải sản phẩm")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  const filteredData =
    currentTab === "Tất cả"
      ? products
      : products.filter(
        item =>
          item.category.name.toLowerCase() === currentTab.toLowerCase()
      )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  if (loading) {
    return <p className="text-center py-10">Đang tải sản phẩm...</p>
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>
  }

  console.log(products)

  return (
    <>
      <section className="mt-16 mb-9">
        <h1 className="text-xl md:text-[40px] font-normal text-[#CC424E] text-center">SẢN PHẨM RUBY HƯƠNG</h1>
      </section>
      <div className="hidden md:flex justify-center gap-[15px] md:gap-6 mb-10">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setCurrentTab(tab)
              setCurrentPage(1)
            }}
            className={cn(
              "group relative inline-flex items-center justify-center px-4 py-3 rounded-full text-base whitespace-nowrap overflow-hidden transition-colors",
              currentTab === tab
                ? "text-[#2E333D] hover:text-white font-bold"
                : "text-[#2E333D] hover:text-white hover:font-bold",
            )}
          >
            {tab}
            {/* Hiệu ứng nền tròn phóng lên */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-[#2E333D]" />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-x-6 gap-y-6 md:gap-y-10">
        {paginatedData.map((product, index) => (
          <motion.div
            key={`${product.slug}-${index}`}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.20, ease: "easeOut" }}
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
                  src={product?.image?.url}
                  alt={product?.title}
                  fill
                  className="object-cover rounded-lg group-hover:rounded-lg  transition-transform duration-500 ease-in-out"
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
        onPageChange={setCurrentPage}
      />
    </>
  )
}
