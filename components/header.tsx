"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: "TRANG CHỦ" },
    { href: "/ve-chung-toi", label: "VỀ RUBY HƯƠNG" },
    { href: "/menu", label: "MENU" },
    { href: "/product", label: "SẢN PHẨM" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  if (isMobile) {
    return (
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          // Background based on scroll
          scrolled
            ? isHome
              ? "bg-[#00000033] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]"
              : "bg-[#FFFFFF33] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="relative w-24 h-8">
              <Image
                src={isHome ? "/logo/logoHuongSpa.svg" : "/logo/logoHuongSpa.png"}
                alt="Hương Spa"
                fill
                className="object-contain"
                priority
              />
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-5">
                  <a
                    href="https://m.me/amorthaomoc1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nhắn tin qua Facebook"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full whitespace-nowrap bg-[#CC424E] text-white font-semibold"
                  >
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative z-10 fill-current transition-colors duration-300 group-hover:fill-white"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.541504 9C0.541504 4.51269 4.17919 0.875 8.6665 0.875H10.3332C10.5711 0.875 10.8067 0.885241 11.0397 0.905329C11.3836 0.934982 11.6383 1.23781 11.6087 1.58171C11.579 1.92561 11.2762 2.18036 10.9323 2.15071C10.735 2.1337 10.5352 2.125 10.3332 2.125H8.6665C4.86955 2.125 1.7915 5.20304 1.7915 9V13.1667C1.7915 14.6624 3.00407 15.875 4.49984 15.875H10.3332C14.1301 15.875 17.2082 12.797 17.2082 9C17.2082 8.798 17.1995 8.59817 17.1825 8.40087C17.1528 8.05697 17.4076 7.75414 17.7515 7.72449C18.0954 7.69483 18.3982 7.94958 18.4278 8.29348C18.4479 8.52646 18.4582 8.76211 18.4582 9C18.4582 13.4873 14.8205 17.125 10.3332 17.125H4.49984C2.31371 17.125 0.541504 15.3528 0.541504 13.1667V9ZM15.3332 2.125C14.2976 2.125 13.4582 2.96447 13.4582 4C13.4582 5.03553 14.2976 5.875 15.3332 5.875C16.3687 5.875 17.2082 5.03553 17.2082 4C17.2082 2.96447 16.3687 2.125 15.3332 2.125ZM12.2082 4C12.2082 2.27411 13.6073 0.875 15.3332 0.875C17.0591 0.875 18.4582 2.27411 18.4582 4C18.4582 5.72589 17.0591 7.125 15.3332 7.125C13.6073 7.125 12.2082 5.72589 12.2082 4Z"
                      />
                    </svg>
                    <span className="relative z-10 text-base">Liên hệ</span>
                  </a>
                  <button aria-label="Mở menu">
                    <svg className="w-6 h-6 text-[#28303F]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
                    </svg>

                  </button>
                </div>
              </SheetTrigger>

              <SheetContent
                side="top"
                className={cn(
                  "w-full h-screen flex flex-col",
                  isHome
                    ? "bg-[#00000033] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]"
                    : "bg-[#FFFFFF33] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]",
                )}
              >
                <SheetHeader className="text-left flex-shrink-0">
                  <SheetTitle className="flex items-center justify-between">
                    <Link href="/" onClick={handleLinkClick} className="relative w-32 h-10">
                      <Image
                        src={isHome ? "/logo/logoHuongSpa.png" : "/logo/logoHuongSpa.png"}
                        alt="Modia Properties"
                        fill
                        className="object-contain"
                        priority
                      />
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="p-2" aria-label="Đóng menu">
                      <X className="h-6 w-6 text-white" />
                    </button>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col justify-center items-center mt-8">
                  <nav className="space-y-7">
                    {menuItems.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "block text-lg text-center transition-colors",
                            isHome
                              ? isActive
                                ? "text-white font-semibold"
                                : "text-white"
                              : isActive
                                ? "text-[#15171B] font-semibold"
                                : "text-[#2E333D] hover:text-[#15171B]",
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </nav>
                </div>

                <SheetFooter className="flex-shrink-0 flex-col space-y-4 sm:flex-col mt-auto">
                  <a
                    href="tel:0902328566"
                    aria-label="Gọi ngay"
                    className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full whitespace-nowrap border-2 border-white font-semibold w-full"
                  >
                    <img src="/icon/mobile-color.png" alt="icon" className="w-5 h-5" />
                    <span className="text-lg font-semibold text-white">090 232 8566</span>
                  </a>
                  <a
                    href="https://m.me/amorthaomoc1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nhắn tin qua Facebook"
                    className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full whitespace-nowrap bg-[#CC424E] text-white font-semibold w-full"
                  >
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative z-10 fill-current transition-colors duration-300 group-hover:fill-white"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.541504 9C0.541504 4.51269 4.17919 0.875 8.6665 0.875H10.3332C10.5711 0.875 10.8067 0.885241 11.0397 0.905329C11.3836 0.934982 11.6383 1.23781 11.6087 1.58171C11.579 1.92561 11.2762 2.18036 10.9323 2.15071C10.735 2.1337 10.5352 2.125 10.3332 2.125H8.6665C4.86955 2.125 1.7915 5.20304 1.7915 9V13.1667C1.7915 14.6624 3.00407 15.875 4.49984 15.875H10.3332C14.1301 15.875 17.2082 12.797 17.2082 9C17.2082 8.798 17.1995 8.59817 17.1825 8.40087C17.1528 8.05697 17.4076 7.75414 17.7515 7.72449C18.0954 7.69483 18.3982 7.94958 18.4278 8.29348C18.4479 8.52646 18.4582 8.76211 18.4582 9C18.4582 13.4873 14.8205 17.125 10.3332 17.125H4.49984C2.31371 17.125 0.541504 15.3528 0.541504 13.1667V9ZM15.3332 2.125C14.2976 2.125 13.4582 2.96447 13.4582 4C13.4582 5.03553 14.2976 5.875 15.3332 5.875C16.3687 5.875 17.2082 5.03553 17.2082 4C17.2082 2.96447 16.3687 2.125 15.3332 2.125ZM12.2082 4C12.2082 2.27411 13.6073 0.875 15.3332 0.875C17.0591 0.875 18.4582 2.27411 18.4582 4C18.4582 5.72589 17.0591 7.125 15.3332 7.125C13.6073 7.125 12.2082 5.72589 12.2082 4Z"
                      />
                    </svg>
                    <span className="relative z-10 text-base">Liên hệ</span>
                  </a>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        // Background based on scroll
        scrolled
          ? isHome
            ? "bg-[#00000033] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]"
            : "bg-[#FFFFFF33] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative w-32 h-10">
            <Image
              src={isHome ? "/logo/logoHuongSpa.png" : "/logo/logoHuongSpa.png"}
              alt="Amor Spa"
              fill
              className="object-contain h-full w-full"
              priority
            />
          </Link>

          <div className="flex items-center space-x-[60px]">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isHome ? "text-[#2E333D]" : "text-[#2E333D] hover:text-[#2E333D]",
                    isActive && (isHome ? "font-semibold" : "text-[#15171B] font-semibold"),
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[#CC424E]">
              <img src="/icon/mobile.png" alt="icon" />
              <a
                href="tel:0902328566"
                aria-label="Gọi điện thoại"
                className={cn(
                  "text-lg font-semibold",
                  isHome ? "text-[#2E333D]" : "text-[#2E333D]",
                  "hover:underline hover:underline-offset-2",
                )}
              >
                090 232 8566
              </a>
            </div>
            <a
              href="https://m.me/amorthaomoc1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nhắn tin qua Facebook"
              className={cn(
                "inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full whitespace-nowrap bg-[#CC424E] text-white font-semibold border-2 border-transparent transition-all duration-500 ease-in-out transform hover:bg-transparent hover:border-white",
                scrolled && "hover:scale-95",
              )}
            >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 fill-current transition-colors duration-300 group-hover:fill-white"
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
      </div>
    </header>
  )
}
