import Link from 'next/link'
import Container from './container'
export default async function FooterSeaction() {

  return (
    <>
      <footer className="border-t-[1px]"
        style={{
          borderImageSource:
            'linear-gradient(162.67deg, rgba(167,54,255,0.25) 11.89%, rgba(117,46,206,0.25) 91.6%)',
          borderImageSlice: '1',
        }}
      >
        <Container>
          {/* Logo center
          <div className="flex justify-center">
            <img
              src="/new/logo-footer.svg"
              className="object-contain w-[180px] md:w-[260px] mt-8"
              alt="Amor Logo"
            />
          </div> */}
          <div className="flex justify-center mt-5 md:mt-8">
            <h1 className="text-base text-[24px] md:text-[60px] font-bold">RUBY HƯƠNG SPA</h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-5 md:gap-[60px] pt-10 md:pt-[76px]">
            <Link
              href="/ve-chung-toi"
              className="tracking-widest text-xs md:text-base font-medium group relative inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full whitespace-nowrap overflow-hidden transition-colors hover:text-[#CC424E]"
            >
              VỀ RUBY HƯƠNG
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white"
              />
            </Link>

            <Link
              href="/menu"
              className="tracking-widest text-xs md:text-base font-medium group relative inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full whitespace-nowrap overflow-hidden transition-colors hover:text-[#CC424E]"
            >
              MENU
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white"
              />
            </Link>

            <Link
              href="/product"
              className="tracking-widest text-xs md:text-base font-medium group relative inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full whitespace-nowrap overflow-hidden transition-colors hover:text-[#CC424E]">
              SẢN PHẨM
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white"
              />
            </Link>
          </nav>
          {/* Info line */}
          <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:gap-16 mt-8 md:mt-[52px]">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6 md:w-8 md:h-8" src="/footer/address.svg" alt="Địa chỉ" />
              <p className="text-[#2E333D] font-semibold text-xs md:text-base leading-5 md:leading-6">89/57 đường 59, p14, TP.HCM</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6 md:w-8 md:h-8" src="/footer/time.svg" alt="Thời gian" />
              <p className="text-[#2E333D] font-semibold text-xs md:text-base leading-5 md:leading-6">09:00 - 20:00 mỗi ngày</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6 md:w-8 md:h-8" src="/footer/phone.svg" alt="Điện thoại" />
              <p className="text-[#2E333D] font-semibold text-xs md:text-base leading-5 md:leading-6">0931 858 808</p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 md:mt-[62px] gap-4">
            <p className="text-[10px] leading-4 md:leading-5 md:text-[12px]">
              ©2025 RUBY Hương, all rights reserved, powered by{" "}
              <a href="https://www.mera-tech.vn" target="_blank" className="hover:underline">MERA TECH</a>
            </p>
            <div className="flex">
              <a href="https://www.facebook.com/share/1FKSn2djM6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <img className="hidden md:block" src="/icon/fb.svg" alt="Facebook" />
              </a>
              <a href="https://www.facebook.com/share/1FKSn2djM6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <img className="hidden md:block" src="/icon/mess.svg" alt="Messenger" />
              </a>
              <a href="https://zalo.me/0931858808" target="_blank" rel="noopener noreferrer">
                <img className="hidden md:block" src="/icon/zalo.svg" alt="Zalo" />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
