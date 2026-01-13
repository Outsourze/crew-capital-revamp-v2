import bgImg from "@/assets/images/sub-services/mining/mining2.jpg";
import { FillBtnLink } from "@/components/ui/Button";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";

const AboutMining2 = () => {
  return (
    <div className="py-24 px-10 brand-bg-secondary">
      <div className="max-w-7xl pb-32 m-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image Left */}
        <div className="w-full lg:w-[45%] relative rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/30 to-transparent rounded-2xl"></div>
          <Image src={bgImg} alt="property investment" className="rounded-2xl" />
        </div>

        {/* Text Right */}
        <div className="w-full lg:w-[55%] flex flex-col gap-7 items-start">
          {/* Section Indicator */}
          
          <div className="flex flex-col gap-1">
              <h4 className="uppercase tracking-[0.3em] text-white">
                Simplifying Property Investment
              </h4>
              <h3 className="text-3xl brand-text-primary">
                Invest Smarter, Save More, and Avoid the Hassle
              </h3>
            </div>

          {/* Paragraphs */}
          <p className="text-white text-lg leading-relaxed">
            It simplifies the property investment process, offering clear steps to purchase your first, second, and third investment properties. Plus, it shows you how to save hundreds of thousands of dollars on taxes, so you keep more money in your pocket instead of handing it to the ATO.
          </p>

          <p className="text-white text-lg leading-relaxed">
            Working 12-hour shifts in a demanding job is exhausting, and the last thing you want to do at home is research investment properties. That’s why we created a free guide specifically for busy FIFO workers.
          </p>

          {/* Callout Box */}
          <div className="bg-white border-l-4 border-green-300 px-5 py-3 rounded-md text-dark-navy font-medium">
            Free Guide Available – Start Your Investment Journey Today!
          </div>

          {/* CTA Button */}
          <FillBtnLink href={"/"}>
             Download Free Guide 
          </FillBtnLink>
        </div>
      </div>
    </div>
  );
};

export default AboutMining2;
