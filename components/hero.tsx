import Link from "next/link"
import Image from "next/image"
import { cookies } from "next/headers"
import { motion } from "framer-motion"
import AnimateZoomInScroll from "./animations/AnimateZoomIn"
import AnimateOnScroll from "./animations/AnimateOnScroll"

export default async function Hero() {
  const cookieStore = await cookies()
  const device = cookieStore.get("X-Device")?.value

  const isMobile = device === "mobile"
  const backgroundSrc = isMobile ? "/pagehome/banner_mb.png" : "/pagehome/banner.png"

  return (
    <section className="relative h-[600px] container mx-auto mt-10">
      <AnimateZoomInScroll>
        <div className="absolute inset-0 bg-[#FFEEE2] mx-5">
          <Image
            src={backgroundSrc}
            alt="Hero background"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-fill"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLiHLnLnLnLnk5A4A4A4A8bZ"
          />
        </div>

        <div className="relative container mx-auto px-[60px] md:px-20 h-full flex flex-col justify-center">
          <div className="relative z-10 max-w-4xl mt-12 md:mt-0">
            <p className="font-montserrat text-[32px] md:text-[60px] leading-[38px] md:leading-[24px] font-bold  tracking-[1.2px] text-center md:text-start text-white mb-[18px] md:mb-8">
              Ruby Hương Spa
            </p>

            <AnimateOnScroll delay={0.2}>
              <h3 className="font-trajan text-[20px] md:text-[28px] leading-[32px] md:leading-[68px]  tracking-[6.72px] font-normal text-center md:text-start text-white uppercase mb-[58px] md:mb-7">
                An yên từ bên trong
              </h3>
            </AnimateOnScroll>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start items-center">
              <AnimateOnScroll delay={0.4}>
                <Link
                  href="/menu"
                  className="group relative inline-flex w-[220px] h-14 items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent"
                >
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 fill-current transition-colors duration-300 group-hover:fill-[#CC424E]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.80888 5.25C4.16846 2.98301 6.13185 1.25 8.5 1.25H18.5C21.1234 1.25 23.25 3.37665 23.25 6V18C23.25 20.6234 21.1234 22.75 18.5 22.75H8.5C6.13185 22.75 4.16846 21.017 3.80888 18.75H2.5C2.08579 18.75 1.75 18.4142 1.75 18C1.75 17.5858 2.08579 17.25 2.5 17.25H3.75V12.75H2.5C2.08579 12.75 1.75 12.4142 1.75 12C1.75 11.5858 2.08579 11.25 2.5 11.25H3.75V6.75H2.5C2.08579 6.75 1.75 6.41421 1.75 6C1.75 5.58579 2.08579 5.25 2.5 5.25H3.80888ZM5.25 6.75H6.5C6.91421 6.75 7.25 6.41421 7.25 6C7.25 5.58579 6.91421 5.25 6.5 5.25H5.33697C5.67555 3.81665 6.96321 2.75 8.5 2.75H18.5C20.2949 2.75 21.75 4.20507 21.75 6V18C21.75 19.7949 20.2949 21.25 18.5 21.25H8.5C6.96321 21.25 5.67555 20.1833 5.33697 18.75H6.5C6.91421 18.75 7.25 18.4142 7.25 18C7.25 17.5858 6.91421 17.25 6.5 17.25H5.25V12.75H6.5C6.91421 12.75 7.25 12.4142 7.25 12C7.25 11.5858 6.91421 11.25 6.5 11.25H5.25V6.75ZM9.75 6C9.75 5.58579 10.0858 5.25 10.5 5.25L18.5 5.25C18.9142 5.25 19.25 5.58579 19.25 6C19.25 6.41421 18.9142 6.75 18.5 6.75L10.5 6.75C10.0858 6.75 9.75 6.41421 9.75 6ZM9.75 10C9.75 9.58578 10.0858 9.25 10.5 9.25L14.5 9.25C14.9142 9.25 15.25 9.58579 15.25 10C15.25 10.4142 14.9142 10.75 14.5 10.75L10.5 10.75C10.0858 10.75 9.75 10.4142 9.75 10Z"
                    />
                  </svg>
                  <span className="relative z-10 text-base font-semibold">Xem menu</span>
                </Link>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.6}>
                <a
                  href="https://www.facebook.com/share/1FKSn2djM6/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nhắn tin qua Facebook"
                  className="group relative inline-flex w-[220px] h-14 items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent"
                >
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                  <svg
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 z-10 fill-current transition-colors duration-300"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.541504 9C0.541504 4.51269 4.17919 0.875 8.6665 0.875H10.3332C10.5711 0.875 10.8067 0.885241 11.0397 0.905329C11.3836 0.934982 11.6383 1.23781 11.6087 1.58171C11.579 1.92561 11.2762 2.18036 10.9323 2.15071C10.735 2.1337 10.5352 2.125 10.3332 2.125H8.6665C4.86955 2.125 1.7915 5.20304 1.7915 9V13.1667C1.7915 14.6624 3.00407 15.875 4.49984 15.875H10.3332C14.1301 15.875 17.2082 12.797 17.2082 9C17.2082 8.798 17.1995 8.59817 17.1825 8.40087C17.1528 8.05697 17.4076 7.75414 17.7515 7.72449C18.0954 7.69483 18.3982 7.94958 18.4278 8.29348C18.4479 8.52646 18.4582 8.76211 18.4582 9C18.4582 13.4873 14.8205 17.125 10.3332 17.125H4.49984C2.31371 17.125 0.541504 15.3528 0.541504 13.1667V9ZM15.3332 2.125C14.2976 2.125 13.4582 2.96447 13.4582 4C13.4582 5.03553 14.2976 5.875 15.3332 5.875C16.3687 5.875 17.2082 5.03553 17.2082 4C17.2082 2.96447 16.3687 2.125 15.3332 2.125ZM12.2082 4C12.2082 2.27411 13.6073 0.875 15.3332 0.875C17.0591 0.875 18.4582 2.27411 18.4582 4C18.4582 5.72589 17.0591 7.125 15.3332 7.125C13.6073 7.125 12.2082 5.72589 12.2082 4Z"
                    />
                  </svg>
                  <span className="relative z-10 text-base font-semibold">Liên hệ</span>
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </AnimateZoomInScroll>
    </section>
  )
}
