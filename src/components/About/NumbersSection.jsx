'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaCalendarAlt, FaUserCheck, FaStar } from 'react-icons/fa'

const statsData = [
  { icon: <FaCalendarAlt />, value: 12,   suffix: '+', labelKey: 'Years of Experience', descKey: 'Serving Riyadh since 2012' },
  { icon: <FaUserCheck />,   value: 5000, suffix: '+', labelKey: 'Happy Customers',     descKey: 'And counting every day' },
  { icon: <FaStar />,        value: 4.9,  suffix: '',  labelKey: 'Google Rating',       descKey: 'Based on 250+ reviews', isDecimal: true },
]

function CountUp({ target, suffix, isDecimal, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [start, target, isDecimal])

  return <>{isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}</>
}

export default function NumbersSection() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="w-full bg-background px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative overflow-hidden">

      <div className="absolute top-0 start-0 end-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center gap-4 group relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-2xl group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                {stat.icon}
              </div>

              <div className="text-4xl sm:text-5xl font-black text-gold tracking-tight">
                <CountUp target={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} start={started} />
              </div>

              <div>
                <p className="text-foreground font-bold uppercase tracking-wider text-sm sm:text-base">
                  {t(stat.labelKey)}
                </p>
                <p className="text-muted text-xs mt-1">{t(stat.descKey)}</p>
              </div>

              {i < statsData.length - 1 && (
                <div className="hidden sm:block absolute end-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 start-0 end-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  )
}
