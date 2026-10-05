import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
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

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-32">

          {/* Left Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-end pr-6 xl:pr-10">
            {leftNavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 whitespace-nowrap ${
                  index === 0
                    ? 'text-red-600 hover:text-red-700'
                    : 'text-gray-800 hover:text-red-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
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
          </div>

          {/* Right Nav + Language Switch + Book Now */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-start pl-6 xl:pl-10">
            {rightNavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-xs xl:text-sm font-semibold tracking-wider uppercase text-gray-800 hover:text-red-600 transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}

            {/* Divider */}
            <span className="text-gray-300 select-none">|</span>

            {/* Language Switch */}
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider">
              <span className="text-gray-800 cursor-pointer hover:text-red-600 transition-colors uppercase">EN</span>
              <span className="text-gray-300 select-none">|</span>
              <span className="text-gray-800 cursor-pointer hover:text-red-600 transition-colors">عربي</span>
            </div>

            {/* Book Now */}
            <Link
              href="/book"
              className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full transition-colors duration-200 whitespace-nowrap shadow-sm"
            >
              Book Now
            </Link>

          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header
