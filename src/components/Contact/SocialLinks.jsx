'use client'

import { useTranslation } from 'react-i18next'
import AnimateIn from '@/components/AnimateIn'
import { SiInstagram, SiSnapchat, SiTiktok } from 'react-icons/si'
import { FaWhatsapp } from 'react-icons/fa'
import { INSTAGRAM, SNAPCHAT, TIKTOK, WHATSAPP, PHONE } from './contactData'

const socialsData = [
  {
    icon: <SiInstagram className="text-2xl" />,
    label: 'Instagram',
    handle: '@starplus.barber',
    hrefFn: () => INSTAGRAM,
    gradient: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
    shadow: 'hover:shadow-pink-500/20',
  },
  {
    icon: <SiSnapchat className="text-2xl" />,
    label: 'Snapchat',
    handle: '@starplusriyadh',
    hrefFn: () => SNAPCHAT,
    gradient: 'from-yellow-400 to-yellow-300',
    shadow: 'hover:shadow-yellow-400/20',
  },
  {
    icon: <SiTiktok className="text-2xl" />,
    label: 'TikTok',
    handle: '@starplus.barber',
    hrefFn: () => TIKTOK,
    gradient: 'from-[#010101] via-[#69C9D0] to-[#EE1D52]',
    shadow: 'hover:shadow-cyan-400/20',
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,
    label: 'WhatsApp',
    handle: PHONE,
    hrefFn: () => `https://wa.me/${WHATSAPP}`,
    gradient: 'from-emerald-500 to-emerald-400',
    shadow: 'hover:shadow-emerald-500/20',
  },
]

export default function SocialLinks() {
  const { t } = useTranslation()

  return (
    <AnimateIn>
      <div className="bg-card border border-border rounded-3xl overflow-hidden">

        <div className="h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="p-6 sm:p-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-2 block">
            {t('Follow Us')}
          </span>
          <h3 className="text-xl font-black uppercase tracking-tight text-foreground mb-6">
            {t('Stay')} <span className="text-gold-gradient">{t('Connected')}</span>
          </h3>

          <div className="flex flex-col gap-3">
            {socialsData.map((s, i) => (
              <a
                key={i}
                href={s.hrefFn()}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-transparent bg-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${s.shadow}`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground font-bold text-sm group-hover:text-gold transition-colors">
                    {s.label}
                  </p>
                  <p className="text-muted text-xs truncate">{s.handle}</p>
                </div>
                <span className="text-muted text-xs group-hover:text-gold transition-colors">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimateIn>
  )
}
