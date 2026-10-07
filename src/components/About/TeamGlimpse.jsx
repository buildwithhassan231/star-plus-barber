'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import AnimateIn from '@/components/AnimateIn'
import { featuredBarbers } from '@/components/Ourbarbers/barbersData'
import { FaArrowRight, FaStar } from 'react-icons/fa'

export default function TeamGlimpse() {
  const { t } = useTranslation()

  return (
    <section className="section w-full bg-surface px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-border">

      <div className="absolute top-1/3 -start-20 w-[400px] h-[400px] bg-gold/6 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <AnimateIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
            {t('The People Behind the Magic')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            {t('Meet the')}{' '}
            <span className="text-gold-gradient">{t('Team')}</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mb-5" />
          <p className="text-muted text-sm sm:text-base">
            {t('Skilled, passionate, and dedicated — our barbers are the soul of Star Plus.')}
          </p>
        </AnimateIn>

        {/* 3 barber cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredBarbers.map((barber, i) => (
            <AnimateIn key={barber.id} delay={i * 0.12} variant="fadeUp">
              <div className="group relative bg-card border border-border hover:border-gold/50 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/8">

                <div className="relative h-56 overflow-hidden bg-background">
                  <Image src={barber.image} alt={barber.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  <div className="absolute top-3 start-3 flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border text-xs font-bold px-2.5 py-1 rounded-full">
                    <FaStar className="text-gold text-[10px]" />
                    <span className="text-foreground">{barber.rating}</span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold block mb-1">
                    {barber.role}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-wide text-foreground group-hover:text-gold transition-colors mb-1">
                    {barber.name}
                  </h3>
                  <p className="text-xs text-muted">{barber.specialty}</p>
                </div>

              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="text-center" delay={0.2}>
          <Link
            href="/barbers"
            className="btn-outline inline-flex items-center gap-3 text-sm uppercase tracking-wider rounded-full px-8 py-4 group"
          >
            <span>{t('Meet All Our Barbers')}</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimateIn>

      </div>
    </section>
  )
}
