// Shared data for booking form

export const services = [
  { id: 'haircut',      label: 'Royal Haircut & Style',        price: '120 SAR', time: '30 min' },
  { id: 'beard',        label: 'Beard Sculpting & Hot Towel',  price: '80 SAR',  time: '25 min' },
  { id: 'combo',        label: 'Hair & Beard Combo',           price: '180 SAR', time: '75 min' },
  { id: 'facial',       label: 'Executive Facial & Scrub',     price: '150 SAR', time: '60 min' },
  { id: 'keratin',      label: 'Hair Keratin Treatment',       price: '250 SAR', time: '90 min' },
  { id: 'vip',          label: 'VIP Groom Package',            price: '450 SAR', time: '180 min' },
]

export const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM', '06:00 PM',
  '07:00 PM', '08:00 PM', '09:00 PM',
  '10:00 PM', '11:00 PM', '12:00 AM',
  '01:00 AM', '02:00 AM',
]

export const hours = [
  { day: 'Monday – Thursday', time: '10:00 AM – 7:00 PM' },
  { day: 'Friday',            time: '10:00 AM – Late' },
  { day: 'Saturday',          time: 'CLOSED' },
  { day: 'Sunday',            time: '10:00 AM – 5:00 PM' },
  { day: 'Daily (Late Night)',time: 'Open till 3:00 AM' },
]

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '966576984355'
export const SHOP_PHONE      = process.env.NEXT_PUBLIC_SHOP_PHONE    || '+966576984355'
