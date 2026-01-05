import ContactUs from "@/components/home/ContactUs";
import Foundation from "@/components/home/Foundation";
import Testimonials from "@/components/home/Testimonials";
import WhoBenefits from "@/components/home/WhoBenefits";
import WhyUs from "@/components/home/WhyChooseUs";
import bgImg from "@/assets/images/home/Residential-Homes.webp";
import Header from "@/components/header";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div>
      <div
        className="relative min-h-screen"
        style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(11,15,5,1) 38%,
            rgba(11,15,5,0.9) 40%,
            rgba(11,15,5,0.7) 42%,
            rgba(11,15,5,0.4) 44%,
            rgba(11,15,5,0.15) 46%,
            rgba(11,15,5,0) 48%
          ),
          url(${bgImg.src})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      >
        {/* Green image tint */} <div className="absolute inset-0 bg-[#D6DD37] mix-blend-color opacity-70" />
        {/* Content */}
        <Header />  
        <HeroSection />
      </div>
      <WhoBenefits />
      <Foundation />
      <WhyUs />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
