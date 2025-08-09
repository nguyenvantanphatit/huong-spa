import Link from 'next/link'
import Container from './container'
export default async function FooterSeaction() {

  return (
    <>
      <footer className="border-t-[1px] mt-20"
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
          <div className="flex justify-center mt-16">
            <h1 className="text-base md:text-[60px] font-bold">RUBY HƯƠNG SPA</h1>

          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-8 md:gap-[60px] pt-[76px]">
            <Link href="/ve-chung-toi" className="tracking-widest text-xs md:text-base font-medium">VỀ RUBY HƯƠNG</Link>
            <Link href="/menu" className="tracking-widest text-xs md:text-base font-medium">MENU</Link>
            <Link href="/product" className="tracking-widest text-xs md:text-base font-medium">SẢN PHẨM</Link>
          </nav>
          {/* Info line */}
          <div className="flex justify-center flex-col md:flex-row gap-10 mt-[52px]">
            <div className="flex items-center gap-2">
              <img src="/footer/address.svg" alt="Địa chỉ" />
              <p className="text-[#2E333D] font-semibold text-xs md:text-base">89/57 đường 59, p14, TP.HCM</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/footer/time.svg" alt="Thời gian" />
              <p className="text-[#2E333D] font-semibold text-xs md:text-base">09:00 - 20:00 mỗi ngày</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/footer/phone.svg" alt="Điện thoại" />
              <p className="text-[#2E333D] font-semibold text-xs md:text-base">0931 858 808</p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-[62px] gap-4">
            <p className="text-xs md:text-sm">
              ©2025 AMOR, all rights reserved, powered by{" "}
              <a href="https://www.mera-tech.vn" target="_blank" className="hover:underline">MERA TECH</a>
            </p>
            <div className="flex">
              <a href="https://www.facebook.com/amorthaomoc1" target="_blank" rel="noopener noreferrer">
                <img src="/icon/fb.svg" alt="Facebook" />
              </a>
              <a href="https://m.me/amorthaomoc1" target="_blank" rel="noopener noreferrer">
                <img src="/icon/mess.svg" alt="Messenger" />
              </a>
              <a href="https://zalo.me/0902328566" target="_blank" rel="noopener noreferrer">
                <img src="/icon/zalo.svg" alt="Zalo" />
              </a>
            </div>
          </div>
        </Container>
      </footer>

    </>
  )
}
