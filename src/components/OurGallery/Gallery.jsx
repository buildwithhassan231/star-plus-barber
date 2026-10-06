'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { allGallery } from './galleryData'

const filters = ['All', 'Haircuts', 'Beard', 'Colour', 'Interior']

const cardVariants = {
  hidden:  { opacity: 0, scale: 0.94, y: 20 },
  visible: (i) => ({ opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] } }),
  exit:    { opacity: 0, scale: 0.92, transition: { duration: 0.2 } },
}

export default function Gallery() {
  const [active,    setActive]    = useState('All')
  const [lightbox,  setLightbox]  = useState(null) // index into filtered array

  const filtered = active === 'All' ? allGallery : allGallery.filter(i => i.category === active)

  // Keyboard navigation for lightbox
  const handleKey = useCallback((e) => {
    if (lightbox === null) return
    if (e.key === 'Escape')      setLightbox(null)
    if (e.key === 'ArrowRight')  setLightbox(p => (p + 1) % filtered.length)
    if (e.key === 'ArrowLeft')   setLightbox(p => (p - 1 + filtered.length) % filtered.length)
  }, [lightbox, filtered.length])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <section className="section w-full bg-background text-foreground px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── Filter Buttons ── */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  active === f
                    ? 'bg-gold text-background border-gold shadow-lg shadow-gold/25'
                    : 'bg-card text-muted border-border hover:border-gold/50 hover:text-gold'
                }`}
              >
                {f}
                {active === f && (
                  <motion.span layoutId="galleryTab" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold" />
                )}
              </button>
            ))}
          </motion.div>

          {/* ── Photo Grid ── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  onClick={() => setLightbox(i)}
                  className="group relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold/10 cursor-pointer"
                >
                  <Image src={item.image} alt={item.title} fill className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Category tag */}
                  <div className="absolute top-4 start-4 z-10">
                    <span className="bg-background/80 backdrop-blur-md border border-border text-gold-light text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-gold/90 text-background flex items-center justify-center text-xl shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                      ⊕
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 start-0 end-0 p-5 z-10">
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-gold-light transition-colors uppercase tracking-wide leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── Instagram CTA ── */}
          <motion.div
            className="mt-14 md:mt-20 flex flex-col items-center gap-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
            <p className="text-muted text-sm sm:text-base max-w-md">
              See our latest work, daily updates, and behind-the-scenes moments.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-sm uppercase tracking-widest transition-all duration-300 text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25"
            >
              <FaInstagram className="text-xl" />
              Follow us for more
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 end-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-10"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(p => (p - 1 + filtered.length) % filtered.length) }}
              className="absolute start-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold/80 border border-white/20 hover:border-gold text-white flex items-center justify-center transition-all z-10"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(p => (p + 1) % filtered.length) }}
              className="absolute end-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold/80 border border-white/20 hover:border-gold text-white flex items-center justify-center transition-all z-10"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[75vh]">
                <Image
                  src={filtered[lightbox].image}
                  alt={filtered[lightbox].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 start-0 end-0 bg-gradient-to-t from-black/90 to-transparent px-6 py-5">
                <span className="text-gold-light text-[10px] font-bold uppercase tracking-widest block mb-1">
                  {filtered[lightbox].category}
                </span>
                <h3 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide">
                  {filtered[lightbox].title}
                </h3>
                <p className="text-white/40 text-xs mt-1">
                  {lightbox + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
