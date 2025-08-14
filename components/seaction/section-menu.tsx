'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SectionMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string } | null>(null)

  const openModal = (imageSrc: string) => {
    setSelectedImage({ src: imageSrc })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <>
      <motion.section
        className="mt-16 pb-10 md:pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-xl md:text-[40px] font-normal text-[#CC424E] text-center">
          MENU RUPY HƯƠNG
        </h1>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="cursor-pointer relative group pb-10 md:pb-[160px]"
        onClick={() => openModal('/menu/menu.png')}
      >
        <img
          src="/menu/menu.png"
          alt="menu hương spa"
          className="w-full hover:opacity-90 transition-opacity duration-300"
        />
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="21 21l-4.35-4.35" />
            <path d="11 8v6M8 11h6" />
          </svg>
        </div>
      </motion.section>
      {isModalOpen && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[95vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt="menu hương spa"
                className="object-contain max-w-full max-h-full rounded-lg shadow-2xl cursor-zoom-in"
                style={{ maxHeight: '80vh' }}
              />
              <button
                onClick={closeModal}
                className="absolute -top-16 right-2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200 group"
                aria-label="Đóng modal"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  className="group-hover:scale-110 transition-transform duration-200"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}