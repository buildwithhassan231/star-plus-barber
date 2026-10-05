import React from 'react'
import { FaUserCheck, FaPumpSoap, FaClock, FaDoorOpen } from 'react-icons/fa'

const Trustbar = () => {
  const trustItems = [
    {
      icon: <FaUserCheck className="text-amber-400 text-lg md:text-xl" />,
      title: "Experienced Barbers",
      description: "Master Stylists & Precision Cutters",
    },
    {
      icon: <FaPumpSoap className="text-amber-400 text-lg md:text-xl" />,
      title: "Clean & Hygienic",
      description: "100% Sanitized Tools & Towels",
    },
    {
      icon: <FaClock className="text-amber-400 text-lg md:text-xl" />,
      title: "Late Night Hours",
      description: "Open Daily Until 3:00 AM",
    },
    {
      icon: <FaDoorOpen className="text-amber-400 text-lg md:text-xl" />,
      title: "Walk-ins Welcome",
      description: "No Prior Appointment Needed",
    },
  ]

  return (
    <div className="w-full bg-zinc-950 border-y border-amber-500/20 py-4 md:py-6 px-4 relative z-20 shadow-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 md:space-x-4 p-2.5 sm:p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900 transition-all duration-300 group"
            >
              {/* Icon Wrapper with Subtle Gold Glow */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300">
                {item.icon}
              </div>

              {/* Text Area */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors duration-200">
                  {item.title}
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-400 line-clamp-1 font-medium">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trustbar