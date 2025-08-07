import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

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
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
              <Link
                href="/menu"
                className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-white text-white overflow-hidden transition-all duration-300
            before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
            before:bg-white before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
            hover:before:w-full hover:border-transparent hover:text-[#824435]"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 fill-current transition-colors duration-300 group-hover:text-[#824435]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.80888 5.25C4.16846 2.98301 6.13185 1.25 8.5 1.25H18.5C21.1234 1.25 23.25 3.37665 23.25 6V18C23.25 20.6234 21.1234 22.75 18.5 22.75H8.5C6.13185 22.75 4.16846 21.017 3.80888 18.75H2.5C2.08579 18.75 1.75 18.4142 1.75 18C1.75 17.5858 2.08579 17.25 2.5 17.25H3.75V12.75H2.5C2.08579 12.75 1.75 12.4142 1.75 12C1.75 11.5858 2.08579 11.25 2.5 11.25H3.75V6.75H2.5C2.08579 6.75 1.75 6.41421 1.75 6C1.75 5.58579 2.08579 5.25 2.5 5.25H3.80888ZM5.25 6.75H6.5C6.91421 6.75 7.25 6.41421 7.25 6C7.25 5.58579 6.91421 5.25 6.5 5.25H5.33697C5.67555 3.81665 6.96321 2.75 8.5 2.75H18.5C20.2949 2.75 21.75 4.20507 21.75 6V18C21.75 19.7949 20.2949 21.25 18.5 21.25H8.5C6.96321 21.25 5.67555 20.1833 5.33697 18.75H6.5C6.91421 18.75 7.25 18.4142 7.25 18C7.25 17.5858 6.91421 17.25 6.5 17.25H5.25V12.75H6.5C6.91421 12.75 7.25 12.4142 7.25 12C7.25 11.5858 6.91421 11.25 6.5 11.25H5.25V6.75ZM9.75 6C9.75 5.58579 10.0858 5.25 10.5 5.25L18.5 5.25C18.9142 5.25 19.25 5.58579 19.25 6C19.25 6.41421 18.9142 6.75 18.5 6.75L10.5 6.75C10.0858 6.75 9.75 6.41421 9.75 6ZM9.75 10C9.75 9.58578 10.0858 9.25 10.5 9.25L14.5 9.25C14.9142 9.25 15.25 9.58579 15.25 10C15.25 10.4142 14.9142 10.75 14.5 10.75L10.5 10.75C10.0858 10.75 9.75 10.4142 9.75 10Z"
                  />
                </svg>

                <span className="relative z-10 text-base">MENU</span>
              </Link>

              <a
                href="https://m.me/amorthaomoc1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nhắn tin qua Facebook"
                className="group relative inline-flex w-[220px] items-center justify-center gap-2 py-4 px-10 font-semibold rounded-full whitespace-nowrap border-2 border-white text-white overflow-hidden transition-all duration-300
                                before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0
                                before:bg-white before:rounded-inherit before:transition-[width] before:ease-in-out before:duration-700
                                hover:before:w-full hover:border-transparent hover:text-[#824435]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 transition-colors duration-300 group-hover:fill-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.25 12C1.25 6.61522 5.61522 2.25 11 2.25H13C18.3848 2.25 22.75 6.61522 22.75 12C22.75 17.3848 18.3848 21.75 13 21.75H6C3.37665 21.75 1.25 19.6234 1.25 17V12ZM11 3.75C6.44365 3.75 2.75 7.44365 2.75 12V17C2.75 18.7949 4.20507 20.25 6 20.25H13C17.5564 20.25 21.25 16.5563 21.25 12C21.25 7.44365 17.5564 3.75 13 3.75H11ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H12C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="relative z-10 text-base">BOOKING</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
