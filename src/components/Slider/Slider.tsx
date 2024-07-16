'use client'
import React, { useEffect, useState } from 'react'
import { images } from '@/assets/images'
import Image from 'next/image'

interface ISliderProps {
  // define your props here
}

const Slider: React.FC<ISliderProps> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-full"
            />
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2"
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2"
        >
          ›
        </button>
      </div>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Slider
