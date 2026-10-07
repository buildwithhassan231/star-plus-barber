'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { FaCalendarCheck, FaStar, FaInstagram } from 'react-icons/fa6'

export default function BarberCard({ barber }) {
  const { t } = useTranslation()

  return (
    <div className="group relative bg-card border border-border hover:border-gold/60 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 flex flex-col justify-between">

      {/* Image */}
      <div className="relative w-full h-[320px] sm:h-[360px] overflow-hidden bg-surface">
        <Image
          src={barber.image}
          alt={barber.name}
          fill
          priority
          className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-black/30" />

        {/* Rating badge */}
        <div className="absolute top-4 start-4 bg-background/80 backdrop-blur-md border border-border text-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
          <FaStar className="text-gold text-xs" />
          <span>{barber.rating}</span>
          <span className="text-muted text-[10px]">({barber.reviews})</span>
        </div>

        {/* Instagram */}
        <a
          href={barber.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${barber.name} Instagram`}
          className="absolute top-4 end-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur-md border border-border text-muted hover:text-gold hover:border-gold/50 flex items-center justify-center transition-all duration-300"
        >
          <FaInstagram className="text-base" />
        </a>

        {/* Experience tag */}
        <div className="absolute bottom-3 start-4 bg-gold/20 border border-gold/40 text-gold-light text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md">
          {barber.experience}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-card">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-1">
            {barber.role}
          </span>
          <h3 className="text-xl font-bold uppercase tracking-wide text-foreground group-hover:text-gold-light transition-colors mb-2">
            {barber.name}
          </h3>
          <p className="text-xs text-muted mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
            {t('Specialty:')}{' '}
            <span className="text-foreground font-medium">{barber.specialty}</span>
          </p>
        </div>

        <Link
          href={`/book?barber=${encodeURIComponent(barber.name)}`}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-surface hover:bg-gold text-foreground hover:text-background border border-border hover:border-gold font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md group/btn"
        >
          <FaCalendarCheck className="text-sm text-gold group-hover/btn:text-background transition-colors" />
          <span>{t('Book with')} {barber.name.split(' ')[0]}</span>
        </Link>
      </div>

    </div>
  )
}
