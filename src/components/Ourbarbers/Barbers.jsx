'use client'

import { useTranslation } from 'react-i18next'
import BarberCard from './BarberCard'
import { allBarbers } from './barbersData'
import AnimateIn from '@/components/AnimateIn'

export default function Barbers() {
  const { t } = useTranslation()

  return (
    <section className="section w-full bg-background text-foreground px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="absolute top-1/3 -start-20 w-[400px] h-[400px] bg-gold/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -end-20 w-[400px] h-[400px] bg-gold-light/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <AnimateIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold mb-2 block">
            {t('The Full Team')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            {t('All Our')}{' '}
            <span className="text-gold-gradient">{t('Barbers_section')}</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-4" />
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            {t('From master stylists to rising talent — every member of our team is dedicated to your perfect grooming experience.')}
          </p>
        </AnimateIn>

        {/* All barbers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBarbers.map((barber, i) => (
            <AnimateIn key={barber.id} delay={i * 0.1} variant="fadeUp">
              <BarberCard barber={barber} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
