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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for background changes
      setScrolled(currentScrollY > 25)

      // Determine scroll direction and visibility with smoother thresholds
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or near top - show header
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 150 && Math.abs(currentScrollY - lastScrollY) > 1) {
        // Scrolling down, past threshold, and with sufficient scroll distance - hide header
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const menuItems = [
    { href: "/", label: "TRANG CHỦ" },
    { href: "/ve-chung-toi", label: "VỀ RUBY HƯƠNG" },
    { href: "/menu", label: "MENU" },
    { href: "/product", label: "SẢN PHẨM" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  if (!mounted) {
    return (
      <header className="sticky top-0 left-0 right-0 z-50 bg-transparent w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="relative w-24 h-8 bg-gray-200 animate-pulse rounded" />
            <div className="w-20 h-8 bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
      </header>
    )
  }

  if (isMobile) {
    return (
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out w-full",
          // Transform based on visibility
          isVisible ? "translate-y-0" : "-translate-y-full",
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
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://www.facebook.com/share/1FKSn2djM6/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nhắn tin qua Facebook"
                    className="inline-flex items-center justify-center gap-2 py-[6px] px-6 rounded-full whitespace-nowrap bg-[#CC424E] text-white font-semibold"
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
                    <span className="relative z-10 text-sm">Liên hệ</span>
                  </a>
                  <button aria-label="Mở menu">
                    <svg className="w-6 h-6 text-[#28303F]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
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
                            "block text-sm font-normal text-center transition-colors",
                            isHome
                              ? isActive
                                ? "text-white font-semibold"
                                : "text-white"
                              : isActive
                                ? "text-[#15171B] text-base font-semibold"
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
                    className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full whitespace-nowrap border-2 border-[#CC424E] font-semibold w-full"
                  >
                    <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.68115 6.20661C4.68115 3.92543 6.53041 2.07617 8.81159 2.07617H17.6232C19.9044 2.07617 21.7536 3.92543 21.7536 6.20661V21.6269C21.7536 23.9081 19.9044 25.7573 17.6232 25.7573H8.81159C6.53041 25.7573 4.68115 23.9081 4.68115 21.6269V6.20661ZM8.81159 3.72835C7.44288 3.72835 6.33333 4.8379 6.33333 6.20661V21.6269C6.33333 22.9956 7.44288 24.1052 8.81159 24.1052H17.6232C18.9919 24.1052 20.1014 22.9956 20.1014 21.6269V6.20661C20.1014 4.8379 18.9919 3.72835 17.6232 3.72835H8.81159Z" fill="#CC424E" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.2896 21.6269C11.2896 21.1706 11.6594 20.8008 12.1156 20.8008H14.3185C14.7748 20.8008 15.1446 21.1706 15.1446 21.6269C15.1446 22.0831 14.7748 22.453 14.3185 22.453H12.1156C11.6594 22.453 11.2896 22.0831 11.2896 21.6269Z" fill="#CC424E" />
                    </svg>
                    <span className="text-lg font-semibold text-[#CC424E]">090 232 8566</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1FKSn2djM6/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nhắn tin qua Facebook"
                    className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full whitespace-nowrap bg-[#CC424E] text-white font-semibold w-full"
                  >
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.75 12C1.75 6.61522 6.11522 2.25 11.5 2.25H13.5C18.8848 2.25 23.25 6.61522 23.25 12C23.25 17.3848 18.8848 21.75 13.5 21.75H6.5C3.87665 21.75 1.75 19.6234 1.75 17V12ZM11.5 3.75C6.94365 3.75 3.25 7.44365 3.25 12V17C3.25 18.7949 4.70507 20.25 6.5 20.25H13.5C18.0564 20.25 21.75 16.5563 21.75 12C21.75 7.44365 18.0564 3.75 13.5 3.75H11.5ZM7.75 10C7.75 9.58579 8.08579 9.25 8.5 9.25H16.5C16.9142 9.25 17.25 9.58579 17.25 10C17.25 10.4142 16.9142 10.75 16.5 10.75H8.5C8.08579 10.75 7.75 10.4142 7.75 10ZM7.75 14C7.75 13.5858 8.08579 13.25 8.5 13.25H12.5C12.9142 13.25 13.25 13.5858 13.25 14C13.25 14.4142 12.9142 14.75 12.5 14.75H8.5C8.08579 14.75 7.75 14.4142 7.75 14Z" fill="white" />
                    </svg>

                    <span className="relative z-10 text-base">Liên hệ ngay</span>
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
        "sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out w-full",
        // Transform based on visibility
        isVisible ? "translate-y-0" : "-translate-y-full",
        // Background based on scroll
        scrolled
          ? isHome
            ? "bg-[#00000033] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]"
            : "bg-[#FFFFFF33] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          {/* <Link href="/" className="relative w-32 h-10">
            <Image
              src={isHome ? "/logo/logoHuongSpa.png" : "/logo/logoHuongSpa.png"}
              alt="Amor Spa"
              fill
              className="object-contain h-full w-full"
              priority
            />
          </Link> */}

          <div className="flex items-center space-x-[60px]">
            <span className="text-[20px] font-bold text-[#CC424E]">LOGO</span>
          </div>

          {/* <div className="flex text-sm font-normal items-center space-x-[60px]">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isHome ? "text-[#2E333D]" : "text-[#2E333D] hover:text-[#2E333D]",
                    isActive && (isHome ? "font-semibold" : "text-[#15171B] text-base font-semibold"),
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div> */}

          <div className="flex text-sm font-normal items-center space-x-[60px]">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative inline-flex items-center justify-center gap-2 py-2 px-4 font-normal rounded-full whitespace-nowrap overflow-hidden transition-colors",
                    "hover:text-[#CC424E] hover:bg-transparent hover:border-transparent",
                    isHome ? "text-[#2E333D]" : "text-[#2E333D] hover:text-[#CC424E]",
                    isActive && (isHome ? "font-semibold" : "text-[#15171B] text-base font-semibold"),
                  )}
                >
                  {item.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                </Link>
              )
            })}
          </div>



          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 text-[#CC424E] ">
              <svg className="w-6 h-6" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.68115 6.20661C4.68115 3.92543 6.53041 2.07617 8.81159 2.07617H17.6232C19.9044 2.07617 21.7536 3.92543 21.7536 6.20661V21.6269C21.7536 23.9081 19.9044 25.7573 17.6232 25.7573H8.81159C6.53041 25.7573 4.68115 23.9081 4.68115 21.6269V6.20661ZM8.81159 3.72835C7.44288 3.72835 6.33333 4.8379 6.33333 6.20661V21.6269C6.33333 22.9956 7.44288 24.1052 8.81159 24.1052H17.6232C18.9919 24.1052 20.1014 22.9956 20.1014 21.6269V6.20661C20.1014 4.8379 18.9919 3.72835 17.6232 3.72835H8.81159Z" fill="#2E333D" />
                <path fillRule="evenodd" clipRule="evenodd" d="M11.2896 21.6269C11.2896 21.1706 11.6594 20.8008 12.1156 20.8008H14.3185C14.7748 20.8008 15.1446 21.1706 15.1446 21.6269C15.1446 22.0831 14.7748 22.453 14.3185 22.453H12.1156C11.6594 22.453 11.2896 22.0831 11.2896 21.6269Z" fill="#2E333D" />
              </svg>
              <a
                href="tel:0902328566"
                aria-label="Gọi điện thoại"
                className={cn(
                  "text-base font-semibold",
                  isHome ? "text-[#2E333D]" : "text-[#2E333D]",
                  "hover:underline hover:underline-offset-2",
                )}
              >
                090 232 8566
              </a>
            </div>
            <a
              href="https://www.facebook.com/share/1FKSn2djM6/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nhắn tin qua Facebook"
              className={cn("group relative inline-flex w-[220px] items-center justify-center gap-2 py-3 px-14 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent",
                scrolled && "hover:scale-95",
              )}
            >
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white" />
              <svg
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative w-6 h-6 z-10 fill-current transition-colors duration-300"
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