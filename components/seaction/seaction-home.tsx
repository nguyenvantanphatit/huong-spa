'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SeactionHome() {
    return (
        <>
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <motion.div
                            className="text-center flex flex-col items-center justify-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Image
                                src="/pagehome/service01.png"
                                alt="Chăm sóc mái tóc"
                                width={300}
                                height={300}
                                className="rounded-[20px] object-cover shrink-0"
                            />
                            <p className="text-2xl font-semibold text-[#824435] pt-7 max-w-[252px]">
                                Chăm sóc cho da dịu nhẹ 🌿
                            </p>
                            <p className="text-[#26262F] mb-6 mt-4 md:text-lg md:px-2 max-w-[316px]">
                                Không chỉ dưỡng da, Ruby giúp bạn lắng nghe làn da như một người bạn thân.
                            </p>
                            <a
                                href="tel:0902328566"
                                aria-label="Gọi ngay"
                                className="inline-flex w-[172px] items-center justify-center gap-2 py-3 px-10 font-semibold rounded-full whitespace-nowrap bg-[#824435] text-white border-2 border-transparent transition-all duration-500 ease-in-out transform hover:bg-transparent hover:border-[#824435] hover:text-[#824435] hover:scale-95"
                            >
                                <span>Gọi ngay</span>
                            </a>
                        </motion.div>

                        <motion.div
                            className="text-center flex flex-col items-center justify-center mb-40"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Image
                                src="/pagehome/service01.png"
                                alt="Chăm sóc mái tóc"
                                width={300}
                                height={300}
                                className="rounded-[20px] object-cover shrink-0"
                            />
                            <p className="text-2xl font-semibold text-[#824435] pt-7 max-w-[252px]">
                                Thải độc – Thanh lọc cơ thể 🌿
                            </p>
                            <p className="text-[#26262F] mb-6 mt-4 md:text-lg md:px-2 max-w-[316px]">
                                Hỗ trợ gan, ruột, thận... hoạt động trơn tru, cảm nhận sự tươi mới từ bên trong.
                            </p>
                            <a
                                href="tel:0902328566"
                                aria-label="Gọi ngay"
                                className="inline-flex w-[172px] items-center justify-center gap-2 py-3 px-10 font-semibold rounded-full whitespace-nowrap bg-[#824435] text-white border-2 border-transparent transition-all duration-500 ease-in-out transform hover:bg-transparent hover:border-[#824435] hover:text-[#824435] hover:scale-95"
                            >
                                <span>Gọi ngay</span>
                            </a>
                        </motion.div>

                        <motion.div
                            className="text-center flex flex-col items-center justify-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Image
                                src="/pagehome/service01.png"
                                alt="Chăm sóc mái tóc"
                                width={300}
                                height={300}
                                className="rounded-[20px] object-cover shrink-0"
                            />
                            <p className="text-2xl font-semibold text-[#824435] pt-7 max-w-[252px]">
                                Không gian nghỉ dưỡng tinh thần 🌿
                            </p>
                            <p className="text-[#26262F] mb-6 mt-4 md:text-lg md:px-4 max-w-[316px]">
                                Ruby là khoảng lặng giữa thành phố, nơi bạn được yêu thương mà không cần cố gắng.
                            </p>
                            <a
                                href="tel:0902328566"
                                aria-label="Gọi ngay"
                                className="inline-flex w-[172px] items-center justify-center gap-2 py-3 px-10 font-semibold rounded-full whitespace-nowrap bg-[#824435] text-white border-2 border-transparent transition-all duration-500 ease-in-out transform hover:bg-transparent hover:border-[#824435] hover:text-[#824435] hover:scale-95"
                            >
                                <span>Gọi ngay</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
