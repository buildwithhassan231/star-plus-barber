import PageBanner from '@/components/PageBanner'
import ContactInfoCards from '@/components/Contact/ContactInfoCards'
import MapSection from '@/components/Contact/MapSection'
import ContactForm from '@/components/Contact/ContactForm'
import SocialLinks from '@/components/Contact/SocialLinks'
import CTABanner from '@/components/CTABanner'

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        heading="Contact Us"
        description="We'd love to hear from you. Find us in Olaya, Riyadh — or reach out online. We're open daily until 3 AM."
      />

      {/* Info cards */}
      <section className="section w-full bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ContactInfoCards />
        </div>
      </section>

      {/* Map */}
      <MapSection />

      {/* Form + Social */}
      <section className="section w-full bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
            <ContactForm />
            <SocialLinks />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Still Have Questions?"
        heading="We're Here to"
        headingHighlight="Help You"
        description="Whether you want to book, ask about a service, or just say hello — we're always happy to hear from you."
        primaryBtn={{ label: 'Book Appointment', href: '/book' }}
        secondaryBtn={{ label: 'Chat on WhatsApp', href: 'https://wa.me/966500000000', variant: 'whatsapp' }}
        trustNote="No hidden charges · Walk-ins welcome · Open daily till 3 AM"
        bg="surface"
      />
    </div>
  )
}
