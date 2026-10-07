'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaCheck } from 'react-icons/fa'

const stepLabelKeys = ['Service_step', 'Barber_step', 'Date & Time', 'Your Info']

export default function StepIndicator({ currentStep }) {
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-center gap-0 mb-10 md:mb-14 w-full">
      {stepLabelKeys.map((labelKey, i) => {
        const step   = i + 1
        const done   = currentStep > step
        const active = currentStep === step

        return (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <motion.div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center font-black text-sm transition-all duration-300 ${
                  done   ? 'bg-gold border-gold text-background' :
                  active ? 'bg-transparent border-gold text-gold shadow-lg shadow-gold/30' :
                           'bg-transparent border-border text-muted'
                }`}
                animate={active ? { scale: [1, 1.08, 1] } : {}}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {done ? <FaCheck className="text-xs" /> : step}
              </motion.div>
              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block ${
                active ? 'text-gold' : done ? 'text-foreground' : 'text-muted'
              }`}>
                {t(labelKey)}
              </span>
            </div>

            {i < stepLabelKeys.length - 1 && (
              <div className="w-10 sm:w-16 md:w-20 h-[2px] mx-1 rounded-full overflow-hidden bg-border mb-5">
                <motion.div
                  className="h-full bg-gold rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: currentStep > step ? '100%' : '0%' }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
