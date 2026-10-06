import CTABanner from '@/components/CTABanner'

export default function BarberCTA() {
  return (
    <CTABanner
      showStars
      eyebrow="Ready to Begin?"
      heading="Ready for Your"
      headingHighlight="Best Look?"
      description="Book a session with one of our master barbers today. Walk in, or reserve your seat in seconds — we're open daily until 3 AM."
      primaryBtn={{ label: 'Book Appointment', href: '/book' }}
      secondaryBtn={{ label: 'Chat on WhatsApp', href: 'https://wa.me/966500000000', variant: 'whatsapp' }}
      trustNote="No hidden charges · Walk-ins welcome · Open daily till 3 AM"
      bg="background"
    />
  )
}
