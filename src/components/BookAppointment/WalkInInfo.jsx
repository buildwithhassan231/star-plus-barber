'use client'

import { useTranslation } from 'react-i18next'
import { FaClock, FaWalking, FaMapMarkerAlt } from 'react-icons/fa'
import AnimateIn from '@/components/AnimateIn'
import { hours } from './bookData'

export default function WalkInInfo() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-6">

      {/* Walk-in note */}
      <AnimateIn variant="fadeLeft">
        <div className="relative bg-card border border-gold/30 rounded-2xl p-6 overflow-hidden">
          <div className="absolute top-0 start-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent rounded-full" />
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-xl flex-shrink-0">
              <FaWalking />
            </div>
            <div>
              <h4 className="text-foreground font-black uppercase tracking-wide text-base mb-1">
                {t('Walk-ins Welcome_book')}
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                {t("No appointment? No problem. Walk in anytime during our working hours and we'll take care of you. Booking ahead just guarantees your preferred time slot.")}
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Hours table */}
      <AnimateIn variant="fadeLeft" delay={0.1}>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <FaClock />
            </div>
            <h4 className="text-foreground font-black uppercase tracking-wide text-base">
              {t('Opening Hours')}
            </h4>
          </div>

          <div className="flex flex-col gap-2.5">
            {hours.map(({ day, time }) => (
              <div key={day} className="flex items-center justify-between text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0">
                <span className="text-muted">{t(day)}</span>
                <span className={`font-bold ${
                  time === 'CLOSED'        ? 'text-red-400' :
                  time.includes('3:00 AM') ? 'text-gold'    :
                  'text-foreground'
                }`}>
                  {t(time)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gold/10 border border-gold/20">
            <FaClock className="text-gold text-xs flex-shrink-0" />
            <span className="text-gold text-xs font-semibold">{t('Open daily until 3:00 AM')}</span>
          </div>
        </div>
      </AnimateIn>

      {/* Location */}
      <AnimateIn variant="fadeLeft" delay={0.2}>
        <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h4 className="text-foreground font-bold uppercase tracking-wide text-sm mb-1">
              {t('Find Us_book')}
            </h4>
            <p className="text-muted text-sm">{t('Olaya District, Riyadh, Saudi Arabia')}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold mt-2 hover:text-gold-light transition-colors"
            >
              <FaMapMarkerAlt className="text-[10px]" />
              {t('Get Directions →')}
            </a>
          </div>
        </div>
      </AnimateIn>

    </div>
  )
}
