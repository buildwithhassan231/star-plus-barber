import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendarCheck, FaStar, FaInstagram } from 'react-icons/fa6'

const BarbersPreview = () => {
  const barbers = [
    {
      id: '01',
      name: 'Tariq Al-Mansoor',
      role: 'Master Stylist & Founder',
      experience: '12+ Years Experience',
      specialty: 'Royal Fade & Beard Sculpting',
      rating: '4.9',
      reviews: '120+',
      image: '/barber1.jpg', // Replace with your image path
      instagram: 'https://instagram.com',
    },
    {
      id: '02',
      name: 'Youssef El-Haddad',
      role: 'Senior Barber',
      experience: '8 Years Experience',
      specialty: 'Hot Towel Shave & Scissors Cut',
      rating: '4.8',
      reviews: '95+',
      image: '/barber2.jpg', // Replace with your image path
      instagram: 'https://instagram.com',
    },
    {
      id: '03',
      name: 'Hamza Ibrahim',
      role: 'Grooming Specialist',
      experience: '6 Years Experience',
      specialty: 'Keratin & Executive Facials',
      rating: '4.9',
      reviews: '80+',
      image: '/barber3.jpg', // Replace with your image path
      instagram: 'https://instagram.com',
    },
  ]

  return (
    <section className="w-full bg-[#0b0b0c] text-[#f5f1e8] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#2a2a2e]">
      
      {/* Background Gold Ambient Glows */}
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-[#c9a24d]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-[#e6c675]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#c9a24d] mb-2 block">
            Meet The Craftsmen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f5f1e8] mb-4">
            Our Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6c675] via-[#c9a24d] to-[#e6c675]">Barbers</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c9a24d] to-[#e6c675] mx-auto rounded-full mb-4" />
          <p className="text-[#a1a1a6] text-sm sm:text-base leading-relaxed">
            Riyadh ke sabse skilled aur experienced barbers jo aapko har baar ek perfect, luxury grooming experience dete hain.
          </p>
        </div>

        {/* Barbers Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="group relative bg-[#1a1a1d] border border-[#2a2a2e] hover:border-[#c9a24d]/60 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c9a24d]/10 flex flex-col justify-between"
            >
              
              {/* Image & Top Badges Container */}
              <div className="relative w-full h-[320px] sm:h-[360px] overflow-hidden bg-[#141416]">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  priority
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1d] via-transparent to-black/30" />

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-[#0b0b0c]/80 backdrop-blur-md border border-[#2a2a2e] text-[#f5f1e8] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <FaStar className="text-[#c9a24d] text-xs" />
                  <span>{barber.rating}</span>
                  <span className="text-[#a1a1a6] text-[10px]">({barber.reviews})</span>
                </div>

                {/* Social Icon */}
                <a
                  href={barber.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0b0b0c]/80 backdrop-blur-md border border-[#2a2a2e] text-[#a1a1a6] hover:text-[#c9a24d] hover:border-[#c9a24d]/50 flex items-center justify-center transition-all duration-300"
                  aria-label={`${barber.name} Instagram`}
                >
                  <FaInstagram className="text-base" />
                </a>

                {/* Experience Tag over Image */}
                <div className="absolute bottom-3 left-4 bg-[#c9a24d]/20 border border-[#c9a24d]/40 text-[#e6c675] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md">
                  {barber.experience}
                </div>
              </div>

              {/* Card Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#1a1a1d]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a24d] block mb-1">
                    {barber.role}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-[#f5f1e8] group-hover:text-[#e6c675] transition-colors mb-2">
                    {barber.name}
                  </h3>
                  
                  <p className="text-xs text-[#a1a1a6] mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a24d]" />
                    Specialty: <span className="text-[#f5f1e8] font-medium">{barber.specialty}</span>
                  </p>
                </div>

                {/* CTA Button: "Book with [Name]" */}
                <Link
                  href={`/book?barber=${encodeURIComponent(barber.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#141416] hover:bg-[#c9a24d] text-[#f5f1e8] hover:text-[#0b0b0c] border border-[#2a2a2e] hover:border-[#c9a24d] font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md group/btn"
                >
                  <FaCalendarCheck className="text-sm text-[#c9a24d] group-hover/btn:text-[#0b0b0c] transition-colors" />
                  <span>Book with {barber.name.split(' ')[0]}</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BarbersPreview