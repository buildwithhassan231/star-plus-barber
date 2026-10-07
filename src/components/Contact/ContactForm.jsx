'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp, FaCheck } from 'react-icons/fa'
import { WHATSAPP } from './contactData'

export default function ContactForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent]  = useState(false)

  const update   = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const canSend  = form.name.trim() && form.phone.trim() && form.message.trim()

  const inputClass = "w-full bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-xl px-4 py-3.5 text-foreground text-sm placeholder:text-muted outline-none transition-all duration-200 resize-none"
  const labelClass = "block text-xs font-bold uppercase tracking-widest text-muted mb-2"

  const handleWhatsApp = () => {
    const msg = `Hello Star Plus Barber! 👋\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n\n*Message:*\n${form.message}`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', message: '' }) }, 4000)
  }

  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl">

      <div className="h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="p-6 sm:p-8">

        <div className="mb-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-2 block">
            {t('Send a Message')}
          </span>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
            {t('Get in')} <span className="text-gold-gradient">{t('Touch')}</span>
          </h3>
          <p className="text-muted text-sm mt-1">{t('We typically reply within minutes on WhatsApp.')}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className={labelClass}>{t('Your Name')}</label>
            <input
              type="text"
              placeholder={t('Ahmed Al-Mansoor')}
              value={form.name}
              onChange={e => update('name', e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>{t('Phone Number')}</label>
            <input
              type="tel"
              placeholder="+966 5X XXX XXXX"
              value={form.phone}
              onChange={e => update('phone', e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>{t('Message')}</label>
            <textarea
              rows={4}
              placeholder={t("I'd like to know more about your services...")}
              value={form.message}
              onChange={e => update('message', e.target.value)}
              className={inputClass}
            />
          </div>

          <motion.button
            onClick={handleWhatsApp}
            disabled={!canSend || sent}
            whileHover={canSend && !sent ? { scale: 1.02 } : {}}
            whileTap={canSend && !sent ? { scale: 0.98 } : {}}
            className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-extrabold text-sm uppercase tracking-widest transition-all duration-300 shadow-md ${
              sent
                ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                : canSend
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/25 hover:shadow-emerald-500/40'
                  : 'bg-border text-muted cursor-not-allowed'
            }`}
          >
            {sent
              ? <><FaCheck className="text-base" /> {t('Message Sent!')}</>
              : <><FaWhatsapp className="text-base" /> {t('Send via WhatsApp')}</>
            }
          </motion.button>

          <p className="text-center text-muted text-[11px]">
            {t('Your message will open WhatsApp with pre-filled text.')}
          </p>
        </div>
      </div>
    </div>
  )
}
