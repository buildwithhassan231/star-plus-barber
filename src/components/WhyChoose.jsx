'use client'

import { useTranslation } from 'react-i18next'
import { FaUserTie, FaShieldHalved, FaClock, FaCrown } from 'react-icons/fa6'

const pointData = [
  {
    id: '01',
    icon: <FaUserTie className="text-2xl sm:text-3xl text-amber-400" />,
    titleKey: 'Expert Master Barbers',
    descKey: 'Our internationally trained and experienced stylists craft every hair type and beard style to perfection.',
  },
  {
    id: '02',
    icon: <FaShieldHalved className="text-2xl sm:text-3xl text-amber-400" />,
    titleKey: '100% Hygiene & Safety',
    descKey: 'Fresh single-use sterilized tools, disinfected chairs, and fresh towels guaranteed for every client.',
  },
  {
    id: '03',
    icon: <FaClock className="text-2xl sm:text-3xl text-amber-400" />,
    titleKey: 'Late Night Availability',
    descKey: "Our shop stays open until 3:00 AM to match Riyadh's busy lifestyle — come at your convenience.",
  },
  {
    id: '04',
    icon: <FaCrown className="text-2xl sm:text-3xl text-amber-400" />,
    titleKey: 'VIP Royal Experience',
    descKey: 'Complimentary premium coffee, relaxing ambiance, luxury seating, and personalized attention for a VVIP feel.',
  },
]

const WhyChoose = () => {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-black text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-zinc-900">

      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-500 mb-2 block">
            {t("The Gold Standard")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            {t("Why Choose")}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              {t("Our Shop")}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t("We don't just give haircuts, we deliver a complete premium grooming experience in Riyadh.")}
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pointData.map((point) => (
            <div
              key={point.id}
              className="group relative bg-zinc-950/80 border border-zinc-800/90 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/50 group-hover:scale-110 transition-all duration-300 shadow-md">
                    {point.icon}
                  </div>
                  <span className="text-3xl font-black text-zinc-800 group-hover:text-amber-500/30 transition-colors">
                    {point.id}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {t(point.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {t(point.descKey)}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-end">
                <div className="w-8 h-[2px] bg-zinc-800 group-hover:w-full group-hover:bg-amber-500 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChoose
