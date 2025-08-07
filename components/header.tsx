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
    { href: "/khoi-nghiep", label: "SẢN PHẨM" },
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
                src={isHome ? "/new/logo-white.svg" : "/new/logo-color.svg"}
                alt="Amor Spa"
                fill
                className="object-contain"
                priority
              />
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href="https://m.me/amorthaomoc1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nhắn tin qua Facebook"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full whitespace-nowrap bg-[#824435] text-white font-semibold"
                  >
                    <img src="/icon/left.png" alt="icon" className="w-4 h-4" />
                    <span className="text-sm font-semibold">BOOKING</span>
                  </a>
                  <button aria-label="Mở menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM4 17.25C3.58579 17.25 3.25 17.5858 3.25 18C3.25 18.4142 3.58579 18.75 4 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H4Z"
                        fill={isHome ? "white" : "#2E333D"}
                      />
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
                        src={isHome ? "/logo/AmorLogo.svg" : "/logo/AmorLogoColor.svg"}
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
                    className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full whitespace-nowrap bg-[#824435] text-white font-semibold w-full"
                  >
                    <img src="/icon/left.png" alt="icon" />
                    <span>Liên hệ</span>
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
              src={isHome ? "/new/logo-white.svg" : "/new/logo-color.svg"}
              alt="Amor Spa"
              fill
              className="object-contain"
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
            <div className="flex items-center space-x-2 text-[#824435]">
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
                "inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full whitespace-nowrap bg-[#824435] text-white font-semibold border-2 border-transparent transition-all duration-500 ease-in-out transform hover:bg-transparent hover:border-white",
                scrolled && "hover:scale-95",
              )}
            >
              <img src="/icon/left.png" alt="icon" />
              <span>Liên hệ</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
