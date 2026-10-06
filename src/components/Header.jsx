'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/context/LangContext'

/* ── Bilingual nav links — order never changes ── */
const allLinks = [
  { en: 'Home',        ar: 'الرئيسية',   href: '/' },
  { en: 'Services',    ar: 'الخدمات',    href: '/services' },
  { en: 'Our Barbers', ar: 'حلاقونا',    href: '/barbers' },
  { en: 'Gallery',     ar: 'المعرض',     href: '/gallery' },
  { en: 'About Us',    ar: 'من نحن',     href: '/about' },
  { en: 'Contact',     ar: 'تواصل معنا', href: '/contact' },
]

const leftNavLinks  = allLinks.slice(0, 4)  // Home · Services · Our Barbers · Gallery
const rightNavLinks = allLinks.slice(4)      // About Us · Contact

const navItem = {
  hidden:  { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
}

/* ── Burger icon ── */
const BurgerIcon = ({ open }) => (
  <div className="w-6 h-5 flex flex-col justify-between">
    <motion.span
      className="block h-[2px] bg-amber-400 rounded-full origin-center"
      animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block h-[2px] bg-amber-400 rounded-full"
      animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="block h-[2px] bg-amber-400 rounded-full origin-center"
      animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
    />
  </div>
)

/* ── Globe icon ── */
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3.5 h-3.5 opacity-70"
    fill="none" viewBox="0 0 24 24"
    stroke="currentColor" strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 0c-2.5 0-4.5-4-4.5-9s2-9 4.5-9m0 18c2.5 0 4.5-4 4.5-9s-2-9-4.5-9M3 12h18"
    />
  </svg>
)

const Header = () => {
  const [scrolled,    setScrolled]    = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { lang, toggleLang } = useLang()

  const isAR = lang === 'AR'

  /* Label shows what you will switch TO */
  const langLabel = isAR ? 'English' : 'العربية'

  /* Text helper */
  const t = (link) => isAR ? link.ar : link.en

  /* Arabic font style — applied only when AR */
  const arFont = isAR ? { fontFamily: 'var(--font-arabic)', letterSpacing: 0 } : {}

  const closeSidebar = () => setSidebarOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  return (
    <>
      {/* ────────────────────────────────────────────────
          Header bar
          dir="rtl/ltr" flips flex row + text alignment
          pe/ps (padding-end/start) respect the dir value
      ──────────────────────────────────────────────── */}
      <motion.header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28 md:h-32">

            {/* ── Desktop: Left nav (logical start side) ──
                justify-end + pe keeps items flush against logo gap.
                In RTL, "left" visually becomes "right" — spacing stays identical. */}
            <motion.nav
              className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-end pe-6 xl:pe-10"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
            >
              {leftNavLinks.map((link, index) => (
                <motion.div key={link.href} variants={navItem} transition={{ duration: 0.4 }}>
                  <Link
                    href={link.href}
                    className={`nav-link ${index === 0 ? 'nav-link-active' : ''}`}
                    style={arFont}
                  >
                    {t(link)}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* ── Desktop: Center Logo ── */}
            <motion.div
              className="hidden lg:flex flex-shrink-0"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              <Link href="/" className="block relative">
                <Image
                  src="/starlogo.png"
                  alt="Star Plus Barber Logo"
                  width={180}
                  height={90}
                  priority
                  className="h-20 w-auto object-contain md:h-24"
                />
              </Link>
            </motion.div>

            {/* ── Desktop: Right nav (logical end side) ──
                justify-start + ps keeps items flush against logo gap.
                In RTL this visually mirrors correctly with equal spacing. */}
            <motion.nav
              className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-start ps-6 xl:ps-10"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
            >
              {rightNavLinks.map((link) => (
                <motion.div key={link.href} variants={navItem} transition={{ duration: 0.4 }}>
                  <Link href={link.href} className="nav-link" style={arFont}>
                    {t(link)}
                  </Link>
                </motion.div>
              ))}

              {/* Language toggle */}
              <motion.div variants={navItem} transition={{ duration: 0.4 }}>
                <button
                  onClick={toggleLang}
                  className="nav-link cursor-pointer flex items-center gap-1.5 hover:text-gold transition-colors"
                  style={arFont}
                >
                  <GlobeIcon />
                  {langLabel}
                </button>
              </motion.div>

              {/* Book Now */}
              <motion.div variants={navItem} transition={{ duration: 0.4 }}>
                <Link
                  href="/book"
                  className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full transition-colors duration-200 whitespace-nowrap shadow-sm"
                  style={isAR ? { fontFamily: 'var(--font-arabic)', letterSpacing: 0, textTransform: 'none' } : {}}
                >
                  {isAR ? 'احجز الآن' : 'Book Now'}
                </Link>
              </motion.div>
            </motion.nav>

            {/* ── Mobile row ──
                In LTR: [🌐 العربية]  ........  [☰]
                In RTL: [☰]  ........  [English 🌐]
                flex-row-reverse when AR flips both ends symmetrically */}
            <div className={`lg:hidden flex items-center justify-between flex-1 ${isAR ? 'flex-row-reverse' : ''}`}>

              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-foreground hover:text-gold transition-colors"
                style={arFont}
              >
                <GlobeIcon />
                {langLabel}
              </button>

              {/* Burger */}
              <motion.button
                className="p-2 rounded-lg focus:outline-none"
                onClick={() => setSidebarOpen((v) => !v)}
                aria-label="Toggle menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <BurgerIcon open={sidebarOpen} />
              </motion.button>

            </div>

          </div>
        </div>
      </motion.header>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar ──
          LTR: slides in from right  (right-0, border-l)
          RTL: slides in from left   (left-0,  border-r)
          Internal layout mirrors via dir="rtl/ltr" */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            className={`fixed top-0 h-full w-72 z-50 bg-surface flex flex-col ${
              isAR ? 'left-0 border-r border-border' : 'right-0 border-l border-border'
            }`}
            initial={{ x: isAR ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isAR ? '-100%' : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Sidebar header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-border">
              <Link href="/" onClick={closeSidebar}>
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={100}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <button
                onClick={closeSidebar}
                aria-label="Close menu"
                className="w-9 h-9 rounded-full border border-border text-muted hover:text-gold hover:border-gold flex items-center justify-center transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
              {allLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: isAR ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.35, ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    onClick={closeSidebar}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-muted hover:text-gold hover:bg-card text-sm font-semibold uppercase tracking-wider transition-all duration-200 group"
                    style={isAR
                      ? { fontFamily: 'var(--font-arabic)', letterSpacing: 0, textTransform: 'none' }
                      : {}
                    }
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors flex-shrink-0" />
                    {t(link)}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Book Now */}
            <div className="px-6 py-6 border-t border-border">
              <Link
                href="/book"
                onClick={closeSidebar}
                className="w-full text-center block bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm uppercase tracking-widest px-5 py-3 rounded-full transition-colors duration-200 shadow-md whitespace-nowrap"
                style={isAR
                  ? { fontFamily: 'var(--font-arabic)', letterSpacing: 0, textTransform: 'none' }
                  : {}
                }
              >
                {isAR ? 'احجز الآن' : 'Book Now'}
              </Link>
            </div>

          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
