'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { FaClock, FaCalendarCheck } from 'react-icons/fa'
import { GiRazorBlade, GiComb, GiScissors } from 'react-icons/gi'
import { MdColorLens, MdSpa } from 'react-icons/md'

/* ── Raw data — keys match translations.json ── */
const categories = [
  {
    id: 'haircut',
    labelKey: 'Haircut',
    icon: <GiScissors />,
    services: [
      { id: 'h1', nameKey: 'Classic Taper Cut',          descKey: 'Clean taper with precise scissor work and blending tailored to your face shape.',                     price: 80,  time: 30 },
      { id: 'h2', nameKey: 'Royal Fade',                  descKey: 'Signature skin fade blended to perfection — from low to high, your style your choice.',              price: 100, time: 40 },
      { id: 'h3', nameKey: 'Textured Crop',               descKey: 'Modern disconnected crop with textured top and sharp line-up.',                                       price: 90,  time: 35 },
      { id: 'h4', nameKey: 'Hair Wash & Blow Dry',        descKey: 'Deep cleanse with premium shampoo, conditioning mask, and professional blow-dry finish.',             price: 60,  time: 25 },
      { id: 'h5', nameKey: 'Kids Haircut (Under 12)',     descKey: 'Gentle and fun haircut experience for little ones with premium products.',                            price: 50,  time: 20 },
    ],
  },
  {
    id: 'beard',
    labelKey: 'Beard',
    icon: <GiRazorBlade />,
    services: [
      { id: 'b1', nameKey: 'Beard Sculpting',             descKey: 'Razor-sharp line-up, edge definition and shape trim for a clean powerful look.',                     price: 60,  time: 25 },
      { id: 'b2', nameKey: 'Hot Towel Shave',             descKey: 'Traditional straight-razor shave with hot towel prep and post-shave balm.',                          price: 80,  time: 35 },
      { id: 'b3', nameKey: 'Beard Oil Massage',           descKey: 'Nourishing beard oil massage to soften, condition and add natural shine.',                           price: 40,  time: 15 },
      { id: 'b4', nameKey: 'Full Beard & Moustache Trim', descKey: 'Complete beard and moustache shaping with comb, scissors and precision trimmer.',                    price: 70,  time: 30 },
    ],
  },
  {
    id: 'colouring',
    labelKey: 'Colouring',
    icon: <MdColorLens />,
    services: [
      { id: 'c1', nameKey: 'Full Hair Colour',            descKey: 'Professional single-process colour application with premium ammonia-free dye.',                      price: 180, time: 75 },
      { id: 'c2', nameKey: 'Beard Colour',                descKey: 'Natural-looking beard colour to cover greys or match your preferred shade.',                         price: 80,  time: 30 },
      { id: 'c3', nameKey: 'Highlights / Lowlights',      descKey: 'Dimensional colour technique for natural depth and contrast.',                                       price: 220, time: 90 },
      { id: 'c4', nameKey: 'Grey Coverage Treatment',     descKey: 'Targeted grey blending with colour matched to your natural base.',                                   price: 150, time: 60 },
    ],
  },
  {
    id: 'styling',
    labelKey: 'Styling',
    icon: <GiComb />,
    services: [
      { id: 's1', nameKey: 'Hair Keratin Treatment',      descKey: 'Smoothing treatment to reduce frizz, nourish roots, and provide long-lasting shine.',                price: 250, time: 90 },
      { id: 's2', nameKey: 'Scalp Treatment & Massage',   descKey: 'Deep scalp exfoliation followed by a relaxing oil massage to stimulate growth.',                    price: 120, time: 45 },
      { id: 's3', nameKey: 'Pomade Style & Finish',       descKey: 'Custom styling with premium pomade, wax or clay — finished to your desired look.',                  price: 50,  time: 15 },
      { id: 's4', nameKey: 'Executive Facial & Scrub',    descKey: 'Deep pore cleanse, blackhead removal, herbal steam and hydrating face mask.',                        price: 150, time: 60 },
    ],
  },
  {
    id: 'packages',
    labelKey: 'Packages',
    icon: <MdSpa />,
    services: [
      { id: 'p1', nameKey: 'Signature Combo',             descKey: 'Royal Fade + Beard Sculpting + Hot Towel — the complete everyday gentleman package.',                price: 160, time: 75 },
      { id: 'p2', nameKey: 'Premium Groom Package',       descKey: 'Haircut + Beard + Facial + Scalp Massage — arrive fresh, leave transformed.',                       price: 280, time: 120 },
      { id: 'p3', nameKey: 'VIP Royal Package',           descKey: 'Full haircut, beard shaping, facial, keratin treatment, head massage and mani-pedi.',               price: 450, time: 180 },
      { id: 'p4', nameKey: 'Wedding Groom Package',       descKey: 'Premium pre-wedding grooming: hair, beard, facial, styling and fragrance consultation.',             price: 350, time: 150 },
    ],
  },
]

const listVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.25 } },
}

export default function Categories() {
  const { t } = useTranslation()
  const [active, setActive] = useState('haircut')
  const current = categories.find((c) => c.id === active)

  return (
    <section className="section w-full bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                active === cat.id
                  ? 'bg-gold text-background border-gold shadow-lg shadow-gold/25'
                  : 'bg-card text-muted border-border hover:border-gold/50 hover:text-gold'
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              {t(cat.labelKey)}
              {active === cat.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Services List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          >
            {current.services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-card border border-border hover:border-gold/50 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1"
              >
                {/* Name + price */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-foreground uppercase tracking-wide group-hover:text-gold transition-colors duration-200 leading-snug">
                    {t(service.nameKey)}
                  </h3>
                  <span className="text-xl font-black text-gold whitespace-nowrap">
                    {service.price} <span className="text-xs font-semibold text-muted">SAR</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed flex-1">
                  {t(service.descKey)}
                </p>

                {/* Time + Book */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="flex items-center gap-1.5 text-xs text-muted font-medium">
                    <FaClock className="text-gold text-xs" />
                    {service.time} {t('min')}
                  </span>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="flex items-center gap-2 bg-gold hover:bg-gold-light text-background text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-gold/30 hover:-translate-y-0.5"
                  >
                    <FaCalendarCheck className="text-xs" />
                    {t('Book')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
