import AnimateIn from '@/components/AnimateIn'
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa'
import { MAP_EMBED, DIRECTIONS, landmarks } from './contactData'

export default function MapSection() {
  return (
    <section className="w-full bg-surface px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-y border-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        {/* Header */}
        <AnimateIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-2 block">Find Us</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
              Our <span className="text-gold-gradient">Location</span>
            </h2>
          </div>
          <a
            href={DIRECTIONS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-background font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-gold/30 hover:scale-105 self-start sm:self-auto"
          >
            <FaMapMarkerAlt />
            Get Directions
          </a>
        </AnimateIn>

        {/* Map embed */}
        <AnimateIn variant="scaleUp">
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Star Plus Barber Location"
              className="w-full h-full"
            />
            {/* Pin overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-gold shadow-xl shadow-gold/50 flex items-center justify-center animate-bounce">
                  <FaMapMarkerAlt className="text-background text-lg" />
                </div>
                <div className="bg-background/90 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full shadow-lg">
                  <p className="text-foreground text-xs font-bold">Star Plus Barber</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Landmarks */}
        <AnimateIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {landmarks.map((lm, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-3 text-sm">
                <span className="text-xl flex-shrink-0">{lm.icon}</span>
                <span className="text-muted leading-relaxed">{lm.text}</span>
              </div>
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}
