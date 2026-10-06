import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import { FaQuoteLeft } from 'react-icons/fa'

const interiorPhotos = [
  { id: 1, src: '/in1.jpg', alt: 'Shop entrance and reception' },
  { id: 2, src: '/in2.jpg', alt: 'Premium barber chairs' },
  { id: 3, src: '/in3.jpg', alt: 'Grooming products and tools' },
]

export default function ShopStory() {
  return (
    <section className="section w-full bg-background px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Story text */}
          <AnimateIn variant="fadeRight">
            <div className="flex flex-col gap-6">

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">
                  Where It All <span className="text-gold-gradient">Began</span>
                </h2>
                <div className="w-12 h-[3px] bg-gold rounded-full mt-3 mb-6" />
              </div>

              {/* Quote */}
              <div className="relative ps-6 border-s-2 border-gold/40">
                <FaQuoteLeft className="absolute top-0 start-0 -translate-x-1/2 text-gold/30 text-3xl" />
                <p className="text-foreground text-base sm:text-lg font-medium italic leading-relaxed">
                  "We didn&apos;t open a barbershop. We built a sanctuary — where every man leaves feeling like the best version of himself."
                </p>
                <span className="text-muted text-sm mt-2 block">— Tariq Al-Mansoor, Founder</span>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Star Plus Barber was founded in <span className="text-foreground font-semibold">2012</span> in the heart of Olaya, Riyadh, with one simple goal: to bring world-class grooming to Saudi Arabia. What started as a single chair and a dream has grown into one of Riyadh&apos;s most trusted premium barbershops.
              </p>

              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Over the years, we&apos;ve served <span className="text-foreground font-semibold">thousands of clients</span> — from everyday gentlemen to business leaders, athletes, and grooms — all united by the desire to look and feel their absolute best. Our shop stays open <span className="text-gold font-semibold">daily until 3 AM</span>, because great style has no curfew.
              </p>

            </div>
          </AnimateIn>

          {/* Right — Interior photos */}
          <AnimateIn variant="fadeLeft" delay={0.15}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Large photo */}
              <div className="col-span-2 relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-border group">
                <Image src={interiorPhotos[0].src} alt={interiorPhotos[0].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              {/* Two smaller */}
              {interiorPhotos.slice(1).map((photo) => (
                <div key={photo.id} className="relative h-36 sm:h-48 rounded-xl overflow-hidden border border-border group">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
              ))}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
