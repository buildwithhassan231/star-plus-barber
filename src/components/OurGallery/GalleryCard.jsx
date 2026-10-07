'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { FaInstagram } from 'react-icons/fa6'

export default function GalleryCard({ item }) {
  const { t } = useTranslation()

  return (
    <div className="group relative h-[300px] sm:h-[340px] rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold/10 cursor-pointer">

      {/* Image */}
      <Image
        src={item.image}
        alt={t(item.title)}
        fill
        priority
        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Category tag */}
      <div className="absolute top-4 start-4 z-10">
        <span className="bg-background/80 backdrop-blur-md border border-border text-gold-light text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
          {t(item.category)}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 start-0 end-0 p-6 z-10 flex items-end justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-gold-light transition-colors uppercase tracking-wide leading-snug">
            {t(item.title)}
          </h3>
          <p className="text-xs text-muted mt-1 font-medium">
            {t('Riyadh Shop Highlights')}
          </p>
        </div>

        {/* Instagram hover icon */}
        <div className="w-10 h-10 rounded-full bg-gold text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex-shrink-0 ms-2">
          <FaInstagram className="text-lg" />
        </div>
      </div>
    </div>
  )
}
