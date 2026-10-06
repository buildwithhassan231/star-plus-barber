'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaWhatsapp, FaPhone, FaCalendarCheck, FaChevronLeft, FaChevronRight, FaStar, FaCheck } from 'react-icons/fa'
import { allBarbers } from '@/components/Ourbarbers/barbersData'
import { services, timeSlots, WHATSAPP_NUMBER, SHOP_PHONE } from './bookData'
import StepIndicator from './StepIndicator'

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center:       { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
}

const inputClass = "w-full bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-xl px-4 py-3.5 text-foreground text-sm placeholder:text-muted outline-none transition-all duration-200"
const labelClass = "block text-xs font-bold uppercase tracking-widest text-muted mb-2"

// Get today's date in YYYY-MM-DD
function todayStr() {
  return new Date().toISOString().split('T')[0]
}

export default function BookingForm() {
  const searchParams = useSearchParams()

  // URL se barber name aaya? uska id dhundo
  const preselectedBarberId = (() => {
    const nameFromUrl = searchParams.get('barber')
    if (!nameFromUrl) return ''
    const found = allBarbers.find(
      b => b.name.toLowerCase() === decodeURIComponent(nameFromUrl).toLowerCase()
    )
    return found ? found.id : ''
  })()

  const [step,      setStep]      = useState(1)
  const [direction, setDirection] = useState(1)
  const [form, setForm] = useState({
    service:  '',
    barber:   preselectedBarberId,
    date:     '',
    time:     '',
    name:     '',
    phone:    '',
  })

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const goNext = () => { setDirection(1);  setStep(s => Math.min(s + 1, 4)) }
  const goPrev = () => { setDirection(-1); setStep(s => Math.max(s - 1, 1)) }

  const canNext = () => {
    if (step === 1) return !!form.service
    if (step === 2) return !!form.barber
    if (step === 3) return !!form.date && !!form.time
    if (step === 4) return form.name.trim().length > 1 && form.phone.trim().length > 5
    return false
  }

  const buildWhatsAppMsg = () => {
    const svc     = services.find(s => s.id === form.service)
    const barberName = form.barber === 'any' ? 'Any available barber' : allBarbers.find(b => b.id === form.barber)?.name
    const msg = [
      '🌟 *New Appointment Request — Star Plus Barber*',
      '',
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      `✂️ *Service:* ${svc?.label ?? form.service}`,
      `💈 *Barber:* ${barberName}`,
      `📅 *Date:* ${form.date}`,
      `🕐 *Time:* ${form.time}`,
      '',
      'Please confirm my appointment. Thank you!',
    ].join('\n')
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  }

  return (
    <div className="w-full max-w-2xl mx-auto">

      <StepIndicator currentStep={step} />

      {/* Card */}
      <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">

        {/* Gold top line */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="p-6 sm:p-10 min-h-[380px] flex flex-col">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col gap-6"
            >

              {/* ── Step 1: Service ── */}
              {step === 1 && (
                <>
                  <StepHeading step={1} title="Choose a Service" subtitle="What would you like today?" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map(svc => (
                      <button
                        key={svc.id}
                        onClick={() => update('service', svc.id)}
                        className={`relative text-start p-4 rounded-xl border transition-all duration-200 group ${
                          form.service === svc.id
                            ? 'border-gold bg-gold/10 shadow-md shadow-gold/10'
                            : 'border-border bg-background hover:border-gold/40 hover:bg-card'
                        }`}
                      >
                        {form.service === svc.id && (
                          <span className="absolute top-3 end-3 w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                            <FaCheck className="text-background text-[9px]" />
                          </span>
                        )}
                        <p className={`text-sm font-bold uppercase tracking-wide mb-1 ${form.service === svc.id ? 'text-gold' : 'text-foreground'}`}>
                          {svc.label}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-muted">
                          <span>{svc.price}</span>
                          <span>·</span>
                          <span>{svc.time}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* ── Step 2: Barber ── */}
              {step === 2 && (
                <>
                  <StepHeading
                    step={2}
                    title="Choose Your Barber"
                    subtitle={
                      preselectedBarberId
                        ? `${allBarbers.find(b => b.id === preselectedBarberId)?.name} is pre-selected — you can change if you like.`
                        : 'Pick your preferred barber or let us decide.'
                    }
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    {/* Any barber option */}
                    <button
                      onClick={() => update('barber', 'any')}
                      className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                        form.barber === 'any' ? 'border-gold bg-gold/10' : 'border-border bg-background hover:border-gold/40'
                      }`}
                    >
                      <div className="w-11 h-11 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold text-lg flex-shrink-0">
                        ✦
                      </div>
                      <div className="text-start">
                        <p className={`text-sm font-bold ${form.barber === 'any' ? 'text-gold' : 'text-foreground'}`}>Any Barber</p>
                        <p className="text-[11px] text-muted">First available</p>
                      </div>
                      {form.barber === 'any' && <FaCheck className="text-gold text-xs ms-auto" />}
                    </button>

                    {allBarbers.map(b => (
                      <button
                        key={b.id}
                        onClick={() => update('barber', b.id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                          form.barber === b.id ? 'border-gold bg-gold/10' : 'border-border bg-background hover:border-gold/40'
                        }`}
                      >
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                          <Image src={b.image} alt={b.name} fill className="object-cover object-top" />
                        </div>
                        <div className="text-start flex-1 min-w-0">
                          <p className={`text-sm font-bold truncate ${form.barber === b.id ? 'text-gold' : 'text-foreground'}`}>{b.name}</p>
                          <div className="flex items-center gap-1 text-[11px] text-muted">
                            <FaStar className="text-gold text-[9px]" /> {b.rating} · {b.experience}
                          </div>
                        </div>
                        {form.barber === b.id && <FaCheck className="text-gold text-xs flex-shrink-0" />}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* ── Step 3: Date & Time ── */}
              {step === 3 && (
                <>
                  <StepHeading step={3} title="Pick Date & Time" subtitle="Choose a slot that works for you." />

                  <div className="flex flex-col gap-4">
                    <div>
                      <label className={labelClass}>Date</label>
                      <input
                        type="date"
                        min={todayStr()}
                        value={form.date}
                        onChange={e => update('date', e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Time Slot</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map(slot => (
                          <button
                            key={slot}
                            onClick={() => update('time', slot)}
                            className={`py-2 px-1 rounded-lg text-xs font-bold border transition-all duration-200 ${
                              form.time === slot
                                ? 'border-gold bg-gold text-background'
                                : 'border-border bg-background text-muted hover:border-gold/40 hover:text-gold'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* ── Step 4: Personal Info ── */}
              {step === 4 && (
                <>
                  <StepHeading step={4} title="Your Details" subtitle="Almost there — just a couple more details." />

                  <div className="flex flex-col gap-4">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Ahmed Al-Mansoor"
                        value={form.name}
                        onChange={e => update('name', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+966 5X XXX XXXX"
                        value={form.phone}
                        onChange={e => update('phone', e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    {/* Summary card */}
                    <div className="bg-background border border-border rounded-xl p-4 text-xs text-muted space-y-1.5">
                      <p className="text-foreground font-bold text-sm mb-2 uppercase tracking-wide">Booking Summary</p>
                      <SummaryRow label="Service"  value={services.find(s => s.id === form.service)?.label} />
                      <SummaryRow label="Barber"   value={form.barber === 'any' ? 'Any available' : allBarbers.find(b => b.id === form.barber)?.name} />
                      <SummaryRow label="Date"     value={form.date} />
                      <SummaryRow label="Time"     value={form.time} />
                    </div>
                  </div>
                </>
              )}

            </motion.div>
          </AnimatePresence>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={goPrev}
              disabled={step === 1}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-muted hover:text-gold hover:border-gold text-xs font-bold uppercase tracking-wider transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none"
            >
              <FaChevronLeft className="text-[10px]" /> Back
            </button>

            {step < 4 ? (
              <button
                onClick={goNext}
                disabled={!canNext()}
                className="flex items-center gap-2 px-7 py-2.5 rounded-full bg-gold hover:bg-gold-light text-background text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-gold/30 disabled:opacity-40 disabled:pointer-events-none"
              >
                Next <FaChevronRight className="text-[10px]" />
              </button>
            ) : (
              <a
                href={buildWhatsAppMsg()}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-7 py-3 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg ${
                  canNext()
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-white hover:shadow-emerald-500/30 hover:scale-105'
                    : 'bg-border text-muted pointer-events-none'
                }`}
              >
                <FaWhatsapp className="text-base" />
                Confirm via WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Direct contact buttons ── */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${SHOP_PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-border bg-card text-muted hover:text-gold hover:border-gold text-sm font-bold uppercase tracking-wider transition-all duration-200"
        >
          <FaPhone className="text-gold" /> Call Us Directly
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank" rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-emerald-600/30 bg-emerald-600/10 text-emerald-400 hover:bg-emerald-600/20 text-sm font-bold uppercase tracking-wider transition-all duration-200"
        >
          <FaWhatsapp className="text-base" /> WhatsApp Us
        </a>
      </div>
    </div>
  )
}

function StepHeading({ step, title, subtitle }) {
  return (
    <div className="mb-2">
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-1">Step {step} of 4</p>
      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">{title}</h3>
      <p className="text-muted text-sm mt-1">{subtitle}</p>
    </div>
  )
}

function SummaryRow({ label, value }) {
  return value ? (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className="text-foreground font-semibold">{value}</span>
    </div>
  ) : null
}
