import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaInstagram } from 'react-icons/fa6'

const GalleryPreview = () => {
  const galleryItems = [
    {
      id: '01',
      title: 'Royal Fade & Beard Sculpting',
      category: 'Haircut & Beard',
      image: '/gallery1.jpg', // Unsplash / Pixabay image path
    },
    {
      id: '02',
      title: 'Hot Towel Spa Treatment',
      category: 'Shave & Spa',
      image: '/gallery2.jpg',
    },
    {
      id: '03',
      title: 'Luxury Shop Interior Ambiance',
      category: 'Interior',
      image: '/gallery3.jpg',
    },
    {
      id: '04',
      title: 'Classic Scissors Precision Cut',
      category: 'Haircut',
      image: '/gallery4.jpg',
    },
    {
      id: '05',
      title: 'Executive Hair Keratin Styling',
      category: 'Hair Care',
      image: '/gallery5.jpg',
    },
    {
      id: '06',
      title: 'VIP Grooming Experience',
      category: 'VIP Service',
      image: '/gallery6.jpg',
    },
  ]

  return (
    <section className="w-full bg-[#141416] text-[#f5f1e8] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#2a2a2e]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a24d]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#c9a24d] mb-2 block">
            Visual Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f5f1e8] mb-4">
            Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6c675] via-[#c9a24d] to-[#e6c675]">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c9a24d] to-[#e6c675] mx-auto rounded-full mb-4" />
          <p className="text-[#a1a1a6] text-sm sm:text-base leading-relaxed">
            Humari latest haircuts, beard grooming, aur luxury salon ambiance ki ek jhalak.
          </p>
        </div>

        {/* 6 Photos Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-[300px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#1a1a1d] border border-[#2a2a2e] hover:border-[#c9a24d]/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#c9a24d]/10 cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#0b0b0c]/80 backdrop-blur-md border border-[#2a2a2e] text-[#e6c675] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#f5f1e8] group-hover:text-[#e6c675] transition-colors uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#a1a1a6] mt-1 font-medium">
                    Riyadh Shop Highlights
                  </p>
                </div>

                {/* Hover Icon */}
                <div className="w-10 h-10 rounded-full bg-[#c9a24d] text-[#0b0b0c] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex-shrink-0 ml-2">
                  <FaInstagram className="text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1d] hover:bg-[#c9a24d] text-[#f5f1e8] hover:text-[#0b0b0c] border border-[#2a2a2e] hover:border-[#c9a24d] font-extrabold text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-lg group"
          >
            <span>View Full Gallery</span>
            <FaArrowRight className="text-xs text-[#c9a24d] group-hover:text-[#0b0b0c] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default GalleryPreview