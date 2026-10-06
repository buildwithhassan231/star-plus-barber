'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaChevronRight, FaHome } from 'react-icons/fa'

/**
 * PageBanner — reusable hero banner for all non-home pages.
 *
 * Props:
 *  - heading     {string}  required — page title  e.g. "Our Services"
 *  - description {string}  optional — short subtitle
 *  - breadcrumb  {string}  optional — current page label for breadcrumb (defaults to heading)
 */
export default function PageBanner({ heading, description, breadcrumb }) {
  const crumb = breadcrumb || heading

  return (
    <section className="relative w-full pt-28 md:pt-32 overflow-hidden">

      {/* ── Dark background with subtle pattern ── */}
      <div className="absolute inset-0 bg-background">
        {/* Gold radial glow — top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold/10 blur-[100px] rounded-full" />
        {/* Faint diagonal lines overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #c9a24d 0px, #c9a24d 1px, transparent 1px, transparent 60px)',
          }}
        />
      </div>

      {/* ── Gold top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center">

        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200">
            <FaHome className="text-gold" />
            Home
          </Link>
          <FaChevronRight className="text-[10px] text-border" />
          <span className="text-gold">{crumb}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-tight mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-gold-gradient">{heading}</span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          className="w-20 h-[3px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent mb-5"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        />

        {/* Description */}
        {description && (
          <motion.p
            className="text-muted text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {description}
          </motion.p>
        )}

      </div>

      {/* ── Bottom fade into page ── */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />

    </section>
  )
}
