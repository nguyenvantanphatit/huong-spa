import { Metadata } from "next"
import Image from "next/image"
import SeactionContact from "@/components/seaction-contact"
import Container from "@/components/container"
import AnimatedAboutSection from "@/components/seaction/section-about";
import ValueList from "@/components/seaction/value-list";
import Script from "next/script";
import { cookies } from "next/headers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Về Chúng Tôi | AMOR THẢO MỘC",
  description: "Tìm hiểu về AMOR Spa – nơi hội tụ đam mê làm đẹp, chăm sóc khách hàng tận tâm và không gian thư giãn đẳng cấp.",
}

export default async function AboutPage() {
  const cookieStore = await cookies()
  const device = cookieStore.get("X-Device")?.value

  const isMobile = device === "mobile"
  const backgroundSrc = isMobile ? "/logo/logoHuongSpa.png" : "/logo/logoHuongSpa.png"

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
      <div className="flex min-h-[calc(100vh-4rem)] flex-col md:gap-8">
        <Container>
          <section className="mt-20 max-h-[606px]">
            {/* <Image
              src={backgroundSrc}
              alt="Logo About"
              width={1022}
              height={606}
              className="w-full h-[200px] object-contain"
            /> */}

            <div className="flex justify-center mx-auto">
              <p className="text-[62px] md:text-[192px] leading-[82px] md:leading-[144px] font-bold text-[#CC424E]">LOGO</p>
            </div>
          </section>

          <AnimatedAboutSection>
            <div className="flex flex-col justify-center gap-7 md:gap-10 text-center md:my-10">
              <h6 className="text-xl text-[20px] md:text-[40px] leading-8 md:leading-[60px] font-normal text-[#CC424E] md:mt-10 md:pt-5 mt-4 uppercase">
                không chỉ là spa
                <span className="block">Mà là một hành trình</span>
              </h6>
              <div className="flex flex-col md:flex-row gap-5 md:gap-[72px] text-[#2E333D] font-medium text-sm md:text-2xl max-w-[1284px] mx-auto  text-start md:text-center">
                <div className="space-y-6 text-center md:text-justify">
                  <p>Tôi là Hương – người phụ nữ từng lạc lối trong chính cuộc đời mình. Tôi từng thức trắng để tự hỏi liệu mình nên tiếp tục hay dừng lại. Từng nhìn vào gương, không nhận ra mình là ai – một người kiệt sức nhưng vẫn cố tỏ ra ổn. Nhưng rồi, tôi bắt đầu học cách sống chậm, chăm sóc từng hơi thở, từng tế bào trong cơ thể.</p>
                </div>
                <div className="space-y-6 text-center md:text-justify">
                  <p>Ruby Hương Spa không phải là nơi để bạn "đẹp hơn" theo tiêu chuẩn ai đó. Nó là nơi để bạn được thở, được khóc nếu muốn, và được trở về là chính bạn. Là nơi tôi gieo từng ly trà, từng động tác chậm rãi – để nhắc nhở bạn rằng, bạn đủ đầy và xứng đáng được yêu thương.</p>
                </div>
              </div>

              <div className=" flex flex-wrap md:flex-cols  justify-center gap-3 mt-3 md:mt-0">
                <Link
                  href="/menu"
                  className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-12 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden transition-all duration-300
            before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
            before:bg-[#CC424E] before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
            hover:before:w-full hover:border-transparent hover:text-white"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 fill-current transition-colors duration-300 group-hover:fill-white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.80888 5.25C4.16846 2.98301 6.13185 1.25 8.5 1.25H18.5C21.1234 1.25 23.25 3.37665 23.25 6V18C23.25 20.6234 21.1234 22.75 18.5 22.75H8.5C6.13185 22.75 4.16846 21.017 3.80888 18.75H2.5C2.08579 18.75 1.75 18.4142 1.75 18C1.75 17.5858 2.08579 17.25 2.5 17.25H3.75V12.75H2.5C2.08579 12.75 1.75 12.4142 1.75 12C1.75 11.5858 2.08579 11.25 2.5 11.25H3.75V6.75H2.5C2.08579 6.75 1.75 6.41421 1.75 6C1.75 5.58579 2.08579 5.25 2.5 5.25H3.80888ZM5.25 6.75H6.5C6.91421 6.75 7.25 6.41421 7.25 6C7.25 5.58579 6.91421 5.25 6.5 5.25H5.33697C5.67555 3.81665 6.96321 2.75 8.5 2.75H18.5C20.2949 2.75 21.75 4.20507 21.75 6V18C21.75 19.7949 20.2949 21.25 18.5 21.25H8.5C6.96321 21.25 5.67555 20.1833 5.33697 18.75H6.5C6.91421 18.75 7.25 18.4142 7.25 18C7.25 17.5858 6.91421 17.25 6.5 17.25H5.25V12.75H6.5C6.91421 12.75 7.25 12.4142 7.25 12C7.25 11.5858 6.91421 11.25 6.5 11.25H5.25V6.75ZM9.75 6C9.75 5.58579 10.0858 5.25 10.5 5.25L18.5 5.25C18.9142 5.25 19.25 5.58579 19.25 6C19.25 6.41421 18.9142 6.75 18.5 6.75L10.5 6.75C10.0858 6.75 9.75 6.41421 9.75 6ZM9.75 10C9.75 9.58578 10.0858 9.25 10.5 9.25L14.5 9.25C14.9142 9.25 15.25 9.58579 15.25 10C15.25 10.4142 14.9142 10.75 14.5 10.75L10.5 10.75C10.0858 10.75 9.75 10.4142 9.75 10Z"
                    />
                  </svg>
                  <span className="relative z-10 text-base">View menu</span>
                </Link>
                <a
                  href="https://m.me/amorthaomoc1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nhắn tin qua Facebook"
                  className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 bg-[#CC424E] border-[#CC424E] text-white overflow-hidden transition-all duration-300
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full
                                before:bg-[#CC424E] before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
                                hover:before:w-0 hover:bg-transparent hover:text-[#CC424E]"
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 fill-current transition-colors duration-300 group-hover:fill-[#CC424E]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.541504 9C0.541504 4.51269 4.17919 0.875 8.6665 0.875H10.3332C10.5711 0.875 10.8067 0.885241 11.0397 0.905329C11.3836 0.934982 11.6383 1.23781 11.6087 1.58171C11.579 1.92561 11.2762 2.18036 10.9323 2.15071C10.735 2.1337 10.5352 2.125 10.3332 2.125H8.6665C4.86955 2.125 1.7915 5.20304 1.7915 9V13.1667C1.7915 14.6624 3.00407 15.875 4.49984 15.875H10.3332C14.1301 15.875 17.2082 12.797 17.2082 9C17.2082 8.798 17.1995 8.59817 17.1825 8.40087C17.1528 8.05697 17.4076 7.75414 17.7515 7.72449C18.0954 7.69483 18.3982 7.94958 18.4278 8.29348C18.4479 8.52646 18.4582 8.76211 18.4582 9C18.4582 13.4873 14.8205 17.125 10.3332 17.125H4.49984C2.31371 17.125 0.541504 15.3528 0.541504 13.1667V9ZM15.3332 2.125C14.2976 2.125 13.4582 2.96447 13.4582 4C13.4582 5.03553 14.2976 5.875 15.3332 5.875C16.3687 5.875 17.2082 5.03553 17.2082 4C17.2082 2.96447 16.3687 2.125 15.3332 2.125ZM12.2082 4C12.2082 2.27411 13.6073 0.875 15.3332 0.875C17.0591 0.875 18.4582 2.27411 18.4582 4C18.4582 5.72589 17.0591 7.125 15.3332 7.125C13.6073 7.125 12.2082 5.72589 12.2082 4Z"
                    />
                  </svg>
                  <span className="relative z-10 text-base">Liên hệ</span>
                </a>
              </div>
            </div>
          </AnimatedAboutSection>
        </Container>

        <Container>
          <AnimatedAboutSection>
            <section className="mt-36 hidden md:block pb-8 mb-4">
              <div className="relative bg-[#CC424E] text-white rounded-xl max-w-[1024px] mx-auto">
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
                      “Chúng ta không cần trở nên hoàn hảo, chỉ cần tử tế với chính mình – là đủ để bắt đầu một tháng rực rỡ.””
                    </p>
                    <img src="/about/quote.png" alt="icon" className="absolute -top-4 -right-16" />
                    <p className="font-extrabold text-xl mt-5 md:mt-7">Ruby Hương</p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedAboutSection>
        </Container>
        <section className="block md:hidden md:pb-28 pb-[80px] mt-9 md:mt-0 ">
          <div className="relative bg-[#CC424E] text-white px-10">
            <div className="grid md:grid-cols-4 items-center relative z-20 py-16">
              <div></div>
              <div className="max-w-[400px] mx-auto text-start col-span-3 relative">
                <p className="text-sm md:text-lg italic">
                  “Chúng ta không cần trở nên hoàn hảo, chỉ cần tử tế với chính mình – là đủ để bắt đầu một tháng rực rỡ.”
                </p>
                <img src="/about/quote.png" alt="icon" className="absolute -top-5 right-0" />
                <p className="font-extrabold text-xl mt-5 md:mt-7">Ruby Hương</p>
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

