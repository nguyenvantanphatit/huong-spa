import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function SeactionDesc() {
  return (
    <>
     <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-11 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/pagehome/poic.png"
                alt="Spa setting with lit candles and towels"
                width={475}
                height={590}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#CC424E] mb-6">CHẠM VÀO SỰ AN YÊN TỪ BÊN TRONG</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Giữa nhịp sống hối hả, Ruby mang đến một khoảng lặng để bạn tìm về sự bình yên, nơi mọi lo toan tan biến, chỉ còn lại sự thư thái và an nhiên.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chúng tôi tin rằng, vẻ đẹp thật sự bắt đầu từ bên trong. Khi tâm hồn an lạc, một hạt từ yên lành, đến ánh mắt biết cười.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="outline" className="bg-white text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 rounded-full px-8 py-3">
                  View menu
                </Button>
                <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-8 py-3">
                  Liên hệ
                </Button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
