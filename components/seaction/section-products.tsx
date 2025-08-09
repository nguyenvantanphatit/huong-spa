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
    <div className="min-h-screen px-4 py-8 space-y-8">
      {/* Tabs */}
      <div className="flex justify-center gap-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${currentTab === tab
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {paginatedData.map((product, index) => (
          <Link href={`/product/${product.slug}`}>
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
              <p className="text-sm font-semibold">{product.name}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
