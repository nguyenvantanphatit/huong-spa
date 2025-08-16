'use client'
import { memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Product, MEDIA_BASE_URL } from '@/lib/api'

interface ProductCardProps {
  product: Product
  index: number
}

const ProductCard = memo(function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.20 }}
      viewport={{ once: true }}
      className="group space-y-2"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative group/card aspect-square overflow-hidden rounded-lg group-hover:scale-95 transition-transform duration-500">
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-[#679132] text-white text-xs font-semibold px-2 py-1 rounded-[13.33px] rounded-tr-[6.67px] z-10">
              New
            </div>
          )}

          <Image
            src={product?.image?.url ? `${MEDIA_BASE_URL}${product.image.url}` : '/service/service-01.png'}
            alt={product?.title || 'Product image'}
            fill
            className="object-cover rounded-lg group-hover:rounded-lg transition-transform duration-500 ease-in-out "
            priority={index < 4}
            loading={index < 4 ? 'eager' : 'lazy'}
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full 
                      group-hover/btn:-translate-y-1/2 
                      transition-transform duration-300 ease-in-out z-[-1] bg-white" />
              <span className="relative z-10 text-base font-semibold">Xem chi tiết</span>
            </button>
          </div>
        </div>

        <div className="mt-2 md:mt-4 text-center md:text-start">
          <p className="text-xs md:text-base h-5 md:h-[30px] font-semibold text-[#15171B]">
            {product.title}
          </p>
        </div>
      </Link>
    </motion.div>
  )
})

export default ProductCard
