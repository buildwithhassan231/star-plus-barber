import AnimateIn from '@/components/AnimateIn'
import { FaTrophy, FaPumpSoap, FaGraduationCap, FaClock, FaStar, FaHeart } from 'react-icons/fa'

const reasons = [
  {
    icon: <FaGraduationCap />,
    title: 'Certified Training',
    description:
      'Every barber on our team holds professional certification from internationally accredited grooming academies. Continuous workshops keep their skills razor-sharp.',
    accent: 'from-gold/20 to-gold/5',
  },
  {
    icon: <FaPumpSoap />,
    title: 'Hygiene First',
    description:
      'Sterilised tools before every single client. Hospital-grade sanitisation, fresh towels, disposable blades — your health and comfort are never compromised.',
    accent: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    icon: <FaTrophy />,
    title: 'Proven Experience',
    description:
      'With a combined 35+ years behind the chair, our masters have shaped thousands of clients across Riyadh — from everyday cuts to premium VIP treatments.',
    accent: 'from-gold/20 to-gold/5',
  },
  {
    icon: <FaClock />,
    title: 'Punctual & Reliable',
    description:
      'We respect your time. Appointments run on schedule, walk-ins are welcomed, and our doors stay open daily until 3 AM for your convenience.',
    accent: 'from-blue-500/20 to-blue-500/5',
  },
  {
    icon: <FaStar />,
    title: '4.9 Star Rated',
    description:
      'Over 250 verified Google reviews speak for themselves. Consistent excellence, genuine care, and results that exceed expectations — every single visit.',
    accent: 'from-gold/20 to-gold/5',
  },
  {
    icon: <FaHeart />,
    title: 'Client-First Culture',
    description:
      'We remember your preferred style, your name, your preferences. This is not just a barbershop — it is your personal grooming sanctuary.',
    accent: 'from-rose-500/20 to-rose-500/5',
  },
]

export default function WhyOurTeam() {
  return (
    <section className="section w-full bg-surface px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-border">

      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <AnimateIn className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
            The Star Plus Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Why <span className="text-gold-gradient">Our Team</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mb-5" />
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Six reasons why thousands of clients in Riyadh trust us with their look — and keep coming back.
          </p>
        </AnimateIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.1} variant="fadeUp">
              <div className="group relative h-full bg-card border border-border hover:border-gold/50 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/5 overflow-hidden">

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-2xl group-hover:scale-110 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300 flex-shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="relative flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-foreground group-hover:text-gold transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
