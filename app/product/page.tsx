import { Metadata } from "next"
import Container from "@/components/container"
import SeactionContact from "@/components/seaction-contact"
import Script from "next/script"
import ProductTabsSection from "@/components/seaction/section-products"

export const metadata: Metadata = {
  title: "Khởi Nghiệp | AMOR THẢO MỘC",
  description: "Cơ hội hợp tác và khởi nghiệp cùng AMOR Spa – mô hình spa chuyên nghiệp, thương hiệu uy tín và hỗ trợ toàn diện.",
}

export default function BusinessPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        id="breadcrumb-jsonld-khoi-nghiep"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Trang chủ",
                "item": "https://amorspa.vn"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Khởi Nghiệp",
                "item": "https://amorspa.vn/khoi-nghiep"
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
