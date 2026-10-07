"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp, FaCalendarCheck, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Hero = () => {
  const [useVideo, setUseVideo] = useState(true)
  const { t } = useTranslation()

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '966576984355'
  const whatsappMessage = encodeURIComponent('Hello! I want to book an appointment.')

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden text-white">

      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full z-0">
        {useVideo ? (
          <video
            autoPlay loop muted playsInline
            onError={() => setUseVideo(false)}
            className="w-full h-full object-cover scale-105 filter brightness-90"
          >
            <source src="/herovedio.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="hero.jpg"
            alt="Premium Grooming Experience in Riyadh"
            fill priority
            className="object-cover object-center scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-2 pt-20">

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md max-w-4xl">
          {t("Riyadh's")}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            {t("Premium Grooming")}
          </span>{' '}
          {t("Experience")}
        </h1>

        {/* Sub-line */}
        <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light tracking-wide leading-relaxed">
          {t("Luxury Haircuts, Beard Sculpting & Royal Spa Treatments in the heart of Riyadh. Late-night premium barbering tailored for you.")}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4">
          <Link
            href="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaCalendarCheck className="text-base" />
            {t("Book Now")}
          </Link>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-emerald-600/20 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaWhatsapp className="text-lg" />
            {t("WhatsApp")}
          </a>
        </div>

        {/* Location & Timing Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 mt-5 rounded-full bg-black/60 border border-amber-500/40 backdrop-blur-md shadow-lg">
          <span className="flex items-center text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <FaMapMarkerAlt className="me-1.5 text-amber-500" />
            {t("Olaya, Riyadh")}
          </span>
          <span className="text-gray-500 text-xs">•</span>
          <span className="flex items-center text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
            <FaClock className="me-1.5 text-emerald-400" />
            {t("Open till 3 AM")}
          </span>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
