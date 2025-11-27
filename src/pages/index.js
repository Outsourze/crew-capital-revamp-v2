import Carousel from "@/components/home/CarouselIntro";
import ContactUs from "@/components/home/ContactUs";
import Foundation from "@/components/home/Foundation";
import Testimonials from "@/components/home/Testimonials";
import WhoBenefits from "@/components/home/WhoBenefits";
import WhyUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className={""}>
      <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        {/* hero section container */}
        <Carousel />
        <WhoBenefits />
        <Foundation />
        <WhyUs />
        <Testimonials />
        <ContactUs />
      </div>
    </div>
  );
}
