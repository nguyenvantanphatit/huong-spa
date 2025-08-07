'use client'
import { motion } from "framer-motion"
import Image from "next/image"

export default function SectionBusiness() {
  return (
    <section className="pb-28">
      <div className="grid md:grid-cols-2 items-center">
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/banner/khoi-nghiep.webp"
              alt="Amor spa khoi nghiep"
              width={504}
              height={713}
              className="object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          className="mt-12 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-[40px] font-medium text-[#824435] mb-7 text-center md:text-start">
            CÙNG AMOR SPA, BẠN<br />
            <span className="block md:mt-6">KHÔNG ĐI MỘT MÌNH</span>
          </h2>
          <div className="space-y-6 max-w-[568px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[#2E333D] text-center md:text-start max-w-[568px] text-base md:text-lg"
            >
              Bạn yêu thích lĩnh vực chăm sóc sắc đẹp và mong muốn bắt đầu kinh doanh spa, nhưng lại e ngại về rủi
              ro tài chính và thiếu kinh nghiệm? AMOR Spa mang đến giải pháp hoàn hảo dành cho bạn với mô hình
              nhượng quyền spa thông minh, chi phí tối ưu.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[#2E333D] text-center md:text-start max-w-[568px] text-base md:text-lg"
            >
              Với hơn 15 năm kinh nghiệm trong ngành, AMOR Spa không chỉ trao cho bạn một thương hiệu đã được khẳng
              định, mà còn đồng hành để bạn khởi nghiệp một cách an toàn, bài bản và nhanh chóng đạt được thành
              công.
            </motion.p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center mt-16">
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
            >
              <a
              href="https://drive.google.com/drive/folders/1jMgKjzX_MuR2ce6tCCj8R9qbzFhFzs3R"
              target="_blank"
                rel="noopener noreferrer"
                aria-label="Tải tài liệu"
              className='inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap bg-[#824435] text-white border-2 border-transparent transition-all duration-500 ease-in-out transform hover:bg-transparent hover:border-[#824435] hover:text-[#824435] hover:scale-95'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-300">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5C3.75 2.92893 5.42893 1.25 7.5 1.25H17.5C19.5711 1.25 21.25 2.92893 21.25 5V19C21.25 21.0711 19.5711 22.75 17.5 22.75H7.5C5.42893 22.75 3.75 21.0711 3.75 19V5ZM5.25 19C5.25 20.2426 6.25736 21.25 7.5 21.25H17.5C18.7426 21.25 19.75 20.2426 19.75 19V16.75H7.5C6.25736 16.75 5.25 17.7574 5.25 19ZM19.75 15.25H7.5C6.6558 15.25 5.87675 15.529 5.25 15.9997V5C5.25 3.75736 6.25736 2.75 7.5 2.75H17.5C18.7426 2.75 19.75 3.75736 19.75 5V15.25ZM12.5 5.25C12.9142 5.25 13.25 5.58579 13.25 6V10.1893L13.9697 9.46967C14.2626 9.17678 14.7374 9.17678 15.0303 9.46967C15.3232 9.76256 15.3232 10.2374 15.0303 10.5303L13.7374 11.8232C13.054 12.5066 11.946 12.5066 11.2626 11.8232L9.96967 10.5303C9.67678 10.2374 9.67678 9.76256 9.96967 9.46967C10.2626 9.17678 10.7374 9.17678 11.0303 9.46967L11.75 10.1893V6C11.75 5.58579 12.0858 5.25 12.5 5.25Z" fill="currentColor" />
                </svg>
                <span>Tải về ngay</span>
              </a>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
            >
              <a
                href="https://m.me/amorthaomoc1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nhắn tin qua Facebook"
                className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#824435] text-[#824435] overflow-hidden transition-all duration-300
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
                                before:bg-white before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
                                hover:before:w-full hover:border-transparent hover:text-[#824435]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 transition-colors duration-300 group-hover:fill-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.25 12C1.25 6.61522 5.61522 2.25 11 2.25H13C18.3848 2.25 22.75 6.61522 22.75 12C22.75 17.3848 18.3848 21.75 13 21.75H6C3.37665 21.75 1.25 19.6234 1.25 17V12ZM11 3.75C6.44365 3.75 2.75 7.44365 2.75 12V17C2.75 18.7949 4.20507 20.25 6 20.25H13C17.5564 20.25 21.25 16.5563 21.25 12C21.25 7.44365 17.5564 3.75 13 3.75H11ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H12C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="relative z-10 text-base">BOOKING</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
