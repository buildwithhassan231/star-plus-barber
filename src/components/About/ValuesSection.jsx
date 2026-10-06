import AnimateIn from '@/components/AnimateIn'
import { FaTrophy, FaPumpSoap, FaHandshake, FaTag } from 'react-icons/fa'

const values = [
  {
    icon: <FaTrophy />,
    title: 'Quality',
    description: 'We use only premium-grade products and tools. Every cut, every shave is executed with the precision of a craftsman who takes pride in his work.',
    color: 'text-gold bg-gold/10 border-gold/20 group-hover:bg-gold/20 group-hover:border-gold/40',
  },
  {
    icon: <FaPumpSoap />,
    title: 'Hygiene',
    description: 'Sterilised tools before every client, fresh towels every time, and a spotless environment — your safety and comfort are our non-negotiables.',
    color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20 group-hover:bg-emerald-400/20 group-hover:border-emerald-400/40',
  },
  {
    icon: <FaHandshake />,
    title: 'Respect',
    description: 'Every client walks in as a guest and leaves as a regular. We listen, we remember, and we treat every person with genuine care and dignity.',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/20 group-hover:bg-blue-400/20 group-hover:border-blue-400/40',
  },
  {
    icon: <FaTag />,
    title: 'Fair Price',
    description: 'Premium service doesn&apos;t have to mean premium prices. Our transparent pricing ensures you always know what you&apos;re paying — no surprises.',
    color: 'text-rose-400 bg-rose-400/10 border-rose-400/20 group-hover:bg-rose-400/20 group-hover:border-rose-400/40',
  },
]

export default function ValuesSection() {
  return (
    <section className="section w-full bg-surface px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-border">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[350px] bg-gold/4 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <AnimateIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
            What We Stand For
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Our <span className="text-gold-gradient">Promise</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mb-5" />
          <p className="text-muted text-sm sm:text-base">
            Four values that have guided us since day one — and always will.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimateIn key={i} delay={i * 0.1} variant="fadeUp">
              <div className="group h-full bg-card border border-border hover:border-gold/30 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/5">

                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 ${v.color}`}>
                  {v.icon}
                </div>

                <div>
                  <h3 className="text-base font-black uppercase tracking-widest text-foreground mb-3 group-hover:text-gold transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {v.description}
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
