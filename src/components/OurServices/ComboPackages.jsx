'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaClock, FaCalendarCheck, FaFire, FaCrown, FaGem } from 'react-icons/fa'
import { GiScissors, GiRazorBlade, GiComb } from 'react-icons/gi'
import { MdSpa } from 'react-icons/md'

const combos = [
  {
    id: 'c1',
    badge: 'Most Popular',
    badgeIcon: <FaFire />,
    highlight: true,
    name: 'Signature Combo',
    tagline: 'Haircut + Beard',
    includes: [
      { icon: <GiScissors />, text: 'Royal Fade Haircut' },
      { icon: <GiRazorBlade />, text: 'Beard Sculpting & Line-up' },
      { icon: <MdSpa />, text: 'Hot Towel Finish' },
    ],
    price: 160,
    originalPrice: 180,
    time: 75,
    note: null,
  },
  {
    id: 'c2',
    badge: 'Best Value',
    badgeIcon: <FaCrown />,
    highlight: false,
    name: 'Premium Groom',
    tagline: 'Haircut + Beard + Facial',
    includes: [
      { icon: <GiScissors />, text: 'Precision Haircut & Style' },
      { icon: <GiRazorBlade />, text: 'Full Beard Sculpting' },
      { icon: <MdSpa />, text: 'Executive Facial & Scrub' },
      { icon: <GiComb />, text: 'Scalp Massage' },
    ],
    price: 280,
    originalPrice: 330,
    time: 120,
    note: 'Prices may vary by hair length',
  },
  {
    id: 'c3',
    badge: 'VIP',
    badgeIcon: <FaGem />,
    highlight: false,
    name: 'Royal VIP Package',
    tagline: 'Full Grooming Experience',
    includes: [
      { icon: <GiScissors />, text: 'Royal Haircut & Blow Dry' },
      { icon: <GiRazorBlade />, text: 'Beard Shaping & Hot Towel' },
      { icon: <MdSpa />, text: 'Facial + Keratin Treatment' },
      { icon: <GiComb />, text: 'Head Massage & Mani-Pedi' },
    ],
    price: 450,
    originalPrice: 540,
    time: 180,
    note: 'Prices may vary by hair length',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ComboPackages() {
  return (
    <section className="section w-full bg-surface px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
            Save More, Look Better
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Combo <span className="text-gold-gradient">Packages</span>
          </h2>
          <div className="w-16 h-[3px] bg-gold mx-auto rounded-full mb-4" />
          <p className="text-muted text-sm sm:text-base max-w-xl mx-auto">
            Bundle your favourite services and save — crafted for the gentleman who wants it all.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {combos.map((combo, i) => (
            <motion.div
              key={combo.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                combo.highlight
                  ? 'bg-card border-gold shadow-xl shadow-gold/10'
                  : 'bg-card border-border hover:border-gold/50'
              }`}
            >
              {/* Highlight top glow bar */}
              {combo.highlight && (
                <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}

              {/* Badge */}
              <div className={`absolute top-4 end-4 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                combo.highlight ? 'bg-gold text-background' : 'bg-gold/15 text-gold border border-gold/30'
              }`}>
                <span>{combo.badgeIcon}</span>
                {combo.badge}
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 gap-5">

                {/* Name & tagline */}
                <div className="pe-20">
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-foreground mb-1">
                    {combo.name}
                  </h3>
                  <p className="text-xs text-gold font-semibold uppercase tracking-widest">
                    {combo.tagline}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Includes list */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {combo.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted">
                      <span className="w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-xs flex-shrink-0">
                        {item.icon}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>

                {/* Price row */}
                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-gold">{combo.price}</span>
                      <span className="text-xs text-muted font-semibold">SAR</span>
                    </div>
                    <span className="text-xs text-muted line-through">{combo.originalPrice} SAR</span>
                    <span className="ms-2 text-xs font-bold text-emerald-400">
                      Save {combo.originalPrice - combo.price} SAR
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <FaClock className="text-gold" />
                    {combo.time} min
                  </div>
                </div>

                {/* Note */}
                {combo.note && (
                  <p className="text-[11px] text-muted/70 italic border-s-2 border-gold/30 ps-3">
                    * {combo.note}
                  </p>
                )}

                {/* Book button */}
                <Link
                  href={`/book?package=${combo.id}`}
                  className={`w-full text-center flex items-center justify-center gap-2 py-3 rounded-full text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                    combo.highlight
                      ? 'bg-gold hover:bg-gold-light text-background shadow-lg hover:shadow-gold/30'
                      : 'btn-outline rounded-full'
                  }`}
                >
                  <FaCalendarCheck />
                  Book This Package
                </Link>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
