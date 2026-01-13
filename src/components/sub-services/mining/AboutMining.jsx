import bgImg from "@/assets/images/sub-services/mining/mining.jpg";
import { FillBtnLink } from "@/components/ui/Button";
import Image from "next/image";

const AboutMining = () => {
  return (
    <div className="">
      <div className="max-w-7xl m-auto flex flex-col gap-16 py-24 px-10">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col gap-7 items-start">
        
            <div className="flex flex-col gap-1">
              <h4 className="uppercase tracking-[0.3em]">
                  Discover What’s Possible
              </h4>
              <h3 className="text-3xl brand-text-primary">
                   FIFO & Mining Professionals this is for you
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Are you a FIFO or mining professional looking to build a property portfolio and save significantly on taxes? But you're short on time or knowledge to get started?
            </p>

            {/* Callout */}
            <div className="bg-green-100/50 border-l-4 border-[#E3572B] px-5 py-3 rounded-md text-dark-navy font-medium">
              Empowering aviation & mining professionals every step of the way
            </div>

            {/* CTA Button */}
            <FillBtnLink href={"/"}>
              Learn More
            </FillBtnLink>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[45%] relative rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/40 to-transparent rounded-2xl"></div>
            <Image src={bgImg} alt="office girl" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMining;
