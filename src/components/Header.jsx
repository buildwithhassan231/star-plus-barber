'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const leftNavLinks = [
  { name: 'Home',        href: '/' },
  { name: 'Services',    href: '/services' },
  { name: 'Our Barbers', href: '/barbers' },
  { name: 'Gallery',     href: '/gallery' },
]

const rightNavLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact',  href: '/contact' },
]

const navItem = {
  hidden:  { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
}

const Header = () => {
  return (
    <motion.header
      className="w-full bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-32">

          {/* Left Nav */}
          <motion.nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-end pr-6 xl:pr-10"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
          >
            {leftNavLinks.map((link, index) => (
              <motion.div key={index} variants={navItem} transition={{ duration: 0.4 }}>
                <Link href={link.href} className={`nav-link ${index === 0 ? 'nav-link-active' : ''}`}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Center Logo */}
          <motion.div
            className="flex-shrink-0 mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <Link href="/" className="block relative">
              <Image
                src="/logo.jpg"
                alt="Barber Shop Logo"
                width={180}
                height={90}
                priority
                className="h-20 w-auto object-contain md:h-24"
              />
            </Link>
          </motion.div>

          {/* Right Nav + Language Switch + Book Now */}
          <motion.nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-start pl-6 xl:pl-10"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
          >
            {rightNavLinks.map((link, index) => (
              <motion.div key={index} variants={navItem} transition={{ duration: 0.4 }}>
                <Link href={link.href} className="nav-link">{link.name}</Link>
              </motion.div>
            ))}

            <motion.span className="text-border select-none" variants={navItem} transition={{ duration: 0.4 }}>|</motion.span>

            <motion.div className="flex items-center gap-1.5 text-xs font-bold tracking-wider" variants={navItem} transition={{ duration: 0.4 }}>
              <span className="nav-link cursor-pointer uppercase">EN</span>
              <span className="text-border select-none">|</span>
              <span className="nav-link cursor-pointer">عربي</span>
            </motion.div>

            <motion.div variants={navItem} transition={{ duration: 0.4 }}>
              <Link
                href="/book"
                className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full transition-colors duration-200 whitespace-nowrap shadow-sm"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.nav>

        </div>
      </div>
    </motion.header>
  )
}

export default Header
