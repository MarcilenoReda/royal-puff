'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const slides = [
  {
    id: 1,
    image: '/images/beautiful-young-woman-inhaling-smoke-young-girl-vaping.jpg',
    title: 'THE WORLD OF ROYAL PUFF AWAITS',
    subtitle: 'Explore a premium selection of vape devices and e-liquids',
  },
  {
    id: 2,
    image: '/images/man-vaping-electronic-cigarette.jpg',
    title: 'AWARD WINNING E-LIQUIDS',
    subtitle: 'Crafted with precision and passion for the perfect vape',
  },
  {
    id: 3,
    image: '/images/man-vaping.jpg',
    title: 'PREMIUM VAPING EXPERIENCE',
    subtitle: 'Discover the finest collection of flavors and devices',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 hero-gradient"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-10 animate-fade-in-delay">
                {slide.subtitle}
              </p>
              <div className="flex flex-col items-center justify-center space-y-3">
                <p className="text-xs md:text-sm">NICOTINE CONTENT WARNING APPLIES</p>
                <button className="btn-primary text-sm md:text-base"> CLICK HERE </button>
              </div>
            </div>
          </div>

        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-gold w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
