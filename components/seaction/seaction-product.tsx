"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function SeactionProduct() {

    const products = [
        { imageSrc: "/pagehome/sp01.png", productName: "Kem dưỡng đêm kiwi", isNew: true, slug: "kem-duong-dem-kiwi" },
        { imageSrc: "/pagehome/sp02.png", productName: "Thạch anh treo phòng", isNew: false, slug: "thach-anh-treo-phong" },
        { imageSrc: "/pagehome/sp03.png", productName: "Sữa rửa mặt Collagen", isNew: false, slug: "sua-rua-mat-collagen" },
        { imageSrc: "/pagehome/sp04.png", productName: "Mặt nạ chanh tươi", isNew: false, slug: "mat-na-chanh-tuoi" },
    ]

    return (
        <>
            <section className="py-5 px-6 md:py-10 md:mt-5 mb-[10px] md:mb-2 container mx-auto">
                <h2 className="text-3xl md:text-[40px] font-normal text-center text-[#CC424E] mb-5 md:mb-10">SẢN PHẨM RUBY HƯƠNG</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px] md:gap-6">
                    {products.map((product, index) => (
                        <Link href={`/product/${product.slug}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div key={index} className="relative group">
                                    {product.isNew && (
                                        <div className="absolute top-2 left-2 bg-[#679132] text-white text-xs font-semibold px-2 py-1 rounded-[13.33px] rounded-tr-[6.67px] z-10">
                                            New
                                        </div>
                                    )}
                                    <Image
                                        src={product.imageSrc || "/placeholder.svg"}
                                        alt={product.productName}
                                        width={320}
                                        height={320}
                                        className="w-full h-[156px] md:h-[320px] object-cover rounded-[20p]"
                                    />
                                    <div className="absolute inset-0 flex items-end justify-center pb-[30%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        <button
                                            className="relative flex items-center justify-center gap-2 py-3 px-6 font-semibold rounded-full whitespace-nowrap bg-[#CC424E] text-white overflow-hidden transition-all duration-300"
                                        >
                                            <span className="relative z-10 text-base font-semibold">Xem chi tiết</span>
                                        </button>
                                    </div>
                                    <div className="mt-2 md:mt-4 text-center md:text-start">
                                        <h3 className="text-xs md:text-lg h-5 md:h-[30px] font-semibold text-gray-800">{product.productName}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center mt-7 md:mt-[34px]">
                    <a
                        href="/product"
                        aria-label="Nhắn tin qua Facebook"
                        className="group relative inline-flex w-[168px] md:w-[220px] h-10 md:h-auto  items-center justify-center gap-2 py-2 md:py-4 px-8 md:px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden transition-all duration-300
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
                                before:bg-[#CC424E] before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
                                hover:before:w-full hover:border-transparent hover:text-white"
                    >
                        <span className="relative z-10 text-[14px] md:text-base">Xem tất cả</span>
                        <svg className="relative w-5 h-5 md:h-6 md:w-6 z-10 transition-colors duration-300]" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0303 11.4697C19.3232 11.7626 19.3232 12.2374 19.0303 12.5303L15.0303 16.5303C14.7374 16.8232 14.2626 16.8232 13.9697 16.5303C13.6768 16.2374 13.6768 15.7626 13.9697 15.4697L16.6893 12.75L6.5 12.75C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25L16.6893 11.25L13.9697 8.53033C13.6768 8.23744 13.6768 7.76256 13.9697 7.46967C14.2626 7.17678 14.7374 7.17678 15.0303 7.46967L19.0303 11.4697Z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
            </section>

        </>
    )
}
