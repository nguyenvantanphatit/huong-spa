'use client'
import { motion } from "framer-motion"
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
        {paginatedData.map((product, index) => (
          <Link href={`/product/${product.slug}`} key={index}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group space-y-2"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base font-semibold text-[#15171B]">{product.name}</p>
            </motion.div>
          </Link>
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
