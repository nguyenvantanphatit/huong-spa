'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fetchLatestProducts, Product, MEDIA_BASE_URL } from '@/lib/api'
import AnimateOnScroll from '../animations/AnimateOnScroll'

export default function SeactionProduct() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadLatestProducts() {
      try {
        setLoading(true)
        const latestProducts = await fetchLatestProducts()
        setProducts(latestProducts)
        console.log('Latest products from API:', latestProducts)
      } catch (err) {
        setError("Không thể tải sản phẩm mới nhất")
        console.error('Error:', err)
      } finally {
        setLoading(false)
      }
    }
    loadLatestProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#CC424E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Đang tải sản phẩm mới nhất...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-500">Không có sản phẩm mới nhất</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className=" py-5 px-6 md:py-10 mt-10 md:mt-5 mb-[10px] md:mb-2 container mx-auto">
        <h2 className="text-3xl md:text-[40px] font-normal text-center text-[#CC424E] mb-5 md:mb-10">SẢN PHẨM RUBY HƯƠNG</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px] md:gap-6">
          {products.map((product, index) => (
            <Link href={`/product/${product.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.20 }}
                viewport={{ once: true }}
              >
                <div key={index} className="relative group/card">
                  <div className="transform transition-transform duration-300 ease-in-out group-hover/card:scale-95">
                    {product.isNew && index === 0 && (
                      <div className="absolute top-2 left-2 bg-[#679132] text-white text-xs font-semibold px-2 py-1 rounded-[13.33px] rounded-tr-[6.67px] z-10">
                        New
                      </div>
                    )}

                    <Image
                      src={product.image?.url ? `${MEDIA_BASE_URL}${product.image.url}` : '/service/service-01.png'}
                      alt={product.title}
                      width={320}
                      height={320}
                      className="w-full h-[156px] md:h-[320px] object-cover rounded-[20px]"
                    />

                    {/* Nút chỉ hiện khi hover card */}
                    <div className="absolute inset-0 flex items-end justify-center pb-[30%] opacity-0 translate-y-4 
                  group-hover/card:opacity-100 group-hover/card:translate-y-0 
                  transition-all duration-300 ease-in-out">
                      <button
                        className="hidden md:inline-flex group/btn relative w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent"
                      >
                        {/* Hiệu ứng vòng tròn chỉ khi hover nút */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full 
                      group-hover/btn:-translate-y-1/2 
                      transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                        <span className="relative z-10 text-base font-semibold">Xem chi tiết</span>
                      </button>
                    </div>

                    <div className="mt-2 md:mt-4 text-center md:text-start">
                      <p className="text-xs md:text-lg h-5 md:h-[30px] font-semibold text-[#15171B]">
                        {product.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <AnimateOnScroll delay={1}>
          <div className="flex justify-center mt-7 md:mt-[34px]">
            <Link
              href="/product"
              className="group relative inline-flex w-[220px] h-14 items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden hover:text-white"
            >
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-[#CC424E]" />
              <span className="relative z-10 text-[14px] md:text-base">Xem tất cả</span>
              <svg className="relative w-5 h-5 md:h-6 md:w-6 z-10 transition-colors duration-300]" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.0303 11.4697C19.3232 11.7626 19.3232 12.2374 19.0303 12.5303L15.0303 16.5303C14.7374 16.8232 14.2626 16.8232 13.9697 16.5303C13.6768 16.2374 13.6768 15.7626 13.9697 15.4697L16.6893 12.75L6.5 12.75C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25L16.6893 11.25L13.9697 8.53033C13.6768 8.23744 13.6768 7.76256 13.9697 7.46967C14.2626 7.17678 14.7374 7.17678 15.0303 7.46967L19.0303 11.4697Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

    </>
  )
}
