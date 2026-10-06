import CTABanner from '@/components/CTABanner'

export default function GalleryCTA() {
  return (
    <CTABanner
      eyebrow="Like What You See?"
      heading="Your"
      headingHighlight="Transformation Awaits"
      description="Every photo tells a story of precision and care. Book your session today and let us write yours — open daily until 3 AM."
      primaryBtn={{ label: 'Book Appointment', href: '/book' }}
      secondaryBtn={{ label: 'Follow on Instagram', href: 'https://instagram.com', variant: 'instagram' }}
      trustNote="Walk-ins welcome · Open daily till 3 AM · Olaya, Riyadh"
      bg="surface"
    />
  )
}
