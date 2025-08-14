import { Metadata } from "next"
import Container from "@/components/container"
import SeactionContact from "@/components/seaction-contact"
import SectionBusiness from "@/components/seaction/section-business"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Sản Phẩm | AMOR THẢO MỘC",
  description: "Cơ hội hợp tác và khởi nghiệp cùng Hương Xinh – mô hình spa chuyên nghiệp, thương hiệu uy tín và hỗ trợ toàn diện.",
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

      <div className="flex min-h-[calc(100vh-4rem)] flex-col">
        <section className="mt-36 pb-[45px]">
          <h1 className="text-xl md:text-[40px] font-medium text-[#824435] text-center">BẮT ĐẦU TỪ ĐAM MÊ,
            <br />
            <span className="block md:mt-6">KINH DOANH TỪ SỰ TỰ TIN</span>
          </h1>
        </section>
        <Container>
          <SectionBusiness />
        </Container>
        <SeactionContact />
      </div >
    </>
  )
}
