'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaUserCheck, FaPumpSoap, FaClock, FaDoorOpen } from 'react-icons/fa'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Trustbar = () => {
  const { t } = useTranslation()

  // SEO-enriched text keys with local entity signals
  const trustItems = [
    { 
      icon: <FaUserCheck className="text-gold text-lg md:text-xl" aria-hidden="true" />, 
      titleKey: 'Master Barbers Riyadh', 
      descKey: 'Precision Cutters & Expert Hair Stylists' 
    },
    { 
      icon: <FaPumpSoap className="text-gold text-lg md:text-xl" aria-hidden="true" />, 
      titleKey: 'Clean & Hygienic',    
      descKey: 'Sanitized Tools & Royal Towel Care' 
    },
    { 
      icon: <FaClock className="text-gold text-lg md:text-xl" aria-hidden="true" />, 
      titleKey: 'Late Night Barbering',     
      descKey: 'Open Daily Until 3:00 AM' 
    },
    { 
      icon: <FaDoorOpen className="text-gold text-lg md:text-xl" aria-hidden="true" />, 
      titleKey: 'Walk-Ins Welcome',     
      descKey: 'No Prior Appointment Needed' 
    },
  ]

  return (
    <aside 
      aria-label="Star Plus Barber Highlights" 
      className="w-full bg-surface border-y border-border py-4 md:py-6 px-4 relative z-20 shadow-xl"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {trustItems.map((ti, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center gap-3 md:gap-4 p-2.5 sm:p-3 rounded-xl bg-card border border-border hover:border-gold/40 transition-all duration-300 group"
            >
              <div 
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300"
              >
                {ti.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-gold transition-colors duration-200">
                  {t(ti.titleKey)}
                </h3>
                <p className="text-[10px] sm:text-xs text-muted line-clamp-1 font-medium m-0">
                  {t(ti.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </aside>
  )
}

export default Trustbar