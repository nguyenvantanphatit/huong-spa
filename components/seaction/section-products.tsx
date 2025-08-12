'use client'
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import AnimateOnScroll from "../animations/AnimateOnScroll"
import { useState } from "react"
import { Pagination } from "../ui/Pagination"
import Link from "next/link"




interface ProductSection {
  name: string;
  title: string;
  image: string;
  slug: string;

}

const productData: ProductSection[] = [
  {
    name: "Kem dưỡng đêm kiwi",
    title: "làm đẹp",
    image: "/products/item-1.png",
    slug: "kem-duong-dem-kiwi"

  },
  {
    name: "Thạch anh treo phòng",
    title: "thực dưỡng",
    image: "/products/item-2.png",
    slug: "thach-anh-treo-phong"

  },
  {
    name: "Sữa rửa mặt Collagen",
    title: "làm đẹp",
    image: "/products/item-3.png",
    slug: "sua-rua-mat-collagen"
  },
  {
    name: "Mặt nạ chanh tươi",
    title: "làm đẹp",
    image: "/products/item-4.png",
    slug: "mat-nam-chanh-tu"
  },
  {
    name: "Kem dưỡng đêm kiwi",
    title: "làm đẹp",
    image: "/products/item-1.png",
    slug: "kem-duong-dem-kiwi"

  },
  {
    name: "Thạch anh treo phòng",
    title: "thực dưỡng",
    image: "/products/item-2.png",
    slug: "thach-anh-treo-phong"

  },
  {
    name: "Sữa rửa mặt Collagen",
    title: "làm đẹp",
    image: "/products/item-3.png",
    slug: "sua-rua-mat-collagen"
  },
  {
    name: "Mặt nạ chanh tươi",
    title: "làm đẹp",
    image: "/products/item-4.png",
    slug: "mat-nam-chanh-tu"
  },
  {
    name: "Kem dưỡng đêm kiwi",
    title: "làm đẹp",
    image: "/products/item-1.png",
    slug: "kem-duong-dem-kiwi"

  },
  {
    name: "Thạch anh treo phòng",
    title: "thực dưỡng",
    image: "/products/item-2.png",
    slug: "thach-anh-treo-phong"

  },
  {
    name: "Sữa rửa mặt Collagen",
    title: "làm đẹp",
    image: "/products/item-3.png",
    slug: "sua-rua-mat-collagen"
  },
  {
    name: "Mặt nạ chanh tươi",
    title: "làm đẹp",
    image: "/products/item-4.png",
    slug: "mat-nam-chanh-tu"
  },
  {
    name: "Kem dưỡng đêm kiwi",
    title: "làm đẹp",
    image: "/products/item-1.png",
    slug: "kem-duong-dem-kiwi"

  },
  {
    name: "Thạch anh treo phòng",
    title: "thực dưỡng",
    image: "/products/item-2.png",
    slug: "thach-anh-treo-phong"

  },
  {
    name: "Sữa rửa mặt Collagen",
    title: "làm đẹp",
    image: "/products/item-3.png",
    slug: "sua-rua-mat-collagen"
  },
  {
    name: "Mặt nạ chanh tươi",
    title: "làm đẹp",
    image: "/products/item-4.png",
    slug: "mat-nam-chanh-tu"
  },
]

const tabs = ["Tất cả", "Thực dưỡng", "Làm đẹp"]

export default function ProductTabsSection() {
  const [currentTab, setCurrentTab] = useState("Tất cả")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const filteredData =
    currentTab === "Tất cả"
      ? productData
      : productData.filter(item => item.title.toLowerCase() === currentTab.toLowerCase())

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <>
      <section className="mt-16 mb-9">
        <h1 className="text-xl md:text-[40px] font-normal text-[#CC424E] text-center">SẢN PHẨM RUBY HƯƠNG</h1>
      </section>
      <div className="hidden md:flex justify-center gap-7 mb-10">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-3 rounded-full text-base font-semibold transition ${currentTab === tab
              ? "bg-black text-white"
              : "text-[#2E333D] hover:bg-black hover:text-white"
              }`}
            onClick={() => {
              setCurrentTab(tab)
              setCurrentPage(1)
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        <AnimatePresence>
          {paginatedData.map((product, index) => (
            <motion.div
              key={`${product.slug}-${index}`}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className="group space-y-2"
            >
              <Link href={`/product/${product.slug}`} key={index}>
                <div className="relative group/card aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg group-hover:rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    priority
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-[10%] opacity-0 translate-y-4 
                        group-hover/card:opacity-100 group-hover/card:translate-y-0 
                        transition-all duration-300 ease-in-out">
                    <button
                      className="group/btn relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent"
                    >
                      {/* Hiệu ứng vòng tròn chỉ khi hover nút */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full 
                            group-hover/btn:-translate-y-1/2 
                            transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                      <span className="relative z-10 text-base font-semibold">Xem chi tiết</span>
                    </button>
                  </div>

                </div>
                <p className="text-base font-semibold text-[#15171B]">{product.name}</p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  )
}
