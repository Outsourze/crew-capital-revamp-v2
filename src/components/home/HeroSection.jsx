import Image from "next/image";
import partner1 from "@/assets/images/home/partner1.png";
import partner2 from "@/assets/images/home/partner2.png";
import partner3 from "@/assets/images/home/partner3.png";
import { FillBtn } from "../ui/Button";

const HeroSection = () => {
    const partners = [
        partner1,
        partner2,
        partner3
    ]

    return (
        <div className="m-auto z-10 relative
          lg:px-20 
          md:px-10 md:pt-56 md:pb-20 
          max-md:pt-44 max-md:px-8 max-md:pb-20">
            <div className="max-w-[600px] flex flex-col items-start text-white
              md:gap-5 max-md:gap-8">
                <h1 className="
                  md:text-5xl md:leading-tight
                  max-md:text-4xl max-md:leading-snug">
                  <span className="brand-text-primary">Industry professionals everywhere agree,</span> purpose-built support sets a new standard.
                </h1>
                <FillBtn>
                  SCHEDULE A DEMO
                </FillBtn>
                <p className="text-[#c9f0d5] font-semibold">Partnerships, Supporters & Integrations by:</p>
                <div className="flex items-center gap-8">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="relative w-24 h-24 rounded-full overflow-hidden bg-white"
                    >
                      <Image
                        src={partner}
                        alt={`Partner ${index + 1}`}
                        fill
                        className="object-contain scale-130 rounded-full"
                      />
                    </div>
                  ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSection;