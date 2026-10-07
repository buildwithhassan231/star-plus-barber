"use client"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown, FaCircleQuestion } from 'react-icons/fa6'

const faqData = [
  {
    id: '01',
    questionKey: 'Is online booking mandatory, or are walk-ins allowed?',
    answerKey:   'Walk-ins are always welcome! However, to avoid weekend rush and waiting times, we strongly recommend booking your appointment in advance through our website to reserve your slot.',
  },
  {
    id: '02',
    questionKey: 'How long does an Executive Haircut & Beard Combo take?',
    answerKey:   'A full Haircut + Beard Sculpting & Styling package typically takes around 45 to 60 minutes. This includes precision cutting, hot towel therapy, and final styling.',
  },
  {
    id: '03',
    questionKey: 'Can I choose my preferred barber?',
    answerKey:   'Absolutely! On the booking page, you can select your preferred master barber. Your appointment will be confirmed specifically with the barber you choose.',
  },
  {
    id: '04',
    questionKey: 'What payment methods do you accept?',
    answerKey:   'We accept MADA, Visa, Mastercard, Apple Pay, and Cash. Special discounts and promotional package offers are also valid on online bookings.',
  },
  {
    id: '05',
    questionKey: 'What are your working hours?',
    answerKey:   'We are open 7 days a week. Saturday through Thursday from 10:00 AM to 11:00 PM, and on Friday from 1:00 PM to 12:00 AM midnight.',
  },
]

const FAQSection = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className="w-full bg-[#141416] text-[#f5f1e8] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#2a2a2e]">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a24d]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#c9a24d] mb-2 block">
            {t("Got Questions?")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f5f1e8] mb-4">
            {t("Frequently Asked")}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6c675] via-[#c9a24d] to-[#e6c675]">
              {t("Questions")}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c9a24d] to-[#e6c675] mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.id}
                className={`bg-[#1a1a1d] border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#c9a24d] shadow-[0_0_20px_rgba(201,162,77,0.15)]'
                    : 'border-[#2a2a2e] hover:border-[#c9a24d]/40'
                }`}
              >
                {/* Question button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <FaCircleQuestion className={`text-base flex-shrink-0 transition-colors ${isOpen ? 'text-[#c9a24d]' : 'text-[#a1a1a6]'}`} />
                    <span className="text-sm sm:text-base font-bold uppercase tracking-wide text-[#f5f1e8]">
                      {t(faq.questionKey)}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-[#0b0b0c] border border-[#2a2a2e] flex items-center justify-center text-xs transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#c9a24d] border-[#c9a24d]' : 'text-[#a1a1a6]'}`}>
                    <FaChevronDown />
                  </div>
                </button>

                {/* Answer */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 pt-4 text-xs sm:text-sm text-[#a1a1a6] leading-relaxed border-t border-[#2a2a2e]/50 ms-8">
                    {t(faq.answerKey)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQSection
