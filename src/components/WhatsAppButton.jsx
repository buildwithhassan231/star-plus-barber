'use client'

import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '966576984355'
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I want to book an appointment.')

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float group"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton
