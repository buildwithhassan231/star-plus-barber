/**
 * ─────────────────────────────────────────────────────────────
 *  SITE-WIDE CONSTANTS — single source of truth
 *  Edit this file to update hours, phone/WhatsApp, and address
 *  across the ENTIRE site automatically.
 * ─────────────────────────────────────────────────────────────
 */

// ── Phone & WhatsApp ──────────────────────────────────────────
// TODO: REPLACE WITH REAL NUMBER (digits only, no spaces/brackets for links)
export const SHOP_PHONE_DISPLAY  = '+966 5X XXX XXXX'   // Human-readable display
export const SHOP_PHONE_DIGITS   = '9665XXXXXXX'         // Used in tel: links (no +, no spaces)
export const WHATSAPP_DIGITS     = '9665XXXXXXX'         // Used in https://wa.me/<number>

// ── Opening Hours ─────────────────────────────────────────────
// TODO: REPLACE WITH REAL HOURS when confirmed
// All components (Hero, Footer, Contact, FAQ, Book) read from here.
export const HOURS_SUMMARY = 'Open Daily: 12:00 PM – 3:00 AM'
export const HOURS_BADGE   = 'Open Daily Until 3:00 AM'    // Short badge text

export const OPENING_HOURS = [
  // TODO: Update day-by-day schedule once confirmed
  { day: 'Open Daily', time: '12:00 PM – 3:00 AM', closed: false },
]

// ── Address & Maps ────────────────────────────────────────────
export const ADDRESS      = 'Olaya District, Riyadh, Saudi Arabia'
export const MAP_EMBED    = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2!2d46.6753!3d24.6877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQxJzE1LjciTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1'
export const DIRECTIONS   = 'https://maps.google.com/?q=Olaya+District+Riyadh'

// ── Social ────────────────────────────────────────────────────
export const INSTAGRAM    = 'https://instagram.com'
export const SNAPCHAT     = 'https://snapchat.com'
export const TIKTOK       = 'https://tiktok.com'

// ── Nearby landmarks ─────────────────────────────────────────
export const landmarks = [
  { icon: '🚗', text: 'Free parking available directly in front of the shop' },
  { icon: '📍', text: 'Near Olaya Towers — 2 min walk from the main entrance' },
  { icon: '🏪', text: 'Next to Al-Nakheel Mall, ground floor strip' },
  { icon: '🚕', text: 'Uber & Careem drop-off point right at the door' },
]
