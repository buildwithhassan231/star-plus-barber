// Shared data for booking form
// Phone/WhatsApp and hours are imported from the single source of truth.
import {
  SHOP_PHONE_DISPLAY,
  SHOP_PHONE_DIGITS,
  WHATSAPP_DIGITS,
  OPENING_HOURS,
} from '@/config/siteConfig'

export const services = [
  { id: 'haircut',      label: 'Royal Haircut & Style',        price: '120 SAR', time: '30 min' },
  { id: 'beard',        label: 'Beard Sculpting & Hot Towel',  price: '80 SAR',  time: '25 min' },
  { id: 'combo',        label: 'Hair & Beard Combo',           price: '180 SAR', time: '75 min' },
  { id: 'facial',       label: 'Executive Facial & Scrub',     price: '150 SAR', time: '60 min' },
  { id: 'keratin',      label: 'Hair Keratin Treatment',       price: '250 SAR', time: '90 min' },
  { id: 'vip',          label: 'VIP Groom Package',            price: '450 SAR', time: '180 min' },
]

export const timeSlots = [
  '12:00 PM', '01:00 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM',
  '09:00 PM', '10:00 PM', '11:00 PM',
  '12:00 AM', '01:00 AM', '02:00 AM',
]

// Re-export opening hours from config so WalkInInfo reads from one place
export const hours = OPENING_HOURS

// Phone & WhatsApp — re-exported from config
export const SHOP_PHONE      = SHOP_PHONE_DISPLAY
export const WHATSAPP_NUMBER = WHATSAPP_DIGITS
