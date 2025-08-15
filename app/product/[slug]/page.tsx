// app/product/[slug]/page.tsx
'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ProductTabsSection from '@/components/seaction/section-products'
import { motion } from 'framer-motion'
import SeactionContact from '@/components/seaction-contact'
import { useEffect, useState } from 'react'
import { fetchProductBySlug, fetchProducts, Product } from '@/lib/api'





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
        phone: '0931 858 808',
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
        phone: '0931 858 808',
        isNew: false,
    },
    {
        slug: "sua-rua-mat-collagen",
        name: "Sữa rửa mặt Collagen",
        title: "làm đẹp",
        image: "/products/item-3.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '0931 858 808',
        isNew: false,
    },
    {
        slug: "mat-nam-chanh-tu",
        name: "Mặt nạ chanh tươi",
        title: "làm đẹp",
        image: "/products/item-4.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '0931 858 808',
        isNew: false,
    },
    {
        slug: "kem-duong-dem-kiwi",
        name: "Kem dưỡng đêm kiwi",
        title: "làm đẹp",
        image: "/products/item-1.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '0931 858 808',
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
        phone: '0931 858 808',
        isNew: false,
    },
    {
        slug: "sua-rua-mat-collagen",
        name: "Sữa rửa mặt Collagen",
        title: "làm đẹp",
        image: "/products/item-3.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '0931 858 808',
        isNew: false,
    },
    {
        slug: "mat-nam-chanh-tu",
        name: "Mặt nạ chanh tươi",
        title: "làm đẹp",
        image: "/products/item-4.png",
        description: `Hãy để kem dưỡng đồng hành cùng bạn trong hành trình tìm lại sự an yên và năng lượng sống tích cực. 
Khách yêu hãy đặt lịch ngay hôm nay để yêu thương bản thân theo cách trọn vẹn nhất nhé!`,
        address: '30 Đặng Tất, P. Tân Định, TP.HCM',
        phone: '0931 858 808',
        isNew: false,
    },
]

