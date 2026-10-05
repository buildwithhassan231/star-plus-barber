'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaGoogle, FaCheckCircle } from 'react-icons/fa'
import AvatarIcon from './AvatarIcon'
import AnimateIn from './AnimateIn'

const reviews = [
  { id: '01', name: 'Fahad Al-Qahtani',  role: 'Regular Client',  date: '2 days ago',   rating: 5, avatar: '/client1.jpg', service: 'Royal Fade & Beard Sculpting',  comment: 'Best barbershop experience in Riyadh! Tariq nailed the beard lineup and fade to perfection. Premium ambiance and great coffee. Highly recommended!' },
  { id: '02', name: 'Sultan Al-Otaibi',  role: 'VIP Client',      date: '1 week ago',   rating: 5, avatar: '/client2.jpg', service: 'Hot Towel Spa & Haircut',        comment: 'The hot towel treatment and executive facial were next level. Very professional staff, clean environment, and top-notch attention to detail.' },
  { id: '03', name: 'Omar Al-Ghamdi',    role: 'Verified Client', date: '2 weeks ago',  rating: 5, avatar: '/client3.jpg', service: 'Keratin Treatment & Styling',    comment: "First time visiting and it's now my go-to spot. Youssef is a master craftsman. Clean tools, luxury vibes, and punctual appointment timing!" },
  { id: '04', name: 'Khaled Al-Dossary', role: 'Regular Client',  date: '3 weeks ago',  rating: 5, avatar: '/client4.jpg', service: 'Classic Taper Fade',             comment: 'Both the service and atmosphere are outstanding. Great focus on every detail. Premium quality at its best!' },
]

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [imgErrors, setImgErrors] = useState({})

  const handleImgError = (id) => setImgErrors((prev) => ({ ...prev, [id]: true }))

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next')
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => { setDirection('prev'); setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1)) }
  const handleNext = () => { setDirection('next'); setCurrentIndex((prev) => (prev + 1) % reviews.length) }

  const current = reviews[currentIndex]
  const slideKey = `${currentIndex}-${direction}`
  const slideClass = direction === 'next' ? 'review-slide-next' : 'review-slide-prev'

  return (
    <section className="section w-full bg-surface text-foreground px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-border">

      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <AnimateIn className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold mb-2 block">Client Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </AnimateIn>

        {/* Google Badge */}
        <AnimateIn delay={0.15}>
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 mb-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-3xl text-gold shadow-inner">
                <FaGoogle />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-foreground">4.9</span>
                  <div className="flex text-gold text-lg">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
                </div>
                <p className="text-xs sm:text-sm text-muted mt-1">Based on <span className="text-foreground font-bold">250+ Verified Google Reviews</span></p>
              </div>
            </div>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs uppercase tracking-wider rounded-xl flex items-center gap-2">
              <FaCheckCircle className="text-gold text-sm" />
              <span>Verify on Google</span>
            </a>
          </div>
        </AnimateIn>

        {/* Slider */}
        <AnimateIn delay={0.25}>
          <div className="relative max-w-4xl mx-auto">

            <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-2xl relative min-h-[300px] flex flex-col justify-between overflow-hidden">
              <FaQuoteLeft className="absolute top-6 end-8 text-5xl sm:text-7xl text-border/30 pointer-events-none select-none" />

              <div key={slideKey} className={slideClass}>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex text-gold text-base gap-1">{[...Array(current.rating)].map((_, i) => <FaStar key={i} />)}</div>
                  <span className="text-[11px] font-semibold text-gold-light bg-gold/10 border border-gold/30 px-3 py-1 rounded-full uppercase tracking-wider">{current.service}</span>
                </div>

                <p className="text-base sm:text-xl text-foreground leading-relaxed italic mb-8">&ldquo;{current.comment}&rdquo;</p>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold bg-card flex items-center justify-center flex-shrink-0">
                      {imgErrors[current.id] ? (
                        <AvatarIcon className="w-full h-full" />
                      ) : (
                        <Image src={current.avatar} alt={current.name} fill className="object-cover" onError={() => handleImgError(current.id)} />
                      )}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground uppercase tracking-wide flex items-center gap-2">
                        {current.name}
                        <FaCheckCircle className="text-gold text-xs" title="Verified Customer" />
                      </h4>
                      <p className="text-xs text-muted">{current.role} &bull; {current.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button onClick={handlePrev} aria-label="Previous review" className="w-10 h-10 rounded-full bg-background border border-border text-muted hover:text-gold hover:border-gold flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110">
                      <FaChevronLeft className="text-xs" />
                    </button>
                    <button onClick={handleNext} aria-label="Next review" className="w-10 h-10 rounded-full bg-background border border-border text-muted hover:text-gold hover:border-gold flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110">
                      <FaChevronRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress + Dots */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="w-full max-w-xs h-[2px] bg-border rounded-full overflow-hidden">
                <div key={`bar-${currentIndex}`} className="h-full bg-gold rounded-full" style={{ animation: 'progressBar 5s linear forwards' }} />
              </div>
              <div className="flex justify-center gap-2">
                {reviews.map((_, index) => (
                  <button key={index} onClick={() => { setDirection(index > currentIndex ? 'next' : 'prev'); setCurrentIndex(index) }} aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-gold' : 'w-2 bg-border hover:bg-muted'}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </AnimateIn>

      </div>
    </section>
  )
}

export default ReviewsSection
