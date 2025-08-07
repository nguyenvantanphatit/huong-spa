import { Metadata } from "next"
import Image from "next/image"
import SeactionContact from "@/components/seaction-contact"
import Container from "@/components/container"
import AnimatedAboutSection from "@/components/seaction/section-about";
import ValueList from "@/components/seaction/value-list";
import Script from "next/script";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Về Chúng Tôi | AMOR THẢO MỘC",
  description: "Tìm hiểu về AMOR Spa – nơi hội tụ đam mê làm đẹp, chăm sóc khách hàng tận tâm và không gian thư giãn đẳng cấp.",
}

export default async function AboutPage() {
  const cookieStore = await cookies()
  const device = cookieStore.get("X-Device")?.value

  const isMobile = device === "mobile"
  const backgroundSrc = isMobile ? "/about/about.png" : "/banner/Amor-spa-about-new.webp"

  return (
    <>
      <Script
        type="application/ld+json"
        id="breadcrumb-jsonld-ve-chung-toi"
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
                "name": "Về Chúng Tôi",
                "item": "https://amorspa.vn/ve-chung-toi"
              }
            ]
          })
        }}
      />
      <div className="flex min-h-[calc(100vh-4rem)] flex-col">
        <Container>
            <section className="mt-20 max-h-[606px]">
              <Image
                src={backgroundSrc}
                alt="Ty Anh Nguyen - Founder"
                width={1022}
                height={606}
                className="w-full h-auto object-cover"
              />
            </section>

          <AnimatedAboutSection>
            <div className="text-center">
              <h6 className="text-xl md:text-[38px] font-medium text-[#824435] mb-8 md:mt-16 pt-8 mt-4 leading-7 uppercase">
                Mến chào quý khách,
                <br />
                <span className="block md:mt-6">tôi là Ty Anh Nguyễn</span>
              </h6>
              <div className="flex flex-col md:flex-row md:gap-[72px] text-[#2E333D] font-semibold text-sm md:text-xl max-w-[1284px] mx-auto text-start md:text-center">
                <div className="space-y-6 text-justify">
                  <p>Là nhà sáng lập Amor Thảo Mộc từ 2019, với kinh nghiệm hơn 15 năm gắn bó với lĩnh vực sức khỏe và sắc đẹp, tôi đã không ngừng học hỏi, nghiên cứu và vinh dự trở thành người đồng hành đáng tin cậy của hàng trăm phụ nữ Việt trên hành trình tìm về vẻ đẹp tự nhiên, sự cân bằng từ sâu bên trong.</p>
                  <p>Amor Spa không chỉ là một tâm huyết mà còn hiện thực hóa tầm nhìn của tôi về một nơi mà vẻ đẹp được kiến tạo an toàn và bền vững. Chúng tôi đặt trọn tình yêu, niềm đam mê và tâm huyết vào từng liệu trình <span className="inline md:hidden">từng dịch vụ, với mong muốn mang đến vẻ đẹp từ gốc cho quý khách hàng.</span></p>
                </div>
                <div className="space-y-6 text-justify">
                  <p className="hidden md:block">từng dịch vụ, với mong muốn mang đến vẻ đẹp từ gốc cho quý khách hàng.</p>
                  <p>Tại Amor Spa, chữ tín là kim chỉ nam cho mọi hoạt động, từ sự tận tâm trong phục vụ đến sự chuyển mình linh hoạt trong việc liên tục đổi mới, kết hợp hài hòa giữa tinh hoa truyền thống và những phương pháp hiện đại nhất. Chúng tôi cam kết sẽ là nơi bạn tìm thấy sự bình yên, tái tạo năng lượng và kiến tạo nên phiên bản khỏe đẹp, rạng ngời nhất của chính mình.</p>
                </div>
              </div>
              <a
                href="https://m.me/amorthaomoc1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nhắn tin qua Facebook"
                className="mt-10 inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap bg-[#824435] text-white border-2 border-transparent transition-all duration-500 ease-in-out transform hover:text-[#824435] hover:bg-transparent hover:border-[#824435] hover:scale-95"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.25 12C1.25 6.61522 5.61522 2.25 11 2.25H13C18.3848 2.25 22.75 6.61522 22.75 12C22.75 17.3848 18.3848 21.75 13 21.75H6C3.37665 21.75 1.25 19.6234 1.25 17V12ZM11 3.75C6.44365 3.75 2.75 7.44365 2.75 12V17C2.75 18.7949 4.20507 20.25 6 20.25H13C17.5564 20.25 21.25 16.5563 21.25 12C21.25 7.44365 17.5564 3.75 13 3.75H11ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H12C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14Z"
                    fill="currentColor"
                  />
                </svg>
                <span>BOOKING</span>
              </a>

            </div>
          </AnimatedAboutSection>
        </Container>
        <section className="mt-12">
          <Image
            src="/about/seaction-about.webp"
            alt="seaction about"
            width={1440}
            height={606}
            className="object-cover mx-auto"
          />
        </section>
        <AnimatedAboutSection>
          <section className="mt-24 md:mt-36 mb-10">
            <div className="container mx-auto px-4">
              <ValueList />
            </div>
          </section>
        </AnimatedAboutSection>
        <Container>
          <AnimatedAboutSection>
            <section className="mt-36 hidden md:block pb-12">
              <div className="relative bg-[#824435] text-white rounded-xl max-w-[1024px] mx-auto">
                <div className="absolute bottom-0 left-[200px] transform -translate-x-1/4 z-10">
                  <Image
                    src="/about/ty-anh-nguyen-pc.svg"
                    alt="Ty Anh Nguyen"
                    width={230}
                    height={442}
                    className="object-cover"
                  />
                </div>
                <div className="grid md:grid-cols-4 items-center relative z-20 py-16">
                  <div></div>
                  <div className="max-w-[400px] mx-auto text-start col-span-3 relative">
                    <p className="text-sm md:text-lg italic">
                      “Tôi luôn tin rằng khi phụ nữ biết yêu thương và chăm sóc bản thân,
                      họ không chỉ làm đẹp cho chính mình mà còn truyền cảm hứng và hạnh
                      phúc đến mọi người xung quanh. Vẻ đẹp đích thực không chỉ là bề
                      ngoài, mà là ánh sáng từ bên trong.”
                    </p>
                    <img src="/about/quote.png" alt="icon" className="absolute -top-4 -right-16" />
                    <p className="font-extrabold text-xl mt-5 md:mt-7">- Ty Anh Nguyễn</p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedAboutSection>
        </Container>
        <section className="block md:hidden pb-28">
          <div className="relative bg-[#824435] text-white px-10">
            <div className="grid md:grid-cols-4 items-center relative z-20 py-16">
              <div></div>
              <div className="max-w-[400px] mx-auto text-start col-span-3 relative">
                <p className="text-sm md:text-lg italic">
                  “Tôi luôn tin rằng khi phụ nữ biết yêu thương và chăm sóc bản thân,
                  họ không chỉ làm đẹp cho chính mình mà còn truyền cảm hứng và hạnh
                  phúc đến mọi người xung quanh. Vẻ đẹp đích thực không chỉ là bề
                  ngoài, mà là ánh sáng từ bên trong.”
                </p>
                <img src="/about/quote.png" alt="icon" className="absolute -top-5 right-0" />
                <p className="font-extrabold text-xl mt-5 md:mt-7">- Ty Anh Nguyễn</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/about/ty-anh-nguyen.png"
                alt="Ty Anh Nguyen"
                width={230}
                height={442}
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <SeactionContact />
      </div>
    </>
  )
}

