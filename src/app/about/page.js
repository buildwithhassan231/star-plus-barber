import PageBanner from '@/components/PageBanner'
import ShopStory from '@/components/About/ShopStory'
import ValuesSection from '@/components/About/ValuesSection'
import NumbersSection from '@/components/About/NumbersSection'
import TeamGlimpse from '@/components/About/TeamGlimpse'
import CTABanner from '@/components/CTABanner'

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        heading="About Us"
        description="Our story, our passion, our craft. Discover what makes Star Plus Barber Riyadh's most trusted premium grooming destination."
      />
      <ShopStory />
      <ValuesSection />
      <NumbersSection />
      <TeamGlimpse />
      <CTABanner
        eyebrow="Come See for Yourself"
        heading="Experience the"
        headingHighlight="Star Plus Difference"
        description="From your first visit, you'll understand why thousands of clients call us their home barbershop. Book your seat today."
        primaryBtn={{ label: 'Book Appointment', href: '/book' }}
        secondaryBtn={{ label: 'Chat on WhatsApp', href: 'https://wa.me/966500000000', variant: 'whatsapp' }}
        trustNote="No hidden charges · Walk-ins welcome · Open daily till 3 AM"
        bg="background"
      />
    </div>
  )
}
