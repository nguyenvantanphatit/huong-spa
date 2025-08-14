import { Metadata } from "next"
import Container from "@/components/container"
import SeactionContact from "@/components/seaction-contact"
import Script from "next/script"
import ProductTabsSection from "@/components/seaction/section-products"

export const metadata: Metadata = {
  title: "Sản Phẩm | Ruby Hương Spa",
  description:
    "Khám phá các sản phẩm chăm sóc sức khỏe và sắc đẹp của Hương Spa – mỹ phẩm organic, thảo mộc thiên nhiên, an toàn và hiệu quả.",
}

export default function BusinessPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        id="breadcrumb-jsonld-san-pham"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Trang chủ",
                "item": "https://huongspa.vn"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Sản Phẩm",
                "item": "https://huongspa.vn/khoi-nghiep"
              }
            ]
          })
        }}
      />
      <div className="container px-6 mx-auto">
        <ProductTabsSection />
      </div>
      <SeactionContact />
    </>
  )
}
