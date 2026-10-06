import PageBanner from '@/components/PageBanner'
import BookingForm from '@/components/BookAppointment/BookingForm'
import WalkInInfo from '@/components/BookAppointment/WalkInInfo'

export default function BookPage() {
  return (
    <div>
      <PageBanner
        heading="Book Appointment"
        description="Reserve your seat with Riyadh's finest barbers. Quick, easy, and hassle-free — your perfect look is just one booking away."
      />

      <section className="section w-full bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

            {/* Left — Multi-step form */}
            <BookingForm />

            {/* Right — Walk-in info + hours */}
            <WalkInInfo />

          </div>
        </div>
      </section>
    </div>
  )
}
