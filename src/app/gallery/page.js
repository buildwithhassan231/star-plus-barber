import PageBanner from '@/components/PageBanner'
import Gallery from '@/components/OurGallery/Gallery'
import GalleryCTA from '@/components/OurGallery/GalleryCTA'

export default function GalleryPage() {
  return (
    <div>
      <PageBanner
        heading="Our Work"
        description="Every cut, every transformation — captured in detail. Browse our complete portfolio of premium grooming work."
      />
      <Gallery />
      <GalleryCTA />
    </div>
  )
}
