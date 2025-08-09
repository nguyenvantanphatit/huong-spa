'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SeactionBusiness() {
    const [iconSrc, setIconSrc] = useState('/icon/menu-color.png');
    return (
        <section className="bg-[#824435] text-white mt-32 mb-20 pb-12 md:pb-0">
            <div className="container px-[30px] md:px-10 mx-auto max-w-screen-xl">
                <div className="flex items-center flex-col md:flex-row gap-12 relative">
                    <div className="py-16 md:ml-20 max-w-[650px]">
                        <h6 className="hidden md:block text-xl md:text-[40px] font-medium text-white mb-7">
                            BẮT ĐẦU TỪ ĐAM MÊ,
                            <br />
                            <span className="block mt-6">KINH DOANH TỪ SỰ TỰ TIN</span>
                        </h6>
                        <h6 className="block md:hidden text-[19px] font-medium text-white mb-7 text-center md:text-start mt-6">
                            BẮT ĐẦU TỪ ĐAM MÊ,
                            <br />
                            <span className="block mt-1.5">KINH DOANH TỪ SỰ TỰ TIN</span>
                        </h6>

                        <motion.p
                            className="text-white max-w-[517px] md:text-lg text-justify md:text-start"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Bạn yêu thích lĩnh vực chăm sóc sắc đẹp và mong muốn bắt đầu kinh doanh spa, nhưng lại e ngại về rủi ro
                            tài chính và thiếu kinh nghiệm? AMOR Spa mang đến giải pháp hoàn hảo dành cho bạn với mô hình nhượng
                            quyền spa thông minh, chi phí tối ưu.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-3 mt-9 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
                            >
                                <Link href="/product" className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-white text-white overflow-hidden transition-all duration-300
    before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
    before:bg-white before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
    hover:before:w-full hover:border-transparent hover:text-[#824435]"
                                    onMouseEnter={() => setIconSrc('/icon/menu.png')}
                                    onMouseLeave={() => setIconSrc('/icon/menu-color.png')}
                                >
                                    <img src={iconSrc} alt="icon" className="relative z-10 transition-all duration-300" />
                                    <span className="relative z-10 text-base">Khám phá thêm</span>
                                </Link>
                            </motion.div>
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
                                    className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-white text-white overflow-hidden transition-all duration-300
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
                    </div>
                    <div className="bottom-0 md:absolute md:-right-40 transform md:-translate-x-1/2">
                        <motion.img
                            src="/banner/khoi-nghiep.webp"
                            alt="Business opportunity"
                            width={393}
                            height={563}
                            className="object-cover"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.4 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
