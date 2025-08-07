import { Metadata } from "next"
import Container from "@/components/container"
import SeactionContact from "@/components/seaction-contact"
import Header from "@/components/header"
import Hero from "@/components/hero"
import SeactionHome from "@/components/seaction/seaction-home"
import SeactionBusiness from "@/components/seaction/seaction-business"
import Script from "next/script"
import SeactionProduct from "@/components/seaction/seaction-product"
import SeactionDesc from "@/components/seaction/seaction-desc"

export const metadata: Metadata = {
  title: "Trang chủ | AMOR THẢO MỘC",
  description: "AMOR Spa cung cấp dịch vụ chăm sóc sắc đẹp cao cấp, không gian thư giãn và đội ngũ chuyên viên chuyên nghiệp.",
}

export default function HomePage() {

  return (
    <>
      <Script
        type="application/ld+json"
        id="breadcrumb-jsonld"
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
              }
            ]
          }),
        }}
      />
        <Hero />
        <SeactionProduct />
        <SeactionDesc />
        <SeactionHome />
        <SeactionContact />
    </>
  )
}
