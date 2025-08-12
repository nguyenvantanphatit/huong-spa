'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimateOnScroll from '../animations/AnimateOnScroll'

export default function SeactionHome() {
    return (
        <>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-[84px] md:gap-[136px] items-center">
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
                                className="rounded-[20px] w-[240px] h-[240px] md:h-[300px] md:w-[300px]  object-cover shrink-0"
                            />

                            <AnimateOnScroll delay={0.2}>
                                <p className="text-2xl font-semibold text-[#CC424E] pt-6 md:pt-10 max-w-[252px]">
                                    Chăm sóc cho da dịu nhẹ 🌿
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={0.4}>
                                <p className="text-[#26262F] mb-5 md:mb-9 mt-3 md:mt-4 md:text-lg max-w-[316px]">
                                    Không chỉ dưỡng da, Ruby giúp bạn lắng nghe làn da như một người bạn thân.
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={0.6}>
                                <a
                                    href="tel:0931858808"
                                    aria-label="Gọi ngay"
                                    className="group relative inline-flex w-[172px] items-center justify-center gap-2 py-3 px-14 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent"
                                >
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                                    <span>Liên hệ</span>
                                </a>
                            </AnimateOnScroll>
                        </motion.div>

                        <motion.div
                            className="text-center flex flex-col items-center justify-center md:mb-40"
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
                                className="rounded-[20px] w-[240px] h-[240px] md:h-[300px] md:w-[300px]  object-cover shrink-0"
                            />

                            <AnimateOnScroll delay={0.2}>
                                <p className="text-2xl font-semibold text-[#CC424E] pt-6 md:pt-10 max-w-[252px]">
                                    Chăm sóc cho da dịu nhẹ 🌿
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={0.4}>
                                <p className="text-[#26262F] mb-5 md:mb-9 mt-3 md:mt-4 md:text-lg max-w-[316px]">
                                    Không chỉ dưỡng da, Ruby giúp bạn lắng nghe làn da như một người bạn thân.
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={0.6}>
                                <a
                                    href="tel:0931858808"
                                    aria-label="Gọi ngay"
                                    className="group relative inline-flex w-[172px] items-center justify-center gap-2 py-3 px-14 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent"
                                >
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                                    <span>Liên hệ</span>
                                </a>
                            </AnimateOnScroll>
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
                                className="rounded-[20px] w-[240px] h-[240px] md:h-[300px] md:w-[300px]  object-cover shrink-0"
                            />

                            <AnimateOnScroll delay={0.2}>
                                <p className="text-2xl font-semibold text-[#CC424E] pt-6 md:pt-10 max-w-[252px]">
                                    Chăm sóc cho da dịu nhẹ 🌿
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={0.4}>
                                <p className="text-[#26262F] mb-5 md:mb-9 mt-3 md:mt-4 md:text-lg max-w-[316px]">
                                    Không chỉ dưỡng da, Ruby giúp bạn lắng nghe làn da như một người bạn thân.
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={0.6}>
                                <a
                                    href="tel:0931858808"
                                    aria-label="Gọi ngay"
                                    className="group relative inline-flex w-[172px] items-center justify-center gap-2 py-3 px-14 font-semibold rounded-full whitespace-nowrap border-2 border-[#CC424E] bg-[#CC424E] text-white overflow-hidden hover:text-[#CC424E] hover:bg-transparent hover:border-transparent"
                                >
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200%] h-[200%] rounded-full group-hover:-translate-y-1/2 transition-transform duration-300 ease-in-out z-[-1] bg-white" />
                                    <span>Liên hệ</span>
                                </a>
                            </AnimateOnScroll>
                        </motion.div>
                    </div>
                </div>
            </section >
        </>
    )
}
