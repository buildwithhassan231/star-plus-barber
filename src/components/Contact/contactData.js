export const PHONE        = process.env.NEXT_PUBLIC_SHOP_PHONE    || '+966576984355'
export const WHATSAPP     = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '966576984355'
export const ADDRESS      = 'Olaya District, Riyadh, Saudi Arabia'
export const MAP_EMBED    = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2!2d46.6753!3d24.6877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQxJzE1LjciTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1'
export const DIRECTIONS   = 'https://maps.google.com/?q=Olaya+District+Riyadh'
export const INSTAGRAM    = 'https://instagram.com'
export const SNAPCHAT     = 'https://snapchat.com'
export const TIKTOK       = 'https://tiktok.com'

export const hours = [
  { day: 'Monday – Thursday', time: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Friday',            time: '10:00 AM – Late',    closed: false },
  { day: 'Saturday',          time: 'CLOSED',             closed: true  },
  { day: 'Sunday',            time: '10:00 AM – 5:00 PM', closed: false },
]

export const landmarks = [
  { icon: '🚗', text: 'Free parking available directly in front of the shop' },
  { icon: '📍', text: 'Near Olaya Towers — 2 min walk from the main entrance' },
  { icon: '🏪', text: 'Next to Al-Nakheel Mall, ground floor strip' },
  { icon: '🚕', text: 'Uber & Careem drop-off point right at the door' },
]
