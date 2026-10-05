'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaYelp, FaChevronUp } from 'react-icons/fa'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services & Prices', href: '/services' },
    { name: 'Our Barbers (Team)', href: '/barbers' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Book Appointment', href: '/book' },
    { name: 'Contact & Location', href: '/contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-black text-white relative font-sans pt-12 pb-6 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12">
          
          {/* Left Column: Logo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <Link href="/" className="relative block">
              <Image
                src="/footerlogo.png"
                alt="Barber Shop Logo"
                width={220}
                height={220}
                className="w-48 bg-green md:w-56 lg:w-64 h-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Area: Headline + Content Columns */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            
            {/* Top Heading */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider text-white text-center lg:text-left uppercase">
              WHERE STYLE MEETS TRADITION IN PARK SLOPE, BROOKLYN.
            </h2>

            {/* Content Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
              
              {/* Column 1: Navigation Links & Location Info */}
              <div className="flex flex-col space-y-3">
                <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm md:text-base">
                  RESIDENT BARBER
                </h3>
                <div className="text-gray-300 text-sm space-y-1">
                  <p className="font-medium">169 Lincoln Pl.</p>
                  <p className="font-medium">Brooklyn, NY 11217</p>
                </div>
                <p className="text-white font-extrabold text-lg pt-1">
                  (347) 335-0777
                </p>

                {/* Quick Navigation Links */}
                <div className="pt-4 border-t border-gray-800 flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-amber-500 transition-colors uppercase tracking-wide"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 2: Hours Section with Dotted Separators */}
              <div className="flex flex-col space-y-3">
                <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm md:text-base">
                  OUR HOURS
                </h3>
                <div className="text-xs md:text-sm text-gray-200 space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span>Monday - Thursday</span>
                    <span className="font-semibold">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dotted border-gray-700 pb-1">
                    <span>Friday</span>
                    <span className="font-semibold">10:00 AM - TBD</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dotted border-gray-700 pb-1">
                    <span>Saturday</span>
                    <span className="font-semibold text-gray-400">CLOSED</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dotted border-gray-700 pb-1">
                    <span>Sunday</span>
                    <span className="font-semibold">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Button & Social Icons */}
              <div className="flex flex-col items-start space-y-6">
                <Link
                  href="/book"
                  className="w-full sm:w-auto text-center bg-amber-900/90 hover:bg-amber-800 text-white font-extrabold text-sm uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-300 shadow-md border border-amber-700/50"
                >
                  BOOK APPOINTMENT
                </Link>

                <div className="flex items-center space-x-4 text-amber-500 text-xl pl-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://yelp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    <FaYelp />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-900 pt-6 text-center text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p>
            © 2026 Resident Barber. All Rights Reserved. Website Designed by{' '}
            <span className="text-gray-300 font-medium">Bracha Designs</span>.
          </p>

          {/* Scroll To Top Arrow Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <FaChevronUp className="text-base" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer