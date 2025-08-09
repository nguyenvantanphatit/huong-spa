import { Metadata } from "next"
import Container from "@/components/container"
import SeactionContact from "@/components/seaction-contact"
import SectionMenu from "@/components/seaction/section-menu"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Menu | AMOR THẢO MỘC",
  description: "Khám phá bảng giá và các dịch vụ chăm sóc sắc đẹp chuyên nghiệp tại AMOR Spa – từ chăm sóc da, massage đến liệu trình cao cấp.",
}

export default function MenuPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        id="breadcrumb-jsonld-menu"
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
                "name": "Dịch Vụ",
                "item": "https://amorspa.vn/menu"
              }
            ]
          })
        }}
      />
        <Container>
          <SectionMenu />
        </Container>
        <SeactionContact />
    </>
  )
}
