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
            <section className="py-12 container mx-auto">
                <h2 className="text-3xl md:text-[40px] font-normal text-center text-[#CC424E] mb-12">SẢN PHẨM RUBY HƯƠNG</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                                className="w-full h-[320px] object-cover rounded-[20px]"
                            />
                            <div className="p-4 text-center md:text-start">
                                <h3 className="text-lg h-[30px] font-semibold text-gray-800">{product.productName}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <a
                        href="https://m.me/amorthaomoc1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Nhắn tin qua Facebook"
                        className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden transition-all duration-300
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
                                before:bg-[#CC424E] before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
                                hover:before:w-full hover:border-transparent hover:text-white"
                    >
                        <span className="relative z-10 text-base">Xem tất cả</span>
                        <svg className="w-6 h-6 text-[#CC424E] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </a>
                </div>
            </section>

        </>
    )
}
