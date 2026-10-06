import PageBanner from '@/components/PageBanner'
import Barbers from '@/components/Ourbarbers/Barbers'
import WhyOurTeam from '@/components/Ourbarbers/WhyOurTeam'
import BarberCTA from '@/components/Ourbarbers/BarberCTA'

export default function BarbersPage() {
  return (
    <div>
      <PageBanner
        heading="Our Barbers"
        description="Meet the master craftsmen behind every perfect cut — our team of skilled barbers dedicated to your premium grooming experience."
      />
      <Barbers />
      <WhyOurTeam />
      <BarberCTA />
    </div>
  )
}
