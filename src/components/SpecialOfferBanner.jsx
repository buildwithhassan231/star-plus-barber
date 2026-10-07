"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { FaTag, FaClock, FaCheck, FaCalendarCheck, FaFire } from 'react-icons/fa6'

const SpecialOfferBanner = () => {
  const { t } = useTranslation()

  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 45, seconds: 30 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0)       return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0)       return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0)         return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const includedItems = [
    'Master Barber Haircut & Styling',
    'Beard Sculpting & Lineup',
    'Relaxing Hot Towel Spa',
    'Hair Wash & Scalp Massage',
  ]

  return (
    <section className="w-full bg-[#0b0b0c] text-[#f5f1e8] py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-[#2a2a2e]">

      <div className="absolute top-1/2 start-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#c9a24d]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 end-0   -translate-y-1/2 w-[450px] h-[450px] bg-[#e6c675]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="relative bg-gradient-to-r from-[#141416] via-[#1a1a1d] to-[#141416] border-2 border-[#c9a24d]/60 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(201,162,77,0.15)] overflow-hidden">

          {/* Ribbon badge — end-0 so it flips in RTL */}
          <div className="absolute top-0 end-0 bg-gradient-to-s from-[#e6c675] to-[#c9a24d] text-[#0b0b0c] font-black text-xs sm:text-sm uppercase tracking-widest px-6 py-2 rounded-es-2xl shadow-lg flex items-center gap-2">
            <FaFire className="animate-bounce" />
            <span>{t("30% OFF Limited Deal")}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 pt-4 sm:pt-0">

              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a24d]/10 border border-[#c9a24d]/30 text-[#e6c675] text-xs font-bold uppercase tracking-widest mb-4">
                <FaTag className="text-[#c9a24d]" />
                <span>{t("Executive Grooming Package")}</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f5f1e8] leading-tight mb-4">
                {t("Royal")}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6c675] via-[#c9a24d] to-[#e6c675]">
                  {t("Haircut + Beard")}
                </span>{' '}
                {t("Combo")}
              </h2>

              <p className="text-[#a1a1a6] text-sm sm:text-base leading-relaxed mb-6">
                {t("Complete makeover package which includes Master Precision Cut, Beard Sculpting, Hot Towel Therapy, and Executive Styling.")}
              </p>

              {/* Included Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {includedItems.map((itemKey, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#f5f1e8]">
                    <div className="w-5 h-5 rounded-full bg-[#c9a24d]/20 border border-[#c9a24d] flex items-center justify-center text-[#e6c675] text-[10px] flex-shrink-0">
                      <FaCheck />
                    </div>
                    <span>{t(itemKey)}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#e6c675]">SAR 80</span>
                  <span className="text-lg text-[#a1a1a6] line-through font-semibold">SAR 120</span>
                </div>
                <Link
                  href="/book?offer=haircut-beard-combo"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a24d] to-[#e6c675] hover:from-[#e6c675] hover:to-[#c9a24d] text-[#0b0b0c] font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(201,162,77,0.4)] hover:scale-105"
                >
                  <FaCalendarCheck className="text-base" />
                  <span>{t("Claim Package Offer")}</span>
                </Link>
              </div>

            </div>

            {/* Right — Image + Countdown */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">

              <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-[#2a2a2e] bg-[#0b0b0c] mb-6 shadow-2xl group">
                <Image
                  src="/offer-combo.jpg"
                  alt="Haircut and Beard Combo Special Offer"
                  fill priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 start-4 end-4 bg-[#0b0b0c]/90 backdrop-blur-md border border-[#2a2a2e] rounded-xl p-3 text-center">
                  <p className="text-xs text-[#a1a1a6]">
                    {t("* Offer valid on online booking with any master barber")}
                  </p>
                </div>
              </div>

              {/* Countdown */}
              <div className="w-full bg-[#0b0b0c]/80 backdrop-blur-md border border-[#2a2a2e] rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#a1a1a6] uppercase tracking-wider">
                  <FaClock className="text-[#c9a24d] animate-spin" style={{ animationDuration: '6s' }} />
                  <span>{t("Ends In:")}</span>
                </div>

                <div className="flex items-center gap-2 text-center">
                  {[
                    { val: timeLeft.hours,   labelKey: 'Hours' },
                    { val: timeLeft.minutes, labelKey: 'Mins' },
                    { val: timeLeft.seconds, labelKey: 'Secs' },
                  ].map(({ val, labelKey }, idx) => (
                    <div key={labelKey} className="flex items-center gap-2">
                      {idx > 0 && <span className="text-[#c9a24d] font-bold">:</span>}
                      <div className="bg-[#1a1a1d] border border-[#2a2a2e] px-3 py-1.5 rounded-lg min-w-[48px]">
                        <span className="text-base font-black text-[#e6c675] block leading-none">
                          {String(val).padStart(2, '0')}
                        </span>
                        <span className="text-[9px] text-[#a1a1a6] uppercase font-bold">
                          {t(labelKey)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOfferBanner
