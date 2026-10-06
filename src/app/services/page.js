import PageBanner from '@/components/PageBanner'
import Categories from '@/components/OurServices/Categories'
import ComboPackages from '@/components/OurServices/ComboPackages'
import PriceNote from '@/components/OurServices/PriceNote'

export default function ServicesPage() {
  return (
    <div>
      <PageBanner
        heading="Our Services"
        description="From precision haircuts to royal spa treatments — explore our full menu of premium grooming services crafted for the modern gentleman."
      />
      <Categories />
      <ComboPackages />
      <PriceNote />
    </div>
  )
}
