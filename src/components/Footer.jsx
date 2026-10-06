'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronUp, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'
import { SiInstagram, SiSnapchat, SiTiktok } from 'react-icons/si'
import AnimateIn from './AnimateIn'

const quickLinks = [
  { name: 'Home',              href: '/' },
  { name: 'Services & Prices', href: '/services' },
  { name: 'Our Barbers',       href: '/barbers' },
  { name: 'Gallery',           href: '/gallery' },
  { name: 'About Us',          href: '/about' },
  { name: 'Book Appointment',  href: '/book' },
  { name: 'Contact',           href: '/contact' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: <SiInstagram />,
    hover: 'hover:text-pink-400 hover:border-pink-400',
  },
  {
    label: 'Snapchat',
    href: 'https://snapchat.com',
    icon: <SiSnapchat />,
    hover: 'hover:text-yellow-300 hover:border-yellow-300',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    icon: <SiTiktok />,
    hover: 'hover:text-foreground hover:border-foreground',
  },
]

const hours = [
  { day: 'Mon – Thu', time: '10:00 AM – 7:00 PM' },
  { day: 'Friday',    time: '10:00 AM – TBD' },
  { day: 'Saturday',  time: 'CLOSED' },
  { day: 'Sunday',    time: '10:00 AM – 5:00 PM' },
]

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-surface border-t border-border overflow-hidden">

      {/* ── Ambient gold glow ── */}
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* ── Top gold accent line ── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Main grid ── */}
        <AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-border">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpg"
                alt="Star Plus Barber"
                width={140}
                height={70}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Riyadh&apos;s most premium barbering destination — where precision craft meets luxury grooming.
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Walk in and leave looking your absolute best. Open daily, late night.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ label, href, icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-full border border-border text-muted flex items-center justify-center text-base transition-all duration-300 hover:scale-110 ${hover}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground font-bold uppercase tracking-widest text-xs after:block after:w-8 after:h-[2px] after:bg-gold after:mt-2">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground font-bold uppercase tracking-widest text-xs after:block after:w-8 after:h-[2px] after:bg-gold after:mt-2">
              Hours
            </h3>
            <ul className="flex flex-col gap-2.5">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between items-center text-xs border-b border-border/50 pb-2 last:border-0">
                  <span className="text-muted">{day}</span>
                  <span className={`font-semibold ${time === 'CLOSED' ? 'text-red-400' : time.includes('3 AM') ? 'text-gold' : 'text-foreground'}`}>
                    {time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 mt-1 px-3 py-2 rounded-lg bg-gold/10 border border-gold/20">
              <FaClock className="text-gold text-xs flex-shrink-0" />
              <span className="text-gold text-xs font-semibold">Open daily till 3:00 AM</span>
            </div>
          </div>

          {/* Col 4 — Contact & Map */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground font-bold uppercase tracking-widest text-xs after:block after:w-8 after:h-[2px] after:bg-gold after:mt-2">
              Find Us
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2.5 text-muted">
                <FaMapMarkerAlt className="text-gold mt-0.5 flex-shrink-0" />
                <span>Olaya District, Riyadh<br />Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2.5 text-muted">
                <FaPhone className="text-gold flex-shrink-0" />
                <a href="tel:+966576984355" className="hover:text-gold transition-colors">
                  +966 57 698 4355
                </a>
              </div>
            </div>

            {/* Google Maps embed placeholder */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="group relative mt-1 rounded-xl overflow-hidden border border-border hover:border-gold transition-colors duration-300 block"
            >
              <div className="w-full h-28 bg-card flex items-center justify-center gap-2 text-muted group-hover:text-gold transition-colors text-xs font-semibold uppercase tracking-wider">
                <FaMapMarkerAlt className="text-gold text-sm" />
                View on Google Maps
              </div>
            </a>
          </div>

        </div>
        </AnimateIn>

        {/* ── Bottom bar ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 <span className="text-gold font-semibold">Star Plus Barber</span>. All rights reserved.</p>
          <p>Designed by <span className="text-foreground font-medium">Hassan</span></p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full border border-border text-muted hover:text-gold hover:border-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <FaChevronUp className="text-xs" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
