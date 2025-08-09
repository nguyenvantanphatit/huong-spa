// app/product/[slug]/page.tsx
'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ProductTabsSection from '@/components/seaction/section-products'
import { motion } from 'framer-motion'
import SeactionContact from '@/components/seaction-contact'





// Mock data (có thể sau này fetch từ API)
const productDetail = [
    {
        slug: "kem-duong-dem-kiwi",
        name: "Kem dưỡng đêm kiwi",
        title: "làm đẹp",
        image: "/products/item-1.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '090 232 8566',
        isNew: true,
    },
    {
        slug: "thach-anh-treo-phong",
        name: "Thạch anh treo phòng",
        title: "thực dưỡng",
        image: "/products/item-2.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '090 232 8566',
        isNew: true,
    },
    {
        slug: "sua-rua-mat-collagen",
        name: "Sữa rửa mặt Collagen",
        title: "làm đẹp",
        image: "/products/item-3.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '090 232 8566',
        isNew: true,
    },
    {
        slug: "mat-nam-chanh-tu",
        name: "Mặt nạ chanh tươi",
        title: "làm đẹp",
        image: "/products/item-4.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '090 232 8566',
        isNew: true,
    },
    {
        slug: "kem-duong-dem-kiwi",
        name: "Kem dưỡng đêm kiwi",
        title: "làm đẹp",
        image: "/products/item-1.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '090 232 8566',
        isNew: true,
    },
    {
        slug: "thach-anh-treo-phong",
        name: "Thạch anh treo phòng",
        title: "thực dưỡng",
        image: "/products/item-2.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '090 232 8566',
        isNew: true,
    },
    {
        slug: "sua-rua-mat-collagen",
        name: "Sữa rửa mặt Collagen",
        title: "làm đẹp",
        image: "/products/item-3.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '090 232 8566',
        isNew: true,
    },
    {
        slug: "mat-nam-chanh-tu",
        name: "Mặt nạ chanh tươi",
        title: "làm đẹp",
        image: "/products/item-4.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '090 232 8566',
        isNew: true,
    },
]

export default function ProductDetailPage() {
    const { slug } = useParams()

    const product = productDetail.find(p => p.slug === slug)


    if (!product) {
        return <div className="text-center py-20">Không tìm thấy sản phẩm</div>
    }

    return (
        <div className="min-h-screen bg-[#fdfaf6] px-4 md:px-20 py-10 md:py-20">
            <section>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Image section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <div className="relative aspect-square w-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {product.isNew && (
                            <span className="absolute top-4 left-4 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow">
                                New
                            </span>
                        )}
                    </div>

                    {/* Info section */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="text-sm text-gray-600">
                            <Link href="/">Sản phẩm</Link> &nbsp;/&nbsp;
                            <Link href={`/`}>{product.title}</Link> &nbsp;/&nbsp;
                            <span className="font-medium text-gray-900">{product.name}</span>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>

                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{product.description}</p>

                        {/* Contact buttons */}
                        <div className="space-y-4">
                            <a
                                href="https://m.me/maidodesigner.vn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#cc2f43] text-white text-sm font-semibold py-4 rounded-full hover:opacity-90 transition"
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
                                <span className="relative z-10 text-base">Liên hệ</span>
                            </a>

                            <a
                                href={`tel:${product.phone}`}
                                className="flex items-center justify-center gap-2 border-2 border-[#cc2f43] text-[#cc2f43] font-semibold py-4 rounded-full hover:bg-[#cc2f43]/10 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.162 3.487a1 1 0 01-.272 1.057L7.21 10.882a16.001 16.001 0 006.908 6.908l2.654-2.654a1 1 0 011.057-.272l3.487 1.162a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
                                </svg>
                                {product.phone}
                            </a>

                            <p className="text-sm text-gray-600 text-center">
                                Hoặc trải nghiệm tại&nbsp;
                                <span className="text-gray-900 font-semibold">{product.address}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="flex flex-col mb-[68px] mt-20 max-w-6xl mx-auto">

                <h1 className="text-xl mb-[23px] md:text-[40px] font-medium text-[#CC424E] text-start">Các sản phẩm khác</h1>


                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {productDetail.map((productDetail, index) => (
                        <Link key={index} href={`/product/${productDetail.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group space-y-2"
                            >
                                <div className="relative aspect-square overflow-hidden rounded-lg">
                                    <Image
                                        src={productDetail.image}
                                        alt={productDetail.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-sm font-semibold">{productDetail.name}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="flex mt-[52px] justify-center">
                    {/* <Link
                        href="/product"
                        className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden transition-all duration-300
            before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
            before:bg-[#CC424E] before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
            hover:before:w-full hover:border-transparent hover:text-white"
                    >
                        <button
                            className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden transition-all duration-300
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
                                before:bg-[#CC424E] before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
                                hover:before:w-full hover:border-transparent hover:text-white"
                        >
                            <span className="relative z-10 text-base">Xem tất cả</span>
                            <svg className="w-6 h-6 text-[#CC424E] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                            </svg>
                        </button>
                    </Link> */}
                     <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
                        >
                            <Link
                                href="/product"
                                className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden hover:text-white"
                            >
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-500 ease-in-out z-[-1] bg-[#CC424E]" />

                                <svg
                                    width="19"
                                    height="18"
                                    viewBox="0 0 19 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="relative z-10 fill-current transition-colors duration-300"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.541504 9C0.541504 4.51269 4.17919 0.875 8.6665 0.875H10.3332C10.5711 0.875 10.8067 0.885241 11.0397 0.905329C11.3836 0.934982 11.6383 1.23781 11.6087 1.58171C11.579 1.92561 11.2762 2.18036 10.9323 2.15071C10.735 2.1337 10.5352 2.125 10.3332 2.125H8.6665C4.86955 2.125 1.7915 5.20304 1.7915 9V13.1667C1.7915 14.6624 3.00407 15.875 4.49984 15.875H10.3332C14.1301 15.875 17.2082 12.797 17.2082 9C17.2082 8.798 17.1995 8.59817 17.1825 8.40087C17.1528 8.05697 17.4076 7.75414 17.7515 7.72449C18.0954 7.69483 18.3982 7.94958 18.4278 8.29348C18.4479 8.52646 18.4582 8.76211 18.4582 9C18.4582 13.4873 14.8205 17.125 10.3332 17.125H4.49984C2.31371 17.125 0.541504 15.3528 0.541504 13.1667V9ZM15.3332 2.125C14.2976 2.125 13.4582 2.96447 13.4582 4C13.4582 5.03553 14.2976 5.875 15.3332 5.875C16.3687 5.875 17.2082 5.03553 17.2082 4C17.2082 2.96447 16.3687 2.125 15.3332 2.125ZM12.2082 4C12.2082 2.27411 13.6073 0.875 15.3332 0.875C17.0591 0.875 18.4582 2.27411 18.4582 4C18.4582 5.72589 17.0591 7.125 15.3332 7.125C13.6073 7.125 12.2082 5.72589 12.2082 4Z"
                                    />
                                </svg>
                                <span className="relative z-10 text-base">Liên hệ</span>
                            </Link>
                        </motion.div>

                </div>
            </section>

            <SeactionContact />
        </div>
    )
}
