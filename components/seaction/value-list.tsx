'use client'
import { motion } from 'framer-motion'
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
}

export default function ValueList() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <div className="w-[160px] h-[145px] flex items-center justify-center mx-auto">
              <img
                src="/about/gia-tri.png"
                alt="Tầm Nhìn"
                width={160}
                height={145}
                className="object-cover"
              />
            </div>
            <p className="text-2xl font-semibold text-[#824435] pt-8 pb-4">Giá trị</p>
            <p className="text-[#26262F] text-sm md:text-lg max-w-[316px] mx-auto">
              Chúng tôi cam kết mang lại giá trị thật cho khách hàng qua giá trị văn hóa - REAL
            </p>

            <div className="mt-4 max-w-[256px] mx-auto text-left text-sm md:text-base space-y-1">
              <div className="flex gap-2"><span className="w-2">R</span>: <span>Reputation - Uy tín</span></div>
              <div className="flex gap-2"><span className="w-2">E</span>: <span>Empathy - Tận tâm</span></div>
              <div className="flex gap-2"><span className="w-2">A</span>: <span>Adaptability - Linh hoạt</span></div>
              <div className="flex gap-2"><span className="w-2">L</span>: <span>Love - Yêu thương</span></div>
            </div>
          </div>

        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className='md:-mt-10'
        >
          <div className="text-center">
            <div className="w-[160px] h-[145px] flex items-center justify-center mx-auto">
              <img
                src="/about/su-menh.png"
                alt="Sứ mệnh"
                width={160}
                height={145}
                className="object-cover"
              />
            </div>
            <p className="text-2xl font-semibold text-[#824435] pt-8 pb-4">Sứ mệnh</p>
            <p className="text-[#26262F] text-sm md:text-lg max-w-[316px] mx-auto">
              Chúng tôi tạo ra giá trị bền vững cho ngành spa giúp cho hàng nghìn khách hàng khỏe đẹp an toàn từ các sản phẩm thiên nhiên
            </p>
          </div>

        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <div className="w-[160px] h-[145px] flex items-center justify-center mx-auto">
              <img
                src="/about/tam-nhin.png"
                alt="Tầm Nhìn"
                width={160}
                height={145}
                className="object-cover"
              />
            </div>
            <p className="text-2xl font-semibold text-[#824435] pt-8 pb-4">Tầm Nhìn</p>
            <p className="text-[#26262F] text-sm md:text-lg max-w-[316px] mx-auto">
              Trở thành thương hiệu khỏe đẹp uy tín hàng đầu Việt Nam
            </p>
          </div>

        </motion.div>
      </div>
    </>
  )
}
