import React from 'react'
import { FaUserCheck, FaPumpSoap, FaClock, FaDoorOpen } from 'react-icons/fa'

const Trustbar = () => {
  const trustItems = [
    {
      icon: <FaUserCheck className="text-gold text-lg md:text-xl" />,
      title: 'Experienced Barbers',
      description: 'Master Stylists & Precision Cutters',
    },
    {
      icon: <FaPumpSoap className="text-gold text-lg md:text-xl" />,
      title: 'Clean & Hygienic',
      description: '100% Sanitized Tools & Towels',
    },
    {
      icon: <FaClock className="text-gold text-lg md:text-xl" />,
      title: 'Late Night Hours',
      description: 'Open Daily Until 3:00 AM',
    },
    {
      icon: <FaDoorOpen className="text-gold text-lg md:text-xl" />,
      title: 'Walk-ins Welcome',
      description: 'No Prior Appointment Needed',
    },
  ]

  return (
    <div className="w-full bg-surface border-y border-border py-4 md:py-6 px-4 relative z-20 shadow-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 md:space-x-4 p-2.5 sm:p-3 rounded-xl bg-card border border-border hover:border-gold/40 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-gold transition-colors duration-200">
                  {item.title}
                </span>
                <span className="text-[10px] sm:text-xs text-muted line-clamp-1 font-medium">
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
