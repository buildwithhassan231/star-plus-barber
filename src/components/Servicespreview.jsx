import React from 'react'
import Link from 'next/link'
import { FaCut, FaBezierCurve, FaSpa, FaUserTie, FaCheck, FaArrowRight } from 'react-icons/fa'
import { FaScissors, FaUserDoctor } from 'react-icons/fa6'
import { GiRazorBlade, GiComb } from 'react-icons/gi'

const Servicespreview = () => {
  const services = [
    {
      id: '01',
      icon: <FaCut className="text-2xl text-amber-400" />,
      name: 'Royal Haircut & Style',
      price: '120 SAR',
      popular: true,
      description: 'Precision haircut, hair wash, scalp massage, and custom styling with premium pomade.',
    },
    {
      id: '02',
      icon: <GiRazorBlade className="text-2xl text-amber-400" />,
      name: 'Beard Sculpting & Hot Towel',
      price: '80 SAR',
      popular: false,
      description: 'Razor sharp line-up, hot towel conditioning, beard oil massage, and shape trim.',
    },
    {
      id: '03',
      icon: <GiComb className="text-2xl text-amber-400" />,
      name: 'Hair & Beard Combo',
      price: '180 SAR',
      popular: true,
      description: 'Full signature grooming treatment: Signature cut, beard styling, and hot towel shave.',
    },
    {
      id: '04',
      icon: <FaSpa className="text-2xl text-amber-400" />,
      name: 'Executive Facial & Scrub',
      price: '150 SAR',
      popular: false,
      description: 'Deep pore cleansing, blackhead removal, herbal steam, and hydrating face mask.',
    },
    {
      id: '05',
      icon: <FaBezierCurve className="text-2xl text-amber-400" />,
      name: 'Hair Keratin Treatment',
      price: '250 SAR',
      popular: false,
      description: 'Smoothing treatment to reduce frizz, nourish roots, and provide long-lasting shine.',
    },
    {
      id: '06',
      icon: <FaUserTie className="text-2xl text-amber-400" />,
      name: 'VIP Groom Package',
      price: '350 SAR',
      popular: false,
      description: 'Complete royal treatment: Haircut, beard shaping, facial, head massage, and mani-pedi.',
    },
  ]

  return (
    <section className="w-full bg-zinc-950 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-amber-500 mb-2 block">
            Crafted For Royalty
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Our Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Experience world-class barbering, precision grooming, and relaxing spa treatments in Riyadh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-700 text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-black text-amber-400">
                      {service.price}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-medium">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <FaCheck className="text-amber-500 text-xs" /> Premium Products
                </span>
                <span className="text-zinc-600 font-bold group-hover:text-amber-500/60 transition-colors">
                  #{service.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA Button */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 hover:bg-amber-500 text-white hover:text-black font-extrabold text-sm uppercase tracking-wider rounded-full border border-amber-500/40 hover:border-amber-500 transition-all duration-300 shadow-lg group"
          >
            <span>View All Services & Menu</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Servicespreview