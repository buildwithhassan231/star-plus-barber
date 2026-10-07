'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { FaCalendarCheck, FaWhatsapp, FaInstagram, FaStar } from 'react-icons/fa'

const ease = [0.22, 1, 0.36, 1]

function SecondaryButton({ btn }) {
  const base = 'w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-extrabold text-sm uppercase tracking-widest transition-all duration-300'

  if (btn.variant === 'whatsapp') {
    return (
      <a href={btn.href} target="_blank" rel="noreferrer" className={`${base} btn-outline`}>
        <FaWhatsapp className="text-base" /> {btn.label}
      </a>
    )
  }
  if (btn.variant === 'instagram') {
    return (
      <a href={btn.href} target="_blank" rel="noreferrer"
        className={`${base} text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20`}>
        <FaInstagram className="text-base" /> {btn.label}
      </a>
    )
  }
  return (
    <Link href={btn.href ?? '#'} className={`${base} btn-outline`}>
      {btn.label}
    </Link>
  )
}

export default function CTABanner({
  eyebrow          = 'Ready to Begin?',
  heading          = 'Ready for Your',
  headingHighlight = 'Best Look?',
  description      = "Book a session with one of our master barbers today. Walk in, or reserve your seat in seconds — we're open daily until 3 AM.",
  primaryBtn       = { label: 'Book Appointment', href: '/book' },
  secondaryBtn     = { label: 'Chat on WhatsApp', href: 'https://wa.me/966576984355', variant: 'whatsapp' },
  trustNote        = 'No hidden charges · Walk-ins welcome · Open daily till 3 AM',
  showStars        = false,
  bg               = 'background',
}) {
  const { t } = useTranslation()
  const sectionBg = bg === 'surface' ? 'bg-surface border-t border-border' : 'bg-background'

  return (
    <section className={`w-full ${sectionBg} px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 relative overflow-hidden`}>

      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-gold/6 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 pt-16 md:pt-20">
        <motion.div
          className="relative rounded-3xl overflow-hidden border border-gold/30 bg-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(135deg, #c9a24d 0px, #c9a24d 1px, transparent 1px, transparent 50px)' }} />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gold/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative px-6 sm:px-12 py-14 sm:py-16 flex flex-col items-center text-center gap-5">

            {/* Stars */}
            {showStars && (
              <motion.div className="flex items-center gap-1.5 text-gold"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}>
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-lg sm:text-xl" />)}
              </motion.div>
            )}

            {/* Eyebrow */}
            <motion.span className="text-xs font-bold uppercase tracking-[0.25em] text-gold"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}>
              {t(eyebrow)}
            </motion.span>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.65, ease }}>
              {t(heading)}{' '}
              <span className="text-gold-gradient">{t(headingHighlight)}</span>
            </motion.h2>

            {/* Divider */}
            <motion.div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} />

            {/* Description */}
            <motion.p className="text-muted text-sm sm:text-base max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.45, duration: 0.55 }}>
              {t(description)}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.55, duration: 0.55 }}>

              {primaryBtn && (
                <Link href={primaryBtn.href ?? '/book'}
                  className="btn-gold w-full sm:w-auto text-sm uppercase tracking-widest rounded-full px-8 py-4 flex items-center justify-center gap-2">
                  <FaCalendarCheck />
                  {t(primaryBtn.label)}
                </Link>
              )}

              {secondaryBtn && (
                <SecondaryButton btn={{ ...secondaryBtn, label: t(secondaryBtn.label) }} />
              )}
            </motion.div>

            {/* Trust note */}
            {trustNote && (
              <motion.p className="text-muted text-xs tracking-wide"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.7 }}>
                {t(trustNote)}
              </motion.p>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  )
}
