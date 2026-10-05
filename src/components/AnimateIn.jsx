'use client'

import { motion } from 'framer-motion'

/**
 * Reusable scroll-triggered animation wrapper.
 * Props:
 *  - variant: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'fade' (default: 'fadeUp')
 *  - delay:   number in seconds (default: 0)
 *  - duration: number in seconds (default: 0.6)
 *  - className: extra classes on the wrapper
 */

const variants = {
  fadeUp:    { hidden: { opacity: 0, y: 40 },   visible: { opacity: 1, y: 0 } },
  fadeDown:  { hidden: { opacity: 0, y: -30 },  visible: { opacity: 1, y: 0 } },
  fadeLeft:  { hidden: { opacity: 0, x: -40 },  visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 40 },   visible: { opacity: 1, x: 0 } },
  fade:      { hidden: { opacity: 0 },           visible: { opacity: 1 } },
  scaleUp:   { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
}

export default function AnimateIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