export default function ProductDetailPage() {
    // const { slug } = useParams()

    // const product = productDetail.find(p => p.slug === slug)


    // if (!product) {
    //     return <div className="text-center py-20">Không tìm thấy sản phẩm</div>
    // }

    const { slug } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const [otherProducts, setOtherProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!slug) return
        const loadData = async () => {
            try {
                setLoading(true)
                const productData = await fetchProductBySlug(slug as string)
                setProduct(productData)

                const listData = await fetchProducts()
                setOtherProducts(listData.data.data.filter(p => p.slug !== slug))
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [slug])

    if (loading) {
        return <div className="text-center py-20">Đang tải...</div>
    }

    if (!product) {
        return <div className="text-center py-20">Không tìm thấy sản phẩm</div>
    }

    return (
        <div className="min-h-screen  px-4 md:px-20 py-10 md:py-20">
            <section>
                <div className="max-w-6xl mx-auto grid items-start grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Image section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <div className="relative aspect-square w-full">
                            <Image
                                src={product?.image?.url || '/placeholder.png'}
                                alt={product?.title || ''}
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
                        <div className="text-sm text-[#2E333D]">
                            <Link href="/">{product?.category?.name}</Link> &nbsp;/&nbsp;
                            <Link href={`/`}>{product.title}</Link> &nbsp;/&nbsp;
                            <span className="font-semibold text-[#2E333D]">{product.title}</span>
                        </div>

                        <p className="text-xl md:text-[32px] font-bold text-[#15171B]">{product.title}</p>
                        {product?.description && (
                            <div
                                className="text-[#434343] prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                        )}


                        {/* <p className="text-[#2E333D] leading-relaxed whitespace-pre-line">{product.description}</p> */}

                        {/* Contact buttons */}
                        <div className="space-y-4">
                            <a
                                href="https://www.facebook.com/share/1FKSn2djM6/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Nhắn tin qua Facebook"
                                className="group relative inline-flex w-full h-14 items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent"
                            >
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                                <svg
                                    viewBox="0 0 19 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 w-6 h-6 z-10 fill-current transition-colors duration-300"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.541504 9C0.541504 4.51269 4.17919 0.875 8.6665 0.875H10.3332C10.5711 0.875 10.8067 0.885241 11.0397 0.905329C11.3836 0.934982 11.6383 1.23781 11.6087 1.58171C11.579 1.92561 11.2762 2.18036 10.9323 2.15071C10.735 2.1337 10.5352 2.125 10.3332 2.125H8.6665C4.86955 2.125 1.7915 5.20304 1.7915 9V13.1667C1.7915 14.6624 3.00407 15.875 4.49984 15.875H10.3332C14.1301 15.875 17.2082 12.797 17.2082 9C17.2082 8.798 17.1995 8.59817 17.1825 8.40087C17.1528 8.05697 17.4076 7.75414 17.7515 7.72449C18.0954 7.69483 18.3982 7.94958 18.4278 8.29348C18.4479 8.52646 18.4582 8.76211 18.4582 9C18.4582 13.4873 14.8205 17.125 10.3332 17.125H4.49984C2.31371 17.125 0.541504 15.3528 0.541504 13.1667V9ZM15.3332 2.125C14.2976 2.125 13.4582 2.96447 13.4582 4C13.4582 5.03553 14.2976 5.875 15.3332 5.875C16.3687 5.875 17.2082 5.03553 17.2082 4C17.2082 2.96447 16.3687 2.125 15.3332 2.125ZM12.2082 4C12.2082 2.27411 13.6073 0.875 15.3332 0.875C17.0591 0.875 18.4582 2.27411 18.4582 4C18.4582 5.72589 17.0591 7.125 15.3332 7.125C13.6073 7.125 12.2082 5.72589 12.2082 4Z"
                                    />
                                </svg>
                                <span className="relative z-10 text-base font-semibold">Liên hệ</span>
                            </a>

                            <a
                                href={`tel:0931858808`}
                                className="group relative inline-flex w-full items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden hover:text-white"
                            >
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-[#CC424E]" />
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.162 3.487a1 1 0 01-.272 1.057L7.21 10.882a16.001 16.001 0 006.908 6.908l2.654-2.654a1 1 0 011.057-.272l3.487 1.162a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
                                </svg>
                                0931 858 808
                            </a>

                            <div className="text-sm text-[#3E4450] flex flex-col md:flex-row gap-1">
                                Hoặc trải nghiệm tại&nbsp;
                                <div className='flex gap-1'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.998 2.75C8.53161 2.75 5.74805 5.49877 5.74805 8.85714C5.74805 9.82928 6.11512 10.9893 6.74193 12.1702C7.36349 13.3411 8.20956 14.4741 9.09246 15.3791C9.67379 15.9749 10.2563 16.4568 10.784 16.7845C11.3285 17.1226 11.7401 17.25 11.998 17.25C12.256 17.25 12.6676 17.1226 13.2121 16.7845C13.7398 16.4568 14.3223 15.9749 14.9036 15.3791C15.7865 14.4741 16.6326 13.3411 17.2542 12.1702C17.881 10.9893 18.248 9.82928 18.248 8.85714C18.248 5.49877 15.4645 2.75 11.998 2.75ZM4.24805 8.85714C4.24805 4.64133 7.73249 1.25 11.998 1.25C16.2636 1.25 19.748 4.64133 19.748 8.85714C19.748 10.1694 19.2661 11.5791 18.5791 12.8734C17.8867 14.1777 16.954 15.4254 15.9773 16.4265C15.3354 17.0846 14.6596 17.6513 14.0034 18.0588C13.364 18.4558 12.666 18.75 11.998 18.75C11.3301 18.75 10.6321 18.4558 9.99274 18.0588C9.3365 17.6513 8.66074 17.0846 8.01877 16.4265C7.04206 15.4254 6.10935 14.1777 5.41702 12.8734C4.72996 11.5791 4.24805 10.1694 4.24805 8.85714ZM11.998 7.75C11.3077 7.75 10.748 8.30965 10.748 9C10.748 9.69036 11.3077 10.25 11.998 10.25C12.6884 10.25 13.248 9.69036 13.248 9C13.248 8.30965 12.6884 7.75 11.998 7.75ZM9.24805 9C9.24805 7.48122 10.4793 6.25 11.998 6.25C13.5168 6.25 14.748 7.48122 14.748 9C14.748 10.5188 13.5168 11.75 11.998 11.75C10.4793 11.75 9.24805 10.5188 9.24805 9Z" fill="#CC424E" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.58809 16.0962C9.63936 16.5072 9.34773 16.882 8.9367 16.9333C7.27534 17.1405 5.89865 17.5068 4.96064 17.9497C4.49031 18.1718 4.16643 18.3963 3.97011 18.5991C3.77698 18.7986 3.74805 18.9314 3.74805 18.9996C3.74805 19.0856 3.7996 19.2868 4.16954 19.5783C4.53103 19.8632 5.10059 20.1526 5.87126 20.4094C7.40474 20.9206 9.57094 21.2496 11.998 21.2496C14.4251 21.2496 16.5913 20.9206 18.1248 20.4094C18.8955 20.1526 19.4651 19.8632 19.8266 19.5783C20.1965 19.2868 20.248 19.0856 20.248 18.9996C20.248 18.9314 20.2191 18.7986 20.026 18.5991C19.8297 18.3963 19.5058 18.1718 19.0355 17.9497C18.0974 17.5068 16.7208 17.1405 15.0594 16.9333C14.6484 16.882 14.3567 16.5072 14.408 16.0962C14.4593 15.6852 14.8341 15.3935 15.2451 15.4448C16.9985 15.6636 18.5447 16.0592 19.6759 16.5933C20.2402 16.8597 20.7375 17.1775 21.1037 17.5558C21.4731 17.9374 21.748 18.4244 21.748 18.9996C21.748 19.7422 21.2959 20.3302 20.755 20.7564C20.2057 21.1894 19.4572 21.5465 18.5992 21.8325C16.8753 22.4071 14.5415 22.7496 11.998 22.7496C9.45459 22.7496 7.12079 22.4071 5.39691 21.8325C4.5389 21.5465 3.79044 21.1894 3.24108 20.7564C2.70018 20.3302 2.24805 19.7422 2.24805 18.9996C2.24805 18.4244 2.52299 17.9374 2.89239 17.5558C3.2586 17.1775 3.75589 16.8597 4.32016 16.5933C5.45136 16.0592 6.99757 15.6636 8.75101 15.4448C9.16204 15.3935 9.53681 15.6852 9.58809 16.0962Z" fill="#CC424E" />
                                    </svg>
                                    <span className="text-[#2E333D] font-semibold">
                                        89/57 đường 59, p14, quận Gò Vấp, TP.HCM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="flex flex-col mb-[68px] mt-20 max-w-6xl mx-auto">

                <h2 className="text-xl mb-[23px] md:text-[40px] font-medium text-[#CC424E] text-start">Các sản phẩm khác</h2>


                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {otherProducts.map((otherProducts, index) => (
                        <Link key={otherProducts.id} href={`/product/${otherProducts.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group space-y-2"
                            >
                                <div className="relative aspect-square overflow-hidden rounded-lg">
                                    <Image
                                        src={otherProducts.image?.url || '"/products/item-1.png"'}
                                        alt={otherProducts.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-sm font-semibold">{otherProducts.title}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="flex mt-[52px] justify-center">

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
                    >
                        <Link
                            href="/product"
                            className="group relative inline-flex w-[220px] h-14 items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] text-[#CC424E] overflow-hidden hover:text-white"
                        >
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-[#CC424E]" />
                            <span className="relative z-10 text-[14px] md:text-base">Xem tất cả</span>
                            <svg className="relative w-5 h-5 md:h-6 md:w-6 z-10 transition-colors duration-300]" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.0303 11.4697C19.3232 11.7626 19.3232 12.2374 19.0303 12.5303L15.0303 16.5303C14.7374 16.8232 14.2626 16.8232 13.9697 16.5303C13.6768 16.2374 13.6768 15.7626 13.9697 15.4697L16.6893 12.75L6.5 12.75C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25L16.6893 11.25L13.9697 8.53033C13.6768 8.23744 13.6768 7.76256 13.9697 7.46967C14.2626 7.17678 14.7374 7.17678 15.0303 7.46967L19.0303 11.4697Z" fill="currentColor" />
                            </svg>
                        </Link>
                    </motion.div>

                </div>
            </section>

            <SeactionContact />
        </div>
    )
}
