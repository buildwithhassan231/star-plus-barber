'use client'

import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '966500000000'
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I want to book an appointment.')

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${`055 725 9308`}?text=${WHATSAPP_MESSAGE}`}
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
