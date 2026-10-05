'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCut, FaBezierCurve, FaSpa, FaUserTie, FaCheck, FaArrowRight } from 'react-icons/fa'
import { GiRazorBlade, GiComb } from 'react-icons/gi'
import AnimateIn from './AnimateIn'

const services = [
  { id: '01', icon: <FaCut className="text-2xl text-gold" />,         name: 'Royal Haircut & Style',       price: '120 SAR', popular: true,  description: 'Precision haircut, hair wash, scalp massage, and custom styling with premium pomade.' },
  { id: '02', icon: <GiRazorBlade className="text-2xl text-gold" />,  name: 'Beard Sculpting & Hot Towel', price: '80 SAR',  popular: false, description: 'Razor sharp line-up, hot towel conditioning, beard oil massage, and shape trim.' },
  { id: '03', icon: <GiComb className="text-2xl text-gold" />,        name: 'Hair & Beard Combo',          price: '180 SAR', popular: true,  description: 'Full signature grooming treatment: Signature cut, beard styling, and hot towel shave.' },
  { id: '04', icon: <FaSpa className="text-2xl text-gold" />,         name: 'Executive Facial & Scrub',    price: '150 SAR', popular: false, description: 'Deep pore cleansing, blackhead removal, herbal steam, and hydrating face mask.' },
  { id: '05', icon: <FaBezierCurve className="text-2xl text-gold" />, name: 'Hair Keratin Treatment',      price: '250 SAR', popular: false, description: 'Smoothing treatment to reduce frizz, nourish roots, and provide long-lasting shine.' },
  { id: '06', icon: <FaUserTie className="text-2xl text-gold" />,     name: 'VIP Groom Package',           price: '350 SAR', popular: false, description: 'Complete royal treatment: Haircut, beard shaping, facial, head massage, and mani-pedi.' },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } }),
}

const Servicespreview = () => (
  <section className="section w-full bg-background text-foreground px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="max-w-7xl mx-auto relative z-10">

      {/* Header */}
      <AnimateIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold mb-2 block">Crafted For Royalty</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Our Featured <span className="text-gold-gradient">Services</span>
        </h2>
        <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-4" />
        <p className="text-muted text-sm sm:text-base">Experience world-class barbering, precision grooming, and relaxing spa treatments in Riyadh.</p>
      </AnimateIn>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="card-hover relative group bg-card border border-border rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
          >
            {service.popular && (
              <div className="absolute -top-3 end-6 bg-gold text-background text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-xl sm:text-2xl font-black text-gold">{service.price}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-foreground mb-3 group-hover:text-gold transition-colors">{service.name}</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">{service.description}</p>
            </div>
            <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted font-medium">
              <span className="flex items-center gap-1.5"><FaCheck className="text-gold text-xs" /> Premium Products</span>
              <span className="font-bold group-hover:text-gold/60 transition-colors">#{service.id}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <AnimateIn className="mt-12 md:mt-16 text-center" delay={0.2}>
        <Link href="/services" className="btn-outline inline-flex items-center gap-3 text-sm uppercase tracking-wider rounded-full px-8 py-4 group">
          <span>View All Services &amp; Menu</span>
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </Link>
      </AnimateIn>

    </div>
  </section>
)

export default Servicespreview
