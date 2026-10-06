import BarbersPreview from "@/components/Ourbarbers/BarbersPreview";
import BeforeAfterSection from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import GalleryPreview from "@/components/OurGallery/GalleryPreview";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import Servicespreview from "@/components/Servicespreview";
import SpecialOfferBanner from "@/components/SpecialOfferBanner";
import Trustbar from "@/components/Trustbar";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Trustbar/>
      <Servicespreview/>
      <WhyChoose/>
      <BarbersPreview/>
      <GalleryPreview/>
      <BeforeAfterSection/>
      <ReviewsSection/>
      <SpecialOfferBanner/>
      <FAQSection/>
    </div>
  );
}
