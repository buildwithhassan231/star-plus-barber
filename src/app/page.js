import Hero from "@/components/Hero";
import Servicespreview from "@/components/Servicespreview";
import Trustbar from "@/components/Trustbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Trustbar/>
      <Servicespreview/>
    </div>
  );
}
