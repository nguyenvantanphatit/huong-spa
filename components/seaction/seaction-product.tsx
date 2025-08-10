import Image from 'next/image'
import React from 'react'

export default function SeactionProduct() {

    const products = [
        { imageSrc: "/pagehome/sp01.png", productName: "Kem dưỡng đêm kiwi", isNew: true },
        { imageSrc: "/pagehome/sp02.png", productName: "Thạch anh treo phòng", isNew: false },
        { imageSrc: "/pagehome/sp03.png", productName: "Sữa rửa mặt Collagen", isNew: false },
        { imageSrc: "/pagehome/sp04.png", productName: "Mặt nạ chanh tươi", isNew: false },
    ]

    return (
        <>
            <section className="py-5 md:py-10 md:mt-5 mb-[10px] md:mb-2 container mx-auto">
                <h2 className="text-3xl md:text-[40px] font-normal text-center text-[#CC424E] mb-5 md:mb-10">SẢN PHẨM RUBY HƯƠNG</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px] md:gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="relative">
                            {product.isNew && (
                                <div className="absolute top-2 left-2 bg-[#679132] text-white text-xs font-semibold px-2 py-1 rounded-[13.33px] rounded-tr-[6.67px] z-10">
                                    New
                                </div>
                            )}
                            <Image
                                src={product.imageSrc || "/placeholder.svg"}
                                alt={product.productName}
                                width={300}
                                height={320}
                                className="w-full h-[156px] md:h-[320px] object-cover rounded-[20px]"
                            />
                            <div className="mt-2 md:mt-4 text-center md:text-start">
                                <h3 className="text-xs md:text-lg h-5 md:h-[30px] font-semibold text-gray-800">{product.productName}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-7 md:mt-[34px] ">
                    <a
                        href="/product"
                        aria-label="Nhắn tin qua Facebook"
                        className="group relative inline-flex w-[168px] md:w-[220px] h-10 md:h-auto  items-center justify-center gap-2 py-2 md:py-4 px-8 md:px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden transition-all duration-300
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
                                before:bg-[#CC424E] before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
                                hover:before:w-full hover:border-transparent hover:text-white"
                    >
                        <span className="relative z-10 text-[14px] md:text-base">Xem tất cả</span>
                        <svg
                            className="relative w-5 h-5 md:h-6 md:w-6 z-10 transition-colors duration-300]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 12H5m14 0-4 4m4-4-4-4"
                            />
                        </svg>

                    </a>
                </div>
            </section>

        </>
    )
}
