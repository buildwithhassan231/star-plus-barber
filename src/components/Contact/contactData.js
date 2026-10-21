// Contact data — all phone/WhatsApp/hours values come from the single source of truth.
import {
  SHOP_PHONE_DISPLAY,
  SHOP_PHONE_DIGITS,
  WHATSAPP_DIGITS,
  ADDRESS,
  MAP_EMBED,
  DIRECTIONS,
  INSTAGRAM,
  SNAPCHAT,
  TIKTOK,
  OPENING_HOURS,
  landmarks,
} from '@/config/siteConfig'

export const PHONE     = SHOP_PHONE_DISPLAY
export const WHATSAPP  = WHATSAPP_DIGITS

export { ADDRESS, MAP_EMBED, DIRECTIONS, INSTAGRAM, SNAPCHAT, TIKTOK, landmarks }

// Opening hours table for the contact page cards
export const hours = OPENING_HOURS
