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
            <section className="py-16 container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">SẢN PHẨM RUBY HƯƠNG</h2>
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
                                height={300}
                                className="w-full h-48 object-cover rounded-[20px]"
                            />
                            <div className="p-4 text-center md:text-start">
                                <h3 className="text-lg font-semibold text-gray-800">{product.productName}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">

                </div>
            </section>

        </>
    )
}
