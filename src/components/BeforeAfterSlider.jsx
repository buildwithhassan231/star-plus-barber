"use client"
import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const TransformationSlider = ({ beforeImg, afterImg, titleKey, subtitleKey }) => {
  const { t } = useTranslation()
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX, rect) => {
    let pct = ((clientX - rect.left) / rect.width) * 100
    if (pct < 0) pct = 0
    if (pct > 100) pct = 100
    setSliderPos(pct)
  }

  return (
    <div className="bg-[#1a1a1d] border border-[#2a2a2e] hover:border-[#c9a24d]/50 rounded-2xl p-4 sm:p-6 transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-lg font-bold uppercase tracking-wide text-[#f5f1e8]">{t(titleKey)}</h3>
        <p className="text-xs text-[#a1a1a6] mt-0.5">{t(subtitleKey)}</p>
      </div>

      <div
        className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden select-none cursor-ew-resize touch-none bg-[#141416]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => { if (!isDragging) return; handleMove(e.clientX, e.currentTarget.getBoundingClientRect()) }}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={(e) => { if (!isDragging) return; handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect()) }}
      >
        {/* After image — full background */}
        <Image src={afterImg} alt="After Grooming" fill priority className="object-cover object-center pointer-events-none" />
        <div className="absolute top-4 end-4 bg-[#0b0b0c]/80 backdrop-blur-md border border-[#2a2a2e] text-[#c9a24d] text-[10px] font-bold uppercase px-3 py-1 rounded-full z-10">
          {t("After")}
        </div>

        {/* Before image — clipped overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${sliderPos}%` }}>
          <div className="relative w-full h-full min-w-full">
            <Image src={beforeImg} alt="Before Grooming" fill priority className="object-cover object-center max-w-none" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div className="absolute top-4 start-4 bg-[#0b0b0c]/80 backdrop-blur-md border border-[#2a2a2e] text-[#a1a1a6] text-[10px] font-bold uppercase px-3 py-1 rounded-full z-10">
          {t("Before")}
        </div>

        {/* Divider line + knob */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e6c675] via-[#c9a24d] to-[#e6c675] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b0b0c] border-2 border-[#c9a24d] text-[#e6c675] flex items-center justify-center shadow-xl">
            <span className="text-xs font-bold font-mono">↔</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const BeforeAfterSection = () => {
  const { t } = useTranslation()

  const transformations = [
    {
      id: '01',
      titleKey:    'Beard Sculpting & Royal Fade',
      subtitleKey: 'Untamed beard turned into a sharp executive look',
      beforeImg: '/before1.jpg',
      afterImg:  '/after1.jpg',
    },
    {
      id: '02',
      titleKey:    'Classic Scissors Cut & Hot Towel Shave',
      subtitleKey: 'Long unkempt hair converted to classic taper fade',
      beforeImg: '/b1.webp',
      afterImg:  '/b2.jpg',
    },
  ]

  return (
    <section className="w-full bg-[#0b0b0c] text-[#f5f1e8] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#2a2a2e]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#c9a24d] mb-2 block">
            {t("Real Results")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f5f1e8] mb-4">
            {t("The")}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6c675] via-[#c9a24d] to-[#e6c675]">
              {t("Transformation")}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c9a24d] to-[#e6c675] mx-auto rounded-full mb-4" />
          <p className="text-[#a1a1a6] text-sm sm:text-base">
            {t("Drag the slider left or right for see the difference in our precision cuts en beard sculpting.")}
          </p>
        </div>

        {/* 2 Slider Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transformations.map((item) => (
            <TransformationSlider key={item.id} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default BeforeAfterSection
