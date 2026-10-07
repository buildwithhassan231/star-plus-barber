'use client'

import { useTranslation } from 'react-i18next'
import { FaInfoCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function PriceNote() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-background px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">

        <div className="relative rounded-2xl border border-gold/30 bg-card overflow-hidden">

          {/* Gold start accent bar — flips in RTL via logical property */}
          <div className="absolute start-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">

            {/* Icon */}
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold text-2xl shadow-inner">
              <FaInfoCircle />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h4 className="text-foreground font-bold text-base sm:text-lg uppercase tracking-wide mb-2">
                {t('Pricing Notice')}
              </h4>
              <ul className="text-muted text-sm space-y-1.5 list-none">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {t('All prices listed are')}{' '}
                  <span className="text-foreground font-semibold">&nbsp;{t('starting prices')}</span>
                  {t('. Final cost may vary based on hair length, thickness, and complexity.')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {t('Colouring and keratin services may have')}{' '}
                  <span className="text-foreground font-semibold">&nbsp;{t('additional charges')}</span>
                  {t(' depending on hair length and product used.')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {t('Contact us before booking for a personalised price estimate.')}
                </li>
              </ul>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:+966576984355"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-muted hover:text-gold hover:border-gold text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <FaPhone className="text-gold" />
                {t('Call Us')}
              </a>
              <a
                href="https://wa.me/966576984355"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600/10 border border-emerald-600/30 text-emerald-400 hover:bg-emerald-600/20 text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <FaWhatsapp />
                {t('WhatsApp')}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
