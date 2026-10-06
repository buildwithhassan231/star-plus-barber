import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import BarberCard from './BarberCard'
import { featuredBarbers } from './barbersData'
import AnimateIn from '@/components/AnimateIn'

export default function BarbersPreview() {
  return (
    <section className="section w-full bg-background text-foreground px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-border">

      {/* Ambient glows */}
      <div className="absolute top-1/3 -start-20 w-[400px] h-[400px] bg-gold/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -end-20 w-[400px] h-[400px] bg-gold-light/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <AnimateIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold mb-2 block">
            Meet The Craftsmen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Our Master <span className="text-gold-gradient">Barbers</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-4" />
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Riyadh&apos;s most skilled and experienced barbers — delivering a perfect, luxury grooming experience every time.
          </p>
        </AnimateIn>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBarbers.map((barber, i) => (
            <AnimateIn key={barber.id} delay={i * 0.12} variant="fadeUp">
              <BarberCard barber={barber} />
            </AnimateIn>
          ))}
        </div>

        {/* View All CTA */}
        <AnimateIn className="mt-12 md:mt-16 text-center" delay={0.2}>
          <Link
            href="/barbers"
            className="btn-outline inline-flex items-center gap-3 text-sm uppercase tracking-wider rounded-full px-8 py-4 group"
          >
            <span>Meet All Our Barbers</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimateIn>

      </div>
    </section>
  )
}
