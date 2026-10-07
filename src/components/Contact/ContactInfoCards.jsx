'use client'

import { useTranslation } from 'react-i18next'
import AnimateIn from '@/components/AnimateIn'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { PHONE, WHATSAPP, ADDRESS, hours } from './contactData'

export default function ContactInfoCards() {
  const { t } = useTranslation()

  const cards = [
    {
      icon: <FaPhone />,
      labelKey: 'Call Us_card',
      value: PHONE,
      subKey: 'Available during working hours',
      href: `tel:${PHONE}`,
      color: 'text-blue-400 bg-blue-400/10 border-blue-400/20 group-hover:bg-blue-400/15 group-hover:border-blue-400/40',
      isHours: false,
    },
    {
      icon: <FaWhatsapp />,
      labelKey: 'WhatsApp',
      value: PHONE,
      subKey: 'Quick reply guaranteed',
      href: `https://wa.me/${WHATSAPP}`,
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20 group-hover:bg-emerald-400/15 group-hover:border-emerald-400/40',
      external: true,
      isHours: false,
    },
    {
      icon: <FaMapMarkerAlt />,
      labelKey: 'Address',
      valueKey: 'Olaya District, Riyadh, Saudi Arabia',
      subKey: 'Olaya District, Riyadh',
      href: 'https://maps.google.com/?q=Olaya+Riyadh',
      color: 'text-gold bg-gold/10 border-gold/20 group-hover:bg-gold/15 group-hover:border-gold/40',
      external: true,
      isHours: false,
    },
    {
      icon: <FaClock />,
      labelKey: 'Hours_card',
      valueKey: 'Open Daily',
      subKey: 'Until 3:00 AM every night',
      href: null,
      color: 'text-rose-400 bg-rose-400/10 border-rose-400/20 group-hover:bg-rose-400/15 group-hover:border-rose-400/40',
      isHours: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
      {cards.map((card, i) => {
        const Tag = card.href ? 'a' : 'div'
        const linkProps = card.href
          ? { href: card.href, ...(card.external ? { target: '_blank', rel: 'noreferrer' } : {}) }
          : {}

        return (
          <AnimateIn key={i} delay={i * 0.1} variant="fadeUp">
            <Tag
              {...linkProps}
              className="group flex items-start gap-4 bg-card border border-border hover:border-gold/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 block"
            >
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${card.color}`}>
                {card.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-1">
                  {t(card.labelKey)}
                </p>
                <p className="text-foreground font-bold text-sm sm:text-base group-hover:text-gold transition-colors truncate">
                  {card.value ?? t(card.valueKey)}
                </p>
                <p className="text-muted text-xs mt-0.5">{t(card.subKey)}</p>

                {/* Hours mini table */}
                {card.isHours && (
                  <div className="mt-3 flex flex-col gap-1">
                    {hours.map(h => (
                      <div key={h.day} className="flex items-center justify-between text-[11px] gap-3">
                        <span className="text-muted">{t(h.day)}</span>
                        <span className={`font-semibold ${h.closed ? 'text-red-400' : 'text-foreground'}`}>
                          {t(h.time)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Tag>
          </AnimateIn>
        )
      })}
    </div>
  )
}
