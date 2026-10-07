'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { FaChevronUp, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'
import { SiInstagram, SiSnapchat, SiTiktok } from 'react-icons/si'
import AnimateIn from './AnimateIn'

const quickLinksData = [
  { nameKey: 'Home',              href: '/' },
  { nameKey: 'Services & Prices', href: '/services' },
  { nameKey: 'Our Barbers',       href: '/barbers' },
  { nameKey: 'Gallery',           href: '/gallery' },
  { nameKey: 'About Us',          href: '/about' },
  { nameKey: 'Book Appointment',  href: '/book' },
  { nameKey: 'Contact',           href: '/contact' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', icon: <SiInstagram />, hover: 'hover:text-pink-400 hover:border-pink-400' },
  { label: 'Snapchat',  href: 'https://snapchat.com',  icon: <SiSnapchat />,  hover: 'hover:text-yellow-300 hover:border-yellow-300' },
  { label: 'TikTok',    href: 'https://tiktok.com',    icon: <SiTiktok />,    hover: 'hover:text-foreground hover:border-foreground' },
]

const hoursData = [
  { dayKey: 'Mon – Thu', timeKey: '10:00 AM – 7:00 PM' },
  { dayKey: 'Friday',    timeKey: '10:00 AM – TBD' },
  { dayKey: 'Saturday',  timeKey: 'CLOSED' },
  { dayKey: 'Sunday',    timeKey: '10:00 AM – 5:00 PM' },
]

const Footer = () => {
  const { t } = useTranslation()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-surface border-t border-border overflow-hidden">

      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        <AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-border">

            {/* Col 1 — Brand */}
            <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.jpg"
                  alt="Star Plus Barber"
                  width={140}
                  height={70}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="text-muted text-sm leading-relaxed max-w-xs">
                {t("Riyadh's most premium barbering destination — where precision craft meets luxury grooming.")}
              </p>
              <p className="text-muted text-sm leading-relaxed max-w-xs">
                {t("Walk in and leave looking your absolute best. Open daily, late night.")}
              </p>

              <div className="flex items-center gap-3 pt-1">
                {socials.map(({ label, href, icon, hover }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 rounded-full border border-border text-muted flex items-center justify-center text-base transition-all duration-300 hover:scale-110 ${hover}`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-foreground font-bold uppercase tracking-widest text-xs after:block after:w-8 after:h-[2px] after:bg-gold after:mt-2">
                {t('Quick Links')}
              </h3>
              <ul className="flex flex-col gap-2">
                {quickLinksData.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                      {t(link.nameKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Hours */}
            <div className="flex flex-col gap-4">
              <h3 className="text-foreground font-bold uppercase tracking-widest text-xs after:block after:w-8 after:h-[2px] after:bg-gold after:mt-2">
                {t('Hours_footer')}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {hoursData.map(({ dayKey, timeKey }) => (
                  <li key={dayKey} className="flex justify-between items-center text-xs border-b border-border/50 pb-2 last:border-0">
                    <span className="text-muted">{t(dayKey)}</span>
                    <span className={`font-semibold ${
                      timeKey === 'CLOSED'          ? 'text-red-400'  :
                      timeKey.includes('3 AM')      ? 'text-gold'     :
                      'text-foreground'
                    }`}>
                      {t(timeKey)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 mt-1 px-3 py-2 rounded-lg bg-gold/10 border border-gold/20">
                <FaClock className="text-gold text-xs flex-shrink-0" />
                <span className="text-gold text-xs font-semibold">{t('Open daily till 3:00 AM')}</span>
              </div>
            </div>

            {/* Col 4 — Find Us */}
            <div className="flex flex-col gap-4">
              <h3 className="text-foreground font-bold uppercase tracking-widest text-xs after:block after:w-8 after:h-[2px] after:bg-gold after:mt-2">
                {t('Find Us_footer')}
              </h3>

              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-start gap-2.5 text-muted">
                  <FaMapMarkerAlt className="text-gold mt-0.5 flex-shrink-0" />
                  <span>
                    {t('Olaya District, Riyadh')}<br />
                    {t('Saudi Arabia')}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-muted">
                  <FaPhone className="text-gold flex-shrink-0" />
                  <a href="tel:+966576984355" className="hover:text-gold transition-colors">
                    +966 57 698 4355
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="group relative mt-1 rounded-xl overflow-hidden border border-border hover:border-gold transition-colors duration-300 block"
              >
                <div className="w-full h-28 bg-card flex items-center justify-center gap-2 text-muted group-hover:text-gold transition-colors text-xs font-semibold uppercase tracking-wider">
                  <FaMapMarkerAlt className="text-gold text-sm" />
                  {t('View on Google Maps')}
                </div>
              </a>
            </div>

          </div>
        </AnimateIn>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 <span className="text-gold font-semibold">Star Plus Barber</span>. {t('All rights reserved.')}</p>
          <p>{t('Designed by')} <span className="text-foreground font-medium">Hassan</span></p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full border border-border text-muted hover:text-gold hover:border-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <FaChevronUp className="text-xs" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
